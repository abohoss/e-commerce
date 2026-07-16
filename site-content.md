# Drugest.net — Full Site Content Extraction

Source: http://drugest.net/ — a static site built with the 1&1/NetObjectFusion ("NOF") website builder (evidenced by `nof-` CSS classes, absolutely-positioned `LYR` divs, `jquery.js`, `navbars.js`, and per-page `<slug>_nof.js` files). Crawled via `curl` with a browser User-Agent on 2026-07-16. No usable sitemap existed (`/sitemap.xml` only lists the homepage); all 28 known routes plus shared CSS/JS assets were fetched directly. Link-scraping across all fetched pages turned up **no additional routes** beyond the known list (no news articles, no gallery sub-pages, no pagination) — the site is exactly 28 pages.

---

## 1. Site Summary

**Company:** Drugest (also "Drugest Pharmaceuticals Company" / "Drugest Egypt"). An Egyptian veterinary pharmaceutical manufacturer/marketer selling injectable and oral/water-soluble-powder medicines for large animals (cattle, sheep, goats, horses) and poultry (broilers, turkeys). Founded 3/6/2004 as an Egyptian shareholder company (per the About page) by a group combining Multi Pharma Company and three named doctors (Dr. Fouad Mohamed El Lafy, Dr. Abdel Karim Mohamed Hatata, Dr. Mohamed Faisal Kamel). Paid capital EGP 3.5 million, authorized capital EGP 15 million. Products are toll-manufactured by "Arabcomed" (Arab Company for Medical Products) and "Arab Caps" (Arab Company for Gelatinous & Pharmaceutical Products), both GMP-certified. At time of writing the company offered 13 large-animal products and 12 poultry products (nav lists 10 + 13 respectively — see per-product-category notes below), plus 12 additional products "under registration" listed on the Drugest-Egypt page.

**Site purpose:** A digital brochure/catalog — company profile, full product catalog with technical package-insert-level detail (composition, properties, indications, dosage, warnings, withdrawal times, storage, packaging), a gallery of posters, a (currently empty) news page, and contact details. There is no e-commerce functionality, no user accounts, no search, and — importantly — **no contact form** anywhere on the site.

### Route tree

```
/                                                          Home
/About/about.html                                          About
/About/About-Arabic/about-arabic.html                       About (Arabic)
/Products/products.html                                     Products (landing)
/Products/Large-Animals/large-animals.html                  Large Animals category (table of 10)
  /Products/Large-Animals/Drumectin-Injection/
  /Products/Large-Animals/Bekatest-10--Injection/
  /Products/Large-Animals/Rafotest-7_5--Injection/
  /Products/Large-Animals/Dexa-phen-Injection/
  /Products/Large-Animals/Tonotest-Injection/
  /Products/Large-Animals/Oxytest-30-L_A_-Inj_/
  /Products/Large-Animals/Albendest-5-/
  /Products/Large-Animals/Nemafluke/
  /Products/Large-Animals/Nova500/
  /Products/Large-Animals/Sulphaject-33_3/
/Products/Poultury/poultury.html                            Poultry category (table of 13) [site spells "Poultury"]
  /Products/Poultury/Streptotest-Injection/
  /Products/Poultury/Tylotest/
  /Products/Poultury/Doxy-40--W_S_P-/
  /Products/Poultury/Maduratest/
  /Products/Poultury/Spiratest-39-MIU--W_S_P-/
  /Products/Poultury/Chlortetracycline-500/
  /Products/Poultury/Eimeria-Nil/
  /Products/Poultury/Nifulin-Forte--W_D_P-/
  /Products/Poultury/Colistin-400/
  /Products/Poultury/Oxytest-40-/
  /Products/Poultury/Coccidest/
  /Products/Poultury/Quinoxaline-500/
  /Products/Poultury/Supermox-40/
/News/news.html                                              News (no articles — image banners only)
/Contact/contact.html                                        Contact
/Gallery/gallery.html                                        Gallery (3 poster images)
/Drugest-Egypt/drugest-egypt.html                             Drugest-Egypt ("Products under registration" table, 12 items)
```

Total: 28 pages (1 home + 2 about + 1 products landing + 2 category + 10 large-animal products + 13 poultry products + news + contact + gallery + drugest-egypt = 28). Confirmed exhaustive by cross-referencing every `href` found across all crawled pages against this list — no orphan links exist.

### Global header / navigation (repeats on every page — noted once here)

