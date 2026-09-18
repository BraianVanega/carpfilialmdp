import Image from "next/image";
import Link from "next/link";
import type { Sede } from "@/types/cms";

type Props = {
  sede: Sede;
};

export function Footer({ sede }: Props) {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-fef.png"
              alt="Filial Enzo Francescoli"
              width={56}
              height={56}
            />
            <div>
              <p className="font-display text-lg uppercase tracking-wide text-white">
                Filial Enzo Francescoli
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                Filial oficial · Mar del Plata
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Comunidad millonaria de Mar del Plata. Viajes al Monumental, peña en
            la sede y un lugar para vivir a River en familia.
          </p>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.16em] text-white">
            Navegación
          </p>
          <div className="mt-3 h-0.5 w-8 bg-river-red" />
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>
              <Link href="/#identidad" className="hover:text-white">
                Sobre la filial
              </Link>
            </li>
            <li>
              <Link href="/proximos-viajes" className="hover:text-white">
                Próximos viajes
              </Link>
            </li>
            <li>
              <Link href="/#sede" className="hover:text-white">
                Sede
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.16em] text-white">
            Contacto
          </p>
          <div className="mt-3 h-0.5 w-8 bg-river-red" />
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>{sede.direccion}</li>
            <li>{sede.ciudad}</li>
            <li>
              <a href={`mailto:${sede.email}`} className="hover:text-white">
                {sede.email}
              </a>
            </li>
            <li>
              <a
                href={sede.instagram}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] uppercase tracking-[0.14em] text-white/40">
        © {new Date().getFullYear()} Filial Enzo Francescoli. Todos los derechos reservados.
      </div>
    </footer>
  );
}
