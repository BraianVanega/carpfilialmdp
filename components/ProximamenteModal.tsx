"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

type ModalContextValue = {
  open: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useProximamente() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useProximamente debe usarse dentro de ProximamenteProvider");
  }
  return ctx;
}

export function ProximamenteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/80 p-4 sm:items-center"
          role="presentation"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-river-red">
              Próximamente
            </p>
            <h2 id={titleId} className="font-display text-2xl uppercase leading-tight text-white">
              Muy pronto vas a poder registrarte
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Estamos preparando el registro propio y los viajes con beneficios
              exclusivos para socios de la filial. Mientras tanto, escribinos por
              WhatsApp o acercate a la sede.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-river-red px-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </ModalContext.Provider>
  );
}
