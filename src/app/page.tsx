import Link from "next/link";
import { Container } from "@/components/Container";
import { CategoryBadge } from "@/components/CategoryBadge";
import {
  IconArrowRight,
  IconCattle,
  IconFlask,
  IconPoultry,
  IconShield,
} from "@/components/icons";
import { getProductsByCategory, products } from "@/lib/products";

const featured = [
  products.find((p) => p.slug === "drumectin-injection")!,
  products.find((p) => p.slug === "coccidest")!,
  products.find((p) => p.slug === "tylotest")!,
];

export default function Home() {
  const largeAnimalCount = getProductsByCategory("large-animals").length;
  const poultryCount = getProductsByCategory("poultry").length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-900">
        <svg className="pointer-events-none absolute inset-0 h-full w-full text-teal-100 opacity-[0.07]" aria-hidden="true">
          <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-100/70">
              Veterinary pharmaceuticals · Cairo, Egypt · Est. 2004
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Registered medicines for the animals Egypt raises.
            </h1>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-teal-100/80">
              Drugest formulates and markets injectable, oral and water-soluble
              veterinary medicines for cattle, sheep, goats, horses and poultry —
              toll-manufactured under GMP standards by Arabcomed and Arab Caps.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-100"
              >
                Browse the catalog
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-100/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to our team
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-teal-100/15 pt-6 font-mono">
              <div>
                <dt className="text-xs uppercase tracking-wide text-teal-100/60">Formulations</dt>
                <dd className="mt-1 text-2xl font-medium text-white">
                  {largeAnimalCount + poultryCount}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-teal-100/60">Founded</dt>
                <dd className="mt-1 text-2xl font-medium text-white">2004</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-teal-100/60">Manufacturing</dt>
                <dd className="mt-1 text-2xl font-medium text-white">GMP</dd>
              </div>
            </dl>
          </div>

          {/* Label-card stack visual */}
          <div className="relative mx-auto hidden w-full max-w-sm sm:block lg:mx-0">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/5" aria-hidden="true" />
            <div className="relative -rotate-3 rounded-xl border border-white/10 bg-surface/95 p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between">
                <CategoryBadge category="poultry" />
                <IconFlask className="h-4 w-4 text-ink-soft/60" />
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-ink">Coccidest</p>
              <p className="font-mono text-xs text-ink-soft">Toltrazuril 25mg / ml</p>
              <div className="mt-4 h-px bg-border" />
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wide text-teal-700">
                Withdrawal time
              </p>
              <p className="text-sm text-ink-soft">21 days</p>
            </div>
            <div className="relative -mt-16 ml-10 rotate-2 rounded-xl border border-white/10 bg-surface p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between">
                <CategoryBadge category="large-animals" />
                <IconFlask className="h-4 w-4 text-ink-soft/60" />
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-ink">Drumectin Plus</p>
              <p className="font-mono text-xs text-ink-soft">Ivermectin / Clorsulon</p>
              <div className="mt-4 h-px bg-border" />
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wide text-teal-700">
                Withdrawal time
              </p>
              <p className="text-sm text-ink-soft">Meat, 35 days</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
              The catalog
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Two herds, one standard of manufacturing.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Link
              href="/products/large-animals"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-teal-500"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <IconCattle className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">Large Animals</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Injectable antiparasitics, antibiotics and metabolic support for
                  cattle, buffalo, sheep, goats and horses.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-teal-700">
                {largeAnimalCount} formulations
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/products/poultry"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-amber-500"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <IconPoultry className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">Poultry</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Water-soluble antibiotics and anticoccidials for broilers, layers
                  and turkeys, dosed through drinking water or feed.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-amber-700">
                {poultryCount} formulations
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Quality strip */}
      <section className="border-y border-border bg-surface py-14">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <IconShield className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
              Toll-manufactured under GMP.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Every formulation is produced on our behalf by two GMP-certified
              partners, then registered with the Egyptian Ministry of Health
              before it reaches a single farm.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-5">
              <p className="font-display font-semibold text-ink">Arabcomed</p>
              <p className="mt-1 text-sm text-ink-soft">
                Arab Company for Medical Products — injectable and oral
                solutions.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="font-display font-semibold text-ink">Arab Caps</p>
              <p className="mt-1 text-sm text-ink-soft">
                Arab Company for Gelatinous &amp; Pharmaceutical Products —
                powders and premixes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
                From the label
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                A few formulations vets reach for.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
            >
              View full catalog
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {featured.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.category}/${product.slug}`}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-teal-500"
              >
                <CategoryBadge category={product.category} />
                <p className="mt-3 font-display text-lg font-semibold text-ink">{product.name}</p>
                <p className="mt-1 font-mono text-xs text-ink-soft">{product.activeIngredient}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-amber-900 py-16">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Sourcing for a clinic, farm or distributor?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-amber-100/85">
              Our team can confirm registration status, availability and pack
              sizes for any formulation in the catalog.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-amber-900 hover:bg-amber-100"
          >
            Contact Drugest
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
