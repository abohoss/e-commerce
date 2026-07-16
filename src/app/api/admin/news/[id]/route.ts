import { NextResponse, type NextRequest } from "next/server";
import {
  deleteNewsPost,
  getAdminSessionCookieName,
  updateNewsPost,
  verifyAdminSessionToken,
} from "@/lib/news";

async function assertAdmin(request: NextRequest) {
  const sessionToken = request.cookies.get(getAdminSessionCookieName())?.value;
  const isValid = await verifyAdminSessionToken(sessionToken);

  if (!isValid) {
    return null;
  }

  return true;
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const isAdmin = await assertAdmin(request);
  if (!isAdmin) {
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

  const { id } = await context.params;
  try {
    const post = await updateNewsPost(id, { title, summary, body: content });
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Update failed." },
      { status: 404 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const isAdmin = await assertAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    await deleteNewsPost(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Delete failed." },
      { status: 404 }
    );
  }
}