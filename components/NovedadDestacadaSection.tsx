import Image from "next/image";
import Link from "next/link";
import { formatFecha, type Novedad } from "@/lib/novedades";

type Props = {
  novedad: Novedad;
};

export function NovedadDestacadaSection({ novedad }: Props) {
  const href = `/novedades/${novedad.slug}`;

  return (
    <section id="novedades" className="scroll-mt-24 bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
              Novedades
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl uppercase text-white sm:text-5xl">
              Lo último de la filial
            </h2>
            <div className="mt-4 h-1 w-14 bg-river-red" />
          </div>
          <Link
            href="/novedades"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70 hover:text-white"
          >
            Ver todas las novedades
          </Link>
        </div>

        <article className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-[#141414] md:grid-cols-[2fr_3fr]">
          <Link href={href} className="relative block aspect-square overflow-hidden">
            <Image
              src={novedad.portada.url}
              alt={novedad.portada.alt}
              fill
              sizes="(min-width: 1152px) 460px, (min-width: 768px) 40vw, 100vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </Link>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-river-red">
              {novedad.etiqueta} · <time dateTime={novedad.fecha}>{formatFecha(novedad.fecha)}</time>
            </p>
            <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-white sm:text-4xl">
              <Link href={href} className="hover:text-white/85">
                {novedad.titulo}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {novedad.resumen}
            </p>
            <Link
              href={href}
              className="mt-8 inline-flex h-12 items-center justify-center self-start rounded-md bg-river-red px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
            >
              Leer la noticia
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
