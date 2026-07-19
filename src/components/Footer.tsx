import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { IconFax, IconMail, IconMapPin, IconPhone } from "./icons";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/products/large-animals", label: "Large Animals" },
      { href: "/products/poultry", label: "Poultry" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-teal-900 text-teal-100">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-teal-100/80">
            Registered veterinary formulations for large animals and poultry,
            toll-manufactured under GMP standards in Cairo, Egypt since 2004.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold text-white">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-teal-100/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-teal-100/80">
            <li className="flex gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>35A Emtidad Ramsis 2, Nasr City, Cairo, Egypt</span>
            </li>
            <li className="flex gap-2.5">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="tel:2220810951" className="hover:text-white">
                 (02) 20810951
              </a>
            </li>
            <li className="flex gap-2.5">
              <IconFax className="mt-0.5 h-4 w-4 shrink-0" />
              <span>+20 (02) 20810989</span>
            </li>
            <li className="flex gap-2.5">
              <IconMail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:info@drugest.net" className="hover:text-white">
                info@drugest.net
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-teal-100/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-teal-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Drugest Pharmaceuticals Company. All rights reserved.</p>
          <p>Manufactured by Arabcomed &amp; Arab Caps — GMP certified.</p>
        </Container>
      </div>
    </footer>
  );
}
