# LB Brand Haus Design System Web Artefact

Client review artefact for the LB Brand Haus design system and website direction.

Repository: [gridhouse-digital/lbbrandhaus](https://github.com/gridhouse-digital/lbbrandhaus)

## Purpose

This project packages the current design-system and website page previews in a polished presentation shell. It is intended for reviewing visual direction, page flow, brand system decisions, and next-step content priorities.

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` (Vite will pick the next available port if 5173 is in use).

## Commands

```bash
npm run dev      # start local dev server
npm run lint     # run ESLint
npm run build    # typecheck and build for production
npm run preview  # preview the production build
```

## Structure

- `src/App.tsx` - presentation shell and section navigation
- `src/styles/splitLegacy.css` - client-review presentation frame styles
- `public/legacy-pages/` - static preview pages loaded into the shell
- `src/pages/DesignSystemPage.tsx` - React design-system page kept for future use
- `src/data/designSystem.ts` - tokens, image paths, logo paths, and presentation copy
- `scripts/` - one-off cleanup and asset processing utilities

## Review Flow

Start with **Overview**, then review **Design System**, followed by the page previews: **Home**, **Services**, **Studio**, **Portfolio**, and **Contact**.

This pass preserves the legacy page previews and improves the client-facing presentation wrapper around them.

