import Image from "next/image";
import type { Sede } from "@/types/cms";

type Props = {
  titulo: string;
  sede: Sede;
};

// Las primeras fotos van apaisadas; el resto se muestra vertical para no recortar lo que retratan.
const CANTIDAD_HORIZONTALES = 3;

export function SedeSection({ titulo, sede }: Props) {
  const horizontales = sede.fotos.slice(0, CANTIDAD_HORIZONTALES);
  const verticales = sede.fotos.slice(CANTIDAD_HORIZONTALES);

  return (
    <section id="sede" className="scroll-mt-24 bg-[#0c0c0c] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          Casa millonaria
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-white sm:text-5xl">
          {titulo}
        </h2>
        <div className="mt-4 h-1 w-14 bg-river-red" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {horizontales.map((foto, index) => (
            <figure
              key={foto.titulo}
              className={`relative overflow-hidden rounded-2xl border border-white/10 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={foto.imagen.url}
                alt={foto.imagen.alt}
                width={index === 0 ? 1400 : 800}
                height={index === 0 ? 700 : 560}
                className={`w-full object-cover ${index === 0 ? "h-72 sm:h-96" : "h-64"}`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent px-4 py-4 font-display text-sm uppercase tracking-wide text-white">
                {foto.titulo}
              </figcaption>
            </figure>
          ))}
        </div>

        {verticales.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {verticales.map((foto) => (
              <figure
                key={foto.titulo}
                className="relative overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={foto.imagen.url}
                  alt={foto.imagen.alt}
                  width={600}
                  height={800}
                  sizes="(min-width: 1024px) 220px, 50vw"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent px-3 py-3 font-display text-xs uppercase tracking-wide text-white sm:text-sm">
                  {foto.titulo}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
