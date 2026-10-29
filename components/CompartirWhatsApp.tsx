"use client";

import { sendGTMEvent } from "@next/third-parties/google";

type Props = {
  titulo: string;
  url: string;
};

export function CompartirWhatsApp({ titulo, url }: Props) {
  const href = `https://wa.me/?text=${encodeURIComponent(`${titulo} 👉 ${url}`)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => sendGTMEvent({ event: "share_whatsapp", url })}
      className="inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-river-red px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-red-700"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.44-9.44 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.68C5.78.68.68 5.78.68 12.04c0 2 .52 3.96 1.52 5.68L.58 23.32l5.72-1.5a11.33 11.33 0 0 0 5.74 1.47h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.03-1.18-5.89-3.32-8.03" />
      </svg>
      Compartir por WhatsApp
    </a>
  );
}
