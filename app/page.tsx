import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { IdentitySection } from "@/components/IdentitySection";
import { ProximamenteBanner } from "@/components/ProximamenteBanner";
import { ProximosViajesSection } from "@/components/ProximosViajesSection";
import { QueHacemosSection } from "@/components/QueHacemosSection";
import { SedeMapSection } from "@/components/SedeMapSection";
import { SedeSection } from "@/components/SedeSection";
import { getInstitucional } from "@/lib/content";
import { getPartidos } from "@/lib/partidos";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [institucional, partidos] = await Promise.all([
    getInstitucional(),
    getPartidos(),
  ]);

  const { sede } = institucional;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "Filial Enzo Francescoli",
    alternateName: "Filial Enzo Francescoli Mar del Plata",
    description: institucional.heroSubtitulo,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-fef.png`,
    image: `${SITE_URL}/images/identidad.jpg`,
    sport: "Fútbol",
    telephone: sede.telefono,
    email: sede.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: sede.direccion,
      addressLocality: "Mar del Plata",
      addressRegion: "Buenos Aires",
      postalCode: "B7600CFM",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.996536,
      longitude: -57.5646371,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    hasMap: "https://maps.app.goo.gl/ZwA3FX6R8WHJrMiZ9",
    sameAs: [sede.instagram, "https://maps.app.goo.gl/ZwA3FX6R8WHJrMiZ9"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
      {partidos.length > 0 ? (
        <ProximosViajesSection partidos={partidos.slice(0, 3)} />
      ) : null}
      <SedeMapSection sede={institucional.sede} />
    </>
  );
}
