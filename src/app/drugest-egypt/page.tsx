import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconFlask } from "@/components/icons";
import { pipelineProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Drugest Egypt",
  description:
    "Drugest Egypt, our sister company founded in 2013, is registering a new generation of veterinary formulations.",
};

export default function DrugestEgyptPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sister company"
        title="Drugest Egypt — a new generation in registration."
        description="Founded in 2013, Drugest Egypt is registering a further catalog of veterinary formulations. The products below are in the registration pipeline and not yet available."
      />

      <Container className="py-14 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          {pipelineProducts.length} products under registration
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {pipelineProducts.map((product) => (
            <div
              key={product.name}
              className="flex gap-4 rounded-xl border border-dashed border-border bg-surface p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                <IconFlask className="h-5 w-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold text-ink">{product.name}</h3>
                  <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-soft">
                    In registration
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-ink-soft">{product.form}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.composition}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
