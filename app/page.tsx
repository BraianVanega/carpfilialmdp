import { Hero } from "@/components/Hero";
import { IdentitySection } from "@/components/IdentitySection";
import { ProximamenteBanner } from "@/components/ProximamenteBanner";
import { ProximosViajesSection } from "@/components/ProximosViajesSection";
import { QueHacemosSection } from "@/components/QueHacemosSection";
import { SedeMapSection } from "@/components/SedeMapSection";
import { SedeSection } from "@/components/SedeSection";
import { getInstitucional } from "@/lib/content";
import { getPartidos } from "@/lib/partidos";

export const revalidate = 21600;

export default async function HomePage() {
  const [institucional, partidos] = await Promise.all([
    getInstitucional(),
    getPartidos(),
  ]);

  return (
    <>
      <Hero institucional={institucional} />
      <ProximamenteBanner
        titulo={institucional.proximamenteTitulo}
        cuerpo={institucional.proximamenteCuerpo}
      />
      <IdentitySection institucional={institucional} />
      <QueHacemosSection
        titulo={institucional.actividadesTitulo}
        actividades={institucional.actividades}
      />
      <SedeSection titulo={institucional.sedeTitulo} sede={institucional.sede} />
      <ProximosViajesSection partidos={partidos.slice(0, 3)} />
      <SedeMapSection sede={institucional.sede} />
    </>
  );
}
