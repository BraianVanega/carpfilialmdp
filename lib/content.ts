import { institucionalQuery, sanityClient, viajesQuery } from "@/lib/sanity";
import type { Institucional, Viaje } from "@/types/cms";

export const mockInstitucional: Institucional = {
  heroEyebrow: "Única filial oficial de Mar del Plata",
  heroTitulo: "De Mar del Plata al Monumental",
  heroSubtitulo:
    "Somos la Filial Enzo Francescoli, el punto de encuentro de los hinchas de River en Mar del Plata. Viajamos juntos al Monumental, vivimos cada partido y llevamos los colores en el alma — lejos del estadio, pero nunca lejos de River.",
  historiaTitulo: "Nuestra historia & sentimiento millonario",
  historiaCuerpo: [
    "La Filial Enzo Francescoli es el punto de encuentro de los hinchas de River Plate en Mar del Plata. Nacimos para que la distancia no apague la pasión.",
    "Acá no venís solo a mirar un partido. Venís a pertenecer. Acá no venís solo a mirar un partido. Venís a ser parte de una familia cuyos valores, pasión y sentido de pertenencia pasan de generación en generación.",
  ],
  actividadesTitulo: "Qué hacemos en la filial",
  actividades: [
    {
      titulo: "Viajes al Monumental",
      descripcion: "Micros desde Mar del Plata para cada partido de River. ",
      icono: "viajes",
    },
    {
      titulo: "Transmisiones en la filial",
      descripcion:
        "Cuando no viajamos, la filial se llena. Pantalla y buffet abierto para vivir el partido como si estuviéramos en Núñez.",
      icono: "transmisiones",
    },
    {
      titulo: "Comunidad millonaria",
      descripcion:
        "Juntadas, fiestas, merchandising y actividades en un espacio propio para que el que llega de otra ciudad también se sienta en casa.",
      icono: "comunidad",
    },
    {
      titulo: "Nuestra filial en Mar del Plata",
      descripcion:
        "Un rincón propio: camisetas, copas, recuerdos y la puerta abierta para quien lleve a River en el corazón.",
      icono: "sede",
    },
  ],
  sedeTitulo: "Nuestra filial & rincones de pasión",
  sede: {
    nombre: "Filial Enzo Francescoli",
    direccion: "Deán Funes 2221",
    ciudad: "B7600CFM Mar del Plata, Buenos Aires",
    horarios: "Lun a Vie 8 a 17 hs · Noches y días de partido",
    telefono: "+54 9 223 446-1253",
    email: "hola@filialenzofrancescoli.com",
    instagram: "https://instagram.com/filialenzofrancescoli",
    mapaEmbedUrl:
      "https://maps.google.com/maps?q=Filial%20Enzo%20Francescoli%20Mar%20Del%20Plata%40-37.996536,-57.5646371&z=17&output=embed",
    fotos: [
      {
        titulo: "El salón de la familia millonaria",
        imagen: {
          url: "/images/sede/entrada.jpg",
          alt: "Salón de la Filial Enzo Francescoli con mesas rojas y escudos de River Plate",
        },
      },
      {
        titulo: "De River de corazón",
        imagen: {
          url: "/images/identidad.jpg",
          alt: "Pared con escudos históricos de River Plate en la filial",
        },
      },
      {
        titulo: "Barra de la filial",
        imagen: {
          url: "/images/sede/camisetas.jpg",
          alt: "Barra de la filial en Mar del Plata",
        },
      },
      {
        titulo: "La vitrina millonaria",
        imagen: {
          url: "/images/sede/salon.jpg",
          alt: "Vitrina con merchandising de la Filial Enzo Francescoli",
        },
      },
    ],
  },
  proximamenteTitulo: "Muy pronto: registro propio con recompensas",
  proximamenteCuerpo:
    "Estamos preparando el acceso de socios: historial de viajes, beneficios exclusivos y reserva de butaca. Mientras tanto, consultanos por WhatsApp y acercate a la filial.",
};

export const mockViajes: Viaje[] = [
  {
    titulo: "Clásico en el Monumental",
    partidoDescripcion: "River Plate vs Boca Juniors",
    fechaSalida: "2026-10-11T06:00:00-03:00",
    puntoEncuentro: "Filial · Deán Funes 2221",
    descripcion:
      "Salida especial para el Superclásico. Micro ida y vuelta, coordinación de butacas y bandera de la filial.",
    imagen: {
      url: "/images/hero-estadio.jpg",
      alt: "Estadio Monumental de River Plate",
    },
    estado: "confirmado",
  },
];

export async function getInstitucional(): Promise<Institucional> {
  if (!sanityClient || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return mockInstitucional;
  }

  try {
    const data = await sanityClient.fetch<Institucional | null>(
      institucionalQuery,
    );
    return data ?? mockInstitucional;
  } catch (error) {
    console.error("Sanity institucional:", error);
    return mockInstitucional;
  }
}

export async function getViajesEditoriales(): Promise<Viaje[]> {
  if (!sanityClient || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return mockViajes;
  }

  try {
    const data = await sanityClient.fetch<Viaje[] | null>(viajesQuery);
    return data && data.length > 0 ? data : mockViajes;
  } catch (error) {
    console.error("Sanity viajes:", error);
    return mockViajes;
  }
}
