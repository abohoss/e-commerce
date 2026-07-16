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

## Contact

The contact page now points visitors directly to `info@drugest.net` instead
of using a form. That avoids losing inquiries to an unconfigured backend.

## News and admin data

News posts and the admin login/password settings are stored in Postgres via
the Vercel/Marketplace Postgres integration. The app creates two tables on
first use:

- `admin_settings` for the singleton admin email/password record.
- `news_posts` for published news items.

The default admin login is `info@drugest.net` and `hamed1234` until you
change it in `/admin`.

To set this up on Vercel:

1. Open your project in Vercel.
2. Go to Storage, then add a Postgres integration from the Marketplace.
   Vercel currently routes new Postgres setups through Neon, which is the
   supported path for fresh projects.
3. Attach the database to this project so Vercel injects the connection
   environment variables automatically.
4. Pull the variables locally with `vercel env pull .env.local` so the dev
   server can connect too.
5. Redeploy. The app will create the required tables automatically the first
   time the admin or news routes run.

If you prefer to pre-create the schema manually, the application code uses a
singleton admin row and a `news_posts` table with `id`, `title`, `summary`,
`body`, `published_at`, and `updated_at` columns.

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
