"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import type { Partido } from "@/lib/partidos";
import { formatFechaPartido } from "@/lib/partidos";
import { whatsappLink } from "@/lib/site";

type Props = {
  partido: Partido;
  destacado?: boolean;
};

export function PartidoCard({ partido, destacado = false }: Props) {
  const condicion = partido.esLocal ? "Local · Monumental" : "Visitante";
  const tituloViaje = partido.esLocal
    ? `River Plate vs ${partido.rival}`
    : `${partido.rival} vs River Plate`;
  const mensaje = `Hola, quiero anotarme para el viaje de ${tituloViaje} (${formatFechaPartido(partido)}).`;

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
      {!partido.esLocal ? (
        <span className="mt-3 self-start rounded bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-river-gold">
          Lo vemos en la Filial
        </span>
      ) : null}
      <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-white">
        {tituloViaje}
      </h3>
      <dl className="mt-5 space-y-2 text-sm text-white/65">
        <div className="flex justify-between gap-3">
          <dt>Fecha</dt>
          <dd className="text-right text-white">{formatFechaPartido(partido)}</dd>
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
      {partido.esLocal ? (
        <a
          href={whatsappLink(mensaje)}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            sendGTMEvent({ event: "whatsapp_click", viaje: tituloViaje })
          }
          className={`mt-6 inline-flex h-11 items-center justify-center rounded-md px-4 text-xs font-semibold uppercase tracking-[0.14em] transition ${
            destacado
              ? "bg-river-red text-white hover:bg-red-700"
              : "text-white ring-1 ring-white/20 hover:bg-white/5"
          }`}
        >
          Consultar para anotarte
        </a>
      ) : null}
    </article>
  );
}
