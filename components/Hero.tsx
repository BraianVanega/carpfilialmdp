import Link from "next/link";
import type { Institucional } from "@/types/cms";

type Props = {
  institucional: Institucional;
};

export function Hero({ institucional }: Props) {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-estadio.jpg')" }}
        role="img"
        aria-label="Hinchada de River Plate en el Monumental"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:pb-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
          {institucional.heroEyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          {institucional.heroTitulo}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          {institucional.heroSubtitulo}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/proximos-viajes"
            className="inline-flex h-12 items-center justify-center rounded-md bg-river-red px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
          >
            Subite a nuestro próximo viaje
          </Link>
          <Link
            href="/#identidad"
            className="inline-flex h-12 items-center justify-center rounded-md px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/30 transition hover:bg-white/5"
          >
            Ver institucional
          </Link>
        </div>

        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3">
          {institucional.estadisticas.map((item) => (
            <div
              key={item.etiqueta}
              className="rounded-lg border border-white/10 bg-black/50 px-3 py-4 backdrop-blur-sm"
            >
              <dt className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                {item.etiqueta}
              </dt>
              <dd className="mt-1 font-display text-2xl text-white sm:text-3xl">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="pointer-events-none absolute right-6 top-28 hidden rotate-12 rounded-md border border-white/20 bg-black/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white sm:block">
        Oficial
      </div>
    </section>
  );
}
