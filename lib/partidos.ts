import { getSiteUrl } from "@/lib/site";

export type Partido = {
  id: string;
  rival: string;
  fecha: string;
  competencia: string;
  esLocal: boolean;
  estadio: string;
};

const RIVER_TEAM_ID = process.env.FOOTBALL_TEAM_ID || "135171";
const RIVER_NAMES = ["river plate", "ca river plate", "club atlético river plate"];

function isRiver(name: string) {
  return RIVER_NAMES.includes(name.trim().toLowerCase());
}

const FALLBACK_PARTIDOS: Partido[] = [
  {
    id: "fallback-boca",
    rival: "Boca Juniors",
    fecha: "2026-10-11T21:00:00-03:00",
    competencia: "Liga Profesional",
    esLocal: true,
    estadio: "Estadio Mâs Monumental",
  },
  {
    id: "fallback-nacional",
    rival: "Nacional (URU)",
    fecha: "2026-10-22T21:00:00-03:00",
    competencia: "CONMEBOL Libertadores",
    esLocal: false,
    estadio: "Gran Parque Central",
  },
  {
    id: "fallback-central",
    rival: "Rosario Central",
    fecha: "2026-11-02T19:00:00-03:00",
    competencia: "Liga Profesional",
    esLocal: true,
    estadio: "Estadio Mâs Monumental",
  },
];

type SportsDbEvent = {
  idEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  dateEvent: string;
  strTime?: string;
  strLeague?: string;
  strVenue?: string;
};

function mapEvent(event: SportsDbEvent): Partido {
  const esLocal = isRiver(event.strHomeTeam);
  const rival = esLocal ? event.strAwayTeam : event.strHomeTeam;
  const time = event.strTime && event.strTime !== "00:00:00" ? event.strTime : "21:00:00";

  return {
    id: event.idEvent,
    rival,
    fecha: `${event.dateEvent}T${time}`,
    competencia: event.strLeague || "Competencia",
    esLocal,
    estadio: event.strVenue || (esLocal ? "Estadio Mâs Monumental" : "A confirmar"),
  };
}

function fetchCacheInit(): RequestInit {
  if (process.env.NODE_ENV === "development") {
    return { cache: "no-store" };
  }
  return { next: { revalidate: 21600 } };
}

export async function getPartidosFromFootballApi(): Promise<Partido[]> {
  const key = process.env.FOOTBALL_API_KEY || "3";
  const url = `https://www.thesportsdb.com/api/v1/json/${key}/eventsnext.php?id=${RIVER_TEAM_ID}`;

  try {
    const response = await fetch(url, fetchCacheInit());
    if (!response.ok) {
      throw new Error(`Football API ${response.status}`);
    }

    const data = (await response.json()) as { events?: SportsDbEvent[] | null };
    const events = data.events ?? [];
    if (events.length === 0) {
      return FALLBACK_PARTIDOS;
    }

    return events.map(mapEvent);
  } catch (error) {
    console.error("Error al obtener partidos:", error);
    return FALLBACK_PARTIDOS;
  }
}

export async function getPartidos(): Promise<Partido[]> {
  try {
    const response = await fetch(`${getSiteUrl()}/api/partidos`, fetchCacheInit());

    if (!response.ok) {
      throw new Error(`Local partidos API ${response.status}`);
    }

    return (await response.json()) as Partido[];
  } catch (error) {
    console.error("Fallback a fetch directo de partidos:", error);
    return getPartidosFromFootballApi();
  }
}

export function formatFechaPartido(iso: string) {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
