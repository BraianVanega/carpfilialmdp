import { NextResponse } from "next/server";
import { getPartidosFromFootballApi } from "@/lib/partidos";

export const revalidate = 21600;

export async function GET() {
  const partidos = await getPartidosFromFootballApi();
  return NextResponse.json(partidos);
}
