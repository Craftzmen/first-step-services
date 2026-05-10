# First Step Services

Marketing site for **First Step Services**, a senior e-commerce solutions agency. We design, build, migrate, and grow online stores on Shopify, WooCommerce, BigCommerce, and headless stacks.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>.

## Useful scripts

```bash
npm run dev        # start the Next.js dev server (Turbopack)
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript --noEmit
npm run format     # Prettier write
```

## Project layout

```
app/                       Next.js App Router pages and metadata
  about/                   /about
  contact/                 /contact
  how-it-works/            /how-it-works
  services/                /services
  policies/privacy-policy/ /policies/privacy-policy
  layout.tsx               root layout, fonts, global metadata
  page.tsx                 home page
  globals.css              brand tokens + Tailwind base
  assets/images/logo.svg   wordmark used in the navbar and footer

components/                feature components grouped by route
  layout/                  navbar, footer, page header, section wrapper
  home/                    home-page sections
  about/                   about-page sections
  services/                services-page sections
  how-it-works/            timeline, FAQ, CTA
  contact/                 cards, form, sidebar
  policies/                privacy policy content
  ui/                      shadcn/ui primitives

lib/
  remote-images.ts         Unsplash CDN paths used across sections
  utils.ts                 cn() helper

public/                    static assets, favicons, manifest
```

## Brand tokens

Tokens live in [`app/globals.css`](app/globals.css). Two custom colors carry the brand:

- `bg-navy` / `text-navy` / `bg-navy-light` — deep indigo base.
- `bg-amber` / `text-amber` / `bg-amber-light` / `bg-amber-dark` — vivid violet accent.

The names are kept for backwards compatibility; the values are an indigo + violet palette suited to a modern commerce-tech brand.

## Adding shadcn/ui components

```bash
npx shadcn@latest add button
```

Components are placed under `components/ui/` and imported as `@/components/ui/<name>`.
