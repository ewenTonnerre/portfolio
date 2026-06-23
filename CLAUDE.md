@AGENTS.md

# Portfolio v2 — Ewen Tonnerre

## Stack

- **Next.js 16.2.9** (App Router, `src/app/`) — breaking changes vs older versions, always read `node_modules/next/dist/docs/` first
- **React 19.2.4**
- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.js`, CSS-first config in `globals.css`
- **lucide-react 1.18.0** — no `Github`/`Linkedin` icons (removed in this version), use inline SVGs for brand icons
- **JavaScript** (not TypeScript)

## Tailwind v4 key differences

- Dark mode: `@custom-variant dark (&:where(.dark, .dark *));` in `globals.css` — NOT `darkMode: 'class'`
- Gradients: `bg-linear-to-br` not `bg-gradient-to-br`
- The IDE linter suggests canonical classes: `grow` not `flex-grow`, `shrink-0` not `flex-shrink-0`, `h-px` not `h-[1px]`, `border-10` not `border-[10px]`, `h-165` not `h-[660px]`

## Architecture

All components are Client Components (`'use client'`) because they consume `useApp()` for lang/theme state.

```
src/
├── app/
│   ├── layout.js        — Inter font, French SEO metadata, JSON-LD Person schema, AppProvider
│   ├── page.js          — Composes all sections
│   └── globals.css      — Tailwind v4 import, dark variant, phone-3d CSS class, flow-up keyframe
├── context/
│   └── AppContext.js    — lang (en/fr) + theme (dark/light) state, toggleLang/toggleTheme
├── lib/
│   └── translations.js  — ALL page text in EN and FR — edit here for any copy change
└── components/
    ├── AmbientBg.js     — Background SVG lines + blur glows (Server Component)
    ├── Header.js        — Fixed nav, EN/FR toggle, dark/light toggle
    ├── Hero.js          — Hero headline, bio, GitHub/LinkedIn buttons
    ├── PhoneMockup.js   — 3D phone with skill cards (CSS class phone-3d handles the transform)
    ├── Expertise.js     — 4-column expertise cards
    ├── Experience.js    — Professional timeline + Education timeline
    ├── Projects.js      — Project cards (6 real projects)
    └── Contact.js       — Contact section with email/GitHub/LinkedIn
```

## Content — single source of truth

**All text lives in `src/lib/translations.js`** — never hardcode strings in components.
Structure: `translations.en.*` and `translations.fr.*`, consumed via `const { t } = useApp()`.
Default language is **French** (`useState('fr')` in `AppContext.js`).

## Real content summary

**Owner:** Ewen Tonnerre — Développeur fullstack / orienté IA — Bordeaux, France

**Experiences:**

1. CDI ELSAN (current) — fullstack + AI agents with skills & context, internal agent dev system
2. Alternance ELSAN 2022–2024 — web/mobile tools for clinics
3. Alternance Alienor.org 2021–2022 — mobile apps for Nouvelle-Aquitaine museums

**Education:**

1. Master Informatique — Ynov Campus Bordeaux 2022–2024
2. LP Développement Mobile — IUT La Rochelle 2021–2022
3. DUT Informatique — IUT La Rochelle 2019–2021

**Projects:** Influx (Flutter/Laravel/React), Scan Order (Flutter/Firebase), Un repas Un sourire (live: https://1repas1sourire.netlify.app/), Hackathon La Rochelle 2021 (1st place), SLT, Musée Maritime

**Social:** https://github.com/ewen-tonnerre · https://linkedin.com/in/ewen-tonnerre

## SEO setup (layout.js)

- `lang="fr"` on `<html>` — French primary for Google indexing
- French metadata: title, description, keywords, OG locale `fr_FR`
- JSON-LD `Person` schema injected in `<head>`

## Design tokens (from DESIGN.md)

- Primary: `#d946ef` (fuchsia-500), Secondary: `#22d3ee` (cyan-400)
- Background dark: `#0a0a0f`
- Cards: `backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10`
- Buttons: `rounded-full` (pill shape)
- Section gap: `gap-32`

## Navigation

Logo + `À PROPOS / EXPERTISE / PARCOURS / CONTACT` links + EN/FR toggle + dark/light toggle.
No PROJECTS link in nav (projects are in the page but not linked from nav).

## Phone mockup

3D CSS transform via `.phone-3d` class in `globals.css` — hover flattens it. Two animated SVG lines in `AmbientBg.js` have a 4s delay between them (`animation-delay` on the cyan path).

## Commands

```bash
yarn dev       # dev server
yarn build     # production build (must pass before any PR)
```
