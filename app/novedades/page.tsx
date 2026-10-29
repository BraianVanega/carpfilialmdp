import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatFecha, getNovedades } from "@/lib/novedades";

export const metadata: Metadata = {
  title: "Novedades",
  description:
    "Noticias, actividades y acciones solidarias de la Filial Enzo Francescoli de Mar del Plata.",
  alternates: { canonical: "/novedades" },
  openGraph: {
    title: "Novedades | Filial Enzo Francescoli",
    description: "Noticias y actividades de la Filial Enzo Francescoli de Mar del Plata.",
    url: "/novedades",
  },
  twitter: {
    title: "Novedades | Filial Enzo Francescoli",
    description: "Noticias y actividades de la Filial Enzo Francescoli de Mar del Plata.",
  },
};

export default function NovedadesPage() {
  const novedades = getNovedades();

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          Novedades
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase text-white sm:text-5xl">
          Lo último de la filial
        </h1>
        <div className="mt-4 h-1 w-14 bg-river-red" />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {novedades.map((novedad) => (
            <li key={novedad.slug}>
              <Link
                href={`/novedades/${novedad.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition hover:border-river-red/60"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={novedad.imagenes[0].url}
                    alt={novedad.imagenes[0].alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-river-red">
                    {novedad.etiqueta} · {formatFecha(novedad.fecha)}
                  </p>
                  <h2 className="mt-3 font-display text-lg uppercase leading-tight text-white">
                    {novedad.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{novedad.resumen}</p>
                  <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 group-hover:text-white">
                    Leer más →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
