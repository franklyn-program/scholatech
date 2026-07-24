# Build Checklist — Scholatech

Work top to bottom. Each phase should be fully working before the next starts.

## Phase 0 — Project Setup
- [ ] Next.js app (App Router) + Tailwind initialized
- [ ] Supabase project connected, `.env` configured
- [ ] Folder structure:
```
/app
  /page.tsx              (homepage)
  /solutions/...
  /portfolio/page.tsx
  /pricing/page.tsx
  /contact/page.tsx
  /about/page.tsx
/components
  /ui        (Button, Card, Heading, Paragraph, SectionLabel, NumberBadge)
  /layout    (Navbar, Footer, Container, Section)
  /sections  (Hero, ProblemSection, HowItWorks, ProductShowcase,
              Portfolio, Numbers, ComparisonTable, PricingTeaser,
              FounderTrust, FAQ, FinalCTA)
  /motion    (FadeIn, StaggeredGrid)
  /forms     (QuoteRequestForm)
/lib
  /supabase.ts
/styles / tailwind.config.ts   (design tokens from design.md §3)
```

## Phase 1 — Design Tokens
- [ ] Colors, type scale, spacing scale in `tailwind.config.ts`
- [ ] Font loading (Inter, Plus Jakarta Sans if used)
- [ ] Base motion variants exported from `/components/motion`

## Phase 2 — Shared Components
- [ ] `Button` (primary/secondary/outline × default/small)
- [ ] `Card`, `Container`, `Section` (with bg-variant prop)
- [ ] `Heading` (h1–h3), `Paragraph`, `SectionLabel`, `NumberBadge`
- [ ] `Navbar` (with mobile menu), `Footer`

## Phase 3 — Homepage Sections (build in this order, per design.md §5)
- [ ] Hero (5.1–5.2)
- [ ] Problem (5.3)
- [ ] How It Works (5.4)
- [ ] Product Showcase (5.5)
- [ ] Portfolio (5.6) — confirm with Frank: empty-state card vs placeholder projects
- [ ] Numbers (5.7) — placeholders unless Frank confirms real figures
- [ ] Comparison Table (5.8)
- [ ] Pricing Teaser (5.9)
- [ ] Founder/Trust (5.10) — placeholder bio until supplied
- [ ] FAQ (5.11)
- [ ] Final CTA (5.12)
- [ ] Assemble `/app/page.tsx` in this exact order

## Phase 4 — Secondary Pages
- [ ] `/solutions` overview + 3 detail pages (reuse Product Showcase copy, expand each)
- [ ] `/portfolio` (grid of PortfolioCard, empty-state aware)
- [ ] `/pricing` (package tiers — placeholder until Frank confirms pricing structure)
- [ ] `/about` (founder section expanded + brand story)
- [ ] `/contact` (full QuoteRequestForm)

## Phase 5 — Forms & Backend
- [ ] Supabase table for quote requests (name, school name, email, phone, need, message)
- [ ] Server action or API route to handle submission
- [ ] Success/error states on the form
- [ ] Basic spam protection (honeypot field is sufficient for v1)

## Phase 6 — QA Pass
- [ ] Every page at 360px and 1440px
- [ ] Keyboard-only navigation through Navbar, forms, FAQ accordion
- [ ] `prefers-reduced-motion` respected
- [ ] All placeholders visibly flagged and listed in one place (see below)
- [ ] Lighthouse mobile ≥ 90 on homepage

## Placeholder Tracker
Keep a running list here of every placeholder shipped, so Frank has one place
to check before launch instead of hunting through code:
- [ ] Portfolio projects
- [ ] Stats row numbers
- [ ] Founder bio + photo
- [ ] Starting price
- [ ] Delivery time range (FAQ + final CTA response-time line)
- [ ] Hosting policy answer (FAQ)
