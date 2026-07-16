import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconArrowRight, IconFlask } from "@/components/icons";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements from Drugest Pharmaceuticals.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="News" title="Announcements" />

      <Container className="py-20 sm:py-28">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <IconFlask className="h-7 w-7" />
          </span>
          <h2 className="mt-6 font-display text-xl font-semibold text-ink">
            Nothing published yet.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            We&apos;ll post registration updates and new formulations here as
            they happen. In the meantime, browse the catalog or get in touch
            with our team directly.
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
      </Container>
    </>
  );
}
