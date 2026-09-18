import Link from "next/link";
import { PartidoCard } from "@/components/PartidoCard";
import type { Partido } from "@/lib/partidos";

type Props = {
  partidos: Partido[];
  titulo?: string;
  mostrarLink?: boolean;
};

export function ProximosViajesSection({
  partidos,
  titulo = "Subite al micro: próximas salidas al Más Monumental",
  mostrarLink = true,
}: Props) {
  return (
    <section id="proximos-viajes" className="scroll-mt-24 bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
              Calendario millonario
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl uppercase text-white sm:text-5xl">
              {titulo}
            </h2>
            <div className="mt-4 h-1 w-14 bg-river-red" />
          </div>
          {mostrarLink ? (
            <Link
              href="/proximos-viajes"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70 hover:text-white"
            >
              Ver todos los partidos
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {partidos.map((partido, index) => (
            <PartidoCard
              key={partido.id}
              partido={partido}
              destacado={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
