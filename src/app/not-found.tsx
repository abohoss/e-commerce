import Link from "next/link";
import { Container } from "@/components/Container";
import { IconArrowRight, IconFlask } from "@/components/icons";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center sm:py-32">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
        <IconFlask className="h-7 w-7" />
      </span>
      <p className="mt-6 font-mono text-sm uppercase tracking-wide text-ink-soft">Error 404</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
        This page isn&apos;t in the catalog.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-soft">
        The page you&apos;re looking for may have moved. Try the product catalog or head back home.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-900"
        >
          Back home
          <IconArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
        >
          Browse products
        </Link>
      </div>
    </Container>
  );
}
