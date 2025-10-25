# Davide Scarano – Frontend/DX Portfolio

![React 19](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=222)
![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=fff)
![Vite 6](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=fff)
![styled-components 6](https://img.shields.io/badge/styled--components-6-db7093)
![i18next](https://img.shields.io/badge/i18next-25-26a5d3)

Personal portfolio for Davide Scarano. The UI is completely data-driven via multilingual JSON, includes theme switching (light/dark) with custom accent colors, and ships animated sections powered by React 19, TypeScript 5.7, and Vite 6.

## ✨ Highlights

- **Data-driven copy**: every section (hero, about, skills, open source, experience) reads from `src/data/portfolio.[locale].json` and is type-safe thanks to `src/data/portfolio.types.ts`.
- **Bilingual (IT/EN)**: `i18next` + `react-i18next` handle navigation labels, header controls, and fallbacks. Switching the locale also swaps the portfolio JSON.
- **Theme & accent picker**: header menu to toggle light/dark plus four accent colors (`SECONDARY_COLORS`) with persistence in `localStorage`.
- **Animated hero**: GSAP TextPlugin animates the typing headline, while the skill orbit renders layered icon rings with CTA buttons tied to social profiles.
- **Product storytelling UX**: About, Skills, Open Source Products, Open Source Contributions, and Experience sections reuse the same data model for consistent responsive layouts.
- **Dynamic SEO**: `src/App.hooks.tsx` keeps `document.title`, meta description, and keywords in sync with the active portfolio data.

## 🧱 Core stack

- React 19 + TypeScript 5.7 + Vite 6
- styled-components 6 with typed theming (`src/styles/theme.ts`, `src/styles/styled.d.ts`)
- i18next / react-i18next for UI localization
- GSAP (TextPlugin) for hero typing animations
- ESLint 9 + TypeScript ESLint for consistent linting

## 🗂️ Project structure

```
├── public/
│   └── orbiter-icons/       # assets consumed by HeroOrbit
├── src/
│   ├── App.tsx              # root layout and section composition
│   ├── App.hooks.tsx        # theme/i18n/view-model logic + meta tags
│   ├── components/
│   │   ├── Header/          # navigation, theme menu, language select
│   │   ├── Footer/
│   │   └── sections/        # Hero, About, Skills, OpenSource*, Experience
│   ├── data/
│   │   ├── portfolio.en.json
│   │   ├── portfolio.it.json
│   │   └── portfolio.types.ts
│   ├── i18n/                # config + common.*.json
│   └── styles/              # GlobalStyle, icons, theme utilities
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## 📦 Available scripts

| Command          | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `npm run dev`    | Start the Vite dev server with HMR.                                          |
| `npm run build`  | Run TypeScript build (`tsc -b`) and emit the production bundle (`vite build`).|
| `npm run preview`| Serve the built app locally for a quick smoke test.                          |
| `npm run lint`   | Lint the entire workspace with ESLint.                                       |
| `npm run typecheck` | Run a type-only compilation (no emit).                                   |
| `npm run check`  | Convenience command that runs `lint` + `typecheck`.                          |

> Requirement: Node.js ≥ 18 (see the `engines` field inside `package.json`).

## 🚀 Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start developing**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` and play with the language/theme pickers.
3. **Build & preview**
   ```bash
   npm run build
   npm run preview
   ```
   Deploy the contents of `dist/` to GitHub Pages, Netlify, or any static host.

## 🧩 Content model & localization

- Public-facing strings live in `src/data/portfolio.it.json` and `src/data/portfolio.en.json`; both conform to the `PortfolioData` interface.
- To keep locales in sync:
  1. Update the IT/EN JSON files together.
  2. Run `npm run dev` to manually verify layout/length.
  3. If you add new sections or fields, update `src/data/portfolio.types.ts`.
- UI labels (navigation, theme/language controls, experience modal) live in `src/i18n/common.*.json`.
- To add a new locale: extend `SUPPORTED_LOCALES` in `src/App.hooks.tsx`, create `portfolio.<locale>.json`, add `common.<locale>.json`, and register the language in `src/i18n/config.ts`.

## 🎨 Theme, accents & customization

- `src/styles/theme.ts` defines the light/dark palettes plus the `SECONDARY_COLORS` array. The active theme is injected via `ThemeProvider` (`App.tsx`).
- Preferences (`mode` + `accent`) are saved to `localStorage` (`app-theme-preferences`) so visitors keep their look across sessions.
- To add another accent, append a hex color to `SECONDARY_COLORS`. The header menu will automatically generate fallback labels (`header.theme.fallbackAccent`).
- Hero Orbit pulls icons from `public/orbiter-icons`. Drop an SVG/PNG there and reference it inside `hero.orbit.rings`.

## 📑 Key sections

- **Hero** – animated typing headline (`useTypingHeadline`), CTA buttons, skill orbit.
- **About** – summary paragraphs + three focus areas + quick facts, all editable via JSON.
- **Skills** – grouped categories with descriptions and bullet lists.
- **Open Source Products / Open Source** – separate showcases for products and community contributions.
- **Experience** – role timeline with highlights and technology tags; includes modal details (`components/sections/ExperienceSection`).

## 📦 Deployment

1. Run `npm run build`.
2. Upload the `dist/` folder to your static host of choice.
3. For GitHub Pages with `gh-pages`, set the appropriate `base` in `vite.config.ts` (defaults to `/`).

## 📃 License

MIT — see the `license` field in `package.json`. Feel free to fork and adapt it to your own profile.
