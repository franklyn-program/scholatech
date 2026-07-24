# Project Rules — Scholatech $10,000 Agency Site

These project-scoped rules govern all agent execution and development for the Scholatech workspace.

---

## 1. Testing & QA Policy (Strict Mandate)

- **User-Led Testing Only:** All manual, visual, and browser testing will be performed exclusively by the user.
- **Strict Browser Tool Ban:** NEVER invoke browser subagent tools (`browser_subagent`), headless browser scripts, or attempt browser automation to test or preview pages. The agent must rely strictly on code-level validation, build checks, and static verification.

---

## 2. High-Ticket ($10k+) Agency Standards & Positioning

- **Value-Centric Positioning:** Lead with high-stakes school outcomes ("Built once. Owned forever.", "Enroll more students, spend less time on paperwork"). Never use generic agency jargon ("revolutionary", "cutting-edge", "AI-powered").
- **Narrative Flow as a Sales Engine:** Retain the deliberate conversion order: 
  `Problem Agitation → How It Works → Outcome Showcase → Proof/Ownership Moat → Frictionless FAQ → High-Intent CTA`.
- **Transparency as Trust:** Explicitly detail full source code ownership, zero subscription fees, and no vendor lock-in to eliminate buyer risk.
- **Strict Placeholder Protocol:** Never invent fake client quotes, statistics, school names, prices, or team bios. Mark all unconfirmed figures with explicit visible placeholders (e.g. `[PLACEHOLDER — Replace before launch]`).

---

## 3. Design System & Token Discipline

- **Single-Source Tokens:** Every style must strictly consume tokens defined in `design.md` §3 via `tailwind.config.ts`. Never hardcode hex values in component files.
  - Primary Blue: `#3B59F7`
  - Deep Navy: `#0F172A`
  - Accent Green: `#10B981`
  - Accent Amber: `#F59E0B`
  - Soft Background: `#F5F7FB`
  - Dark Background: `#0B0F14`
  - Slate Text: `#334155`
  - Slate Border: `#E2E8F0`
- **Typography:** Inter body text (16–18px), Plus Jakarta Sans headings (700–800 weight, -0.02em to -0.04em letter spacing), uppercase eyebrow labels (+0.08em tracking).
- **Restrained Motion:** Apply Hermes-style reveal variants (`y: 24`, `duration: 0.6`, `ease: [0.22, 1, 0.36, 1]`) only on key entry points. Respect `prefers-reduced-motion` everywhere.

---

## 4. Engineering Quality & Accessibility

- **TypeScript Strict Mode:** Interface definitions for all component props and backend payload structures. No `any` types.
- **Mobile-First Responsiveness:** Build and verify layout structure down to 360px viewport width during phase completion.
- **Accessibility (WCAG AA):** Semantic HTML5 elements (`main`, `nav`, `section`, `article`), visible focus rings, full keyboard accessibility, and descriptive image `alt` text.
- **Performance Budget:** Lazy load heavy components, optimize Next.js images, aim for high mobile performance (Lighthouse ≥ 90).
