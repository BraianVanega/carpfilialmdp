import Image from "next/image";
import type { Institucional } from "@/types/cms";

type Props = {
  institucional: Institucional;
};

export function IdentitySection({ institucional }: Props) {
  return (
    <section id="identidad" className="scroll-mt-24 bg-[#0c0c0c] py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
            Institucional
          </p>
          <h2 className="mt-3 max-w-lg font-display text-3xl uppercase leading-tight text-white sm:text-5xl">
            {institucional.historiaTitulo}
          </h2>
          <div className="mt-4 h-1 w-14 bg-river-red" />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {institucional.historiaCuerpo.map((parrafo) => (
              <p key={parrafo.slice(0, 24)}>{parrafo}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-6">
            {institucional.estadisticas.map((item) => (
              <li key={item.etiqueta}>
                <p className="font-display text-2xl text-white">{item.valor}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                  {item.etiqueta}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -left-3 -top-3 z-10 rounded-sm bg-river-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Oficial
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/identidad.jpg"
              alt="Pared de escudos de River Plate en la sede de la filial"
              width={1200}
              height={800}
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
