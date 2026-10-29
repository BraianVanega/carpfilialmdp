import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CompartirWhatsApp } from "@/components/CompartirWhatsApp";
import { formatFecha, getNovedad, novedades } from "@/lib/novedades";
import { SITE_URL } from "@/lib/site";

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

  const alt = novedad.portada.alt;

  return {
    title: novedad.titulo,
    description: novedad.resumen,
    alternates: { canonical: `/novedades/${novedad.slug}` },
    openGraph: {
      type: "article",
      title: `${novedad.titulo} | Filial Enzo Francescoli`,
      description: novedad.resumen,
      url: `/novedades/${novedad.slug}`,
      images: [{ url: novedad.imagenOg, width: 1200, height: 630, alt }],
    },
    twitter: {
      title: `${novedad.titulo} | Filial Enzo Francescoli`,
      description: novedad.resumen,
      images: [{ url: novedad.imagenOg, alt }],
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
            <div className="pt-4">
              <CompartirWhatsApp
                titulo={novedad.titulo}
                url={`${SITE_URL}/novedades/${novedad.slug}`}
              />
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-sm gap-4">
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
                  sizes="384px"
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
