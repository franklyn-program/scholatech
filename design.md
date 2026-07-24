# Scholatech — Design & Product Specification (v2)

This is the single source of truth for building the Scholatech marketing site.
It is written to be handed directly to an AI coding agent (Claude Code, Cursor, etc.)
with no other context. If content is genuinely undecided, it says so explicitly —
never invent facts (client names, prices, stats) that aren't in this doc or
supplied by Frank.

Companion files: `AGENT_INSTRUCTIONS.md` (rules of engagement for the build),
`CHECKLIST.md` (phased task list).

---

## 1. Product Summary

**What Scholatech is:** a Nigerian ed-tech studio building school websites, school
management systems, and CBT (computer-based testing) installations — sold as a
**one-time payment, full source-code ownership** product, not a SaaS subscription.

**Who it's for:** school proprietors, administrators, and ICT officers at Nigerian
private schools who are tired of recurring software costs and vendor lock-in.

**The single job of the homepage:** convince a school owner that Scholatech
understands their specific operational pain (admissions, fees, results,
communication with parents) and that paying once for ownership beats paying
forever for access.

**Positioning line:** "Built once. Owned forever."

---

## 2. Brand

**Personality:** premium, calm, competent, human. Not childish, not cold/corporate,
not hype-y SaaS.

**Voice rules:**
- Active voice. Say what happens, not how the system works internally.
- Plain verbs: build, own, simplify, run, manage. Avoid "revolutionary,"
  "cutting-edge," "AI-powered" (unless a feature is literally AI-powered),
  "cheapest," "fastest."
- Lead sentences with the school's outcome, not Scholatech's feature.
  ("Enroll more students, spend less time on paperwork" — not "We build websites.")
- No exclamation points in body copy. Confidence doesn't need punctuation to prove it.

**Do not:** invent testimonials, client logos, or statistics. Every number or
quote in this document is either real (Frank supplied it) or explicitly marked
`[PLACEHOLDER — replace before launch]`. The agent must preserve that marker
in the code (e.g. as a comment or visibly styled placeholder), never silently
invent a plausible-sounding number to fill the gap.

---

## 3. Design Tokens

### 3.1 Color
| Token | Hex | Use |
|---|---|---|
| `primary-blue` | `#3B59F7` | links, primary actions, key highlights |
| `deep-navy` | `#0F172A` | headings on light bg, dark section bg |
| `accent-green` | `#10B981` | success states, secondary CTA accent |
| `accent-amber` | `#F59E0B` | sparingly — callouts, badges |
| `bg-white` | `#FFFFFF` | light sections |
| `bg-soft` | `#F5F7FB` | alternate light sections |
| `text-slate` | `#334155` | body text |
| `border-slate` | `#E2E8F0` | dividers, card borders |
| `bg-dark` | `#0B0F14` | dark sections (primary) |

This palette is intentional and does not follow the current AI-generated-site
defaults (no warm cream/terracotta, no near-black/acid-green stripe, no
newspaper hairline-rule layout). Keep it that way — don't let an agent
"improve" it toward those looks.

### 3.2 Typography
- Primary: **Inter**. Headings may use **Plus Jakarta Sans** at 700–800 weight
  if it's already loaded; otherwise Inter at 700–800 is fine — don't add a
  third typeface.
- Scale (desktop): H1 56–64px/1.1, H2 36–40px, H3 20–24px, body 16–18px/1.5–1.6,
  small/label 12–14px. Scale down ~30–40% on mobile, never below 16px body.
- Letter-spacing: headings −0.02em to −0.04em; eyebrow labels +0.08em uppercase.

### 3.3 Spacing & Layout
- 4-point spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px).
- Content max-width: 1100–1200px, centered.
- Section vertical padding: 96–128px desktop, 56–72px mobile.
- Alternate light/dark section backgrounds for rhythm — don't run two dark
  sections back to back.

### 3.4 Motion
Default reveal pattern (Framer Motion):
```js
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
```
- Stagger list/card items by 80–120ms.
- Respect `prefers-reduced-motion`: disable transform/opacity animation,
  keep content visible by default.
