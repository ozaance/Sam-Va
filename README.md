# SAM'va — Site

Landing page SAM'va (Solution d'Accompagnement Mutualisé), implémentée depuis le
bundle Claude Design `SAMva Site.dc.html`.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3.4** — tokens du design system dans `tailwind.config.ts`
- **DM Sans** via `next/font/google` (auto-hébergée, 400–800)
- **lucide-react** pour les icônes

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## Structure

```
app/
  layout.tsx      police DM Sans + métadonnées
  globals.css     tokens CSS (§10 du design system) + classes .shell / .section-pad / .eyebrow
  page.tsx        assemblage des sections
components/
  Header.tsx            nav sticky 68px + menu mobile
  Hero.tsx              accroche + CTA
  DashboardMockup.tsx   mockup navigateur du hero
  TrustedBy.tsx         bandeau partenaires
  Features.tsx          colonne sticky + grille 6 cards
  Network.tsx           mise en relation territoriale
  Engagements.tsx       3 cards engagements
  Pricing.tsx           Établissement / Communauté / Coopérative
  Footer.tsx
```

## Notes d'implémentation

**Palette figée.** Le fichier de design exposait des props d'exploration
(5 palettes, corner style, shadow, nav style, visibilité des sections). Les
valeurs par défaut sont figées dans le code : Teal & Fuchsia, corners Soft
(card 14px / bouton 8px), shadows Subtle, nav Light, CTA Navy, toutes sections
visibles.

**Fonctions `color-mix()` résolues.** Le prototype utilisait
`color-mix(in srgb, var(--accent) N%, #fff)`. La palette étant figée, ces
expressions sont pré-calculées en hex et exposées comme échelles `teal.tintN` /
`fuchsia.tintN` dans `tailwind.config.ts`.

**Responsive.** Le prototype était desktop-only (grilles fixes). Les grilles
passent en une colonne sous `lg`, le padding de section passe de 100px à 68px,
et la nav bascule sur un menu hamburger. Le rendu est fidèle au pixel à ≥1024px.

## Référence

`samva-design-system.md` (v1.0) reste la source de vérité pour les tokens.
Attention : sa §9 décrit une structure de page antérieure (Bannière
Coopérative, Notre Histoire, Technologie). C'est `SAMva Site.dc.html` qui fait
foi pour la structure réellement implémentée.
