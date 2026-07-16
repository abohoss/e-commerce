import { NextResponse, type NextRequest } from "next/server";
import { getAdminRecord, getAdminSessionCookieName, verifyAdminSessionToken } from "@/lib/news";

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get(getAdminSessionCookieName())?.value;
  const isValid = await verifyAdminSessionToken(sessionToken);

  if (!isValid) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const admin = await getAdminRecord();
  return NextResponse.json({ ok: true, email: admin.email });
}