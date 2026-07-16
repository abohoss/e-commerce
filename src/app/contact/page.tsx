import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { IconArrowRight, IconFax, IconMail, IconMapPin, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Drugest Pharmaceuticals — Nasr City, Cairo, and our El-Shawarby Street branch.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send your inquiry by email."
        description="For product questions, availability checks, or registration inquiries, email info@drugest.net and our team will reply as soon as possible."
      />

      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
            Email first
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            If you have any inquiry, write to info@drugest.net.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            The mailbox is monitored by the Drugest team. Include the product
            name, species, or registration topic in your message so we can route
            it quickly.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@drugest.net"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900"
            >
              Email info@drugest.net
              <IconArrowRight className="h-4 w-4" />
            </a>
            <span className="text-sm text-ink-soft">We usually respond within one business day.</span>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Scientific office</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                35A Emtidad Ramsis 2, Nasr City, Cairo, Egypt
              </li>
              <li className="flex gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                <a href="tel:2220810951" className="hover:text-ink">
                  (02) 20810951
                </a>
              </li>
              <li className="flex gap-2.5">
                <IconFax className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                +20 2 20810989 (fax)
              </li>
              <li className="flex gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                <a href="tel:+201121283333" className="hover:text-ink">
                  +20 112 128 3333 (mobile)
                </a>
              </li>
              <li className="flex gap-2.5">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                <a href="mailto:info@drugest.net" className="font-semibold text-ink hover:text-teal-900">
                  info@drugest.net
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Cairo branch</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                4 El-Shawarby St., Cairo
              </li>
              <li className="flex gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                <a href="tel:+202239270200" className="hover:text-ink">
                  +20 (2) 23927020
                </a>
                <span className="text-ink-soft/60">/</span>
                <a href="tel:+202239245200" className="hover:text-ink">
                  +20 (2) 23924520
                </a>
              </li>
              <li className="flex gap-2.5">
                <IconFax className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                +20 (2) 23924478 (fax)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
