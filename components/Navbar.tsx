"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProximamente } from "@/components/ProximamenteModal";
import { TickerProximoViaje } from "@/components/TickerProximoViaje";
import type { Partido } from "@/lib/partidos";

const NAV_LINKS = [
  { href: "/novedades", label: "Novedades" },
  { href: "/historia", label: "Historia" },
  { href: "/proximos-viajes", label: "Viajes" },
  { href: "/entradas", label: "Entradas" },
  { href: "/asociate", label: "Asociate" },
  { href: "/#contacto", label: "Contacto" },
];

type Props = {
  proximo?: Partido;
};

function BandaMuyPronto() {
  return (
    <span
      className="pointer-events-none absolute -inset-x-3 top-1/2 -translate-y-1/2 -rotate-[14deg] bg-black text-center text-[7px] font-bold uppercase leading-[11px] tracking-[0.24em] text-white shadow"
    >
      Muy pronto
    </span>
  );
}

export function Navbar({ proximo }: Props) {
  const [open, setOpen] = useState(false);
  const { open: openModal } = useProximamente();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {proximo ? <TickerProximoViaje partido={proximo} /> : null}

      <div className="border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-fef.png"
              alt="Filial Enzo Francescoli"
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
            <span className="hidden whitespace-nowrap leading-tight sm:block">
              <span className="block font-display text-[11px] uppercase tracking-[0.22em] text-white">
                Filial Enzo Francescoli
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">
                Mar del Plata · Oficial
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openModal}
              className="relative hidden h-9 items-center overflow-hidden whitespace-nowrap rounded-md bg-river-red px-4 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-red-700 sm:inline-flex"
            >
              Iniciar sesión
              <BandaMuyPronto />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white ring-1 ring-white/20 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-white/10 bg-black px-4 py-4 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white/80 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openModal();
            }}
            className="relative mt-4 h-11 w-full overflow-hidden rounded-md bg-river-red text-xs font-semibold uppercase tracking-wide text-white"
          >
            Iniciar sesión
            <BandaMuyPronto />
          </button>
        </div>
      ) : null}
    </header>
  );
}
