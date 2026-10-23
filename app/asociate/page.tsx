import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const RIVER_ID_URL = "https://www.riverid.com.ar/";

export const metadata: Metadata = {
  title: "Cómo asociarte a River con River ID",
  description:
    "Registrate en River ID como hincha o asociate a River, sumá a los menores, armá tu grupo de cancha y reempadronate en la Filial Enzo Francescoli de Mar del Plata.",
  alternates: { canonical: "/asociate" },
  openGraph: {
    title: "Cómo asociarte a River con River ID | Filial Enzo Francescoli",
    description:
      "River ID paso a paso: asociarte, menores, grupo de cancha y reempadronamiento en la filial.",
    url: "/asociate",
  },
  twitter: {
    title: "Cómo asociarte a River con River ID | Filial Enzo Francescoli",
    description:
      "River ID paso a paso: asociarte, menores, grupo de cancha y reempadronamiento en la filial.",
  },
};

const MENORES = [
  {
    titulo: "Menores de 16 años",
    descripcion:
      "El padre, la madre o el representante legal puede incorporarlos a su cuenta como «Menores a cargo». Luego, hay que seguir los pasos que indique River ID para completar el alta del menor.",
  },
  {
    titulo: "De 16 a 17 años",
    descripcion:
      "Deben revisar el procedimiento de registro y asociación habilitado para su edad. River contempla categorías de socio menor, pero conviene verificar qué validaciones o autorizaciones solicita la plataforma. En la página oficial de asociación de River, seleccioná MENOR para ver las opciones disponibles.",
  },
];

const GRUPO_DE_CANCHA = [
  {
    titulo: "Cada persona debe tener su cuenta",
    descripcion:
      "Los integrantes tienen que estar registrados en River ID. En el caso de menores, se debe utilizar el procedimiento correspondiente a su edad.",
  },
  {
    titulo: "Vinculá a los integrantes",
    descripcion:
      "Entrá en la sección Grupo de cancha y seguí las opciones para agregar o aceptar a los otros integrantes. Si administrás el perfil de un menor, revisá cómo permite vincularlo el sistema.",
  },
  {
    titulo: "Comprá las entradas",
    descripcion:
      "Cuando se habilite la venta para tu categoría, seleccioná a los integrantes para quienes quieras comprar. La cantidad de entradas permitida y las categorías que podés incluir dependen de las reglas de esa venta.",
  },
];

const REEMPADRONAMIENTO = [
  {
    titulo: "Ingresá a tu usuario",
    descripcion: "Cada integrante entra con su propia cuenta de River ID.",
  },
  {
    titulo: "Buscá «Filiales Oficiales»",
    descripcion:
      "Dentro de la plataforma, ingresá a esa sección o a la opción que el sistema tenga habilitada para las filiales.",
  },
  {
    titulo: "Seleccioná tu filial",
    descripcion:
      "Buscá y seleccioná la filial a la que pertenecés, verificando que sea la correcta.",
  },
  {
    titulo: "Confirmá la incorporación",
    descripcion:
      "Completá los pasos que indique el sistema. Una vez incorporado correctamente, quedarás registrado como integrante de esa filial.",
  },
];

function Encabezado({ etiqueta, titulo }: { etiqueta: string; titulo: string }) {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
        {etiqueta}
      </p>
      <h2 className="mt-3 font-display text-2xl uppercase text-white sm:text-4xl">
        {titulo}
      </h2>
      <div className="mt-4 h-1 w-14 bg-river-red" />
    </>
  );
}

function Pasos({ pasos }: { pasos: { titulo: string; descripcion: string }[] }) {
  return (
    <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pasos.map((paso, index) => (
        <li key={paso.titulo} className="rounded-2xl border border-white/10 bg-[#141414] p-5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-river-red/15 font-display text-lg text-river-red">
            {index + 1}
          </span>
          <h3 className="mt-4 font-display text-lg uppercase leading-tight text-white">
            {paso.titulo}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{paso.descripcion}</p>
        </li>
      ))}
    </ol>
  );
}

function Importante({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-6 rounded-2xl border border-river-red/40 bg-river-red/5 p-5 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
        Importante
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{children}</p>
    </aside>
  );
}

export default function AsociatePage() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-river-red">
          Asociate
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase text-white sm:text-5xl">
          Cómo asociarte con River ID
        </h1>
        <div className="mt-4 h-1 w-14 bg-river-red" />
        <div className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-white/70 sm:text-base">
          <p>
            River ID es la plataforma oficial de River Plate donde podés
            registrarte como hincha (no socio), asociarte, pagar cuotas,
            gestionar entradas y vincularte con una filial.
          </p>
          <p>
            Podés tener una cuenta gratuita como hincha o elegir una categoría
            paga, como Somos River o socio Activo Simple o Pleno. Las opciones
            para menores son diferentes.
          </p>
        </div>

        <div className="mt-16">
          <Encabezado etiqueta="Menores" titulo="Registro y asociación de menores" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Los menores también pueden tener su registro y asociarse al club. El
            procedimiento depende de la edad.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {MENORES.map((item) => (
              <li key={item.titulo} className="rounded-2xl border border-white/10 bg-[#141414] p-5">
                <h3 className="font-display text-lg uppercase leading-tight text-white">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.descripcion}</p>
              </li>
            ))}
          </ul>
          <Importante>
            Ser menor no significa que siempre se pueda ingresar gratis a la
            cancha. Las condiciones dependen de la edad, la categoría y las
            reglas de acceso de cada partido. Para menores de 7 años, por
            ejemplo, River indica que los socios ingresan gratuitamente con su
            Carnet Único y comparten butaca con el adulto a cargo; los no socios
            necesitan entrada.
          </Importante>
        </div>

        <div className="mt-16">
          <Encabezado etiqueta="Entradas en grupo" titulo="Grupo de cancha" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            El grupo de cancha permite vincular tu usuario con los de familiares
            o amigos para gestionar entradas para varias personas, cuando las
            condiciones de venta lo permiten.
          </p>
          <Pasos pasos={GRUPO_DE_CANCHA} />
          <Importante>
            Formar un grupo no significa que todos puedan comprar en cualquier
            turno ni que tengan una entrada asegurada. Hay que respetar la
            prioridad de venta y los límites que establezca River para cada
            partido.
          </Importante>
        </div>

        <div className="mt-16">
          <Encabezado etiqueta="Filial" titulo="Cómo reempadronarte en una filial oficial" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Reempadronarse significa registrar oficialmente en River ID que
            pertenecés a esa filial.
          </p>
          <Pasos pasos={REEMPADRONAMIENTO} />
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href={RIVER_ID_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-river-red px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
          >
            Ir a River ID
          </a>
          <Link
            href="/entradas"
            className="inline-flex h-12 items-center justify-center rounded-md px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/30 transition hover:bg-white/5"
          >
            Cómo sacar entradas
          </Link>
        </div>
      </div>
    </section>
  );
}
