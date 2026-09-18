import type { Partido } from "@/lib/partidos";
import { formatFechaPartido } from "@/lib/partidos";
import { whatsappLink } from "@/lib/site";

type Props = {
  partido: Partido;
  destacado?: boolean;
};

export function PartidoCard({ partido, destacado = false }: Props) {
  const condicion = partido.esLocal ? "Local · Monumental" : "Visitante";
  const mensaje = `Hola, quiero consultar por el viaje de River vs ${partido.rival} (${formatFechaPartido(partido.fecha)}).`;

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#141414] p-5">
      {destacado ? (
        <span className="absolute -right-px -top-px rounded-bl-lg rounded-tr-2xl bg-river-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          Oficial
        </span>
      ) : null}
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
        {partido.competencia}
      </p>
      <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-white">
        River Plate vs {partido.rival}
      </h3>
      <dl className="mt-5 space-y-2 text-sm text-white/65">
        <div className="flex justify-between gap-3">
          <dt>Fecha</dt>
          <dd className="text-white">{formatFechaPartido(partido.fecha)}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Condición</dt>
          <dd className="text-white">{condicion}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Estadio</dt>
          <dd className="text-right text-white">{partido.estadio}</dd>
        </div>
      </dl>
      <a
        href={whatsappLink(mensaje)}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 inline-flex h-11 items-center justify-center rounded-md px-4 text-xs font-semibold uppercase tracking-[0.14em] transition ${
          destacado
            ? "bg-river-red text-white hover:bg-red-700"
            : "text-white ring-1 ring-white/20 hover:bg-white/5"
        }`}
      >
        Consultar por WhatsApp
      </a>
    </article>
  );
}
