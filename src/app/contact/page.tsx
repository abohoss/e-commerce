import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { IconFax, IconMail, IconMapPin, IconPhone } from "@/components/icons";

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
        title="Talk to the Drugest team."
        description="Reach our scientific office in Nasr City or our Cairo branch — by phone, fax, email or the form below."
      />

      <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Scientific office</h2>
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
                <a href="mailto:info@drugest.net" className="hover:text-ink">
                  info@drugest.net
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="font-display text-lg font-semibold text-ink">Cairo branch</h2>
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

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">Send a message</h2>
          <p className="mt-1 text-sm text-ink-soft">
            We usually reply within one business day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
