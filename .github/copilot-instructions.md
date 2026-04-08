## Purpose

This file guides AI coding agents to be immediately productive in this Next.js `app`-dir site.

**Quick context:** The project is a Next.js app (App Router) using TypeScript, Tailwind, and the `components/` folder for UI pieces. The root layout composes pages and global styles.

## Key files & architecture

- **Root layout:** [app/layout.tsx](app/layout.tsx#L1-L80) — sets `metadata`, loads fonts, global CSS, and mounts `Navbar` and `Footer`.
- **Home page composition:** [app/page.tsx](app/page.tsx#L1-L30) — imports `HeroSection`, `ProductCategories`, `WhySAAgro`, `CallToAction`.
- **UI components:** `components/*` — small presentational React components. Example: [components/Navbar.tsx](components/Navbar.tsx#L1-L80) (declares "use client").
- **Global styles:** [app/globals.css](app/globals.css#L1-L200) — Tailwind utilities and base styles.

## Big-picture rules (must-follow)

- This uses the Next.js App Router. Components are server components by default. Add `"use client"` at the top of a file only when it requires client-only APIs (state, effects, browser-only libraries). See [components/Navbar.tsx](components/Navbar.tsx#L1-L20) as the pattern.
- Prefer placing route pages under `app/` (e.g., `app/products/page.tsx`, `app/dealers/page.tsx`) — follow existing folder structure when adding routes.
- Use the `@/` import alias for absolute imports (e.g., `import HeroSection from "@/components/HeroSection"`).

## Developer workflows & commands

Run development server:

```bash
npm run dev
```

Build and start production:

```bash
npm run build
npm run start
```

Linting (project scripts use ESLint):

```bash
npm run lint
```

There are no test scripts defined in `package.json`; run the dev server for manual verification.

## Project-specific patterns and examples

- Components are small and presentational; pages import them to compose screens (see [app/page.tsx](app/page.tsx#L1-L30)).
- Global layout imports fonts via `next/font` in [app/layout.tsx](app/layout.tsx#L1-L40) — prefer this approach for app-wide font handling.
- Tailwind is configured (devDependency `tailwindcss`) and used across components via utility classes in JSX.
- External libs: `framer-motion` is available if you need animations; include it only inside client components.

## Integration and boundaries

- No server API routes detected in the repo root — expect mostly static/SSR pages. If adding server-only logic, use server components or the new Next.js server handlers under `app/api`.
- If you introduce runtime secrets, follow Next.js convention using `process.env` and update Vercel or hosting env vars when deploying.

## How to make small changes safely

- For UI edits: modify components under `components/` and verify by running `npm run dev` and visiting `http://localhost:3000`.
- For route or data changes: add files under `app/<route>/page.tsx` and keep UI/data-fetching logic in server components unless client behavior is required.
- Keep TypeScript types consistent; this project includes TypeScript but no strict type rules in `package.json` — prefer explicit props types on components.

## What I looked at while authoring this file

- [package.json](package.json#L1-L200) — scripts and deps
- [app/layout.tsx](app/layout.tsx#L1-L80) — layout pattern
- [app/page.tsx](app/page.tsx#L1-L30) — page composition
- [components/Navbar.tsx](components/Navbar.tsx#L1-L80) — client component example

If any of these areas are incomplete or you want more rules (commit message style, testing setup, CI), tell me which area to expand and I'll iterate.
