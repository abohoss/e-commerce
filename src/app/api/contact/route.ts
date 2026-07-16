import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      error: "Please email info@drugest.net directly for inquiries.",
    },
    { status: 410 }
  );
}