- No visible header text/logo bar in the literal sense; each page has a large **logo image** (`logo-e.png` or per-directory variants like `logo-e_1.png`, `logo-e_2.png`, `logo-e1.png`, `logo-e2.png` — same logo, re-exported per directory by the NOF builder) placed via absolute positioning.
- **Primary nav** is a `<ul id="NavigationBar1">` (rendered via `navbars.js`/jQuery, `style="display:none"` in the raw HTML — it's built into a hover dropdown menu at runtime) with these top-level items, in order:
  1. **Home** → `/index.html`
  2. **About** → `/About/about.html`, with sub-item **About Arabic** → `/About/About-Arabic/about-arabic.html`
  3. **Products** → `/Products/products.html`, with two sub-menus:
     - **Large Animals** → `/Products/Large-Animals/large-animals.html`, with 10 product sub-items (list above)
     - **Poultury** → `/Products/Poultury/poultury.html`, with 13 product sub-items (list above)
  4. **News** → `/News/news.html`
  5. **Contact** → `/Contact/contact.html`
  6. **Gallery** → `/Gallery/gallery.html`
  7. **Drugest-Egypt** → `/Drugest-Egypt/drugest-egypt.html`
- Nav is a true 3-level dropdown (top-level → Products → Large Animals/Poultury → individual product), identical HTML structure repeated on all 28 pages (only the relative path depth, e.g. `../`, `../../`, `../../../`, changes).

### Global footer (repeats on every page)

- A breadcrumb-style text nav bar (`#NavigationBar2LYR`, class `TextNavBar`) listing all top-level sections separated by " / ": Home / About / Products / News / Contact / Gallery / Drugest-Egypt. On each page, the link corresponding to the **current page** is rendered as plain (unlinked) text while the rest are `<a>` links — e.g. on `contact.html` the footer shows "...News / Contact / Gallery..." with "Contact" as plain text, not a link.
- **Social icons — homepage only:** `rss.png`, `facebook.png`, `google.png`, `twitter.png` (each 25×25px) appear in the footer **only on the homepage** (`index.html`). They do **not** appear on any other page's footer.
- **Important finding:** none of the four social icons are wrapped in `<a>` tags anywhere in the site — they are bare `<img>` elements with no `href`, i.e. purely decorative/non-functional placeholders. There is no real social media presence linked from the site.
- Footer background uses a repeating tile image `footer.png`.

### Third-party scripts / embeds / integrations — consolidated findings

A full-site grep for Google Analytics/Tag Manager snippets (`gtag`, `ga(`, `googletagmanager`, `analytics.js`), Facebook Pixel (`fbq(`), `<iframe>` elements (which would catch a Google Maps embed), and any `<script src="...">` pointing to an external (non-`drugest.net`) domain returned **zero matches across all 28 pages**. Findings:

- **No Google Analytics / Google Tag Manager** anywhere.
- **No Google Maps embed** (no iframe, no JS maps API) on the Contact page or anywhere else — the address is plain text only.
- **No social media widgets or chat widgets.**
- **No contact `<form>` element exists anywhere on the site** (grep for `<form` across all 28 pages returned nothing). The Contact page has no interactive form — it is a static text block with a `mailto:info@drugest.net` link as the only interactive contact affordance. **There is no backend/form-handler to migrate** — a rebuild will need to design a new contact form from scratch (e.g. wired to an email service or serverless function).
- All `<script src>` references are same-origin: `jquery.js`, `navbars.js`, and a per-page `<slug>_nof.js` file (page-specific NOF builder glue code, e.g. `about_nof.js`, `contact_nof.js`). Fetched and grepped `navbars.js` and `index_nof.js` directly — no external URLs (`http://`/`https://`) appear inside either file.
- The only outbound reference anywhere in the site's markup is the `mailto:info@drugest.net` link on the Contact page (and repeated wherever the email is shown).

### Contact information (found on Contact page; not duplicated elsewhere)

- **Address:** 35A Emtidad Ramsis 2 – Nasr City – Cairo – Egypt (labeled "scintific office" [sic])
- **Phone:** 002(02) 20810951
- **Fax:** 002(02) 20810989
- **Mobile/Call Phone:** 00201121283333
- **Email:** info@drugest.net (mailto link)
- **Website:** www.drugest.net
- **Branch:** 4 El-Shawarby St., Cairo
  - Tel: 0020(2)23927020, 0020(2)23924520
  - Fax: 0020(2)23924478

### Color palette (from `style.css`; `fusion.css` is a generic layout/reset framework with no color declarations; `site.css` is an empty stub — just the comment `/* CSS definition file containing site wide stylesheets */`; `nof_jcarousel_skin.css` only supplies carousel arrow icon backgrounds, no colors)

| Role | RGB (source) | Hex |
|---|---|---|
| Body / paragraph / list text | `rgb(128,128,128)` | `#808080` |
| Link (default) | `rgb(180,203,199)` | `#B4CBC7` |
| Link (hover) | `rgb(199,219,216)` | `#C7DBD8` |
| Link (visited) | `rgb(88,116,122)` | `#58747A` |
| Link (active) | `rgb(199,219,216)` | `#C7DBD8` |
| Headings h1–h6 | `rgb(125,164,173)` | `#7DA4AD` |
| `.nof_MonsterBlueBanners1-Default` text | `rgb(125,164,173)` | `#7DA4AD` |
| `.nof_MonsterBlueNavbar*-Regular/Rollover` text | `rgb(250,250,250)` / `rgb(125,164,173)` | `#FAFAFA` / `#7DA4AD` |
| UI-accordion / UI-tabs border | — | `#C7DBD8` |
| UI-accordion / UI-tabs background | — | `#FFFFFF` |
| Accordion/tab selected text | — | `#709BA6` |
| Accordion/tab default (unselected) text | — | `#FAFAFA` |
| Body/most product text inline override | `rgb(0,0,0)` (many product pages force black text via inline `<span style="color: rgb(0,0,0)">`) | `#000000` |

No dark/high-contrast theme exists; the site is a single light theme with a pale teal/grey accent (`#7DA4AD`/`#C7DBD8`) against grey (`#808080`) body copy on a white/light background (`body` also has a tiling background image `subBackground.png`, and each page additionally sets a page-specific `background.png`/pattern via inline style).

### Fonts

- **Lato** (regular, bold, and — on the About and Drugest-Egypt pages — "Lato Black" weight-900 variant) is declared via `@font-face` inline in every page's `<head>`, pointing at local `.eot`/`.ttf`/`.svg` files (`Lato-Regular.*`, `Lato-Bold.*`, `Lato-Black.*`) at the site root. Used for body text, paragraphs, nav, lists (`P`, `.TextObject`, `.TextNavBar`, `A`, `UL`, `OL` all set `font-family: Lato` in `style.css`).
- **Lobster Two** (regular and bold) is likewise declared via `@font-face` on pages that use it (About, Products landing, Drugest-Egypt product-under-registration heading, and inline on large-animals/poultry category pages), pointing at local `LobsterTwo-Regular.*` / `LobsterTwo-Bold.*` files. Used for `H1`–`H6` and decorative large headings (e.g. the 72px "Large Animals" / "Poultury" titles on the Products landing page, "The company" / "الشـركة" headings). This is a **real, self-hosted font** (not a placeholder) — both weights ship as `.eot`/`.ttf`/`.svg`.
- Fallback stack used on `<body>` (inline style, most inner pages): `Arial, Helvetica, Geneva, Sans-serif`.
- `fusion.css` additionally declares a monospace stack for `pre`: `'Courier New', 'Lucida Console', Courier, Monaco, Monospace` — not used anywhere in the actual page content encountered.
- Base body font-size is 14px, headings scale from `fusion.css`: h1 31px, h2 24px, h3 18px, h4 16px, h5 13px, h6 10px, line-height 1.2 for headings/pre/blockquote.

### Notable styling patterns

- Entire layout uses **absolute positioning** (`position: absolute`) for every element (`LYR` divs), a fixed-width canvas of 960–970px centered via `body { margin:0px auto; width:960px }` — this is a pixel-perfect WYSIWYG export, not a responsive/fluid layout. A modern rebuild should treat every page as a fresh responsive design rather than trying to preserve exact coordinates.
- `.nof-clearfix`, `.nof-positioning`, `.nof-navPositioning`, `.nof-block-*`, `.nof-wrap-*` utility classes exist for layout resets (from `fusion.css`) but carry no visual/brand styling of their own.
- jQuery UI accordion/tabs/toggle-pane styling exists in `style.css` (`.ui-accordion`, `.ui-tabs-*`, `.TogglePaneFancyHeader*`) with icon-based backgrounds (`AccordionTabOpen.png`, `tab_top.png`, `TogglePaneOpen.png`, etc.) — these are NOF-builder-provided UI widgets; no evidence any page actually uses an accordion/tabs/toggle-pane (product pages use plain `<p>` text blocks, not organized into these widgets).
- Product detail pages use bold, black (`rgb(0,0,0)`) or inherited grey text for the entire technical body, formatted as a single wall of `<br>`-separated text inside one or two `<p>` tags — not semantic subheadings — with bolded label words like "Composition:", "Properties:", "Indications:", "Dosage & Administration:", "Warnings & Precautions:", "Withdrawal time:", "Storage:", "Package:" acting as inline pseudo-headings.
- Category pages (Large Animals, Poultury, Drugest-Egypt) use literal HTML `<table>` elements (not CSS grids) with `border:1px`, manually spaced cells, for the product-name/active-ingredient listings.

---

## 2. Per-Route Content

### `/` — Home

**Title:** Home

**Layout:** Same as global (see above) — no unique header/footer variation. This page uniquely: (a) shows the social icons in the footer, (b) uses `background.png` as page background, (c) has the `nof_jcarousel_skin.css` stylesheet linked (only page that does, though no visible carousel markup was found on the page itself), (d) has no body text at all — the entire page is composed of images and the site's 6 "hero button" nav images that double as the primary IA (in addition to the hover dropdown nav).

**Text content:** None (no headings, paragraphs, or lists — image-only page beyond the nav/footer chrome).

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/camel-png-5a3afcc9d8d247.png | camel-png-5a3afcc9d8d247 | camel-png-5a3afcc9d8d247 |
| http://drugest.net/line.png | (empty) | — |
| http://drugest.net/Bird_Grouping_Price_List.png | Bird_Grouping_Price_List | Bird_Grouping_Price_List |
| http://drugest.net/b1.jpg | b1 | b1 (wrapped in `<a href="./index.html">` — "Home" hero button) |
| http://drugest.net/b2.jpg | b2 | b2 (wrapped in `<a href="./About/about.html">` — "About" hero button) |
| http://drugest.net/b4.jpg | b4 | b4 (wrapped in `<a href="./Contact/contact.html">` — "Contact" hero button) |
| http://drugest.net/b3.jpg | b3 | b3 (wrapped in `<a href="./Products/products.html">` — "Products" hero button) |
| http://drugest.net/b5.jpg | b5 | b5 (wrapped in `<a href="./Gallery/gallery.html">` — "Gallery" hero button) |
| http://drugest.net/b6.jpg | b6 | b6 (wrapped in `<a href="./Drugest-Egypt/drugest-egypt.html">` — "Drugest-Egypt" hero button) |
| http://drugest.net/Water_buffalo_bull.png | Water_buffalo_bull | Water_buffalo_bull |
| http://drugest.net/bigstock_Group_Of_Farm_Animals__Cow_S_4963762_small_farm.png | bigstock_Group_Of_Farm_Animals__Cow_S_4963762_small_farm | (same) |
| http://drugest.net/logo-e.png | logo-e | logo-e |
| http://drugest.net/rss.png | rss | rss (not linked) |
| http://drugest.net/facebook.png | facebook | facebook (not linked) |
| http://drugest.net/google.png | google | google (not linked) |
| http://drugest.net/twitter.png | twitter | twitter (not linked) |

**Scripts/embeds:** Standard `jquery.js`, `navbars.js`, `index_nof.js` (same-origin only). No third-party embeds.

---

### `/About/about.html` — About

**Title:** About

**Layout:** Same as global.

**Headings:** H2 "The company" (font Lobster Two)

**Body text (verbatim):**
> -The Company was established as a shareholder Company inclining a number of expertise in the pharmaceutical field as well as medical veterinary fields :
> 1- Multi pharma company .
> 2- Dr. Fouad Mohamed El Lafy .
> 3- Dr .Abdel Karim Mohamed Hatata .
> 4- Dr . Mohamed Faisal Kamel .
> -The Company Started with a paid Capital of three million 500.000 Egyptian pounds while the Authorized capital is estimated by 15 million Egyptian pounds .
> - The Company has started with the registration of veterinary products , owning now 12 products For poultry 13 products for large animals  all the products and special Cally chosen romeet the veterinary market needs in Egypt Africa .
> - The Company is toll manufacturing its products at the Arab an Company for Medical products 2 the Arab an Company for gelatinous 2 pharmaceutical products ( Arab caps ) both Companies an applying high standards of  GMP 2 are very known for them Competently 2 efficiency within the pharma Curtice field .

(Note: the source text contains apparent OCR/typo artifacts such as "romeet", "Curtice", "an" for "and", "2" used in place of "&" — preserved verbatim as found; a rebuild should have this copy professionally re-edited.)

There's also a small "Arabic" button (bold, Lato Black, 16px) linking to the About-Arabic page.

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/About/logo-e_1.png | logo-e | logo-e |
| http://drugest.net/About/Rectangle.gif | (empty) | — (this is the clickable "Arabic" button background, wrapped in `<a href="../About/About-Arabic/about-arabic.html">`) |

**Scripts/embeds:** Standard only (`jquery.js`, `navbars.js`, `about_nof.js`).

---

### `/About/About-Arabic/about-arabic.html` — About Arabic

**Title:** About Arabic

**Layout:** Same as global. Content is right-aligned (RTL Arabic text).

**Headings:** H2 "الشـركة" ("The Company", font Lobster Two, right-aligned)

**Body text (Arabic, verbatim):**
> تأسست الشركة فى 3/6/2004 كشركة مساهمة مصرية تضم عدداً من ذوى الخبرة فى المجال الدوائى والمستحضرات الطبية والبيطرية ومنهم السادة:
> شركة مالتى فارما للأدوية .
> د/ فؤاد محمد محمد اللافى .
> د/ عبدالكريم محمد محمد حتاتة .
> د/ محمد فيصل كامل .
> برأس مال مدفوع وقدره ثلاثة مليون وخمسمائة الف  جنيهاً مصرياً ورأس مال مرخص به وقدره خمسة عشر مليون جنيهاً مصرياً .
> وبدأت الشركة فى تسجيل الأدوية والمستحضرات البيطرية الخاصة بصناعة الدواجن والثروة الحيوانية ؛ حتى وصلت الأصناف الى 12 صنف خاص بالدواجن و 13 صنف خاص بالحيوانات الكبيرة وكلها أصناف منتقاه بعناية ومطلوبة لدى السوق البيطرى بجمهورية مصر العربية.
> وتقوم الشركة بتصنيع منتجاتها وذلك بنظام التول أى التصنيع لدى الغير على اعلى درجات G.M.P  لدى الشركة العربية للمستحضرات الطبية (ارابكوميد) و الشركة العربية للمنتجات الجيلاتينية والدوائية ( أراب كابس ) المشهود لهما بالكفائة لدى الوسط الصيدلى.
> والشركة بصدد إنشاء مصنع لتصنيع الأدوية البيطرية والبشرية على أحدث تقنيات ومواصفات على أرضها بمدينة العاشر من رمضان على مساحة 3500م ونخبة من المستثميرين المصريين اصجاب الخبرات فى مجال الطب والهندسة والصيدلة والمحاسبة ، كما تم تأسيس شركة شقيقة في العام 2013 م وجارى تسجيل مستحضرات حديثة لها حتى وصلت الاصناف قيد التسجيل لها 11 صنف من الاجيل الجديدة في عالم الادوية البيطرية .

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/About/About-Arabic/logo-a_1.jpg | logo-a | logo-a |

**Scripts/embeds:** Standard only (`jquery.js`, `navbars.js`, `about-arabic_nof.js`).

---

### `/Products/products.html` — Products (landing)

**Title:** Products

**Layout:** Same as global. Two large decorative headings link into the two product categories; several full-bleed animal-photo images.

**Headings:**
- H2 "Large Animals" (72px, Lobster Two) — wrapped in `<a href="../Products/Large-Animals/large-animals.html">`
- H2 "Poultury" (72px, Lobster Two) — wrapped in `<a href="../Products/Poultury/poultury.html">`

**Text content:** No paragraph copy — purely a visual splash/navigation page into the two categories.

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/Products/camel-png-5a3afcc9d8d247_2.png | camel-png-5a3afcc9d8d247 | camel-png-5a3afcc9d8d247 |
| http://drugest.net/Products/Bird_Grouping_Price_List_1.png | Bird_Grouping_Price_List | Bird_Grouping_Price_List |
| http://drugest.net/Water_buffalo_bull.png | Water_buffalo_bull | Water_buffalo_bull |
| http://drugest.net/Products/bigstock_Group_Of_Farm_Animals__Cow_S_4963762_small_farm_1.png | bigstock_Group_Of_Farm_Animals__Cow_S_4963762_small_farm | (same) |

**Scripts/embeds:** Standard only.

---

### `/Products/Large-Animals/large-animals.html` — Large Animals category

**Title:** Large Animals

**Layout:** Same as global. Main content is an HTML `<table>` (10 data rows + 1 header row) listing every large-animal product with a link to its detail page and its active ingredient(s). Also several full-bleed animal-photo images and two logo images.

**Table — Large Animals product list** (columns: #, Product Name [linked], Active Ingredient):

| # | Product Name | Active Ingredient |
|---|---|---|
| 1 | Drumectin Injection | Ivermectin / Clorsulon |
| 2 | Rafotest 7.5% Injection | Rafoxanide |
| 3 | Bekatest 10% Injection | Clanobutin Soduim |
| 4 | Dexa-phen Injection | Phenylbutazone / Dexamethasone |
| 5 | Tonotest Injection | Toldimphos soduim |
| 6 | Oxytest 30 L.A. Inj. | Oxytetracycline Hcl |
| 7 | Albendest 5% | Albendazole |
| 8 | Nemafluke | Triclabendazole / Levamisole Hcl |
| 9 | Nova 500 | Dipyrone |
| 10 | Sulphaject 33.3 | Sulphadimidine Sodim |

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/Products/logo-e_2.png | logo-e | logo-e |
| http://drugest.net/Products/Large-Animals/logo-a1.jpg | logo-a1 | logo-a1 |
| http://drugest.net/Products/Large-Animals/Water_buffalo_bull_1.png | Water_buffalo_bull | Water_buffalo_bull |
| http://drugest.net/Products/Large-Animals/camel-png-5a3afcc9d8d247_1.png | camel-png-5a3afcc9d8d247 | camel-png-5a3afcc9d8d247 |
| http://drugest.net/Products/Large-Animals/bigstock_Group_Of_Farm_Animals__Cow_S_4963762_small_farm_2.png | bigstock_Group_Of_Farm_Animals__Cow_S_4963762_small_farm | (same) |

**Scripts/embeds:** Standard only.

---

### `/Products/Poultury/poultury.html` — Poultry category

**Title:** Poultury

**Layout:** Same as global. Main content is an HTML `<table>` (13 data rows + 1 header row).

**Table — Poultry product list** (columns: #, Product Name [linked], Active Ingredient):

| # | Product Name | Active Ingredient |
|---|---|---|
| 1 | Streptotest Injection | Streptomycin Sulphat |
| 2 | Tylotest | Tylosine tartarate |
| 3 | Doxy 40 (W.S.P) | Doxycycline Hcl |
| 4 | Maduratest | Maduramycin ammonium |
| 5 | Spiratest 39 MIU (W.S.P) | Spiramycin adipate |
| 6 | Chlortetracycline 500 | Chlortetracycline Hcl |
| 7 | Eimeria-Nil | Amprolium Hcl / Ethopabate |
| 8 | Nifulin Forte (W.D.P) | Oxytetracycline hcl / Metronidazole |
| 9 | Colistin 400 | Colistin Sulphate |
| 10 | Oxytest 40% | Oxytetracycline Hcl |
| 11 | Coccidest | Toltrazuril |
| 12 | Quinoxaline 500 | Sulphaquinoxaline Na |
| 13 | Supermox 40 | Amoxicillin Trihydrate |

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/Products/logo-e_2.png | logo-e | logo-e |
| http://drugest.net/Products/Poultury/logo-a1_1.jpg | logo-a1 | logo-a1 |
| http://drugest.net/Products/Poultury/Bird_Grouping_Price_List1.png | Bird_Grouping_Price_List1 | Bird_Grouping_Price_List1 |

**Scripts/embeds:** Standard only.

---

## 3. Large Animal Product Pages (10)

Each page below uses the same layout as global (title, hero product image where present, dense technical text block, standard nav/footer). Composition/dosage text is preserved verbatim (including original spelling/typos/spacing quirks) since it is package-insert-grade regulatory content.

### `/Products/Large-Animals/Drumectin-Injection/drumectin-injection.html`
**Title:** Drumectin Injection
**Heading:** DRUMECTIN PLus — injectable solution 50 ml (For veterinary use only)

**Body text (verbatim):**
> Composition:
> Each 1 ml contains:
> Ivermectin 10 mg
> clorsulon 100 mg
> properties:
> Dramktin Plus, is a combination of Ivermectin( an anthelmintic – ectoparasiticide )& Clorsulon( antifascioliasis ) which have a high efficacy in the treatment & control of internal and external parasites of cattle, sheep & goats.
> Indications:
> Dramktin Plus, is used in cattle & sheep for the treatment& control of: Gastrointestinal round worms : (adult and fourth – stage larvae ) haemonchus placei, H. contortus , Ostertagia ostertagi , O. lyrata , teichostongylus axei. T. colubriformis
> Lung worms : ( adult and fourth- stage larvae ) Dictyocaulus viviparous.
> Liver fluke : ( adult only ) ( Fasciola hepatica ) ; grubs ( parasitic stages )
> ( Hypoderma bovis , H. lineatum ) ; Lice ( linognathus vituli , haematopinus eurysternus ) ; mites ( psoroptes bovis , sarcoptes scabiei varbovis ) .
>
> Dosage & Administration :
> Drumectin plus , is administered by subcutaneous injection only , an acceptable injection site is the loose skin behind the shoulder .
> Used in the treatment of liver flukes in cattle ( adult only ) .
> The recommended dose :
> Cattle : 1 ml / 50 kg.b.wt. given once by S/C injection only .
> Sheep & Goats : 0.5 ml / 25 kg.b.wt. given once by S/C injection only.
> Precautions and Warnings :
>  For human consumption. Not used in cattle producing milk*
> Not used for pregnant animals*
>  For subcutaneous use only , not for intravenous or intramuscular use.*
> *Shouid not be used in combination with monamine oxidase inhibitor so as to prevent additive sedative effect & adverse neurological effect.
> * Not used in immature liver flukes ( fasciola hepatica , f . gigantic , )
> Withdrawal time :
> Meat: 35 days
> STORAGE :
> not exceeding 30?C  away from direct light. Keep at temp.
> package :
> Glass vials of 50-100ml
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPANY

**Image:** http://drugest.net/Products/Large-Animals/Drumectin-Injection/Drumectin-plus.png — alt/title "Drumectin-plus"

---

### `/Products/Large-Animals/Bekatest-10--Injection/bekatest-10--injection.html`
**Title:** Bekatest 10% Injection
**Heading:** Bekatest 10 % — injectable solution ( For Veterinary Use Only )

**Body text (verbatim):**
> Composition:-
> Each 1 ml contains :
> Clanobutin Sodium: 106.4 mg
> Equiv.To Clanobutin base: 100 mg
> Properties & Indications:
> 1- Bekatest is a Clanobutin derivative wich has been found to stimulate the secretory activity of the digestive exocrine glands in a variety of species.
> 2- Bekatest can be used for all domestic animals suffering problems in digestion.
> Cattle- Sheep & Goats:
> Primary indigestion:
> After over feeding Particularly with easily digestible carbohydrates (ruminal acidosis ) with  contaminated & spoilt food
>  ( ruminal breakdown ) & as a result of rapid changes in diet, overloading of the rumen, distention of the rumen & constipation.
> Secondary indigestion:
> Post- operative use to restore normal digestion, energy metabolic disorders ( acetonemia in cows, toxaemia of pregnancy in ewes )
> Stimulation of hepatic function by promoting bile secretion ( therapy aimed at protecting the liver)
> Horses:
> Indigestion after overfeeding with high protein feed or oats, constipation, intestinal atony, gas colic , feed intoxication. Stimulation of hepatic function by promoting bile secretion.
> Dogs:
> Indigestion of all kinds, constipation,intestinal atony,exocrine pancreatic insufficiency.
> Stimulation of hepatic function by promoting bile secretion.
> Dosage & Administration:
> Bekatest injection is given once or twice in 2 Successive days.
> Cattle & Horses: 10 ml Bekatest / 100 kg.b.wt.(I.M).
> Sheep & Goats: 5 ml Bekatest / 25 kg.b.wt.(I.M).
> Dogs & Cats:      1 ml Bekatest / 5 kg.b.wt.(I.M).
> Warnings & Precautions:
> * Not used for lactating animals.
> * Not used in cases of physical obstruction of the bile or pancreatic ducts.
> * It is advisable to give Magnesium Sulphate orally in cattle to protect against gall bladder burst.
> *Termor, sweating, diarrhea, may occur as a side effect.
> * Shouid be administered by I.M rout.
> * Shouid not be used after expiry date.
> Withdrawal time:
> Meat: 3 days.
>
> Storage:
> Store in a cool place away from heat, light and reach of children.
> Package:
> Glass vials of 10,30,50,100 & 250 ml.
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPANY

**Image:** http://drugest.net/Products/Large-Animals/Bekatest-10--Injection/Bekatest-10-.png — alt/title "Bekatest-10-"

---

### `/Products/Large-Animals/Rafotest-7_5--Injection/rafotest-7_5--injection.html`
**Title:** Rafotest 7.5% Injection
**Heading:** Rafotest 7.5% — injectable solution 50 ml, 100ml ( For Veterinary Use Only )

**Body text (verbatim):**
> Composition:-
> Each 100 ml contains :
> Rafoxanide 7.5gm
> Indications:
> Cattle , sheep & goat:
> Highly effective for treatment and control of adult and immature liver flukes ( fasciola hepatica and fasciola gigantica ).
> All stages of adult and immature round worms(Haemonchus contortus)
> And all larval stages of the sheep nasal worm (Oestrus ovis ).
> Dosage & Administration:
> Cattle , sheep & Goat:
> By S/C Injection only
> 2 ml / 50 kg body weight
> Warnings & Precautions:
> -Mode of administration: By S/C injection only.
> -Milk produced during treatment shouId be discarded.
> - Diary cattle shouId be treated only during their dry period.
> -ShouIdn't be given to subjects that are hypersensitive to its active ingredient.
> - Do not treat animals more frequently than every 3 weeks with Rafoxanide.
> -Not used in cattle producing milk for human consumption.
> -Not used for poultry.
> Withdrawal time:
> Meet: 60 days
> Storage :
> Keep at temp. not exceeding 30º C away from direct sunlight.
> M.O.H. Reg. No. 2810/2006 vet.
> Package :
> Glass vial of 100 ml.
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPANY

**Image:** http://drugest.net/Products/Large-Animals/Rafotest-7_5--Injection/Rafotest.png — alt/title "Rafotest"

---

### `/Products/Large-Animals/Dexa-phen-Injection/dexa-phen-injection.html`
**Title:** Dexa-phen Injection
**Heading:** Dexa-Phen — Injectable Solution (for veterinary use only)

**Body text (verbatim):**
> Each 100ml contains :
> Phenylbutazone 18 gm
> Dexamethasone 0.035 gm
> Properties & Indication :
> 1- Phenylbutazone is a powerful non – steroidal anti- inflammatory, analgesic&
> anti- pyretic acts mainly in the early stages of inflammatory reactions.
> 2- Dexamthasone is a synthetic corticosteroid having anti- inflammatory & anti- allergic characters produces it's acticity in the late stage of the inflammatory
> reactions .
> Therfore Dexa-phen is an anti-inflammatory in cattle, calves, horses & foals in the
> Following :
> - For the alleviation of inflammation and pain associated with musculoskeletal
> disorders.
> - For the alleviation of visceral pain associated with colic.
> - With antibiotics for treatment many inflammatory disorders as pneumonia,
> mastitis, metritis.
> Dosage and administration :
> - For Cattle, Horses & Dogs : By deep I/M or slow I/V injection .
> - For adult : 20 ml at 1 " day , then 10 ml for up to 4 days .
> - For calves-foals : 6-10 ml at the 1" day- the dose could be repeated according to the
> case every other day .
> Warning & Precautions :
> * not used for lactating animals .
> * Do not use the drug in cardiac, hepatic and renal insufficiency or in advanced
> Gestation .
> * Gastritis and haemoglubinuria may occur in long term treatment .
> Withdrawal Time :
> - Meat : 21 days .
> Storage :
> Keep at temperature Between 10-25 ºC away from direct sunlight .
> Package :
> Glass vials of : 100 ml
> MADE IN EGYPT
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPANY

**Image:** http://drugest.net/Products/Large-Animals/Dexa-phen-Injection/Dexa-Phen.png — alt/title "Dexa-Phen"

---

### `/Products/Large-Animals/Tonotest-Injection/tonotest-injection.html`
**Title:** Tonotest Injection
**Heading:** Tonotest — Injectable Solution ( For Veterinary Use Only )

**Body text (verbatim):**
> Composition :
> Each 1 ml contains :
> Toldimfos Sodium 200 mg
> ( Sodium-4-dimethylamino-2-methyl phosphonate )
> Properties :
> Toldimfos Sodium is the Sodium salt of 4-dimethylamino-2-methyl phosphonate. No specific data on the pharmacodynamic action of toldimfos was submitted . The precise mode of action of toldimfos is unknown , It appears more likely that the effect of toldimfos arises due to the multiple stimulation of metabolism within the body. Toldimfos is an aromatic phosphorus compound which falls between phosphorous itself and phosphoric acid in the stage of oxidation.
> Indications :
> Cattle , sheep , goats , horses , dogs and cats :
> For prevention & treatment of phosphorus deficiencies
> In cattle and dogs :
> As Tonic &restorative for the treatment of general metabolic disorders.
> Skeletal defects :
> Rickets and osteomalacia or promotion of rapid union in fractures , particulary when associated with vitamin D therapy.
> Tetany and paresis :
> Caused by disorders of calcium , magnesium and phosphorus metabolism ( post – parturient paresis , lactation tetany, grass tetany , etc.). In these cases , Tonotest has a synergistic effect when given in conjunction with specific magnesium or calcium therapy.
> General metabolic disorders :
> Tonotest is a useful form of therapy in the treatment of debility , whether during convalescence or the result of nutritional disorders. It may be useful after difficult parturition , in debility of the newborn and in deficiency syndromes in cattle and dogs of all ages.
> Target species :
> Cattle-Horse-Sheep-Goat-Dog and cats.
> Dosage and administration :
> Intravenously , intramusculary or subcutaneously.
> Equine and Cattle :
> As whole product : Adults : 1 ml per 50 kg , may be increased to 1 ml per 10 kg for cattle during the first intervention. Young : 1-2 ml per As active ingredient : Adults : 200 mg Toldimfos Sodium per 50 kg , may be increased to 200mg Toldimfos Sodium per 10 kg for cattle during the first intervention .
> Young : 200-400mg Toldimphos Sodium per 10 kg
> Sheep and goats : As whole product : Adults : 0.5 ml to 1 ml per 10 kg Young : 0.5 ml per kg As active ingredient : Adults : 100-200mg Toldimfos Sodium per 10kg
> Young : 100 mg Toldimfos Sodium per kg
> Dogs and cats : As whole product : 0.5 ml to 1 ml per kg to 10 kg
> As active ingredient : 100-200 mg Toldimfos Sodium per kg to 10 kg
> These doses should be administered by routes IV , IM or SC injection at several points. They will be repeated every day or every 2 to 3 days for 5-10 days in the opinion of the attending veterinarian . In the case of chronic conditions , 5-10 injections can be performed
> Warnings and precautions :
> Following withdrawal of the first dose , use the product within 14 days.
> Contra-indications :
> Do not use in case of hypersensitivity to the active substances or to any of the excipients .
> Advers effects : In case of overdose , there is a risk of electrolyte imbalance .
> Withdrawal time Meat , Milk : Zero days
> Storage conditions : Do not store above 25º C .
> Package : 50 , 100 , 250 ml multidose glass bottles
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPANY

**Image:** http://drugest.net/Products/Large-Animals/Tonotest-Injection/Tonotest.png — alt/title "Tonotest"

---

### `/Products/Large-Animals/Oxytest-30-L_A_-Inj_/oxytest-30-l_a_-inj_.html`
**Title:** Oxytest 30 L.A. Inj.
**Heading:** Oxytest 30 LA inj. — Injectable solution, For vet. use only

**Body text (verbatim):**
> Composition: -
> Each 100 ml contains
> Oxytetracycline Hcl 32.37gm
> Eqi. To oxytetracycline 30 gm
> Properties
> Oxytetracycline is a broad spectrum antibiotic of the tetracycline group.  It acts by irreversibly binding to 30S ribosomes so inhibit protein synthesis. It is active against Many Gram-positive and Gram-negative bacteria,  Mycoplasmas, rickettsiae and Chlamydiae.
>  Indications:
> Cattle: For the treatment and control of pasteurellosis and pneumonia caused by oxytetracycline-sensitive organisms. May also be of value for the treatment of foul-in-the-foot.
> Pigs:  For the treatment of pneumonia caused by Pasteurella spp. and the control of atrophic rhinitis.
> Target Species. Cattle, pigs
> Dosage and administration: by deep IM injection
> From active ingredient: standard dose :20mg of oxytetracycline /kg body weight 3-4 days
> High dose: 30mg of oxytetraacycline /kg body weight 5-6 days
> From whole product
> Standard dose :1ml of product /15 kg bodyweight 3-4 days
> High dose : 1ml of product /10kg bodyweight 5-6 days
> Warning and precautions
> 1-Use of this product during the period of tooth and bone development, including late pregnancy, may lead to discoloration
> 2- If concurrent treatment is administered use a separate injection site.
> 3- Not be used in newly born domestic animals
> Contra indications
> Do not dilute the product.
> Hypersensitivity to oxytetracycline or any other substance from tetracyclines group.
> Side effects:  occasionally a slight local reaction of a transient nature may be observed.
> Interaction with other drugs:
> should not be administered with antacids, gels containing aluminium, preparations containing vitamins or minerals as insoluble complexes will be formed, which decreases the absorption of the antibiotic.
> Withdrawal period :
> 20 mg/kg dose:
> Cattle : Meat 28 days,
> Pigs : Meat 14 days30 mg/kg dose:
> Cattle : Meat 35 days, Pigs :Meat 28 days
> Milk for human consumption must not be taken during treatment.
> Cattle: Milk 10 days
> Storage: Keep on cool &dry place not exceeding 30° C. Protected from light Keep out of reach of children.
> Pack : Carton box containing   glass vial containing 30,100,50ml,250ml ml sterile solution closed by chlorobutyl rubber stopper & aluminum cap with outer label and inner leaflet
>
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** none on this page.

---

### `/Products/Large-Animals/Albendest-5-/albendest-5-.html`
**Title:** Albendest 5%
**Heading:** Albendest 5% — Oral suspension, For vet. use only

**Body text (verbatim):**
> Composition: -
> Each 1ml contains:-
> Albendazole     50mg
> Properties
> Ablendazole is a Benzimidazoles it acts by interrupt parasite energy metabolism by binding to tubulin, thereby disrupting microtubular cell structure and preventing nutrient uptake and other functions it active against Gastro-intestinal roundworms, lungworms,tapeworms in cattle, sheep Type II ostertagiosis
> Target Species Cattle, sheep
> Indications:
> For the treatment of Gastro-intestinal roundworms caused by Haemonchus, Type II ostertagiosis
> Lungworms caused by Dictyocaulus
> Tapeworms caused by Moniezia
> Liver flukes caused by adult Fasciola
> Dosage and administration: By mouth.
>  From active ingredient
> Cattle: roundworms and tapeworms, 7.5 mg/kg
> Adult flukes, roundworms, and tapeworms, 10 mg/kg
> Sheep: roundworms and tapeworms, 5 mg/kg
> Adult flukes, roundworms, and tapeworms, 7.5 mg/kg
> From whole product
> Cattle: roundworms and tapeworms, 1.5 ml/10 kg
> Adult flukes, roundworms, and tapeworms, 2 ml/10 kg
> Sheep: roundworms and tapeworms, 1ml/10kg
> Adult flukes, roundworms, and tapeworms, 1.5 ml/10kg
> Warning and precautions
> Shouldn't exceed 'fluke and worm dose' in cows during first month of pregnancy;
> Coughing for some weeks after treatment in cattle suffering from severe lung damage at time of treatment
> Contra indications
> Concurrent administration of other ruminal boluses, treatment of ewes at a dosage of 7.5 mg/kg
> During the mating period and until 1 month after rams are removed
> Shouldn't be used in sheep producing milk for human consumption
> Side effects:  .
> Not established
> Withdrawal period
> Cattle: slaughter 20 days, milk 3 days. Sheep: slaughter 8 days
> Storage:
> Keep on cool &dry place not exceeding 30° C. t Keep out of reach of children.
> Pack.: 100,200 ml in plastic container
> Manufactured By Arab Company for medical products (Arabcomed) for
> Drugest pharmaceuticals

**Image:** none on this page.

---

### `/Products/Large-Animals/Nemafluke/nemafluke.html`
**Title:** Nemafluke
**Heading:** Nemafluke — Oral suspension (For Veterinary use Only)

**Body text (verbatim):**
> Composition :-
> Each 1 ml contains :
> Triclabendazole 120 mg
> Levamisole Hcl 75 mg
> Properties:
> * Nemafluke is a combination of Triclabendazole and Levamisole acting  as anthelmintic.
> * Levamisole Hcl has a paralyzing action on nematodes by acholinergic  action , it also inhibits the fumerate reductase enzyme.
> * Triclabendazole acts by preventing worms from utilizing glucose ;  Glucose is not absorbed and the parasite's glycogen become  depleted and the worms are not able to synthesize Adenosine  Triphosphate ( A.T.P ) which is essential for survival.
> Indications :
> In case of acute , subacute and chronic fascioliasis ( either hepatica or   gigantic ) affecting sheep , goats and cattle.
> Adult and immature forms of round worms such as Haemonchus,Oestertagia,Coopria,Trichostrongylus,Bunostomum and Oesophagostomum.
> Adult & immature lung worms affecting sheep , goats and cattle.
> Dosage and Administration :
> ( Given orally as drench )
> 5 ml / 50 kg b.wt
> ( 12 mg triclabendazole + 7.5 mg Levamisole Hcl / kg b.wt).
> Precautions and Warnings :
> * Not used in cattle producing milk for human consumption.
> * Shake well before use.
> Withdrawal Time :
> Cattle : 28 days
> Storage :
> Keep at temp. not exceeding 25ºC away from direct sunlight
> Pack : 500 ml  1,2,3,4,5 Liters
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** http://drugest.net/Products/Large-Animals/Nemafluke/Nifulin-Forte-Package.png — alt/title "Nifulin Forte Package" *(data-quality note: image filename/alt is mislabeled — it references "Nifulin Forte" packaging, a different, unrelated poultry product, not Nemafluke — likely a copy/paste error in the original site; flag for correction/replacement in the rebuild).*

---

### `/Products/Large-Animals/Nova500/nova500.html`
**Title:** Nova500
**Heading:** NOVA 500 — Injection, For Veterinary use only

**Body text (verbatim):**
> Composition:
> Each 1 ml contains:
> Dipyrone 500 mg
> Properties :
> Dipyrone is a pyrazolone derivative similar to aminopyring.
> Dipyrone is thought to act similar to other non steroidal agents, by inhibiting cyclo-oxygenase mediated production of prostaglandins.
> Dipyrone has marked analgesic, antipyretic & slight anti-inflammatory properties & reportedly has antispasmodic activity on bradykinin-induced spasms on the intestinal tract.
> Indications:
> *Pain relief (colic, neuritis, neuralgia, tendovaginitis & to calm animal during examination & treatment).
> *Inflammatory conditions(acute &chronic arthritis, lumbago, rheumatic disorders of muscles & joints).
> *Spastic conditions (colic, intestinal spasm & abdominal & smooth muscle spasms).
> Dosage & Administration :
> For Active Ingredient
> *Cattle : 50 mg/kg bodyweight.
> *Horse : 10-20 mg/kg bodyweight.
> *Pigs : 50 mg/kg bodyweight.
> *Dogs & Cats : 28 mg/kg bodyweight.
> By I/M or slow I/V injection
> For whole product :
> *Cattle : 5 ml/50 kg bodyweight.
> *Horse : 10-20 ml (5-10 gm ) / adult horse.
> *Pigs : 1 ml/10 kg bodyweight.
> *Dogs & Cats : 0.6 ml/10 kg bodyweight.
> Side Effects:
>  *Agranulocytosis & Leucopenia may develop in high doses.
> Contra-indications:
> *Not used in cattle producing milk forhuman consumption.
> *Do not administer with phenylbutazone or barbiturate agents.
> *Concomitant administration with chloropromazine may cause serious hypothermia.
> Warning & Precautions :
> *In horse do not administer the drug within 5 days of racing.
> *Check blood picture after prolonged use.
> *Not to be used for poultry.
> *Total daily dose shouid not exceed 300 mg / animal / day for dogs & cats to prevent convulsions.
> *Route of administration : by I/M or slow I/V injection.
> *Do not administer by S/C injection.
> Withdrawal time :     Meat : 28 days.
> Storage :
> Store in a cool place, away from direct sunlight
> Package :
> Glass vial of 30,50,100,200,250,500 ml.
> MADE IN EGYPT
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPAN

**Image:** none on this page.

---

### `/Products/Large-Animals/Sulphaject-33_3/sulphaject-33_3.html`
**Title:** Sulphaject 33.3
**Heading:** Sulphaject 33.3 — Injection, For Veterinary use only

**Body text (verbatim):**
> Composition:
> Each 100 ml contains:
> Sulphadimidine Sodium 33.3 gm
> Equive.to Sulphadimidine base 30 gm
> Properties :
> *Sulphaject is sulphonamide derivative which acts as an antibacterial.
> * Sulphadimidine & other Sulphonamides have a similar structure to
> p-aminobenzoic acid (PABA) & interfere with the synthesis of nucleic acids in sensitive micro-organisms by blocking the conversion of PABA to the Co-enzyme dihydrofolic acid, a reduced form of folic acid . in animals dihydro-folic acid is obtained from dietary folic acid so sulphonamides do not affect host cells.
> Indications:
> *Sulphaject is recommended for treatment of a wide variety of infections caused by Sulphadimidine sensitive G+ve bacteria &G-ve bacteria (Pasteurella Spp , Salmonella Spp , E.coli, Fusobacteruim necrophorum & Strept. Spp.)a ffecting respiratory,urogenital or gastrointestinal systems or soft tissues such as bacterial pneumonia, bovine respiratory disease complex, collibacillosis, necrotic dermatitis, calf diphtheria, acute mastitis & acute metritis.
> Dosage & Administration :
> For Active Ingredient: 200 mg Sulphadimidine / kg.b.wt. then the dose reduced to 100 mg Sulphadimidine / kg.b.wt
> For whole product :
> Cattle , Buffaloes & Horses:
> 1st dose : 200ml / 300 kg.b.wt. and the 2nd dose 100 ml / 300 kg.b.wt. for 5 days
> Calves : 1st does: 40 ml / 60 kg.b.wt. and the 2nd dose 20 ml / 60 kg.b.wt. for 5 days
> Sheep & Goats : 1st dose : 20 ml / 30 kg.b.wt. and the 2nd dose 10 ml / 30kg.b.wt. for 5 days
> Warning & Precautions :
> * Mode of administration: By IM,IV (IV injection shouid be administrated slowly )
> *Not administrated in case of Sulphonamide hypersensitivity.
> *In case of intravenous application in horses anaphylactic shock reaction may occur.
> * Not used in case of renal or hepatic impairment.
> * Overdose lead to muscular twitches and spasms , comatose symptoms , liver damages.
> *Fluid intake must be adequate at all time during days of treatment.
> *Transient irritation at injection site.
> *Not used in lactating animals.
> Withdrawal time :
> Meat : 10 days.
> Storage :
> Store in a cool place away from direct sunlight
> Package :
> Amber glass vial of 100 ml .
> MANUFACTURED BY ARABCOMED FOR DRUGEST PHARMACEUTICALS COMPANY

**Image:** none on this page.

---

## 4. Poultry Product Pages (13)

*(Note: category is filed under `/Products/Poultury/` per the original site's spelling.)*

### `/Products/Poultury/Streptotest-Injection/streptotest-injection.html`
**Title:** Streptotest Injection
**Heading:** Streptotest — Injection ( for veterinary use only )

**Body text (verbatim):**
> Composition :-
> Streptomycin Sulphate 200 gm
> Equiv.to streptomycin base 160 gm
> Properties :
> * Streptomycin Sulphate is one member of aminoglycosides,it has a bactericidal activity against mainly G-ve bacteria, it exerts its action by inhibiting the protein synthesis at 30s ribosomal subunits disrupting RNA code producing abnormal peptides
> *Parentrally it crosses all barriers.
> Indications :
> Treatment of respiratory & urogenital infections caused by G-ve bacteria sensitive to streptomycin as E-coil, salmonella, pasteurella.
> Dosage and administration:
> * for the active ingredient:
> By I.M injection for cattle – horse – sheep & goat:
> 10 mg streptomycin base / kg.b.wt. once daily for 3-5 days.
> * For the whole product:
> 200 gm of streptomycin sulphate in 500 ml water for injection reconstitute by adding sterile water to complete 500 ml.
> Solution is 32% concentration each 1 ml contains 320 mg of streptomycin base.
> - Cattle & Horse: 3 ml of the product sol. /100 kg.b.wt. by I.M.
> - Sheep & Goat: 0.75 ml of the product sol. /20 kg b.wt.
> Side Effects:
> * None in recommended doses.
> * Allergy-fever & skin rashes resulting from hyperscnsitivity.
> * Affects 8 th cranial nerve causing auditory impairment & deafness.
> * Nephrotoxicity is the main adverse event .
>
> Contra – indications :
> * Not to be used with other aminoglycosides.
> * The otto toxic effect of aminoglycosides including streptomycin is potentiated by co-administration of ethacrynic acid, mannitol, furosemide & possibly other diuretics .
> Precautions and warnings :
> * Not to be used in cattle producing milk for human consumption.
> * Hypersensitivity may occur in some spscies.
> * Not be used for poultry.
> * Not be used for pregnant animal.
> Withdrawal Time:
> Meat:30 days.
> Storage:
> Store in a cool place away from direct sunlight.
> Package:
> Aglass bottle of 200 gm ..
> Manufactured by Arabcomed for Drugest pharmaceutical company

*(Data-quality note: this product is filed under the Poultry category in the nav, but its own indications/warnings text explicitly targets cattle/horse/sheep/goat and says "Not be used for poultry" — apparent categorization/content mismatch in the source site; flag for the client to clarify before rebuild.)*

**Image:** none on this page.

---

### `/Products/Poultury/Tylotest/tylotest.html`
**Title:** Tylotest
**Heading:** Tylotest — Water soluble powder, for vet. use only

**Body text (verbatim):**
> Composition: -
> Each 100gm  contains:-
> Tylosin  tartarate 100gm
> Equivalent to Tylosin 92.4 gm
> Properties
> Tylosin is a macrolide antibiotic which acts by inhibiting bacterial protein synthesis through binding to 50S ribosomal  subunits within cell wall . It has antibacterial spectrum that is essentially against gram +ve bacteria including (Actinomyces spp . Erysipelothrix rhusiopathiae), certain gram – ve. bacteria including Pasteurella spp and Fusobacterium necrophorum)and certain Spirochetes (as Treponema hyodysenteriae).
> Indications:
> Pre ruminant Calves: Treatment of pneumonia caused by Mycoplasma spp when the disease has been established in the herd.
> Broiler Chickens: Treatment of chronic respiratory diseases (CRD) caused by Mycoplasma gallisepticum and Mycoplasma synoviae when the disease has been established in the flock.
> Treatment and prevention of necrotic enteritis caused by Clostridium perfringens when the disease has been established in the flock
> Turkeys:  Treatment of infectious sinusitis caused by Mycoplasma gallisepticum. when the disease has been established in the flock
> Target species
> Broiler Chickens, pre ruminate Calves, Turkeys
> Dosage and administration:
> by addition to drinking water
> From active ingredient
> Pre ruminant Calves:
> 10 – 20 mg tylosin per kg BW twice daily for 7 - 14 days.
> Turkeys:
> 75 – 100 mg tylosin per kg BW per day for 3 – 5 days
> Broiler Chickens:
> For the treatment of chronic respiratory disease:
> 75 – 100 mg tylosin per kg BW per day for 3 – 5 days.
> From whole product
> Pre ruminant Calves:
> 0.54 gm-1.08gm  of product per 50 kg BW twice daily for 7 - 14 days.
> Turkeys:
> 0.81 gm –1.082 gm /10 kg BW( 1 liter )  per day for 3 – 5 days
> Broiler Chickens:
> 0.81 gm –1.082 gm /10 kg BW( 1 liter )  day for 3 – 5 days
> Warning and precautions
> 1.Operators should wear suitable protective clothing
> 2.avoid contact with human skin
> 3.exposure to tylosin may cause a rash
> Contra indications It shouldn't be used in layers producing eggs for human consumption
> Drug interactions Because tylosin is related to macrolides group, it interacts with Clindamycin (increase antagonism of effect)
> Side effects:  Diarrhoea, epigastric pain
> Withdrawal period
> Pre ruminant Calves (meat and offal): 12 days
> Turkeys (meat and offal): 2 days, Turkey (eggs): Zero days
> Broiler Chickens (meat and offal): 1 day, Chicken (eggs): Zero days
> Storage: Store at temperature not exceed than 30 °C in dry place, use directly after opening
> Packaging  HDPE  bag contains 100,200,250,500 gm & 1kg in plastic jar with outer label
> Manufactured by Arabcomed for Drugest pharmaceuticals Co

**Image:** http://drugest.net/Products/Poultury/Tylotest/Tylotest-500gm-package.png — alt/title "Tylotest 500gm package"

---

### `/Products/Poultury/Doxy-40--W_S_P-/doxy-40--w_s_p-.html`
**Title (nav):** Doxy 40 (W.S.P) — **note:** on-page heading reads "Doxytest 40 ( W.S.P )" — a naming mismatch between nav label and page heading; flag for the rebuild.
**Heading:** Doxytest 40 ( W.S.P ) ( For Veterinary Use Only )

**Body text (verbatim):**
> Composition :- Each 100 gm contains :
> Doxycycline Hcl 52 gm
> Equive to Doxycycline base 40 gm
> Indications :
> * Poultry & Turkey:
> - CRD due to mycoplasm & E.Coil infection.
> - Infectious coryza – air saculitis.
> - Fowl cholera – Colibacillosis – Salmonellosis infections.
> - Chlamydia and Rickettsia infections.
> * Calves & Lambs :
> Respiratory , Urogenital & digestive infections due to doxycycline sensitive micro – organisms
> Dosage and administration :
> - Poultry : 1 gm / 4 liter of  drinking water daily for 3-5 days.
> -Calves – Lambs : 0.25 gm / 20 kg b.wt.in drinking water daily
> For 3-5 days.
> Precautions and Warning :
> Not used for layers.  -
> - Not used for Lactating animals.
> Withdrawal period :-
> - Poultry : 10 days.
> - Calves & Lambs : 21 days.
> Storage : In cool and dry place at room temperature.
> Package : 500gm
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** http://drugest.net/Products/Poultury/Doxy-40--W_S_P-/20181010_142701.png — alt/title "20181010_142701" *(filename indicates this photo was likely taken/uploaded 2018-10-10; a phone-photo filename rather than a proper product shot name)*

---

### `/Products/Poultury/Maduratest/maduratest.html`
**Title:** Maduratest
**Heading:** Maduratest — Premix, Maduramicin 1 %, ( For Veterinary Use Only )

**Body text (verbatim):**
> Composition:-
> Each 1 kg contains :
> Maduramicin ammonium 12.20 gm
> Equiv.To maduramicin base: 10 gm
> Properties :-
> - Maduramicin is a broad spectrum anticoccidial that belongs to the ionophore antibiotic .
> It is effective against Eimeria Tenella , E. acervulina , E. necatrix , E.maxima , E.mivati,E.brunetty & other types of coccidian parasitizing for poultry.
> - Maduramicin produces its anticoccidial effect by interfering with the transport of ions through coccidial cell membrane , causing an influx of positively charged ions (cations).
> This may upset the osmotic balance of the coccidial cell and affects cellular reactions.
> Activity is directed towards the sporozoites and merozoites.
> Indications:
> Prevention of coccidiosis in broilers.
> Dosage & Administration :
> For the active ingredient:
> Broilers :
> 5 ppm in the finished feed.
> For the whole product:
> 0.5 kgm of the product / ton feed continuously as the sole ration to broiler chickens.
> Side Effects:
> - Non in the recommended doses.
> - Toxic effects may appear in high doses to laying hens and on embryo.
> - Toxic to horses and equines.
> Contra-indications :
> The administration of maduramicin is prohibited to layers as the pharmaceutical is accumulated in eggs.
> The administration of maduramicin is prohibited simultaneously with tiamulin & in the period of 7 days before or after application of tiamulin.
> Warning & Precautions:
> Store in cool and dry place away from sunlight.
> Withdrawal time : Broilers : 5 days.
> To be mixed thoroughly with feed.
> Package:
> Laminated bag of 500 gm.
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** none on this page.

---

### `/Products/Poultury/Spiratest-39-MIU--W_S_P-/spiratest-39-miu--w_s_p-.html`
**Title:** Spiratest 39 MIU (W.S.P)
**Heading:** Spiratest 39 MIU, For veterinary use only

**Body text (verbatim):**
> Composition:
> Each 100gm contains
> Spiramycin base     39 MIU .
> Properties:
> Spiratest containing spiramycin of macrolides antibiotic .it produces its bacteriostatic effect by adhering to the ribosome and blocks protein synthesis
> Its strong activity agaiest mycoplasma (M.gllisepticum-M.synoviae-and M.meleagaridis) as well as staphylococcal SPP. and streptococcus spp.
> It is well absorbed through the gut and quickly diffuses to the target tissue (lung- airsac- ovaries) and germ themselves.
> Indications: For poltry and turkey:-
> Avian mycoplasmosis, C.R.D(mycoplasma gallisepticum)- infectious synovitis (mycoplasma synoviae)- infections sinusitis (mycoplasma meleagridis)- sthptococcal and staphyloccal arthritis.
> Dosage:
> Forpoultry and turkeys 75000 iu/kg b.wt
> For the whole products:
> 20gm of product/100kg b.wt.(2gm/lit.)dissolved in drinking water dialy for 3-5 days reg
> See attached pamphlet
> Precautions and warning:
> Withdrawal time : 5days
> Store in adry and cool place away from direct sunlight
> Storge:
> Package:- 100gm-500gm
> Manufactured by Arabcomed for Drugest pharmaceuticals Co..

**Image:** none on this page.

---

### `/Products/Poultury/Chlortetracycline-500/chlortetracycline-500.html`
**Title:** Chlortetracycline 500
**Heading:** Chlortetracycline (For Veterinary Use Only)

**Body text (verbatim):**
> Composition : Each 1gm contains :
> Chlortetracycline Hcl 575 mg
> Equiv. to Chlortetracycline base 500mg
> Properties:-
> - Chlortetracycline is a bactoriostatic antibiotic from tetracycline group used for control and treatment of awide variety of infections caused by G+ve ( coryne bacterium , staph , spp, strept, spp) and G- ve bacteria
> ( E.coli , salmonella spp , Heamophilus spp , Pasteurella spp . ) Mycoplasma ( M. gallisepticum , M. synovial,M.meleagridis ), Spirochaetes, Rickettsiae & Some protozoa.
> - Large dose may be bactericidal.
> - It acts by inhabiting the protein synthesis of 30s ribosomal subunit levels .
> Indications : for treatment of chlortetracycline sensitive infections in :-
> - Poultry : CRD due to Mycoplasma & or E.coli &Enterritis due to E.coli &
> Salmonella spp.
> Fowel cholera ( past – multocida )
> - Calves – Lambs & Kids : Scour & Pneumonia.
> Dosage & administration
> General dose : 20mg / kg.b.wt
> Poultry : 2 gm / 5 litres of drinking water dialy for 3-5 days.
> Calves , Lambs & Kids :- 0.5 gm / 12.5 kg. b.wt. once daily for 3-5 days.
>
> Warnings & Precautions :
> - Not administered to ruminating animals.
> - Not used for layers.
> - Not used in cases of renal impairment.
> Withdrawal time :
> Poultry : 7 days
> Calves – Lambs & kids : 21days
> Side Effects : None in recommended doses
> -Long treatment in young animal may affect teeth & bones due to chelating of calcium.
> Storage : store in a dry place away from direct sunlight
> Package : 500gm
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** none on this page.

---

### `/Products/Poultury/Eimeria-Nil/eimeria-nil.html`
**Title:** Eimeria-Nil
**Heading:** Eimeria-Nil, W.S.P (For veterinary use only)

**Body text (verbatim):**
> Composition :-
> Each 100 gm contains:
> Amprolium hydrochloride 26.3 gm
> Equiv. to Amprolium base 25 gm
> Ethopabate 1.6 gm
> Properties & indication :-
> Eimeria-Nil is the trade name of amprolium which is a water soluble powder.
> Amproluim product its anticoccidial effect by preventing the uptake of thiamine
> ( vit.B1) by the coccidial cell . It acts on the early first generation of merozoites & schizonts
> (a sexual stage ).
> Ethopabate interferes with the folic acid synthesis . It has a great synergistic effect against all coccidial cells .
> Eimeria-Nil is used in the treatment of coccidiosis in Chickens, Turkeys, which is caused by Eimeria tenella, Eimeria acervulina,Eimeria maxima , Eimeria necatrix, Eimeria brunette, wether the coccidian is caecal or intestinal.
> Dosage and Administration :-
> For Active Ingredient :-
> Poultry & Turkeys : 12-25 mg of Amprolium base / k.g.wt dissolved in drinking water once daily for 5-7 days.
> For Whole product :-
> Poultry & Turkeys : 0.75-1.5 gm / 1 litre of drinking water dissolved once daily for 5-7 days.
> Warning & Precautions :
> -Not to be used with layers
> -Not to be used with folic acid and thiamine
> Withdrawal Time : 5 days before slaughter.
> Side effect :
> -It may produce thiamine like deficiency.
> Storge : store in a dry place for away from sun light.
> Package : 500 gm
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** http://drugest.net/Products/Poultury/Eimeria-Nil/Eimeria-Nil-Package.png — alt/title "Eimeria-Nil Package"

---

### `/Products/Poultury/Nifulin-Forte--W_D_P-/nifulin-forte--w_d_p-.html`
**Title:** Nifulin Forte (W.D.P)
**Heading:** Nifulin-Forte (W.D.P) (For Veterinary Use Only)

**Body text (verbatim):**
> Composition:-
> Each 100 gm contains
>  Metronidazole 20 gm
> Oxytetracycline Hcl 23.5 gm
> Equiv.To oxytetracycline base: 20 gm
> Properties :-
> Nifulin-forte is a combination of Oxytetracycline & Metronidazole :
> Oxytetracycline is a broad spectrum antibiotic, it is active against awide range of G+ve bacteria ( coryne bacterium spp-streptococcus spp.staph spp.)& G-ve bacteria ( E.coli-salmonella-Pasteurella spp.-haemophilus spp.) mycoplasma-rickettsiae-chlamydia& some protozoa.
> Metronidazole is active against most obligate anaerobes including bacteroid spp.
> Fusobacterium , Clostridium spp., it acts on Trichomonas , Giardia & Entamiba- hystolytica (the trophozoit form rather than encysted form ) it also acts as bactericidal against susceptible bacteria.
> The exact mechanism of action of Metronidazole is not completely understood, but it is taken up by anaerobic organisms where it is reduced to an unidentified polar compound which is believed to be responsible for antimicrobial activity by disrupting DNA& nucleic acid synthesis in the organisms.
> Oxytetracycline produces its antibacterial effect by binding reversibly with bacterial 30s ribosome subunit & thereby inhibit the protein synthesis of the bacterial cell.
> Indications:
> Enteric and systemic infections caused by anaerobic bacteria in horses.
> For treatment of Giardiasis and Trichomonisis in Dogs & Cats.
> Respiratory infections due to bacterial sensitive to oxytetracycline.
> Digestive infections due to bacterial sensitive to oxytetracycline.
> Urogenital infections due to bacterial sensitive to oxytetracycline.
> Dosage & Administration :
> Nifulin-forte is given orally via drinking water.
> Dogs : 2.5 gm / 10 kg.b.wt 2 times daily for 5 days.
> Cats: 0.5 gm / 5 kg.b.wt 2 times daily for 10 days.
> Foals : 5-6.25 gm / 50 kg.b.wt 2 times daily
> Warning & Precautions:
> *Not used for meat , milk and egg producing animals.
> * Not used in debilitated , pregnant or nursing animals.
> *Care must be taken during treatment of animals suffering from.
> * Renal or hepatic impairment.
> * During treatment using large dose or for long period ; weakness.
> * Nausea , vomiting and diarrhea may occur.
> Storage :
> Store in a dry place away from direct sunlight.
> Package: 500 gm
> Manufactured by Arabcomed for Drugest pharmaceutical company

*(Data-quality note: dosing instructions reference dogs, cats and foals rather than poultry, despite being filed under the Poultry category — same kind of category/content mismatch seen on Streptotest; flag for the client.)*

**Image:** http://drugest.net/Products/Poultury/Nifulin-Forte--W_D_P-/nifulin-Forte.png — alt/title "nifulin-Forte"

---

### `/Products/Poultury/Colistin-400/colistin-400.html`
**Title:** Colistin 400
**Heading:** Colistin 400, Dosage form: water soluble powder (For veterinary use only)

**Body text (verbatim):**
> Composition:
> Each 1 g contain:
> Colistin sulphate 166.66 mg
> Equivalent to colistin 133.3 mg
> ( Equi.  To 4 MIU )
> Properties:
> Colistin is a bactericidal polypeptide antibiotic belongs to polymyxin group. It  produces its antibacterial effect by interacting strongly with phospholipids in bacterial cell membrane & radically disturbed their permeability & function .
> Colistin is active against gram negative bacteria including E. coli & Salmonella spp.
> Indications:
> It is used for treatment of gastro intestinal infection:
> •Colibacillosis caused by E – coli susceptible to colistin.
> •Salmonellosis caused by Salmonella spp. susceptible to colistin.
> Target species:
> Non ruminant Calves , swine & poultry.
> Dosage & administration:
> orally via drinking water.
> Active ingredient
> Non ruminant Calves & swine: 102,500 IU of colistin / kg b. wt.
> Poultry: 61,500 IU of colistin / kg b. wt.
>
> Whole produc
> Non ruminant Calves  & swine: 0.025 g of the product /kg b. wt.  / 12 hours per day for 3 days.
> Poultry : 0.0153 g of the product  / kg b. wt. per day for 3 days.
> (Eq. to 0.15 g of the product / liter drinking water).
> Warnings & precautions:
> The medicated water should be prepared daily.
> Avoid combination with muscle relaxant
> Contra – indication:
> Not to be used with cations (calcium , magnesium & manganese) and unsaturated fatty acids as colistin antagonized with them.
> Side – effects:
> Nausea, reduced appetite
> Withdrawal time:
> Non ruminant Calves: 14 day
> Swine: 7 days.
> Poultry : zero days
> Eggs: zero days
> Storage:
> Stored in dry place at temp. not exceed 30 °C to be used immediately after opening and reconstitution.
> Packs :-  500gm
> Manufactured by Arabcomed for Drugest pharmaceuticals Co..

**Image:** http://drugest.net/Products/Poultury/Colistin-400/colistin400.png — alt/title "colistin400"

---

### `/Products/Poultury/Oxytest-40-/oxytest-40-.html`
**Title:** Oxytest 40%
**Heading:** Oxytest 40% wsp, Water soluble powder, For vet. use only

**Body text (verbatim):**
> Composition: -
> Each 1 gm contains
> Oxytetracycline hydrochloride 431.7 mg
> Equi. To oxytetracycline base 400 mg
> PropertiesOxytetracycline is a broad-spectrum antibiotic. It is mainly active against Gram-positive and Gram negative bacteria, aerobic and anaerobic, mycoplasma, Chlamydia and Rickettsiae
> It acts by reversibly to the ribosomal subunit 30S receptors to a blockage of the union between aminoacyl-tRNA to the site corresponding to the mRNA-ribosome complex messenger. Then inhibition of the protein synthesis and inhibits bacterial growth.
> Indications:
> It is used for the treatment of:
> Broiler chickens:
> *Arthritis caused by Staphylococcus aureus.
> *Chronic Respiratory Disease (CRD) caused by Mycoplasma gallisepticum.
> *Infectious enteritis caused by E. coli.
> *Fowl cholera caused by Pasteurella multocida.
> *Fowl coryza caused by Haemophilus paragallinarum.
> *Gangrenous dermatitis caused by Clostridium spp.
> *Typhoid & paratyphoid caused by Salmonella  spp.
> Pre – ruminating calves:
> *Bovine pneumonia caused by Mycoplasma bovis , Pasteurella haemolytica , P. multocida & Haemophilus somnus.
> *Scours , neonatal diarrhea  caused by E. coli & Salmonella  spp.
> Target Species Broiler Chickens ,pre-ruminating calves
> Dosage and administration:  by addition to drinking water
> From active ingredient  :
> Broiler chickens:
>  20mg of oxytetracycline /kg body weight 3-5 days
> Pre – ruminating calves:
> 10-30 mg / kg bodyweight 1-2 times daily
> From whole product
> Broiler chickens:
> 0.5 gm of product / liter of drinking water 3-5 days
> Pre – ruminating calves:
> 2.5gm7.5gm  of product /100 kg body weight 1-2 times daily
> Warning and precautions
> Should be dissolved in water, before use.
> Prolonged or repeated use should be avoided
> Do not use in laying birds producing eggs intended for human consumption
> Contra indications hypersensitivity to oxytetracycline or any other substance from tetracyclines group.
> Side effects:  gastro-intestinal disorder and less frequently, allergic and photosensitivity reactions.
> Interaction with other drugs:
> should not be administered with antacids, gels containing aluminium, preparations containing vitamins or minerals as insoluble complexes will be formed, which decreases the absorption of the antibiotic.
> Withdrawal period
>  Meat and offal:7 days
> Eggs: do not use in laying birds producing eggs intended for human consumption
> Storage: Keep on cool &dry place not exceeding 30° C. Keep out of reach of children.
> Packaging: HDPE plastic bag each of 25,100.250,500,1000 gm , 1,2,5,10,15,20,25 kg in plastic jar with outer label
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** http://drugest.net/Products/Poultury/Oxytest-40-/Oxytest-40-Package.png — alt/title "Oxytest 40 Package"

---

### `/Products/Poultury/Coccidest/coccidest.html`
**Title:** Coccidest
**Heading:** Coccidest, Dosage form: oral solution (For veterinary use only)

**Body text (verbatim):**
> Composition:
> Each 1 ml contain:
> Toltrazuril 25 mg
> Properties:
> Toltrazuril induces changes in the fine structure of coccidial development stages that are mainly due to the swelling of
> the endoplasmic reticulum and of the Golgi apparatus and to abnormalities in the perinuclear space and disturbances in
> nuclear division. Toltrazuril also causes a reduction of enzymes in the respiratory chain of the parasites.
> Pharmacodynamic studies in laboratory animals indicated that toltrazuril had no anticoagulant, fibrinolytic, analgesic,
> diuretic or anticonvulsant effect. It had no effect on gastrointestinal transit time. Oral doses of up to 30 mg/kg bw
> had no haemodynamic or cardiac effects in anaesthetised dogs although 100mg/kg bw caused a slight tensor effect as
> reflected by an increase in peripheral resistance
> Indications:
> For the treatment and control of coccidiosis, Toltrazuril is effective against all intestinal stages of susceptible coccidia.
> To assist in the development of natural immunity to coccidiosis in breeder and layer replacer stock exposed to continuous
> challenge of virulent strains of coccidian
> Target species:
> Broilers and Broiler Breeders
>
> Dosage & administration:
> orally in drinking water.
> Active ingredient
> 7 mg / kg body weight
> Whole product
> 280ml /100kg body weight in drinking water for 25 successive days (2.5-3 ml/L)
> Warnings & precautions:
> This product is compatible with antibiotics such as enrofloxacin, ampicillin, tetracycline, tiamulin and tylosin.
> Contra – indication:
> Not to be used with chickens produces eggs for human consumption.
> Side – effects:
> No side effects in the recommended dose.
> Withdrawal time:
> 21 day
> Storage:
> Stored at temp. not exceed 30 °C to.
> Packs:
> HDPE plastic bottle each of 25,100.250,500,1000 ml , 1,2,5,10,15,20,25 liter with outer label
> Manufactured by Arabcomed for Drugest pharmaceuticals Co..

**Image:** http://drugest.net/Products/Poultury/Coccidest/Coccidest-Package.png — alt/title "Coccidest Package"

---

### `/Products/Poultury/Quinoxaline-500/quinoxaline-500.html`
**Title:** Quinoxaline 500
**Heading:** Quinoxaline 500, W.S.P, For veterinary use only

**Body text (verbatim):**
> Composition :-
> Each 100 gm contains:
> Sulphaquinoxaline Na 63 gm
> Equiv. to sulphaquinoxaline base 50 gm
> Properties :-
> -Quinoxaline 500 is a sulphaquinoxaline derivative which acts as antibacterial.
> - Sulphaquinoxalines & other sulphonamides have a similar structure to p-aminobenzoic acid (PABA) & interfere with the synthesis of nucleic acids in sensitive micro – organisms ( bacteria or coccidial cell) by blocking the conversion of PABA to the Co-enzyme dihydrofolic acid, a reduced form of folic acid , in animals dihydro-folic acid is obtained from dietary folic acid so sulphonamides do not affect host cells.
> Indications:
> For Poultry - Turkyes - Rabbits :
> - Quinoxaline 500 is effective against awide variety of infections caused by sulphaquinoxaline sensitive (G+ve) bacteria ( Staph – Strept. – Coryne) &(G-ve) bacteria ( Pasteurella – Salmonella – E.Coli) affecting respiratory Urogenital or gastrointestinal systems.
> -Drug is also effective on coccidiosis in poultry ,& hence used for the treatment of coccidial infections caused by Eimeria maxima – E.mivatis – E.nectrix & E.burnetti, its effect is weak on E.Tenella in broilers.
> - It is used in the treatment of hepatic coccidiosis in rabbits.
> Dosage & Administration:-
> Given orally via drinking water.
> For Active ingredient:
> Poultry – Turkyes: 50 mg /kg for 3-5 daYS.
> For whole product:
> Poultry: 1 gm / litre of drinking water daily for 3-5  days
>
> Side Effects:
> - Long use may result in crystalluria & nephrotoxicity.
> - Bleeding is expected with prolonged use.
> Contra – indications:
> -Not administered to ruminating animals.
> -Not used for layers.
> -Not to be given with penicillins or chloramphenicol
> Warnings & Precautions:
> Withdrawal time : poultry & Turkey: 10 days
> Not to be exceeded in treatment than 7 days.
> Storge:
> Store in a cool, dry place, away from from direct sunlight
> Package: 500 gm
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** none on this page.

---

### `/Products/Poultury/Supermox-40/supermox-40.html`
**Title:** Supermox 40
**Heading:** Super mox 40 (For Veterinary Use Only)

**Body text (verbatim):**
> Composition :
> Each 100gm contains :
> Amoxicillin trihydrate 48.6 gm
> Equiv. to Amoxicillin base 40 gm
> Properties : Supermox 40 :-
> - Is the trade name of amoxicillin trihydrate, a broad spectrum antibiotic.
> - Its bactericidal effect by collapse of the cytoplasmic membrane of the bacterial cell.
> - Its active against G+Ve bacteria ( Clostrisia , Staph , Strpt , Coryne ) &
> G-Ve bacteria ( E. Coli , Salmonella , Pasteurella haemophilus )
> Indication : Supermox 40 in indicated in the treatment of :
> - Poultry : Clostridial infections ( necrotic enteritis ) – Colisepticaemia fowel cholera – Salmonellosis – coryza
> - Calves – Lambs & Kids : Scour due to E.coli- salmonella. Staph & streptococcal infections.
> Pneumonia & urogental infections due to sensitive organisms
> Dosage & administration : Supermox 40 is given orally via drinking water for Poultry : 20 mg amoxicillin base / kg b.wt. equive . to 100 gm of the product / 2000 kg b.wt.
> In drinking water ( one gm / 2 lit.) daily for 3-5 days ( 5 days in salmonella infections) for calves – lampbs & kids : 10 mg amoxicillin base / kg b.wt. equiv. to 0.5 gm / 20 kg b.wt.
> In drinking water twice daily for 3-5 days (5 days in salmonella infections)
>
> Warnings & Precautions :
> -Not used for prophylaxis in case of infection spread
> -Not used for layers
> - Used only for calves
> - Lambs & kids
> - Contraindicated in previous histort of allergy caused by B-lactam
> Withdrawal time : Calves – Lambs & kids : 14 days
> Poultry : 7 days
> Storage :
> store in a dry place away from direct sunlight
> Package : 500gm
> Manufactured by Arabcomed for Drugest pharmaceutical company

**Image:** http://drugest.net/Products/Poultury/Supermox-40/Supermox-package.png — alt/title "Supermox package"

---

## 5. Other Pages

### `/News/news.html` — News

**Title:** News

**Layout:** Same as global.

**Text content:** None — no headline, no article body, no date, no author. The page consists of two images only:

| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/News/logo-e2.png | logo-e2 | logo-e2 |
| http://drugest.net/News/EnergeticForsakenCutworm-max-1mb.gif | EnergeticForsakenCutworm-max-1mb | EnergeticForsakenCutworm-max-1mb |

*(The second image's filename ("EnergeticForsakenCutworm-max-1mb.gif") looks like an auto-generated/stock GIF filename rather than a meaningful news graphic — likely a placeholder that was never replaced with real news content. No news articles exist anywhere on the site; the "News" nav item currently leads to an effectively empty page.)*

**Scripts/embeds:** Standard only (`jquery.js`, `navbars.js`, `news_nof.js`).

---

### `/Contact/contact.html` — Contact

**Title:** Contact

**Layout:** Same as global, except: (a) `nof_jcarousel_skin.css` is not linked on this page, (b) body uses UTF-8 charset (most other pages also do; homepage uses ISO-8859-1), (c) **no `<form>` element and no map embed of any kind** — see Section 1 findings.

**Body text (verbatim, single centered text block):**
> scintific office
>
> Adress:
>
> 35A Emtidad Ramsis 2 – Nasr city- Ciro- Egypt
>
> Phone:
>
> 002(02) 20810951
>
> Fax:
>
> 002(02)20810989
>
> Call Phone :
>
> 00201121283333
>
> Email:
>
> info@drugest.net (mailto link)
>
> Web site:
>
> www.drugest.net
>
> Branch :
>
> 4 El-Shawarby St. Cairo
>
> Tel :
>
> 0020(2)23927020
> 0020(2)23924520
>
> Fax :
>
> 0020(2)23924478

(Note: "scintific office" and "Ciro" are verbatim typos in the source for "scientific office" and "Cairo".)

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/Contact/logo-e1.png | logo-e1 | logo-e1 |
| http://drugest.net/Contact/logo-a.jpg | logo-a | logo-a |

**Form/backend:** **None found.** No `<form>` tag exists on this page (confirmed via full-page grep). The only interactive contact element is the `mailto:info@drugest.net` link. **There is nothing to migrate for a "backend" — a new contact form/handler must be built from scratch for the rebuild.**

**Scripts/embeds:** Standard only (`jquery.js`, `navbars.js`, `contact_nof.js`). No Google Maps iframe, no analytics.

---

### `/Gallery/gallery.html` — Gallery

**Title:** Gallery

**Layout:** Same as global. Three large poster images stacked/side-by-side, no captions or descriptive text, no lightbox/carousel markup detected in the HTML (despite `nof_jcarousel_skin.css` existing sitewide, this page does not reference jCarousel markup).

**Text content:** None.

**Images:**
| src (absolute) | alt | title |
|---|---|---|
| http://drugest.net/Gallery/poster2.jpg | poster2 | poster2 |
| http://drugest.net/Gallery/poster1.png | poster1 | poster1 |
| http://drugest.net/Gallery/poster4.png | poster4 | poster4 |

**Scripts/embeds:** Standard only (`jquery.js`, `navbars.js`, `gallery_nof.js`).

---

### `/Drugest-Egypt/drugest-egypt.html` — Drugest-Egypt

**Title:** Drugest-Egypt

**Layout:** Same as global. Main content is an H2 heading followed by a large HTML `<table>` (12 data rows + 1 header row) listing products "under registration" with full composition detail per row (not yet linked to individual detail pages — these are pipeline/future products, not yet-live catalog items).

**Heading:** H2 "Products under registration" (36px)

**Table — Products under registration** (columns: #, Product Name, Active Ingredient — verbatim composition text preserved):

| # | Product Name | Active Ingredient / Composition |
|---|---|---|
| 1 | Mycinotetra | Each 1gm contains — Oxytetracyclin "as Hydrochloride" 0.20gm; Neomycin "as sulphate" 0.20gm. Powder for oral solutio[n] |
| 2 | Eprindest | Each 1 ml contains — 50mg eprinomectin. Inj solution |
| 3 | Tylospectogest | Each 1 ml contains — Spectinomycin dihydrochloride Pentahydrate equal to base 100mg; Tylosin tartrate corresponding to 50mg base. Inj solution |
| 4 | Sulbac | Each 1 kg contains — Dimetridazole 100g; Sulfadimethoxin sodium 100g (Eq. to 93.37g Sulfadimethoxin base); Vitamin k3 (MSB) 50g. Water soluble Powder |
| 5 | Phenollen | Phenoxymethylpenicillin potassium 887mg (Eq.to 800 mg Phenoxymethylpenicillin). Water soluble Powder |
| 6 | Amprotridine | Each 100gm contains — Amprolium hcl 21.5gm (Eq.to amprolium base 20gm); Sulphadimidine Sodium 43.0gm (Eq.to Sulphadimidine base 40gm); Ethopabate 1.0 gm; Trimethoprim 8.0 gm; Vitamin k3 3.0 gm. Water soluble Powder |
| 7 | Erythrocyano | Each 100ml contains — Erythromycin thiocynate 26.7 gm (Eq. to Erythromycin base 25 gm). Oral solution |
| 8 | Lincodest | Each 100gm contains — Lincomycin hcl 40g (Eq.to lincomycin base 35.3g). Water soluble Powder |
| 9 | Erythroresp | Each 1 gm contains — Erythromycin (thiocyanate) 50 mg; Trimethoprim 20 mg; Sulfadiazine (sodium salt) 100mg; Bromhexine (hydrochloride) 2 mg. Powder for oral solution |
| 10 | Abadest | Each 1 ml contains — Abamectin 10 mg; Clorsulon 100mg. Injectable solution |
| 11 | Drugoben | Each vial (20ml) contains — Benzylpenicillin sodium 3,600,000 IU; Benzylpenicillin procaine 2,400,000 IU; Dihydrostreptomycin sulphate 6,6 g |
| 12 | Dimetridazole | Each 1 gm contains — Dimetridazole 100 mg; Pyrimethamine 5 mg; Sulphaquinoxaline sodium 60 mg (Eq.to Sulphaquinoxaline base 55.9 mg) |

**Images:** None found on this page (only the heading + table).

**Scripts/embeds:** Standard only (`jquery.js`, `navbars.js`, `drugest-egypt_nof.js`).

---

## 6. Appendix — Shared CSS Assets

- **`fusion.css`** (2.5KB): NOF-builder base/reset framework. Sets heading font sizes (h1 31px → h6 10px), `pre` monospace font stack, `.nof-*` utility classes for clearfix/positioning/alignment/wrap. No colors, no brand styling.
- **`style.css`** (21.5KB): The actual brand stylesheet. Defines: body background tile (`subBackground.png`) + Lato font + `#808080` text; footer positioning; `.nof_MonsterBlue*` navbar text-style variants (all using Lobster Two font at various sizes/colors — leftover from the NOF theme named "MonsterBlue", suggesting the underlying NOF template family); link states (`A`, `A:hover`, `A:visited`, `A:active`); heading colors (H1–H6 → `#7DA4AD`/Lobster Two); jQuery UI accordion/tabs/toggle-pane theming (`#c7dbd8` borders, `#ffffff` backgrounds, `#709ba6` selected-state text, `#fafafa` default-state text) with icon backgrounds (`AccordionTabOpen.png`, `AccordionTabClosed.png`, `tab_top.png`, `TogglePaneOpen.png`, `TogglePaneClosed.png`); and duplicated (repeated ~6×, apparently copy-pasted) jCarousel arrow-icon rules referencing both a non-existent `Images\...` Windows-style path and working `./...png` relative paths.
- **`site.css`**: Empty stub — contains only the comment `/* CSS definition file containing site wide stylesheets */`. Not used for anything.
- **`nof_jcarousel_skin.css`** (4.9KB): jCarousel plugin skin — sizing/overflow rules plus `#fff`/`#000` placeholder colors and transition timing; only meaningfully referenced on the homepage (`index.html`), though no visible carousel markup was found in the homepage HTML itself (may be a vestige of an earlier design, or activated purely via JS not captured in a static crawl).

---

## 7. Data-Quality Flags for the Rebuild (summary)

1. **No contact form exists** — `Contact/contact.html` is static text + a `mailto:` link only. A new form (with a real backend/email service) needs to be designed.
2. **No news content** — `News/news.html` has no articles, just two images (one of which has a placeholder-looking filename). Decide whether to seed real news/blog content or drop the section.
3. **Several product images are mismatched/mislabeled**: Nemafluke's image is actually the Nifulin-Forte package photo; Doxy 40's image filename is a raw phone-photo name (`20181010_142701.png`).
4. **Category/content mismatches**: Streptotest Injection and Nifulin-Forte are filed under the Poultry nav category, but their on-page indications/dosage text targets cattle/horse/sheep/goat/dogs/cats/foals, not poultry.
5. **Nav-label vs. on-page-heading mismatch**: "Doxy 40 (W.S.P)" in the nav vs. "Doxytest 40 (W.S.P)" as the on-page product name.
6. **Source copy contains typos/OCR-style artifacts** (e.g., "scintific office", "Ciro", "Dramktin" vs. "Drumectin", "Shouid", "Storge") — preserved verbatim in this document per instructions, but should be corrected in the rebuild's copy.
7. **Social icons in the homepage footer are non-functional** (bare images, no real social profiles linked) — decide whether to link real profiles or drop the icons.
8. **Several large-animal and poultry product pages have no product image at all** (Oxytest 30 L.A., Albendest 5%, Nova 500, Sulphaject 33.3, Streptotest, Maduratest, Spiratest 39 MIU, Chlortetracycline 500, Quinoxaline 500) — new product photography/packaging shots will be needed for a polished rebuild.
