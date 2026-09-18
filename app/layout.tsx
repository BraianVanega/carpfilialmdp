import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProximamenteProvider } from "@/components/ProximamenteModal";
import { getInstitucional } from "@/lib/content";
import { getPartidos } from "@/lib/partidos";
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
  title: {
    default: "Filial Enzo Francescoli | River Plate Mar del Plata",
    template: "%s | Filial Enzo Francescoli",
  },
  description:
    "Filial oficial de River Plate en Mar del Plata. Historia, sede, comunidad y próximas salidas al Monumental.",
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
        <ProximamenteProvider>
          <Navbar proximo={partidos[0]} />
          <main className="flex-1">{children}</main>
          <Footer sede={institucional.sede} />
        </ProximamenteProvider>
      </body>
    </html>
  );
}
