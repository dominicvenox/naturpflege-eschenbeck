# CLAUDE.md - Naturpflege Eschenbeck

> **Standard:** This project follows the Venox Agency Tech Stack.
> **Rules:** See `.agent/rules/VENOX-STACK.md` for strict architectural and library rules.

## Commands

- `npm run dev`      # Start development server (localhost:3000)
- `npm run build`    # Production build
- `npm run start`    # Start production server
- `npm run lint`     # Run ESLint

## Project Overview

Naturpflege Eschenbeck is a Next.js 16 website for a professional landscaping and nature management business in the Altmühltal region (Bavaria, Germany). The site showcases services like orchard management, landscape care, and specialized ecological work.

## Tech Stack

- **Framework:** Next.js 16.1.3 with App Router
- **React:** 19.2.3 (React Server Components)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with CSS variables
- **UI Components:** shadcn/ui (compatible), CVA for custom components
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Maps:** Leaflet with react-leaflet (OpenStreetMap)
- **Deployment:** Dokploy (Nixpacks, Node.js 22)

## Architecture

### App Router Structure (`src/app/`)
- `layout.tsx` - Root layout with Header/Footer, Montserrat font
- `page.tsx` - Home page with hero, services overview, CTA
- `leistungen/page.tsx` - Services page
- `kontakt/page.tsx` - Contact form + Leaflet map (client component)
- `galerie/page.tsx` - Image gallery
- `ueber-mich/page.tsx` - About Markus page

### Components (`src/components/`)
- `layout/Header.tsx` - Sticky header with mobile hamburger menu
- `layout/Footer.tsx` - Multi-column footer
- `ui/Button.tsx` - CVA button (variants: default, outline, secondary, ghost, link)
- `ui/Container.tsx` - Max-width container wrapper
- `Map.tsx` - Leaflet map (dynamic import required)

## Key Implementation Details

- **Client Components:** Use `"use client"` for interactive parts (Header, Map, Contact).
- **Map Integration:**
  ```typescript
  const Map = dynamic(() => import("@/components/Map"), { ssr: false });
  ```
- **Color Palette:**
  - Background: `#F9F9F5` (Off-white)
  - Foreground: `#1C2D27` (Dark green)
  - Primary: `#2F5233` (Nature green)
  - Secondary: `#B19470` (Earth/wood tone)
  - Accent: `#A5B864` (Fresh green)

## Deployment Config (Nixpacks)
- Node.js 22
- Install: `npm ci`
- Build: `npm run build`
- Start: `npm run start`
