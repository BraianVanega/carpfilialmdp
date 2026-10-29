export type Novedad = {
  slug: string;
  fecha: string;
  etiqueta: string;
  titulo: string;
  resumen: string;
  cuerpo: string[];
  imagenes: { url: string; alt: string; width: number; height: number }[];
};

export const novedades: Novedad[] = [
  {
    slug: "superclasico-solidario",
    fecha: "2026-10-28",
    etiqueta: "Solidaridad",
    titulo: "Superclásico solidario: traé un alimento no perecedero",
    resumen:
      "Este domingo 1 de noviembre, durante el River vs Boca, recolectamos alimentos no perecederos en la filial para donar a un comedor. ¡Sumate a la colecta!",
    cuerpo: [
      "Este domingo 1 de noviembre se juega el Superclásico y en la Filial Enzo Francescoli lo vamos a vivir como mejor sabemos: todos juntos, con los colores bien puestos. Pero esta vez el partido tiene un condimento especial, porque además de alentar a River queremos darle una mano a quienes más lo necesitan.",
      "Durante la transmisión del partido vamos a estar recolectando alimentos no perecederos en la filial. Todo lo que juntemos será donado a un comedor.",
      "La consigna es simple: si venís a ver el River vs Boca a la filial, traé un alimento no perecedero. Fideos, arroz, legumbres, harina, aceite, leche en polvo, enlatados o lo que puedas aportar. Cada paquete suma.",
      "Te esperamos en Deán Funes 2221. Que el Superclásico se gane en la cancha y también afuera. ¡Sumate a la colecta!",
    ],
    imagenes: [
      {
        url: "/images/novedades/superclasico-solidario.jpg",
        alt: "Flyer Superclásico solidario: traé un alimento no perecedero. Recolectamos en la filial durante el partido para donar a un comedor.",
        width: 1254,
        height: 1254,
      },
      {
        url: "/images/novedades/superclasico-solidario-vertical.jpg",
        alt: "Flyer vertical Superclásico solidario de la Filial Enzo Francescoli Mar del Plata.",
        width: 900,
        height: 1600,
      },
    ],
  },
];

export function getNovedades() {
  return [...novedades].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function getNovedad(slug: string) {
  return novedades.find((novedad) => novedad.slug === slug);
}

export function formatFecha(fecha: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date(`${fecha}T12:00:00-03:00`));
}
