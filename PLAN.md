# Zomujo Foundation Website Plan

## Goals
- Build the Zomujo Foundation website using the content from `Zomujo_Foundation_Website_Content.docx`.
- Establish a cohesive visual system that reflects the foundation's mission and Ghana/Africa context.
- Deliver a complete multi-page site with strong readability, accessibility, and performance.
- This document is the single source of truth for design and UI decisions.
- Mobile-first and very responsive across device sizes.

## Inputs and References
- Primary content source: `Zomujo_Foundation_Website_Content.docx`.
- Visual inspiration and reusable patterns: other Zomujo/Teata projects in `/Users/ahmed/Desktop/code/teata/`.
- Additional reference project: `/Users/ahmed/Desktop/code/fornix/`.
- Next.js App Router conventions: check `node_modules/next/dist/docs/` before coding.

## Scope (Pages)
1. Homepage
2. About Us
3. Health and Wellbeing Systems
4. Education, Skills and Youth Development
5. Digital Innovation and Access
6. Community Systems and Social Protection
7. Economic Empowerment and Livelihoods
8. Climate, Environment and Resilience
9. Research, Data and Policy Influence
10. Partner With Us
11. Contact

## Information Architecture
- Top-level navigation aligned to the 11 pages.
- Consistent CTA placement (Explore, Partner, Donate, Subscribe).
- Cross-links from Homepage focus cards to each focus page.

## Content Plan
- Use the copy verbatim from the docx, only adjusting for layout and readability.
- Build content blocks for each page:
  - Hero (headline, subheadline, CTAs).
  - Section headings with supporting paragraphs.
  - Focus area details (challenge, approach, key programmes, SDG alignment, impact goals).
  - Partner page segmented by audience type.
  - Contact page with email, phone placeholder, address, and social links.

## Design System Plan
- Design direction: modern, clean, colorful, and distinctly human. Avoid generic AI-looking layouts and gradients. Use deliberate asymmetry, generous whitespace, and editorial rhythm.
- Visual personality: optimistic, grounded, and slightly whimsical (subtle curves, soft overlays, and playful but restrained accent shapes).
- Photography: prioritize humans and real community contexts (Ghana/Africa). Use authentic imagery; no stocky corporate shots.
- Motion: tasteful and purposeful (section reveals, hero media parallax-lite, hover lift on cards, subtle marquee for partners).

## Color System
- Theme anchor: Zomujo is blue-themed. Lead with a rich, confident blue and white mark (white “Z” on blue background).
- Base: warm off-white background with deep charcoal text (avoid pure white/black).
- Primary: Zomujo blue for headings, key UI anchors, and primary CTAs.
- Secondary: lighter sky blues and muted teal-blues for gradients and section backdrops.
- Accent: warm gold or clay for contrast and energy; use sparingly.
- Support: slate neutrals and sand for dividers and cards.
- Accessibility: all text/background pairs must meet WCAG AA contrast; avoid low-contrast pastel-on-white.

## Logo
- Use the official Zomujo logo: white “Z” on blue background.
- Ensure favicon and header mark use the same asset family.

## Typography System
- Headings: a contemporary serif with character (e.g., editorial style) for mission-driven tone.
- Body: a clean humanist sans for readability and modern feel.
- UI details: use body font for buttons, nav, labels for consistency.
- Scale: large, confident hero sizes; clear hierarchy with 3-4 heading tiers.
- Copy rhythm: short, purposeful lines; comfortable line-height (1.6-1.75).

## Component Inventory
- Global: Header, Footer, Primary CTA block, Section heading, Rich text block.
- Cards: Focus area card, News post card, Metric card, Partner logo tile.
- Utilities: Two-column layout, icon list, callout banner, breadcrumb (optional).

## Asset Plan
- Identify placeholder images from other Teata projects where permitted.
- Define image slots for heroes and section visuals.
- Establish a consistent image treatment (crop, tint, overlay, caption).

## Implementation Phases
1. Discovery
   - Review Teata/Zomujo projects for styling patterns and reusable assets.
   - Outline final sitemap and navigation labels.
2. Foundation Setup
   - Update metadata (title, description, OG tags).
   - Define CSS variables and base typography.
3. Core Layout
   - Build global header/footer and main layout.
   - Implement reusable section and card components.
4. Homepage Build
   - Hero, mission bar, focus grid, impact metrics, why Zomujo, news, partners, footer CTA.
5. Focus Area Pages
   - Create a shared focus page template.
   - Populate seven pages with docx content.
6. About, Partner, Contact
   - Implement structured sections and appropriate CTA placement.
7. Polish
   - Responsive adjustments (mobile, tablet, desktop).
   - Accessibility pass (contrast, heading order, alt text).
   - Performance pass (image optimization, font loading).

## Progress Checklist
- [ ] Confirm navigation labels and page order
- [ ] Define typography + color system
- [ ] Build global layout (header/footer)
- [ ] Implement reusable cards/sections
- [ ] Homepage complete
- [ ] About Us complete
- [ ] Focus area template complete
- [ ] All focus pages complete
- [ ] Partner With Us complete
- [ ] Contact complete
- [ ] Responsive review
- [ ] Accessibility review
- [ ] Performance review

## Open Questions (for later)
- Final image sources and licensing.
- Any required integrations (newsletter, CMS, analytics).
- Official partner logos and brand assets.
