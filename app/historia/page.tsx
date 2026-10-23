import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Historia de la filial",
  description:
    "Desde 1978, la Filial Enzo Francescoli acerca a los hinchas de River de Mar del Plata al Monumental. Fundación, sedes, comisiones, visitas del Príncipe y viajes históricos.",
  alternates: { canonical: "/historia" },
  openGraph: {
    title: "Historia de la filial | Filial Enzo Francescoli",
    description:
      "Fundada el 17 de enero de 1978: la historia de la filial de River Plate en Mar del Plata.",
    url: "/historia",
  },
  twitter: {
    title: "Historia de la filial | Filial Enzo Francescoli",
    description:
      "Fundada el 17 de enero de 1978: la historia de la filial de River Plate en Mar del Plata.",
  },
};

const DATOS = [
  { valor: "1978", etiqueta: "Año de fundación" },
  { valor: "700", etiqueta: "Hinchas viajaron a la final de la Libertadores 1996" },
  { valor: "2000", etiqueta: "Llegó la sede propia" },
];

const HITOS: { anio: string; titulo: string; parrafos: string[]; destacado?: boolean }[] = [
  {
    anio: "1978",
    titulo: "Nace la filial",
    destacado: true,
    parrafos: [
      "El 17 de enero de 1978, un grupo de simpatizantes riverplatenses con José Colella, José Loprevite y Héctor Echeverría, entre otros, fundaron la Filial Marplatense del Club Atlético River Plate.",
      "Junto con su creación organizó su primera cena, con la presencia del presidente del club, Rafael Aragón Cabrera, los dirigentes Patrick Noel y Jorge Kipper y todo el plantel profesional, entre ellos Osvaldo Alonso —máximo ídolo del momento—, Juan José López, Reinaldo Merlo, Roberto Perfumo y Pedro González.",
      "La sede estaba en Arenales 2287, donde se realizó la primera elección de la comisión directiva: Héctor Echeverría presidente y José Colella vicepresidente.",
    ],
  },
  {
    anio: "1980",
    titulo: "Viajes a la Capital",
    parrafos: [
      "Se nombra socia honoraria a Kati Santiago, periodista de amplia y prestigiosa trayectoria en los medios marplatenses.",
      "Continúan los viajes periódicos a Capital Federal para ver al primer equipo. El pico de ese momento fue el último partido del año frente a Unión de Santa Fe, con más de 100 simpatizantes marplatenses.",
    ],
  },
  {
    anio: "1981",
    titulo: "Nueva sede en San Juan 2145",
    parrafos: [
      "La sede se traslada a San Juan 2145 y asumen nuevas autoridades: José Colella presidente, Horacio Méndez vicepresidente y Carlos Dazeo secretario. La filial estrecha lazos de amistad con entidades deportivas locales.",
    ],
  },
  {
    anio: "1984",
    titulo: "Caravanas al aeropuerto",
    parrafos: [
      "Es electo presidente Abraham Sleimen, con José Colella como vicepresidente y Carlos Dazeo como secretario. Se organiza una cena con Reinaldo Carlos Merlo, recibido con enorme entusiasmo por los socios.",
      "Nace una tradición: cada vez que River llega a Mar del Plata para la pretemporada de verano, la filial lo recibe en el aeropuerto y lo acompaña en extensas caravanas de autos hasta el hotel.",
    ],
  },
  {
    anio: "1987",
    titulo: "Diez años de filial",
    parrafos: [
      "La sede se muda a Olazábal 2078. Nueva comisión: José Colella presidente, Horacio Echeverría vicepresidente y Carlos Dazeo secretario.",
      "El 16 de enero de 1988 se festejó el décimo aniversario, reuniendo a cientos de socios y simpatizantes.",
    ],
  },
  {
    anio: "1990",
    titulo: "Reelección",
    parrafos: [
      "Es reelecta la misma comisión directiva y se suman Federico Barragán y Gustavo Méndez, entre otros.",
    ],
  },
  {
    anio: "1993",
    titulo: "Impulso y solidaridad",
    parrafos: [
      "Se suman Cristian D’Elia, Sergio Orazi, Fernando D’Elia y Omar Acosta, que con empuje e ideas nuevas logran un acercamiento masivo de simpatizantes y dan un fuerte impulso a la parte social y a los viajes.",
      "La sede se muda al Club Atlético River Plate de Mar del Plata, en Av. Juan B. Justo y Los Andes. El 5 de abril asume la nueva comisión: Héctor Echeverría presidente, Jorge Basterra vicepresidente y Cristian D’Elia secretario.",
      "Se organiza el primer torneo de papi fútbol Interfiliales y Peñas de la ciudad, a cargo de Sergio Orazi, Omar Acosta y Fernando D’Elia. Por iniciativa de Orazi la entrada fue un juguete, donado después al Hospital Materno Infantil de Mar del Plata.",
    ],
  },
  {
    anio: "1994",
    titulo: "Cristian D’Elia presidente",
    parrafos: [
      "Es electo presidente Cristian D’Elia, marcando un hito en la historia de la filial. Lo acompañan Jorge Basterra como vicepresidente, Fernando D’Elia como secretario y Omar Acosta como tesorero, que junto con Sergio Orazi se destacan en la función social y en el ingreso de nuevos socios.",
    ],
  },
  {
    anio: "1996",
    titulo: "Nos llamamos Enzo Francescoli",
    destacado: true,
    parrafos: [
      "Sergio Orazi asume como vicepresidente y se acercan nuevos colaboradores: Jorge Moreno (prosecretario desde 1998), Guillermo Derosa, Eduardo Lichardi (de Pirán), Juan Ledesma, Guillermo Pelliza, Alejandro Stantien, Fabricio “Fafa” Dinzeo, Aníbal Centeno, Noel Silleta y Jorge Gaich, entre otros.",
      "En el programa Juego Limpio, conducido por Juan Carlos Morales en una radio marplatense, los hinchas votaron el nombre de la filial. Ganó por amplia ventaja Enzo Francescoli. El nombre se oficializó en una cena con el propio Príncipe presente: una de las noches más recordadas por la familia riverplatense.",
      "Para la final de la Copa Libertadores 1996 viajaron 700 personas en 10 micros, 6 combis y decenas de autos. Y a la final Intercontinental en Japón fueron tres integrantes de la filial con las banderas “Filial Enzo Francescoli”, gracias al esfuerzo de Diego Benítez, Carlos Molinari y Guillermo Pelliza.",
    ],
  },
  {
    anio: "1997",
    titulo: "El plantel de Ramón",
    parrafos: [
      "Seguimos recibiendo visitas del primer equipo: el plantel completo de Ramón Díaz nos visitó en dos oportunidades.",
    ],
  },
  {
    anio: "1998",
    titulo: "Vuelve el Príncipe",
    parrafos: [
      "Es reelecta la comisión encabezada por Cristian D’Elia. Visitan la filial Germán Burgos, Pablo Aimar, Juan Pablo Sorín, Roberto Bonano, Santiago Solari y Luis Villalba.",
      "Enzo Francescoli vuelve a Mar del Plata y la convocatoria supera todo cálculo: conferencia de prensa en el Hotel Sheraton y cena homenaje en Chocolate Café con trescientas personas.",
      "Por su permanente colaboración, se nombra presidente honorario a Don Antonio Toledo, de Supermercados Toledo. También nos visitan el presidente del club, Dr. David Pintado, y dirigentes como Mario Israel, Luis Beliz, Julio Blanco, Alcira Brusino, Eduardo Carrazzoni y Osvaldo Varela.",
    ],
  },
  {
    anio: "1999",
    titulo: "Reconocimiento a los dirigentes",
    parrafos: [
      "En la fiesta de fin de año, por iniciativa de Jorge Moreno y con la colaboración de Guillermo “Pipo” Derosa, se entregaron de sorpresa plaquetas de reconocimiento a la comisión directiva por el esfuerzo de esos años.",
    ],
  },
  {
    anio: "2000",
    titulo: "La sede propia",
    destacado: true,
    parrafos: [
      "Se suman Carlos Viladomat, Valeria Foresti, Valeria Genovese, Ricardo Benítez, Pablo Covello, Claudia Camaño, Cintia Sayavedra y Stella Maris Elías, entre otros.",
      "Se cumple el sueño de todas las comisiones: la sede propia en Deán Funes 2221, entre Almirante Brown y Av. Colón. El fruto de años de cenas, homenajes, viajes y torneos de fútbol y de truco.",
      "Ya en casa, asume la nueva comisión: Cristian D’Elia presidente, Jorge Moreno vicepresidente y Carlos Viladomat secretario.",
    ],
  },
  {
    anio: "2001",
    titulo: "Homenaje a Hernán Díaz",
    parrafos: [
      "El 6 de septiembre nos visitó Hernán Díaz para una cena homenaje por su trayectoria. La conferencia de prensa fue en el Hotel Dos Reyes y la cena en Chocolate Café.",
    ],
  },
  {
    anio: "2002",
    titulo: "Red Solidaria",
    parrafos: [
      "Acompañando la campaña de River en la Red Solidaria Nacional, la filial organizó dos partidos a beneficio en el Estadio José María Minella entre veteranos de River y de Mar del Plata. Lo recaudado fue para comedores infantiles de la ciudad.",
      "En agosto se conforma la comisión: Carlos Viladomat presidente, Omar Acosta vicepresidente, Cristian D’Elia secretario, Rodolfo Montero prosecretario, Stella Maris Elías tesorera y Alejandro Stantien protesorero, junto a Sergio Orazi, Adrián Salinas, Fernando D’Elia y Carlos D. Grassi.",
    ],
  },
  {
    anio: "2003",
    titulo: "25 años",
    parrafos: [
      "Junto a Néstor Sanmartino, de prensa y difusión de River, se organizó una muestra de humor gráfico gratuita en el C.E.F. N° 1.",
      "Por los 25 años de la filial hubo una charla debate en el salón Posh con el presidente del club, José María Aguilar, y una fiesta con Nelson “Pipino” Cuevas y Oscar Ahumada. Esa noche se eligió a la reina de la filial: Verónica Otonelli.",
      "Hubo dos viajes al Monumental: una visita guiada con doscientos chicos que recorrieron el club y jugaron con las clases 90 y 91, y otro con 120 chicos de la Escuela de Fútbol del Club River de Mar del Plata para ver al primer equipo frente a Talleres por el Apertura 2003.",
      "Tras la inundación de Santa Fe, la Red Solidaria Nacional y la filial juntaron ropa y alimentos que llegaron a destino en camiones de Supermercados Toledo.",
      "Para la semifinal de la Copa Libertadores viajaron más de quinientas personas en diez micros, con la ayuda clave de Yesica Viladomat y Daniela Davico. Con lo recaudado se reformó la sede. En esos años se sumaron Alejandro Barría, Emmanuel Budroni, Santiago Bouzas, David Díaz, Guillermo Desimone y Cristian Biraconet.",
    ],
  },
  {
    anio: "2014",
    titulo: "36.º aniversario",
    parrafos: [
      "En enero la filial festejó su 36.º aniversario con la presencia de Enzo Francescoli, el presidente del club Rodolfo D’Onofrio, Matías Patanian y representantes de la Comisión de Filiales. El canal oficial de River Plate publicó un video del festejo.",
    ],
  },
  {
    anio: "2016",
    titulo: "Amadeo Carrizo en Mar del Plata",
    parrafos: [
      "Por iniciativa de la filial, Amadeo Carrizo celebró en Mar del Plata el Día Internacional del Hincha de River en una cena en el restaurante del club Sporting, con más de 150 personas.",
      "El maestro Amadeo se sacó fotos con todos los presentes, firmó autógrafos y contó anécdotas de su época de arquero millonario. Durante la noche se sortearon una réplica de 34 centímetros de la Copa Libertadores y réplicas de las medallas de la Libertadores y de la Sudamericana.",
    ],
  },
  {
    anio: "2018",
    titulo: "Día del Niño solidario",
    parrafos: [
      "La filial celebró el Día del Niño en el comedor del Hogar Brazos Abiertos, en 10 de Febrero 7955, sobre el camino viejo a Miramar. Como cada año, los integrantes de la filial visitan a los chicos del hogar y convocan a la comunidad marplatense a sumar donaciones de alimentos no perecederos, ropa, juguetes y golosinas.",
      "Durante la jornada se entregó todo lo reunido, hubo un almuerzo y los socios de la filial organizaron juegos de recreación, entre ellos un inflable para los chicos.",
    ],
  },
  {
    anio: "2022",
    titulo: "Reunión de filiales y la llegada de Gallardo",
    parrafos: [
      "El 17 de junio la filial recibió la reunión de Filiales de la Zona 2, con más de 30 filiales e integrantes de la Comisión de Filiales, para plantear problemáticas comunes y buscar soluciones juntos.",
      "El 23 de julio recibimos al equipo de Marcelo Gallardo en las puertas del Hotel Costa Galana. La organización y el colorido fueron noticia en portales nacionales e internacionales.",
    ],
  },
];

