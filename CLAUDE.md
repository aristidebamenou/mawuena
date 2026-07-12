# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website (in French) for "Maison Mawuena", a massage & wellness business. Built with **Astro 5** and **Tailwind CSS v4** (via `@tailwindcss/vite`). No UI framework — interactivity is vanilla JS in component `<script>` tags. Output is pure static HTML.

`legacy/index.html` is the original single-file mockup the site was migrated from — reference only, do not edit.

## Commands

```bash
npm run dev        # dev server (localhost:4321)
npm run build      # static build into dist/
npm run preview    # serve the built dist/
```

There are no tests or linters configured.

## Architecture

- **`src/layouts/Base.astro`** — shared `<head>` (SEO meta via `titre`/`description` props), Header, Footer, and the global `.reveal` scroll-animation script. Every page wraps its content in this layout.
- **`src/pages/`** — file-based routing; `index.astro` just composes section components in order.
- **`src/components/`** — one component per page section (Hero, Manifeste, Soins, Deroule, Maison, Temoignages, Contact). Each component owns its own interactivity in a `<script>` tag at the bottom (menu, accordion, carousel, form).
- **`src/data/`** — content lives here, not in markup: `soins.js` (services + prices + images), `temoignages.js`, `etapes.js` (accordion steps), `site.js` (nav links, contact info, site meta). To change a price or add a testimonial, edit these files only.
- **`src/assets/images/`** — source JPEGs, rendered through `astro:assets` `<Image>` (WebP conversion, `srcset`, lazy-loading at build time). Add `widths`/`sizes` when placing a new image.

## Brand charter (charte)

- The palette is declared once in the `@theme` block of `src/styles/global.css` (`olive`, `wall`, `linen`, `grass`, `skin`, `wood`) and used as Tailwind utilities (`bg-wall`, `text-olive`, `border-grass/40`). Never hardcode hex values in components.
- Typography: `font-brand` (custom utility: Gurmukhi MN with documented fallback to Playfair/Georgia, includes letter-spacing) for logo & large headings; `font-display` (Playfair Display) for secondary headings/emphasis, usually italic; body is Montserrat 300.
- Classes toggled from JS (e.g. `bg-olive` in Header's scroll handler) must appear literally in a source file so Tailwind's scanner generates them.

## Conventions

- Content and comments are in French; keep new copy and comments in French.
- Accessibility patterns are deliberate: `aria-expanded`/`aria-controls` on interactive widgets, `prefers-reduced-motion` handling (CSS + carousel autoplay), visible focus styles. Preserve them when editing.
- Placeholder content still to be confirmed by the client: prices ("00 €"), address, phone, hours (flagged `à confirmer` in `src/data/site.js`). The contact form is front-only simulation — no real submission is wired up.