import type { Metadata } from "next";
import { ProximamenteBanner } from "@/components/ProximamenteBanner";
import { ProximosViajesSection } from "@/components/ProximosViajesSection";
import { getInstitucional } from "@/lib/content";
import { getPartidos } from "@/lib/partidos";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Próximos viajes y partidos",
  description:
    "Calendario informativo de los próximos partidos de River Plate y salidas de la Filial Enzo Francescoli desde Mar del Plata.",
};

export default async function ProximosViajesPage() {
  const [institucional, partidos] = await Promise.all([
    getInstitucional(),
    getPartidos(),
  ]);

  return (
    <div className="pt-6">
      <ProximamenteBanner
        titulo={institucional.proximamenteTitulo}
        cuerpo={institucional.proximamenteCuerpo}
      />
      <ProximosViajesSection
        partidos={partidos}
        titulo="Próximos partidos de River"
        mostrarLink={false}
      />
    </div>
  );
}
