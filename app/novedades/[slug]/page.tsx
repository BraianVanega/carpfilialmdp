import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatFecha, getNovedad, novedades } from "@/lib/novedades";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return novedades.map((novedad) => ({ slug: novedad.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const novedad = getNovedad(slug);
  if (!novedad) return {};

  const imagen = novedad.imagenes[0];

  return {
    title: novedad.titulo,
    description: novedad.resumen,
    alternates: { canonical: `/novedades/${novedad.slug}` },
    openGraph: {
      type: "article",
      title: `${novedad.titulo} | Filial Enzo Francescoli`,
      description: novedad.resumen,
      url: `/novedades/${novedad.slug}`,
      images: [{ url: imagen.url, width: imagen.width, height: imagen.height, alt: imagen.alt }],
    },
    twitter: {
      title: `${novedad.titulo} | Filial Enzo Francescoli`,
      description: novedad.resumen,
      images: [imagen.url],
    },
  };
}

export default async function NovedadPage({ params }: Props) {
  const { slug } = await params;
  const novedad = getNovedad(slug);
  if (!novedad) notFound();

  return (
    <article className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/novedades"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
        >
          ← Novedades
        </Link>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          {novedad.etiqueta} · <time dateTime={novedad.fecha}>{formatFecha(novedad.fecha)}</time>
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase text-white sm:text-5xl">
          {novedad.titulo}
        </h1>
        <div className="mt-4 h-1 w-14 bg-river-red" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4 text-sm leading-relaxed text-white/75 sm:text-base">
            {novedad.cuerpo.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {novedad.imagenes.map((imagen) => (
              <a
                key={imagen.url}
                href={imagen.url}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={imagen.url}
                  alt={imagen.alt}
                  width={imagen.width}
                  height={imagen.height}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-auto w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
