import type { Institucional, Viaje } from "@/types/cms";
import { institucionalQuery, sanityClient, viajesQuery } from "@/lib/sanity";

export const mockInstitucional: Institucional = {
  heroEyebrow: "Filial oficial · Mar del Plata · 1901",
  heroTitulo: "De Mar del Plata al Monumental: la pasión no tiene distancias",
  heroSubtitulo:
    "Somos la Filial Enzo Francescoli, comunidad millonaria de Mar del Plata. Viajamos juntos, vivimos cada domingo y llevamos a River en el pecho — lejos del Monumental, pero nunca lejos de casa.",
  historiaTitulo: "Nuestra historia & sentimiento millonario",
  historiaCuerpo: [
    "La Filial Enzo Francescoli es el punto de encuentro de los hinchas de River Plate en Mar del Plata. Nacimos para que la distancia no apague la pasión: cada salida al Monumental, cada transmisión en la sede y cada asado post partido refuerzan lo que somos.",
    "Acá no venís solo a mirar un partido. Venís a pertenecer. A cantar el himno con vecinos, a conocer nuevas generaciones de millonarios y a viajar con la seguridad de que siempre hay un lugar en el micro — y un abrazo al volver.",
  ],
  estadisticas: [
    { valor: "+12", etiqueta: "Años de filial" },
    { valor: "+180", etiqueta: "Socios activos" },
    { valor: "100%", etiqueta: "Pasión millonaria" },
  ],
  actividadesTitulo: "Qué hacemos en la filial",
  actividades: [
    {
      titulo: "Viajes oficiales al Monumental",
      descripcion:
        "Micros organizados desde Mar del Plata para cada partido de River. Salida conjunta, butacas coordinadas y la bandera de la filial en la 12.",
      icono: "viajes",
    },
    {
      titulo: "Transmisiones y peña en la sede",
      descripcion:
        "Cuando no viajamos, la sede se llena. Pantalla grande, cantitos y la mesa puesta para vivir el partido como si estuviéramos en Núñez.",
      icono: "transmisiones",
    },
    {
      titulo: "Comunidad & peña millonaria",
      descripcion:
        "Asados, merchandising, actividades para pibes y un espacio para que el que llega de otra ciudad también se sienta en casa.",
      icono: "comunidad",
    },
    {
      titulo: "Sede social en Mar del Plata",
      descripcion:
        "Un rincón propio: camisetas en la pared, copas, recuerdos de cada gira y la puerta abierta para quien lleve a River en el pecho.",
      icono: "sede",
    },
  ],
  sedeTitulo: "Nuestra sede & rincones de pasión",
  sede: {
    nombre: "Sede social Enzo Francescoli",
    direccion: "Av. Independencia 3450",
    ciudad: "Mar del Plata, Buenos Aires",
    horarios: "Lun a Vie 18 a 22 hs · Sábados de partido",
    telefono: "+54 223 000-0000",
    email: "hola@filialenzofrancescoli.com",
    instagram: "https://instagram.com/filialenzofrancescoli",
    mapaEmbedUrl:
      "https://maps.google.com/maps?q=Mar%20del%20Plata%20Buenos%20Aires&t=&z=13&ie=UTF8&iwloc=&output=embed",
    fotos: [
      {
        titulo: "El salón de la familia millonaria",
        imagen: {
          url: "/images/sede/salon.jpg",
          alt: "Vitrina con merchandising de la Filial Enzo Francescoli",
        },
      },
      {
        titulo: "De River de corazón",
        imagen: {
          url: "/images/identidad.jpg",
          alt: "Pared con escudos históricos de River Plate en la sede",
        },
      },
      {
        titulo: "Barra de la peña",
        imagen: {
          url: "/images/sede/bar.jpg",
          alt: "Barra de la sede de la filial en Mar del Plata",
        },
      },
      {
        titulo: "Rincón de las camisetas",
        imagen: {
          url: "/images/sede/camisetas.jpg",
          alt: "Camisetas de River Plate colgadas en la sede",
        },
      },
    ],
  },
  proximamenteTitulo: "Muy pronto: registro propio con recompensas",
  proximamenteCuerpo:
    "Estamos preparando el acceso de socios: historial de viajes, beneficios exclusivos y reserva de butaca. Mientras tanto, consultanos por WhatsApp y acercate a la sede.",
};

export const mockViajes: Viaje[] = [
  {
    titulo: "Clásico en el Monumental",
    partidoDescripcion: "River Plate vs Boca Juniors",
    fechaSalida: "2026-10-11T06:00:00-03:00",
    puntoEncuentro: "Sede social · Av. Independencia 3450",
    descripcion: "Salida especial para el Superclásico. Micro ida y vuelta, coordinación de butacas y bandera de la filial.",
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
    const data = await sanityClient.fetch<Institucional | null>(institucionalQuery);
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