- One orchestrated moment (the hero or the feature-flow reveal) can be more
  elaborate. Everything else stays quiet. Don't animate every element on
  every scroll — that's what makes a site look AI-generated, not premium.

---

## 4. Site Map (v1 — lean, expandable later)

```
/                    Homepage (full narrative, see §6)
/solutions           Overview of the 3 products, links to detail below
/solutions/websites
/solutions/management-system
/solutions/cbt
/portfolio           Project case studies (empty state until real projects exist)
/pricing             Package tiers, "starting from" framing (see §6.8)
/contact             Full quote-request form
/about               Company + founder
```
Blog, resources, and location pages are v2 — do not build them now. Note the
routes as commented-out/future in the folder structure so they're easy to add.

---

## 5. Homepage Blueprint

Story order (replaces the old flat Hero→Video→Features→Trust→CTA structure).
Each section below includes real, ready-to-use copy. Where Frank hasn't given
project-specific facts, the placeholder is marked — the agent should render
it visibly (e.g. lightly styled "Coming soon" badge on portfolio cards) rather
than inventing content.

### 5.1 Header / Navbar
- Logo left (`Scholatech` wordmark, sentence case, Inter/Plus Jakarta Sans 700–800).
- Nav: Solutions, Portfolio, Pricing, About, Contact.
- CTA button right: **Get a quote**.
- Sticky, subtle blur backdrop on scroll.

### 5.2 Hero
- Eyebrow: `One-time payment · Full ownership`
- H1: **Premium school tech, built once, owned forever.**
- Subhead: "We build websites, management systems, and CBT installations for
  Nigerian schools. Pay once, get the full source code, and never pay a
  subscription again."
- Primary CTA: **Get a quote** · Secondary: **See how it works** (scrolls to §5.4)
- Keep it text-led. No stock imagery, no cluttered collage.

### 5.3 The Problem (new section — replaces starting cold on features)
- Eyebrow: `Why schools switch`
- Heading: **Running a school shouldn't mean fighting your software.**
- Four short pain points, each one line:
  - Parents can't find basic information without calling the office.
  - Admissions and records are still handled on paper or in scattered spreadsheets.
  - Result computation and release is slow and stressful every term.
  - Staff waste hours on tasks a system could handle in minutes.
- Transition line: "Scholatech replaces all four — and once it's built, it's yours."

### 5.4 How It Works (moved earlier, shortened — this earns the features section)
Step cards, numbered because it's a genuine sequence:
1. **Consult** — We learn your school's current setup and what's actually slowing you down.
2. **Build** — We design and develop your site, system, or CBT setup on your specific requirements.
3. **Train & Launch** — We deploy, train your staff, and go live together.
4. **Own It** — You receive the full source code and database. No recurring fees, no lock-in.

### 5.5 Product Showcase (the "features" section, reframed around outcomes)
- Eyebrow: `What we build`
- Heading: **Three products. One partner. Full ownership.**
- Three cards (dark section, numbered blocks retained — this is a real
  enumerated set of products, so numbering is justified here):
  - **#1 School Websites** — Fast, mobile-friendly, built specifically for how
    parents and prospective families actually search for a school.
  - **#2 School Management System** — Admissions, fees, attendance, and
    results in one system your staff actually wants to use.
  - **#3 CBT Installations** — Secure computer-based testing, deployed and
    configured for your computer lab.
- Below the three cards, one line reinforcing the model: "Every product: one
  payment, source code included, nothing recurring."

### 5.6 Portfolio
- Eyebrow: `Recent work`
- Heading: **See it in schools like yours.**
- Card grid, each card: project name, one-line result, "View project" link.
- Until real projects exist: render 2–3 cards with
  `[PLACEHOLDER — add real project name, screenshot, and result once first
  client project is complete]`. Do not fabricate school names.
- If Frank has no completed projects yet, this section can instead show a
  single "Currently building our first flagship project — check back soon"
  card. Ask Frank which he prefers before hardcoding either.

