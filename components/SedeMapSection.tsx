import type { Sede } from "@/types/cms";
import { whatsappLink } from "@/lib/site";

type Props = {
  sede: Sede;
};

export function SedeMapSection({ sede }: Props) {
  return (
    <section className="bg-[#0c0c0c] py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
            Ubicación
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase text-white sm:text-5xl">
            Vení a conocernos a la sede oficial
          </h2>
          <div className="mt-4 h-1 w-14 bg-river-red" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={`Mapa de ${sede.nombre}`}
              src={sede.mapaEmbedUrl}
              className="h-80 w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-[#141414] p-6">
          <p className="font-display text-xl uppercase text-white">{sede.nombre}</p>
          <p className="mt-3 text-sm text-white/65">
            {sede.direccion}
            <br />
            {sede.ciudad}
          </p>
          <p className="mt-4 text-sm text-white/65">{sede.horarios}</p>
          <p className="mt-4 text-sm text-white/65">{sede.telefono}</p>
          <a
            href={whatsappLink(
              "Hola, quiero consultar horarios de la sede de la Filial Enzo Francescoli."
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-md bg-river-red text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-red-700"
          >
            Escribinos por WhatsApp
          </a>
        </aside>
      </div>
    </section>
  );
}
