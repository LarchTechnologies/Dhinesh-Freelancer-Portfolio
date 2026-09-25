# Dhinesh — Freelancer Portfolio (Industrial / Manufacturing Focus)

A single-page freelancer portfolio for **Dhinesh — freelance web developer** whose clients are
manufacturers, machine shops and engineering suppliers. The whole site is designed as an
**engineering drawing sheet**: title block, zone markers, bill of services as a BOM table,
process as a routing sheet, bio as a mill test certificate, contact as an RFQ work-order form.

Design direction: **engineering blueprint** — deep navy sheet, ice-blue line work, grid paper,
condensed industrial display type + drafting mono annotations. No templates, no frameworks,
no build step.

## Structure

```
index.html          # single page (hero, services, work, process, about, RFQ contact, title block)
css/styles.css      # blueprint design system
js/main.js          # nav, scroll reveal, active section, RFQ → prefilled mailto
img/                # industrial imagery (generated for this project)
```

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 4173
# → http://localhost:4173
```

Static site — deploy anywhere: GitHub Pages, Netlify, Cloudflare Pages, Vercel. No env vars,
no backend. The RFQ form composes a `mailto:` work order in the visitor's mail client.

## Typography

- **Saira Condensed** (600–800) — display headlines, condensed like industrial signage
- **IBM Plex Mono** (400–600) — drafting annotations, tables, labels, dimensions
- **IBM Plex Sans** (400–500) — body copy

Loaded from Google Fonts (`fonts.googleapis.com`).

## ⚠ Placeholder content — replace with your real details

The site is production-shaped but these are stand-ins:

| What | Where | Replace with |
|---|---|---|
| `hello@dhinesh.dev` | contact panel, footer, `js/main.js` (`CONTACT_EMAIL`) | your email |
| `+91 98765 43210` | contact panel (`tel:` + `wa.me` links) | your phone / WhatsApp |
| `github.com/dhinesh`, `linkedin.com/in/dhinesh` | footer links | your profiles |
| Client names (Anaimalai Hydraulics, Madurai Precision Works, Thangam Fasteners) + metrics | `#work` | your real case studies |
| Testimonials (3 quotes) | `#about` | real client quotes |
| Stats strip (12+ plants, 3,200+ SKUs, 1.4s) | hero | your real numbers |
| Slots “OCT / NOV 2026”, “2 projects / month” | contact + cert | your real availability |
| Service lead times / budget ranges | services table + RFQ form | your real pricing |

Image assets in `img/` were generated for this project and are safe to use commercially —
swap in real client photos/screenshots when you have releases.

## License

Private portfolio — all content © Dhinesh. Do not scale from this drawing.
