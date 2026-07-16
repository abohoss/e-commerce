import { NextResponse, type NextRequest } from "next/server";
import {
  addNewsPost,
  getAdminSessionCookieName,
  getNewsPosts,
  verifyAdminSessionToken,
} from "@/lib/news";

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get(getAdminSessionCookieName())?.value;
  const isValid = await verifyAdminSessionToken(sessionToken);

  if (!isValid) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const posts = await getNewsPosts();
  return NextResponse.json({ ok: true, posts });
}

export async function POST(request: NextRequest) {
  const sessionToken = request.cookies.get(getAdminSessionCookieName())?.value;
  const isValid = await verifyAdminSessionToken(sessionToken);

  if (!isValid) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const title = String(body.title ?? "").trim();
  const summary = String(body.summary ?? "").trim();
  const content = String(body.body ?? "").trim();

  if (!title || !summary || !content) {
    return NextResponse.json(
      { ok: false, error: "Title, summary and body are required." },
      { status: 400 }
    );
  }

  const nextPost = await addNewsPost({ title, summary, body: content });
  return NextResponse.json({ ok: true, post: nextPost });
}