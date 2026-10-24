# UTKAL DIASPORA

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev -- -p 3001
```

Open http://localhost:3001

## Folder structure

- app/
  - layout.tsx
  - page.tsx
  - signin/page.tsx
  - signup/page.tsx
  - globals.css
- components/
  - Header.tsx
  - Hero.tsx
  - FivePillars.tsx
  - PillarCard.tsx
  - Vision.tsx
  - JoinCta.tsx
  - Footer.tsx
  - ScrollProgress.tsx
  - Reveal.tsx
  - graphics/
    - TempleIllustration.tsx
    - KonarkWheel.tsx
    - LotusBloom.tsx
    - PattachitraBorder.tsx
    - JhotiPattern.tsx
- lib/content.ts

## Where the backend will connect later

The placeholder routes are:

- /signin
- /signup

These pages are intentionally simple and currently show a "Coming soon" message in the same theme, ready to be replaced later with real auth flows.
