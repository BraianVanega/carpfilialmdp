import type { Partido } from "@/lib/partidos";
import { formatFechaPartido } from "@/lib/partidos";

export function TickerProximoViaje({ partido }: { partido: Partido }) {
  return (
    <div className="flex items-center justify-center gap-3 bg-river-red px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        Próximo viaje
      </span>
      <span className="hidden text-white/90 sm:inline">
        River vs {partido.rival} · {formatFechaPartido(partido.fecha)}
      </span>
    </div>
  );
}