const FOTOS: { src: string; alt: string; width: number; height: number }[] = [
  { src: "archivo-primeros-anos.jpg", alt: "Socios y dirigentes en los primeros años de la filial", width: 1600, height: 1044 },
  { src: "bienvenida-plantel.jpg", alt: "La filial le da la bienvenida al plantel profesional de River", width: 1600, height: 1070 },
  { src: "francescoli-plaqueta.jpg", alt: "Enzo Francescoli recibe una plaqueta de la filial", width: 1101, height: 1600 },
  { src: "conferencia-plantel.jpg", alt: "Conferencia de prensa con el plantel profesional de River", width: 1600, height: 1048 },
  { src: "entrega-reconocimiento.jpg", alt: "Entrega de un reconocimiento a un jugador de River", width: 1087, height: 1600 },
  { src: "brindis-cena.jpg", alt: "Brindis en una cena de la filial", width: 1600, height: 1056 },
  { src: "brindis-torta.jpg", alt: "Brindis con la torta de la filial", width: 1600, height: 1099 },
  { src: "plaqueta-delia-1999.jpg", alt: "Plaqueta de reconocimiento a Cristian D’Elia, diciembre de 1999", width: 1600, height: 1113 },
  { src: "homenaje-hernan-diaz-2001.jpg", alt: "Homenaje a Hernán Díaz, 6 de septiembre de 2001", width: 1600, height: 1140 },
  { src: "bandera-monumental.jpg", alt: "La bandera de la filial en el Monumental", width: 960, height: 1280 },
  { src: "hinchas-monumental.jpg", alt: "Hinchas de la filial antes de un partido", width: 1600, height: 1200 },
  { src: "encuentro-river.jpg", alt: "Encuentro con dirigentes en River Plate", width: 1600, height: 1200 },
  { src: "encuentro-sede.jpg", alt: "Encuentro de socios en la sede", width: 1600, height: 1200 },
  { src: "jornada-solidaria-grupo.jpg", alt: "Integrantes de la filial y chicos frente a la bandera en una jornada solidaria", width: 1600, height: 1200 },
  { src: "jornada-solidaria-metegol.jpg", alt: "Chicos jugando al metegol en una jornada solidaria", width: 960, height: 1280 },
  { src: "jornada-solidaria-ping-pong.jpg", alt: "Foto grupal junto a la mesa de ping pong", width: 1600, height: 1200 },
  { src: "jornada-solidaria-tenis-de-mesa.jpg", alt: "Una nena juega al ping pong con un socio de la filial", width: 960, height: 1280 },
  { src: "jornada-solidaria-paleta.jpg", alt: "Dos nenas juegan al ping pong frente a las banderas de la filial", width: 1600, height: 1200 },
  { src: "jornada-solidaria-juegos.jpg", alt: "Juegos en la calle durante una jornada solidaria", width: 1600, height: 1200 },
  { src: "jornada-solidaria-soga.jpg", alt: "Chicos saltando la soga con integrantes de la filial", width: 1600, height: 1200 },
  { src: "jornada-solidaria-barrio.jpg", alt: "Jornada solidaria en el barrio con banderas de la filial", width: 1600, height: 1200 },
  { src: "jornada-solidaria-calle.jpg", alt: "Integrantes de la filial acompañan a los chicos en la calle", width: 1200, height: 1600 },
];

