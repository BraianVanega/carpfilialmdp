import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Filial Enzo Francescoli · Mar del Plata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/images/logo-fef.png")
  );
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#090909",
        }}
      >
        <img src={src} width={360} height={360} alt="" />
        <div
          style={{
            marginTop: 28,
            color: "#ffffff",
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Filial Enzo Francescoli
        </div>
        <div
          style={{
            marginTop: 8,
            color: "#e10600",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Mar del Plata · Oficial
        </div>
      </div>
    ),
    { ...size }
  );
}
