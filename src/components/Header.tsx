"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { IconChevronDown, IconClose, IconMail, IconMenu, IconPhone } from "./icons";

const productLinks = [
  { href: "/products/large-animals", label: "Large Animals" },
  { href: "/products/poultry", label: "Poultry" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", children: productLinks },
  { href: "/drugest-egypt", label: "Drugest Egypt" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur">
      <div className="hidden border-b border-border/70 bg-teal-900 text-teal-100 md:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href="tel:+201121283333" className="flex items-center gap-1.5 hover:text-white">
              <IconPhone className="h-3.5 w-3.5" />
              +201121283333
            </a>
            <a href="mailto:info@drugest.net" className="flex items-center gap-1.5 hover:text-white">
              <IconMail className="h-3.5 w-3.5" />
              info@drugest.net
            </a>
          </div>
          <Link href="/about/ar" className="hover:text-white">
            العربية
          </Link>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-teal-100 hover:text-teal-900"
          >
            Home
          </Link>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-teal-100 hover:text-teal-900"
                >
                  {link.label}
                  <IconChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-lg border border-border bg-surface p-1.5 opacity-0 shadow-lg shadow-ink/5 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-teal-100"
                  >
                    All products
                  </Link>
                  <div className="my-1 h-px bg-border" />
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-ink-soft hover:bg-teal-100 hover:text-teal-900"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-teal-100 hover:text-teal-900"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-ink-soft"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-2 flex items-center gap-4 border-t border-border px-3 pt-3 text-sm text-ink-soft">
              <a href="tel:00201121283333" className="flex items-center gap-1.5">
                <IconPhone className="h-4 w-4" /> Call
              </a>
              <a href="mailto:info@drugest.net" className="flex items-center gap-1.5">
                <IconMail className="h-4 w-4" /> Email
              </a>
              <Link href="/about/ar" onClick={() => setMobileOpen(false)}>
                العربية
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
