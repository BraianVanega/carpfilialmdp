"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProximamente } from "@/components/ProximamenteModal";
import { TickerProximoViaje } from "@/components/TickerProximoViaje";
import type { Partido } from "@/lib/partidos";

const NAV_LINKS = [
  { href: "/#identidad", label: "La filial" },
  { href: "/#que-hacemos", label: "Qué hacemos" },
  { href: "/proximos-viajes", label: "Viajes" },
  { href: "/#sede", label: "Sede" },
  { href: "/#contacto", label: "Contacto" },
];

type Props = {
  proximo?: Partido;
};

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
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-fef.png"
              alt="Filial Enzo Francescoli"
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[11px] uppercase tracking-[0.22em] text-white">
                Filial Enzo Francescoli
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">
                Mar del Plata · Oficial
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openModal}
              className="hidden h-9 items-center rounded-md px-3 text-xs font-semibold uppercase tracking-wide text-white/80 ring-1 ring-white/20 transition hover:bg-white/5 sm:inline-flex"
            >
              Iniciar sesión
              <span className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-river-gold">
                Pronto
              </span>
            </button>
            <button
              type="button"
              onClick={openModal}
              className="hidden h-9 items-center rounded-md bg-river-red px-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-red-700 sm:inline-flex"
            >
              Asociate
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white ring-1 ring-white/20 lg:hidden"
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
          className="border-b border-white/10 bg-black px-4 py-4 lg:hidden"
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
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openModal();
              }}
              className="h-11 rounded-md text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/20"
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openModal();
              }}
              className="h-11 rounded-md bg-river-red text-xs font-semibold uppercase tracking-wide text-white"
            >
              Asociate
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
