import type { Actividad } from "@/types/cms";

const ICONS: Record<Actividad["icono"], string> = {
  viajes:
    "M4 16a2 2 0 0 1 2-2h9l3 3v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm4 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7 8h8M7 5h5",
  transmisiones:
    "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 14h8",
  comunidad:
    "M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM6 19a5 5 0 0 1 10 0M18 8a2.5 2.5 0 1 0 0 5M20.5 19a4 4 0 0 0-3-3.8",
  sede: "M4 20V8l8-5 8 5v12H4Zm8-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
};

type Props = {
  titulo: string;
  actividades: Actividad[];
};

export function QueHacemosSection({ titulo, actividades }: Props) {
  return (
    <section id="que-hacemos" className="scroll-mt-24 bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          Comunidad
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-white sm:text-5xl">
          {titulo}
        </h2>
        <div className="mt-4 h-1 w-14 bg-river-red" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actividades.map((actividad) => (
            <article
              key={actividad.titulo}
              className="rounded-2xl border border-white/10 bg-[#141414] p-5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-river-red/15 text-river-red">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <path d={ICONS[actividad.icono]} />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg uppercase leading-tight text-white">
                {actividad.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {actividad.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
