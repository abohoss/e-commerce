import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const company = String(body.company ?? "").trim(); // honeypot

  if (company) {
    // Bot filled the hidden field — pretend success, drop silently.
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.error(
      "[contact] FORMSPREE_ENDPOINT is not configured — inquiry was not delivered:",
      { name, email, message: message.slice(0, 200) }
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact form isn't fully set up yet — please email info@drugest.net directly for now.",
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: String(body.phone ?? "").trim(),
        message,
        _subject: `Website inquiry from ${name}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Formspree delivery failed:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Message could not be sent. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Formspree request threw:", err);
    return NextResponse.json(
      { ok: false, error: "Message could not be sent. Please try again or email us directly." },
      { status: 502 }
    );
  }
}
