import type { Institucional } from "@/types/cms";

type Props = {
  titulo: Institucional["proximamenteTitulo"];
  cuerpo: Institucional["proximamenteCuerpo"];
};

export function ProximamenteBanner({ titulo, cuerpo }: Props) {
  return (
    <aside className="border-y border-river-red/30 bg-gradient-to-r from-river-red/15 via-black to-river-gold/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-river-gold/40 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-river-gold">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-river-red" aria-hidden />
          Próximamente
        </span>
        <div>
          <p className="font-display text-sm uppercase tracking-wide text-white sm:text-base">
            {titulo}
          </p>
          <p className="text-xs leading-relaxed text-white/65 sm:text-sm">{cuerpo}</p>
        </div>
      </div>
    </aside>
  );
}
