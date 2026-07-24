# Agent Instructions — Scholatech Build

Read `design.md` in full before writing any code. This file governs *how*
you work, not what to build — `design.md` is the spec, this is the contract.

## Do

- Build in one pass per phase (see `CHECKLIST.md`). Don't stop to ask
  permission before each individual component — proceed through a whole
  phase, then summarize what was built.
- Use the exact tokens in `design.md` §3. Pull them into `tailwind.config`
  once, reference them everywhere — never hardcode a hex value in a component.
- Mark every placeholder content gap visibly in the UI (e.g. a small dashed
  border + "PLACEHOLDER" label in dev, or a code comment `// TODO: real copy`)
  so Frank can find and replace them before launch. Never invent a plausible
  number, quote, or client name to fill a gap.
- Keep every page responsive down to a 360px-wide mobile viewport as you build
  it — not as a pass at the end.
- Keep components small and reusable per the inventory in `design.md` §6.
  If you need a new component not listed there, add it and note why.
- Ask one clarifying question, and only one, if something in `design.md` is
  genuinely ambiguous for implementation (e.g. exact breakpoint values). If
  it's a content decision (real price, real bio, real testimonial), don't ask
  — placeholder it and move on, per above.

## Do Not

- Do not add a second color palette, a second font, or a second animation
  library "to see what looks better." The tokens are decided.
- Do not default to the current AI-generated-site look: no warm
  cream/terracotta palette, no near-black-with-acid-green-accent, no
  newspaper/hairline-rule broadsheet layout. Scholatech's palette (§3.1) is
  the palette.
- Do not animate everything. Follow the reveal pattern in §3.4 and stop —
  scattered animation on every element reads as templated, not premium.
- Do not fabricate portfolio projects, testimonials, client logos, team
  members, or statistics. If it's not in `design.md` or supplied directly by
  Frank, it's a placeholder, full stop.
- Do not build anything listed in `design.md` §9 (Out of Scope) unless
  explicitly asked.
- Do not use `localStorage`/`sessionStorage` in place of Supabase for the
  quote-request form — it needs to actually persist and be readable by Frank.
- Do not restructure the homepage narrative order in §5 without discussing it
  first — that order was chosen deliberately (problem → solution → proof →
  differentiation → objection-handling → action) and reordering it changes
  the conversion logic, not just the layout.

## Build Order

Follow `CHECKLIST.md`. Do not start on Phase 3 (homepage sections) before
Phase 1 and 2 (tokens + shared components) are in place — every homepage
section depends on `Button`, `Card`, `Section`, and `Heading` already existing.

## Definition of Done (per phase)

A phase is done when: it renders correctly at 360px and 1440px widths, passes
a manual keyboard-only navigation check, has no hardcoded token values, and
every placeholder is visibly marked. Report this explicitly when you finish a
phase — don't just say "done," confirm these four things were checked.
