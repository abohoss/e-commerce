import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconArrowRight, IconFlask } from "@/components/icons";
import { getNewsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements from Drugest Pharmaceuticals.",
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const newsPosts = await getNewsPosts();

  return (
    <>
      <PageHeader eyebrow="News" title="Announcements" />

      <Container className="py-16 sm:py-20">
        {newsPosts.length === 0 ? (
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
              <IconFlask className="h-7 w-7" />
            </span>
            <h2 className="mt-6 font-display text-xl font-semibold text-ink">
              Nothing published yet.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              News will appear here after the team publishes it from the admin
              panel. In the meantime, browse the catalog or email our office
              directly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-900"
              >
                Browse products
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
              >
                Contact us
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {newsPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-ink/5"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-teal-700">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-[0.7rem] text-teal-900">
                    <IconFlask className="h-3.5 w-3.5" />
                    {new Intl.DateTimeFormat("en", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(post.publishedAt))}
                  </span>
                  <span>Published by the admin panel</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
                  {post.summary}
                </p>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
                  {post.body
                    .split(/\n+/)
                    .filter((paragraph) => paragraph.trim().length > 0)
                    .map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
