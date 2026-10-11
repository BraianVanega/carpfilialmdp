import { getSiteUrl } from "@/lib/site";

export type Partido = {
  id: string;
  rival: string;
  fecha: string;
  horaConfirmada?: boolean;
  competencia: string;
  esLocal: boolean;
  estadio: string;
};

// API pública (no oficial) de ESPN. River Plate es el equipo 16.
const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports/soccer";
const RIVER_ESPN_ID = "16";

const COMPETENCIAS: Record<string, string> = {
  "arg.1": "Liga Profesional",
  "arg.copa": "Copa Argentina",
  "conmebol.libertadores": "CONMEBOL Libertadores",
  "conmebol.sudamericana": "CONMEBOL Sudamericana",
};

type EspnEvent = {
  id: string;
  date: string;
  timeValid?: boolean;
  league?: { slug?: string; shortName?: string };
  competitions: {
    venue?: { fullName?: string };
    competitors: {
      homeAway: "home" | "away";
      team: { id: string; displayName: string };
    }[];
  }[];
};

function mapEvent(event: EspnEvent): Partido {
  const { competitors, venue } = event.competitions[0];
  const local = competitors.find((c) => c.homeAway === "home");
  const esLocal = local?.team.id === RIVER_ESPN_ID;
  const rival = competitors.find((c) => c.team.id !== RIVER_ESPN_ID);
  const slug = event.league?.slug ?? "";

  return {
    id: event.id,
    rival: rival?.team.displayName ?? "A confirmar",
    fecha: event.date,
    horaConfirmada: event.timeValid !== false,
    competencia: COMPETENCIAS[slug] ?? event.league?.shortName ?? "Competencia",
    esLocal,
    estadio:
      venue?.fullName || (esLocal ? "Estadio Más Monumental" : "A confirmar"),
  };
}

function fetchCacheInit(): RequestInit {
  if (process.env.NODE_ENV === "development") {
    return { cache: "no-store" };
  }
  return { next: { revalidate: 21600 } };
}

async function getEventosDeCompetencia(slug: string): Promise<EspnEvent[]> {
  const url = `${ESPN_BASE}/${slug}/teams/${RIVER_ESPN_ID}/schedule?fixture=true`;
  const response = await fetch(url, fetchCacheInit());
  if (!response.ok) {
    throw new Error(`ESPN ${slug} ${response.status}`);
  }
  const data = (await response.json()) as { events?: EspnEvent[] };
  return data.events ?? [];
}

export async function getPartidosFromFootballApi(): Promise<Partido[]> {
  const resultados = await Promise.allSettled(
    Object.keys(COMPETENCIAS).map(getEventosDeCompetencia)
  );

  const eventos = new Map<string, EspnEvent>();
  for (const resultado of resultados) {
    if (resultado.status === "rejected") {
      console.error("Error al obtener partidos:", resultado.reason);
      continue;
    }
    for (const evento of resultado.value) {
      eventos.set(evento.id, evento);
    }
  }

  return [...eventos.values()]
    .map(mapEvent)
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
}

function soloProximos(partidos: Partido[]) {
  const ahora = Date.now();
  return partidos.filter((partido) => new Date(partido.fecha).getTime() > ahora);
}

export async function getPartidos(): Promise<Partido[]> {
  try {
    const response = await fetch(`${getSiteUrl()}/api/partidos`, fetchCacheInit());

    if (!response.ok) {
      throw new Error(`Local partidos API ${response.status}`);
    }

    return soloProximos((await response.json()) as Partido[]);
  } catch (error) {
    console.error("Fallback a fetch directo de partidos:", error);
    return soloProximos(await getPartidosFromFootballApi());
  }
}

export function formatFechaPartido(partido: Pick<Partido, "fecha" | "horaConfirmada">) {
  const date = new Date(partido.fecha);
  const horaConfirmada = partido.horaConfirmada !== false;
  const fecha = new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    ...(horaConfirmada && { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }),
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(date);
  return horaConfirmada ? fecha : `${fecha} · hora a confirmar`;
}
