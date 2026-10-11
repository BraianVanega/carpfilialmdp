import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Oswald } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { GtmPageviewTracker } from "@/components/GtmPageviewTracker";
import { Navbar } from "@/components/Navbar";
import { ProximamenteProvider } from "@/components/ProximamenteModal";
import { getInstitucional } from "@/lib/content";
import { getPartidos } from "@/lib/partidos";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Filial Enzo Francescoli | River Plate Mar del Plata",
    template: "%s | Filial Enzo Francescoli",
  },
  description:
    "Filial oficial de River Plate en Mar del Plata. Viajes al Monumental, transmisiones de cada partido y comunidad millonaria. Visitanos en Deán Funes 2221.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Filial Enzo Francescoli",
    title: "Filial Enzo Francescoli | River Plate Mar del Plata",
    description:
      "Filial oficial de River Plate en Mar del Plata. Historia, comunidad y próximas salidas al Monumental.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filial Enzo Francescoli | River Plate Mar del Plata",
    description:
      "Filial oficial de River Plate en Mar del Plata. Historia, comunidad y próximas salidas al Monumental.",
  },
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const [institucional, partidos] = await Promise.all([
    getInstitucional(),
    getPartidos(),
  ]);

  return (
    <html
      lang="es"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
        <Suspense fallback={null}>
          <GtmPageviewTracker />
        </Suspense>
        <ProximamenteProvider>
          <Navbar proximo={partidos.find((partido) => partido.esLocal)} />
          <main className="flex-1">{children}</main>
          <Footer sede={institucional.sede} />
        </ProximamenteProvider>
      </body>
    </html>
  );
}
