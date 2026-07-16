import { NextResponse, type NextRequest } from "next/server";
import {
  buildAdminSessionCookieValue,
  getAdminRecord,
  getAdminSessionCookieName,
  verifyAdminCredentials,
} from "@/lib/news";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ ok: false, error: "Email and password are required." }, { status: 400 });
  }

  const isValid = await verifyAdminCredentials(email, password);
  if (!isValid) {
    return NextResponse.json({ ok: false, error: "Invalid credentials." }, { status: 401 });
  }

  const admin = await getAdminRecord();
  const response = NextResponse.json({ ok: true, email: admin.email });

  response.cookies.set({
    name: getAdminSessionCookieName(),
    value: await buildAdminSessionCookieValue(admin),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}