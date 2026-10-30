type Imagen = { url: string; alt: string; width: number; height: number };

export type Novedad = {
  slug: string;
  fecha: string;
  etiqueta: string;
  titulo: string;
  resumen: string;
  cuerpo: string[];
  /** Recuadro destacado arriba del texto. */
  aviso?: { titulo: string; texto: string };
  /** Imagen cuadrada para la tarjeta del listado. */
  portada: Imagen;
  /** Imágenes que se muestran dentro de la noticia. */
  imagenes: Imagen[];
  /** Imagen 1200×630 para compartir en redes. */
  imagenOg: string;
};

export const novedades: Novedad[] = [
  {
    slug: "river-aldosivi",
    fecha: "2026-10-30",
    etiqueta: "Partido",
    titulo: "River vs Aldosivi",
    resumen:
      "El partido por la última fecha del Clausura se jugaría el jueves 5 de noviembre a las 15 en el Minella, con público visitante. La filial no vende entradas: cuando tengamos más información, te avisamos.",
    aviso: {
      titulo: "No vendemos entradas",
      texto:
        "La filial no vende entradas para este partido. Cuando tengamos más información sobre la venta, te vamos a avisar por acá y por nuestras redes.",
    },
    cuerpo: [
      "El partido entre Aldosivi y River, por la última fecha de la fase regular del Torneo Clausura, se jugaría el jueves 5 de noviembre a las 15 en el estadio José María Minella, con público de los dos equipos. La fecha y el horario todavía no están confirmados oficialmente.",
      "El cambio se debe a la visita del papa León XIV a la Argentina, que llega el domingo 8 de noviembre por la noche: las fuerzas de seguridad van a estar abocadas a su visita. Por eso la AFA está armando el cronograma de una jornada atípica, con varios partidos en simultáneo en los que se definen la clasificación a las copas internacionales de 2027, los playoffs y el último descenso.",
      "Para River hay mucho en juego. El objetivo principal es meterse en la próxima Copa Libertadores por la tabla anual, pero también tiene chances de pelear el título y todavía no aseguró su lugar en los playoffs.",
      "La buena noticia para los hinchas de Mar del Plata es que se autorizó el público visitante. Los hinchas de River podrían ocupar la popular y la platea descubierta norte y, según trascendió, se destinarían hasta 6.000 entradas generales y 3.000 plateas para el equipo de Núñez.",
      "Los precios de las entradas todavía no se informaron oficialmente. La venta se anunciaría para los primeros días de noviembre, con los detalles de los puntos de venta y las formas de compra.",
    ],
    portada: {
      url: "/images/novedades/river-aldosivi.jpg",
      alt: "Hinchas de River con bengalas y banderas en la tribuna del estadio José María Minella de Mar del Plata",
      width: 1200,
      height: 740,
    },
    imagenes: [{
      url: "/images/novedades/river-aldosivi.jpg",
      alt: "Hinchas de River con bengalas y banderas en la tribuna del estadio José María Minella de Mar del Plata",
      width: 1200,
      height: 740,
    }],
    imagenOg: "/images/novedades/river-aldosivi-og.jpg",
  },
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
    imagenOg: "/images/novedades/superclasico-solidario-og.jpg",
    portada: {
      url: "/images/novedades/superclasico-solidario.jpg",
      alt: "Flyer Superclásico solidario: traé un alimento no perecedero. Recolectamos en la filial durante el partido para donar a un comedor.",
      width: 1254,
      height: 1254,
    },
    imagenes: [
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
