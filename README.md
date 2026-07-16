# Drugest Pharmaceuticals — website rebuild

A modern rebuild of [drugest.net](http://drugest.net/), a veterinary
pharmaceutical company in Cairo, Egypt. Built with Next.js (App Router),
TypeScript and Tailwind CSS v4.

The original site was a table-based, absolutely-positioned page built with
the 1&1/NetObjectFusion website builder in the early 2010s. This rebuild
keeps the same core content — company profile, the full 23-product catalog
for large animals and poultry, contact details, and the Drugest Egypt
registration pipeline — but restructures it around a distinctive "product
label" design system, since the source content is fundamentally
pharmaceutical package-insert data (composition, dosage, withdrawal times).

`site-content.md` at the repo root is the full crawl/audit of the original
site (every page's text, images, layout, and third-party scripts) that this
rebuild was based on.

## Stack

- Next.js 16 (App Router, static generation for all product pages)
- TypeScript
- Tailwind CSS v4
- Space Grotesk / IBM Plex Sans / IBM Plex Mono (via `next/font`)
- Custom SVG icon set (no stock photography or scanned product images)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The original site had **no contact form** — only a `mailto:` link. This
rebuild adds a real form at `/contact`, posted through `/api/contact`
(`src/app/api/contact/route.ts`), which forwards submissions to
[Formspree](https://formspree.io).

To make it actually deliver email:

1. Create a free Formspree account and a form, and copy its endpoint
   (`https://formspree.io/f/xxxxxxxx`).
2. Set the environment variable `FORMSPREE_ENDPOINT` to that URL — locally in
   `.env.local`, and in your Vercel project's Environment Variables.

Until that variable is set, the form will show a friendly error asking
visitors to email `info@drugest.net` directly instead of silently pretending
to succeed — check the server logs for submissions received while
unconfigured.

## Content

- `src/lib/products.ts` — all 23 products (composition, properties,
  indications, dosage, warnings, withdrawal time, storage, packaging), plus
  the 12 products in the Drugest Egypt registration pipeline.
- Two products (Streptotest Injection, Nifulin-Forte) were re-categorized
  from Poultry to Large Animals — their dosing text targets cattle,
  horses, dogs and cats, not poultry. See `site-content.md` §7 for the full
  list of data-quality issues found on the original site.

## Deployment

Deployed on Vercel, connected to this GitHub repo for automatic deploys on
push to `main`.