### 5.7 Numbers (only include stats Frank confirms are real)
Small stat row, e.g.:
```
[PLACEHOLDER: projects delivered]   [PLACEHOLDER: avg delivery time]
100% Source Code Ownership          [PLACEHOLDER: schools onboarded]
```
"100% Source Code Ownership" is the one stat safe to ship immediately since
it's a policy fact, not a claim requiring evidence.

### 5.8 Why Own vs. Subscribe (comparison table — this is the core differentiator, make it visible)
| | Typical vendor | Scholatech |
|---|---|---|
| Payment | Monthly/annual subscription | One-time payment |
| Access after you stop paying | Lost | Yours forever |
| Source code | Closed | Delivered to you |
| Customization | Limited by vendor | Fully yours to modify |
| Long-term cost | Compounds every year | Fixed |

### 5.9 Pricing Teaser
- Heading: **Simple, one-time pricing.**
- Sub: "Every project is scoped to your school's size and needs. Packages
  start from `[PLACEHOLDER — insert real starting price once decided]`."
- CTA: **See pricing** → links to `/pricing` (full package breakdown lives
  there, not on homepage).
- Do not publish a specific number until Frank confirms one.

### 5.10 Trust / Founder
- Short "Meet the founder" block: photo, 2–3 sentence bio, one line on why
  Scholatech exists. Use `[PLACEHOLDER — bio text]` until Frank supplies it.
- Keep this section modest — one person, no forced "team" language if it's
  currently a solo/small operation. Authenticity reads as more trustworthy
  than an inflated "our team" section for a studio this size.

### 5.11 FAQ
Real objections, real answers — draft answers below, Frank should sign off before ship:
- **Do I own the code?** Yes. On final payment you receive full source code and database access.
- **Can you migrate my current website?** Yes, we can rebuild or migrate existing content.
- **How long does delivery take?** `[PLACEHOLDER — realistic range, e.g. "3–6 weeks depending on scope"]`
- **Do you provide hosting?** `[PLACEHOLDER — confirm Scholatech's actual policy]`
- **Can parents use it on mobile?** Yes, everything is built mobile-responsive by default.
- **Can we customize it after launch?** Yes — it's your code, you can modify it or hire anyone to.

### 5.12 Final CTA
- Heading: **Ready to upgrade your school's tech?**
- Sub: "Tell us about your school and what you need. We'll respond within `[PLACEHOLDER — real turnaround, e.g. 48 hours]`."
- CTA: **Request a quote** → `/contact`

---

## 6. Component Inventory
`Navbar`, `Footer`, `Container`, `Section` (bg-variant prop), `Button`
(primary/secondary/outline × default/small), `Card`, `SectionLabel`,
`Heading` (h1–h3), `Paragraph`, `NumberBadge`, `StepCard`, `ComparisonTable`,
`StatBlock`, `FAQAccordion`, `PortfolioCard`, `QuoteRequestForm`, `FadeIn`
(motion wrapper), `StaggeredGrid` (motion wrapper).

---

## 7. Tech Stack
- Next.js (App Router), Server Components by default.
- Tailwind CSS — tokens above go in `tailwind.config` theme, not inline hex values scattered through components.
- Framer Motion for the reveal patterns in §3.4 only — don't add a second animation library.
- Supabase for the quote-request form storage and (later) auth if a client portal is added.
- `next/image` for all images, no unoptimized `<img>` tags.

---

## 8. Accessibility & Performance (ship-blocking, not optional)
- WCAG AA contrast on all text.
- Visible keyboard focus states on every interactive element.
- `prefers-reduced-motion` respected (see §3.4).
- Lighthouse ≥ 90 on mobile for the homepage at launch (95+ is a v2 goal, not a v1 blocker).
- All images have real `alt` text, not filenames.

---

## 9. Explicitly Out of Scope for v1
Do not build these now, even if referenced in earlier drafts of this project:
- Blog / knowledge base / SEO content hub
- Client portal, ticketing, live chat, AI assistant
- Multi-language support
- CMS admin UI (content is hardcoded/config-driven for v1; flag any section
  Frank is likely to want to edit often so it can be pulled into a simple
  Supabase-backed admin table in v2)
- A 10-volume "Design Bible." This document is the spec. Expand a specific
  section only when Frank asks for it.
