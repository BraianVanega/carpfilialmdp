/**
 * Schema de Sanity para v1 (no se corre `sanity init` todavía).
 * Cuando confirmemos el proyecto, estos tipos se copian al Studio.
 */
export const institucionalSchema = {
  name: "institucional",
  title: "Contenido institucional",
  type: "document",
  fields: [
    { name: "heroEyebrow", type: "string", title: "Hero — epígrafe" },
    { name: "heroTitulo", type: "string", title: "Hero — título" },
    { name: "heroSubtitulo", type: "text", title: "Hero — bajada" },
    { name: "historiaTitulo", type: "string", title: "Historia — título" },
    { name: "historiaCuerpo", type: "array", of: [{ type: "text" }], title: "Historia — párrafos" },
    {
      name: "estadisticas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "valor", type: "string" },
            { name: "etiqueta", type: "string" },
          ],
        },
      ],
    },
    { name: "actividadesTitulo", type: "string" },
    {
      name: "actividades",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "titulo", type: "string" },
            { name: "descripcion", type: "text" },
            {
              name: "icono",
              type: "string",
              options: { list: ["viajes", "transmisiones", "comunidad", "sede"] },
            },
          ],
        },
      ],
    },
    { name: "sedeTitulo", type: "string" },
    { name: "proximamenteTitulo", type: "string", title: "Banner próximamente — título" },
    { name: "proximamenteCuerpo", type: "text", title: "Banner próximamente — texto" },
    {
      name: "sede",
      type: "object",
      fields: [
        { name: "nombre", type: "string" },
        { name: "direccion", type: "string" },
        { name: "ciudad", type: "string" },
        { name: "horarios", type: "string" },
        { name: "telefono", type: "string" },
        { name: "email", type: "string" },
        { name: "instagram", type: "url" },
        { name: "mapaEmbedUrl", type: "url" },
        {
          name: "fotos",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "titulo", type: "string" },
                { name: "imagen", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const viajeSchema = {
  name: "viaje",
  title: "Viaje (editorial)",
  type: "document",
  fields: [
    { name: "titulo", type: "string" },
    { name: "partidoDescripcion", type: "string" },
    { name: "fechaSalida", type: "datetime" },
    { name: "puntoEncuentro", type: "string" },
    { name: "descripcion", type: "text" },
    { name: "imagen", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] },
    {
      name: "estado",
      type: "string",
      options: { list: ["proximamente", "confirmado", "finalizado"] },
    },
  ],
};
