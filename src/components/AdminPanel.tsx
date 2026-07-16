"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { IconArrowRight, IconCheck, IconFlask, IconShield } from "./icons";

type NewsPost = {
  id: string;
  title: string;
  summary: string;
  body: string;
  publishedAt: string;
  updatedAt: string;
};

type Mode = "loading" | "signed-out" | "signed-in";

const ADMIN_EMAIL = "info@drugest.net";

export function AdminPanel() {
  const [mode, setMode] = useState<Mode>("loading");
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsSummary, setNewsSummary] = useState("");
  const [newsBody, setNewsBody] = useState("");

  const editingPost = posts.find((post) => post.id === editingPostId) ?? null;

  useEffect(() => {
    async function loadSession() {
      try {
        const response = await fetch("/api/admin/me", { cache: "no-store" });
        if (!response.ok) {
          setMode("signed-out");
          return;
        }

        const data = (await response.json()) as { email?: string };
        if (data.email) {
          setEmail(data.email);
        }

        setMode("signed-in");
        await loadPosts();
      } catch {
        setMode("signed-out");
      }
    }

    void loadSession();
  }, []);

  async function loadPosts() {
    const response = await fetch("/api/admin/news", { cache: "no-store" });
    if (!response.ok) {
      return;
    }

    const data = (await response.json()) as { posts?: NewsPost[] };
    setPosts(data.posts ?? []);
  }

  function resetEditor() {
    setEditingPostId(null);
    setNewsTitle("");
    setNewsSummary("");
    setNewsBody("");
  }

  function beginEdit(post: NewsPost) {
    setStatusMessage(null);
    setErrorMessage(null);
    setEditingPostId(post.id);
    setNewsTitle(post.title);
    setNewsSummary(post.summary);
    setNewsBody(post.body);
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: loginPassword }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string; email?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Login failed.");
      }

      setStatusMessage("Signed in. You can publish news now.");
      setMode("signed-in");
      setLoginPassword("");
      await loadPosts();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Login failed.");
      setMode("signed-out");
    } finally {
      setIsBusy(false);
    }
  }

  async function handlePublish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      const endpoint = editingPostId ? `/api/admin/news/${editingPostId}` : "/api/admin/news";
      const response = await fetch(endpoint, {
        method: editingPostId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newsTitle,
          summary: newsSummary,
          body: newsBody,
        }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || (editingPostId ? "News could not be updated." : "News could not be published."));
      }

      resetEditor();
      setStatusMessage(editingPostId ? "News updated successfully." : "News published successfully.");
      await loadPosts();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : editingPostId
            ? "News could not be updated."
            : "News could not be published."
      );
    } finally {
      setIsBusy(false);
    }
  }

  async function handleDelete(postId: string) {
    const confirmed = window.confirm("Delete this news post?");
    if (!confirmed) {
      return;
    }

    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/admin/news/${postId}`, {
        method: "DELETE",
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "News could not be deleted.");
      }

      if (editingPostId === postId) {
        resetEditor();
      }

      setStatusMessage("News deleted successfully.");
      await loadPosts();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "News could not be deleted.");
    } finally {
      setIsBusy(false);
    }
  }

  async function handlePasswordUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirmation do not match.");
      setIsBusy(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Password could not be updated.");
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setStatusMessage("Password updated successfully.");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Password could not be updated.");
    } finally {
      setIsBusy(false);
    }
  }

  async function handleLogout() {
    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setMode("signed-out");
      setPosts([]);
      resetEditor();
    } finally {
      setIsBusy(false);
    }
  }

  if (mode === "loading") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-ink-soft">
        Loading admin panel...
      </div>
    );
  }

  if (mode === "signed-out") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-ink/5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
              <IconShield className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">Admin login</p>
              <p className="text-sm text-ink-soft">Use info@drugest.net to access the news panel.</p>
            </div>
          </div>

          <form className="mt-6 flex flex-col gap-4" onSubmit={handleLogin}>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Email
              <input
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                type="email"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Password
              <input
                required
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                type="password"
                autoComplete="current-password"
              />
            </label>

            {errorMessage && (
              <p className="rounded-lg bg-amber-100 px-3.5 py-2.5 text-sm text-amber-700">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isBusy}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900 disabled:opacity-60"
            >
              {isBusy ? "Signing in..." : "Sign in"}
              <IconArrowRight className="h-4 w-4" />
            </button>
          </form>
        </section>

        <aside className="rounded-3xl border border-border bg-teal-900 p-6 text-teal-100 shadow-sm shadow-ink/5">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-100/70">
            Admin notes
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white">
            Publish company updates from one place.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-teal-100/80">
            News published here appears on the public News page immediately.
            You can also change the admin password in the settings area after
            you sign in.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-teal-100/10 bg-white/5 p-4">
            <IconShield className="h-5 w-5 text-amber-100" />
            <div>
              <p className="text-sm font-semibold text-white">Default admin email</p>
              <p className="text-sm text-teal-100/80">info@drugest.net</p>
            </div>
          </div>
        </aside>
      </div>
    );
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="space-y-6">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-ink/5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
                Admin panel
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                {editingPost ? "Edit news for the public site." : "Publish news for the public site."}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Entries you publish here will appear on the News page.
              </p>
            </div>
            <button
              type="button"
              onClick={() => void handleLogout()}
              disabled={isBusy}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60"
            >
              Sign out
            </button>
          </div>

          {statusMessage && (
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-teal-100/60 px-4 py-3 text-sm text-teal-900">
              <IconCheck className="h-5 w-5" />
              {statusMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mt-5 rounded-xl bg-amber-100 px-4 py-3 text-sm text-amber-800">
              {errorMessage}
            </div>
          )}

          <form className="mt-6 flex flex-col gap-4" onSubmit={handlePublish}>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Title
              <input
                required
                value={newsTitle}
                onChange={(event) => setNewsTitle(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                placeholder="New packaging update"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Summary
              <input
                required
                value={newsSummary}
                onChange={(event) => setNewsSummary(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                placeholder="Short summary shown in the feed"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Body
              <textarea
                required
                value={newsBody}
                onChange={(event) => setNewsBody(event.target.value)}
                rows={7}
                className="resize-y rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                placeholder="Add the full announcement text. Paragraph breaks are preserved."
              />
            </label>

            <button
              type="submit"
              disabled={isBusy}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900 disabled:opacity-60"
            >
              <IconFlask className="h-4 w-4" />
              {isBusy ? (editingPost ? "Updating..." : "Publishing...") : editingPost ? "Update news" : "Publish news"}
            </button>
            {editingPost && (
              <button
                type="button"
                onClick={resetEditor}
                disabled={isBusy}
                className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60"
              >
                Cancel edit
              </button>
            )}
          </form>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-ink/5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <IconFlask className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">Published items</p>
              <p className="text-sm text-ink-soft">Recent announcements stored by the admin panel.</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            {posts.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border px-4 py-6 text-sm text-ink-soft">
                Nothing has been published yet.
              </p>
            ) : (
              posts.map((post) => (
                <article key={post.id} className="rounded-2xl border border-border p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
                    <span className="font-mono uppercase tracking-[0.18em] text-teal-700">
                      {new Intl.DateTimeFormat("en", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(post.publishedAt))}
                    </span>
                    <span>Saved</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{post.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{post.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => beginEdit(post)}
                      disabled={isBusy}
                      className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDelete(post.id)}
                      disabled={isBusy}
                      className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 transition-colors hover:bg-amber-100 disabled:opacity-60"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <aside className="space-y-6">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-ink/5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
              <IconShield className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">Settings</p>
              <p className="text-sm text-ink-soft">Change the admin password here.</p>
            </div>
          </div>

          <form className="mt-6 flex flex-col gap-4" onSubmit={handlePasswordUpdate}>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Current password
              <input
                required
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                type="password"
                autoComplete="current-password"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              New password
              <input
                required
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                type="password"
                autoComplete="new-password"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
              Confirm new password
              <input
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                type="password"
                autoComplete="new-password"
              />
            </label>

            <button
              type="submit"
              disabled={isBusy}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-100 disabled:opacity-60"
            >
              <IconShield className="h-4 w-4" />
              {isBusy ? "Updating..." : "Update password"}
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-border bg-teal-900 p-6 text-teal-100 shadow-sm shadow-ink/5">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-100/70">
            Public result
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold text-white">
            The News page reflects whatever you publish here.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-teal-100/80">
            Visitors see the latest announcements on the public site without
            needing to visit the admin panel.
          </p>
          <Link
            href="/news"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-100"
          >
            View public news
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </div>
  );
}