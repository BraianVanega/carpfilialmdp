import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

const RIVER_ID_URL = "https://www.riverid.com.ar/";

export const metadata: Metadata = {
  title: "Cómo sacar entradas para ver a River",
  description:
    "Paso a paso para registrarte en River ID, sacar tu entrada y sumarte al viaje de la Filial Enzo Francescoli desde Mar del Plata al Monumental.",
  alternates: { canonical: "/entradas" },
  openGraph: {
    title: "Cómo sacar entradas para ver a River | Filial Enzo Francescoli",
    description:
      "Registrate en River ID, sacá tu entrada y sumate al micro de la filial desde Mar del Plata.",
    url: "/entradas",
  },
  twitter: {
    title: "Cómo sacar entradas para ver a River | Filial Enzo Francescoli",
    description:
      "Registrate en River ID, sacá tu entrada y sumate al micro de la filial desde Mar del Plata.",
  },
};

const ACLARACIONES = [
  "Los no socios solo pueden sacar entradas e ingresar al estadio con la identidad verificada en River ID. Sin verificación no se puede ni comprar ni entrar.",
  "Los menores solo ingresan gratis si son socios infantiles menores de 7 años con la cuota al día.",
  "Los menores que no son socios necesitan su propia entrada, aunque tengan 1 año.",
];

const PASOS = [
  {
    titulo: "Registrate en River ID",
    descripcion: "Entrá a riverid.com.ar y tocá «¡Registrate acá!».",
  },
  {
    titulo: "Identificate",
    descripcion:
      "Completá tipo de documento, nacionalidad, sexo, número de DNI y número de trámite (está en el frente del DNI). Aceptá los términos y condiciones.",
  },
  {
    titulo: "Validá tu identidad",
    descripcion:
      "Seguí los pasos de validación. Si no sos socio es obligatoria: sin identidad verificada no vas a poder sacar entradas ni ingresar.",
  },
  {
    titulo: "Creá tu cuenta",
    descripcion: "Elegí tu mail y contraseña para ingresar a River ID.",
  },
  {
    titulo: "Sacá tu entrada",
    descripcion:
      "Ingresá con tu cuenta de River ID y sacá la entrada para el partido al que quieras ir.",
  },
  {
    titulo: "Sumate al viaje",
    descripcion:
      "Con la entrada sacada, escribinos por WhatsApp y te anotamos en el micro de la filial.",
  },
];

export default function EntradasPage() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          Entradas
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase text-white sm:text-5xl">
          Cómo sacar entradas para ver a River
        </h1>
        <div className="mt-4 h-1 w-14 bg-river-red" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Para ir al Monumental necesitás tu cuenta de River ID y tu entrada.
          Una vez que la tenés, te sumás al micro de la filial desde Mar del
          Plata.
        </p>

        <aside className="mt-10 rounded-2xl border border-river-gold/40 bg-river-gold/5 p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-gold">
            Importante
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
            {ACLARACIONES.map((aclaracion) => (
              <li key={aclaracion} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-river-red" aria-hidden />
                {aclaracion}
              </li>
            ))}
          </ul>
        </aside>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PASOS.map((paso, index) => (
            <li
              key={paso.titulo}
              className="rounded-2xl border border-white/10 bg-[#141414] p-5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-river-red/15 font-display text-lg text-river-red">
                {index + 1}
              </span>
              <h2 className="mt-4 font-display text-lg uppercase leading-tight text-white">
                {paso.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {paso.descripcion}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={RIVER_ID_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-river-red px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
          >
            Ir a River ID
          </a>
          <a
            href={whatsappLink(
              "Hola, ya saqué mi entrada y quiero sumarme al viaje de la Filial Enzo Francescoli."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/30 transition hover:bg-white/5"
          >
            Sumarme al viaje por WhatsApp
          </a>
          <Link
            href="/proximos-viajes"
            className="inline-flex h-12 items-center justify-center rounded-md px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
          >
            Ver próximos partidos
          </Link>
        </div>
      </div>
    </section>
  );
}
