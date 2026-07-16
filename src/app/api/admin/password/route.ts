import { NextResponse, type NextRequest } from "next/server";
import {
  buildAdminSessionCookieValue,
  getAdminRecord,
  getAdminSessionCookieName,
  updateAdminPassword,
  verifyAdminSessionToken,
} from "@/lib/news";

export async function POST(request: NextRequest) {
  const sessionToken = request.cookies.get(getAdminSessionCookieName())?.value;
  const isValidSession = await verifyAdminSessionToken(sessionToken);

  if (!isValidSession) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const currentPassword = String(body.currentPassword ?? "");
  const newPassword = String(body.newPassword ?? "");

  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { ok: false, error: "Current password and new password are required." },
      { status: 400 }
    );
  }

  try {
    const updatedAdmin = await updateAdminPassword(currentPassword, newPassword);
    const response = NextResponse.json({ ok: true, email: updatedAdmin.email });

    response.cookies.set({
      name: getAdminSessionCookieName(),
      value: await buildAdminSessionCookieValue(await getAdminRecord()),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Password update failed.",
      },
      { status: 400 }
    );
  }
}