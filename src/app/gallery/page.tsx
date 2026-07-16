import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconBottle, IconFlask, IconSachet, IconShield, IconVial } from "@/components/icons";

export const metadata: Metadata = {
  title: "Quality & Manufacturing",
  description:
    "How a Drugest formulation moves from active ingredient to a GMP-certified pack — sourcing, formulation, manufacturing and registration.",
};

const steps = [
  {
    icon: IconFlask,
    title: "Formulation",
    body: "Active ingredients and dose strengths are set to match documented veterinary need in the Egyptian market, not adapted from a generic template.",
  },
  {
    icon: IconVial,
    title: "GMP manufacturing",
    body: "Every batch is toll-manufactured by Arabcomed or Arab Caps, both certified to Good Manufacturing Practice standards.",
  },
  {
    icon: IconShield,
    title: "Registration",
    body: "Formulations are registered with the Egyptian Ministry of Health before distribution, with composition and dosing fixed on the label.",
  },
  {
    icon: IconSachet,
    title: "Packaging & dispatch",
    body: "Injectable, oral and water-soluble-powder formats are packed to the sizes each product's label specifies, then dispatched to distributors and clinics.",
  },
];

const forms = [
  { icon: IconVial, label: "Injectable solutions", body: "Glass vials from 10 ml to 500 ml, for subcutaneous, intramuscular or intravenous use." },
  { icon: IconBottle, label: "Oral solutions & suspensions", body: "Dosed by mouth or drench, packed in plastic containers up to 5 litres." },
  { icon: IconSachet, label: "Water-soluble powders", body: "Dissolved in drinking water or mixed into feed, packed in HDPE bags and jars." },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality"
        title="From active ingredient to a registered label."
        description="Drugest doesn't operate its own production line — every formulation is toll-manufactured by two GMP-certified partners, then registered before it reaches a farm or clinic."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-border bg-surface p-5">
              <span className="font-mono text-xs text-ink-soft/60">0{i + 1}</span>
              <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl font-semibold text-ink">Dosage forms we manufacture</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {forms.map((form) => (
              <div key={form.label} className="rounded-xl border border-border bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <form.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display font-semibold text-ink">{form.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{form.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
