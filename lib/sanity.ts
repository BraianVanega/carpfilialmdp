import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "@/types/cms";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-01-01",
  useCdn: true,
};

export const sanityClient = sanityConfig.projectId
  ? createClient({
      ...sanityConfig,
      perspective: "published",
    })
  : null;

const builder = sanityConfig.projectId
  ? imageUrlBuilder({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
    })
  : null;

export function urlFor(source: SanityImage) {
  if (!builder) return "";
  return builder.image(source).auto("format").url();
}

export const institucionalQuery = `*[_type == "institucional"][0]{
  heroEyebrow,
  heroTitulo,
  heroSubtitulo,
  historiaTitulo,
  historiaCuerpo,
  estadisticas,
  actividadesTitulo,
  actividades,
  sedeTitulo,
  proximamenteTitulo,
  proximamenteCuerpo,
  sede{
    nombre,
    direccion,
    ciudad,
    horarios,
    telefono,
    email,
    instagram,
    mapaEmbedUrl,
    fotos[]{
      titulo,
      imagen{
        "url": asset->url,
        "alt": coalesce(imagen.alt, titulo)
      }
    }
  }
}`;

export const viajesQuery = `*[_type == "viaje"] | order(fechaSalida asc){
  titulo,
  partidoDescripcion,
  fechaSalida,
  puntoEncuentro,
  descripcion,
  estado,
  imagen{
    "url": asset->url,
    "alt": coalesce(imagen.alt, titulo)
  }
}`;
