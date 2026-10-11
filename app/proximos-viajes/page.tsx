import type { Metadata } from "next";
import { ProximamenteBanner } from "@/components/ProximamenteBanner";
import { ProximosViajesSection } from "@/components/ProximosViajesSection";
import { getInstitucional } from "@/lib/content";
import { getPartidos } from "@/lib/partidos";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Próximos viajes y partidos",
  description:
    "Calendario informativo de los próximos partidos de River Plate y salidas de la Filial Enzo Francescoli desde Mar del Plata.",
  alternates: { canonical: "/proximos-viajes" },
  openGraph: {
    title: "Próximos viajes y partidos | Filial Enzo Francescoli",
    description:
      "Próximos partidos de River Plate y salidas en micro desde Mar del Plata al Monumental con la Filial Enzo Francescoli.",
    url: "/proximos-viajes",
  },
  twitter: {
    title: "Próximos viajes y partidos | Filial Enzo Francescoli",
    description:
      "Próximos partidos de River Plate y salidas en micro desde Mar del Plata al Monumental con la Filial Enzo Francescoli.",
  },
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
        tituloComo="h1"
        mostrarLink={false}
      />
    </div>
  );
}
