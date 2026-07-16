"use client";

import { useState, type FormEvent } from "react";
import { IconCheck } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-teal-100 bg-teal-100/40 p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white">
          <IconCheck className="h-5 w-5" />
        </span>
        <p className="font-display text-lg font-semibold text-ink">Message sent.</p>
        <p className="text-sm text-ink-soft">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-teal-700 hover:text-teal-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            type="text"
            className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Email
          <input
            required
            name="email"
            type="email"
            className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Phone <span className="font-normal text-ink-soft">(optional)</span>
        <input
          name="phone"
          type="tel"
          className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          placeholder="+20 ..."
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          placeholder="Tell us which formulation or species you're asking about..."
        />
      </label>

      {status === "error" && error && (
        <p className="rounded-lg bg-amber-100 px-3.5 py-2.5 text-sm text-amber-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
