export type SanityImage = {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
  alt?: string;
};

export type Media = {
  url: string;
  alt: string;
  sanity?: SanityImage;
};

export type Estadistica = {
  valor: string;
  etiqueta: string;
};

export type Actividad = {
  titulo: string;
  descripcion: string;
  icono: "viajes" | "transmisiones" | "comunidad" | "sede";
};

export type FotoSede = {
  titulo: string;
  imagen: Media;
};

export type Sede = {
  nombre: string;
  direccion: string;
  ciudad: string;
  horarios: string;
  telefono: string;
  email: string;
  instagram: string;
  mapaEmbedUrl: string;
  fotos: FotoSede[];
};

export type Institucional = {
  heroEyebrow: string;
  heroTitulo: string;
  heroSubtitulo: string;
  historiaTitulo: string;
  historiaCuerpo: string[];
  estadisticas: Estadistica[];
  actividadesTitulo: string;
  actividades: Actividad[];
  sedeTitulo: string;
  sede: Sede;
  proximamenteTitulo: string;
  proximamenteCuerpo: string;
};

export type Viaje = {
  titulo: string;
  partidoDescripcion: string;
  fechaSalida: string;
  puntoEncuentro: string;
  descripcion: string;
  imagen: Media;
  estado: "proximamente" | "confirmado" | "finalizado";
};