export default function HistoriaPage() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          Historia
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase text-white sm:text-5xl">
          Desde 1978, River en Mar del Plata
        </h1>
        <div className="mt-4 h-1 w-14 bg-river-red" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Fundada el 17 de enero de 1978, la Filial Enzo Francescoli lleva más
          de cuatro décadas acercando a los hinchas de Mar del Plata y la zona
          al mundo riverplatense.
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {DATOS.map((dato) => (
            <div
              key={dato.etiqueta}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#141414] p-5"
            >
              <dt className="text-xs leading-relaxed text-white/60">{dato.etiqueta}</dt>
              <dd className="order-first font-display text-4xl text-river-red">
                {dato.valor}
              </dd>
            </div>
          ))}
        </dl>

        <ol className="relative mt-14 space-y-10 border-l border-white/10 pl-6 sm:pl-10">
          {HITOS.map((hito) => (
            <li key={hito.anio} className="relative">
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full sm:-left-[47px] ${
                  hito.destacado ? "bg-river-red ring-4 ring-river-red/25" : "bg-white/40"
                }`}
                aria-hidden
              />
              <p className="font-display text-2xl text-river-red">{hito.anio}</p>
              <h2 className="mt-1 font-display text-lg uppercase leading-tight text-white sm:text-xl">
                {hito.titulo}
              </h2>
              <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-white/65 sm:text-base">
                {hito.parrafos.map((parrafo) => (
                  <p key={parrafo.slice(0, 32)}>{parrafo}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
            Galería
          </p>
          <h2 className="mt-3 font-display text-2xl uppercase text-white sm:text-4xl">
            Nuestra historia en fotos
          </h2>
          <div className="mt-4 h-1 w-14 bg-river-red" />

          <div className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3">
            {FOTOS.map((foto) => (
              <figure
                key={foto.src}
                className="mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#141414] sm:mb-4"
              >
                <Image
                  src={`/images/historia/${foto.src}`}
                  alt={foto.alt}
                  width={foto.width}
                  height={foto.height}
                  sizes="(min-width: 1024px) 360px, 50vw"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </div>

        <aside className="mt-16 rounded-2xl border border-river-red/40 bg-river-red/5 p-5 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
            Hoy
          </p>
          <h2 className="mt-3 font-display text-2xl uppercase text-white sm:text-3xl">
            Todos somos River
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-white/75 sm:text-base">
            <p>
              El objetivo de la Filial Enzo Francescoli es construir cada día un
              River más federal, que acerque a los socios e hinchas de Mar del
              Plata y la zona al mundo riverplatense.
            </p>
            <p>
              Hoy la preside Stella Maris Elías, que acompañó a Rodolfo
              D’Onofrio desde su primer mandato como representante de socios. El
              deseo de ella y su grupo de trabajo es ampliar la filial, que ya
              tiene un café, y nos atrevemos a soñar con una segunda planta.
            </p>
          </div>
        </aside>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/proximos-viajes"
            className="inline-flex h-12 items-center justify-center rounded-md bg-river-red px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
          >
            Ver próximos viajes
          </Link>
          <Link
            href="/#sede"
            className="inline-flex h-12 items-center justify-center rounded-md px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/30 transition hover:bg-white/5"
          >
            Visitá la sede
          </Link>
        </div>
      </div>
    </section>
  );
}
