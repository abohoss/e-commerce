import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconArrowRight, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Drugest Pharmaceuticals Company — an Egyptian shareholder company founded in 2004, registering veterinary medicines for large animals and poultry.",
};

const founders = [
  "Multi Pharma Company",
  "Dr. Fouad Mohamed El Lafy",
  "Dr. Abdel Karim Mohamed Hatata",
  "Dr. Mohamed Faisal Kamel",
];

const timeline = [
  {
    year: "2004",
    title: "Company founded",
    body: "Drugest was established on 3 June 2004 as an Egyptian shareholder company, combining Multi Pharma Company with three veterinary and pharmaceutical specialists.",
  },
  {
    year: "2004–present",
    title: "Catalog built out",
    body: "Registration of veterinary products began and has grown to 23 formulations across large-animal and poultry medicine, chosen to match the needs of Egypt's veterinary market.",
  },
  {
    year: "2013",
    title: "Sister company established",
    body: "A sister company was founded to register a further generation of veterinary formulations, with 12 products currently in the registration pipeline.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Drugest"
        title="An Egyptian shareholder company, built on veterinary expertise."
        description="Founded in Cairo in 2004 by a group combining pharmaceutical industry experience with veterinary medicine, Drugest registers and markets medicines for the animals that keep Egyptian agriculture running."
      >
        <Link
          href="/about/ar"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
        >
          اقرأ هذه الصفحة بالعربية
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <Container className="grid gap-14 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">Company profile</h2>
          <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
            <p>
              Drugest Pharmaceuticals Company was established as a shareholder
              company bringing together a number of specialists in the
              pharmaceutical and veterinary medicine fields.
            </p>
            <p>
              The company started with a paid capital of EGP 3.5 million
              against an authorized capital of EGP 15 million, and began by
              registering veterinary products — a catalog that has since grown
              to 23 formulations across large animals and poultry, each chosen
              to match the needs of the veterinary market in Egypt and North
              Africa.
            </p>
            <p>
              All products are toll-manufactured at the Arab Company for
              Medical Products (Arabcomed) and the Arab Company for Gelatinous
              &amp; Pharmaceutical Products (Arab Caps) — both applying high
              GMP standards and well known in the pharmaceutical sector for
              their competence and efficiency.
            </p>
          </div>

          <h2 className="mt-10 font-display text-xl font-semibold text-ink">Founding group</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {founders.map((name) => (
              <li
                key={name}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-ink"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2 text-teal-700">
            <IconShield className="h-5 w-5" />
            <p className="font-mono text-xs font-medium uppercase tracking-wide">Timeline</p>
          </div>
          <ol className="mt-5 flex flex-col gap-6">
            {timeline.map((item) => (
              <li key={item.year} className="border-l-2 border-teal-100 pl-4">
                <p className="font-mono text-sm font-semibold text-teal-700">{item.year}</p>
                <p className="mt-1 font-display font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </>
  );
}
