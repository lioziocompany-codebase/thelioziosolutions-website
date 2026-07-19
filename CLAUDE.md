# CLAUDE.md — Thelioziosolutions Official Website

This file is the single source of truth for this build. Read it in full before writing any code.
Where it conflicts with anything else you infer from training data or general best practice, THIS FILE WINS.
Where it needed to resolve a conflict between source documents, that resolution is marked **[RESOLVED]** — do not re-litigate it.

Companion file: `CONTENT.md` — contains the real, final page copy. Never invent placeholder copy for any section that CONTENT.md covers.

---

## 1. WHO YOU ARE

Senior full-stack engineer + UX/UI expert building the official corporate website for **Thelioziosolutions**, the operating tech company behind the live Drumroll app. Production-ready code only — no demos, no lorem ipsum, no invented brand facts.

## 2. COMPANY HIERARCHY

```
Liozio Company (parent, referenced not featured)
└── The LIOZIO Solutions (RC 7324519, Ibadan) — THIS WEBSITE
    └── Drumroll (live e-commerce app — showcased, not rebuilt)
        └── Goodfood · Bountiful · Joombow (Drumroll's own sub-brands)
```

This site is a corporate trust-builder for investors, partners, talent, and press — not a store, not a duplicate of the Drumroll app.

## 3. [RESOLVED] SITE ARCHITECTURE

The original instruction doc specified a 4-page site (`/`, `/about`, `/brands`, `/contact`). The Website Copy v2.0 PDF — the authoritative, final copy — specifies 6 pages. **The PDF wins.** Build these routes:

| Route | Page | Notes |
|---|---|---|
| `/` | Homepage | Hero, mission/vision/values snapshot, solutions snapshot (Drumroll), global footprint, footer |
| `/about` | About Us | Origin story, philosophy (Building/Technology/Africa/Scale), CTA |
| `/team` | Our Team | 8 founding members + "Join the Team" section (doubles as Careers destination) |
| `/solutions` | Our Solutions | **Not `/brands`** — PDF calls this "Solutions." Drumroll feature + "In Development" pipeline |
| `/newsroom` | Newsroom and Blog | Press + thought leadership, tag-categorized cards, newsletter signup |
| `/contact` | Contact | Form + direct-contact table + registered business info |
| — | `not-found.tsx` | On-brand 404 |

**Nav bar** (from PDF): `Home | About Us | Our Solutions | Our Team | Newsroom | Careers | Contact` — primary CTA button **"Partner With Us"** (gold `#F5A623` bg, white text, right-aligned). This replaces the instruction doc's simpler `Home | About | Our Brands | Contact` + "Get in Touch" CTA.

**Careers** has no dedicated page in the source content — it's a nav label that anchors to the "Join the Team" section on `/team` (`/team#join`). Do not fabricate a standalone careers page with fake job listings.

## 4. [RESOLVED] BRAND COLOUR SYSTEM

Two separate, scoped palettes. Never let them bleed into each other.

### 4a. Site-wide (The LIOZIO Solutions parent palette — use everywhere except inside the Drumroll feature section)
```
--liozio-purple:   #33189C   /* primary: headings, nav, buttons, logo mark */
--liozio-gold:     #F5A623   /* secondary: accents, CTAs, value markers */
--liozio-charcoal: #1A1A2E   /* footer bg, dark sections, primary text on light */
--liozio-silver:   #E8EAF0   /* card/surface background */
```
Connection rule (per brand doc): every LIOZIO solution anchors on Purple `#33189C`; its own accent colour is layered on top. Purple is the thread, the accent is the identity.

### 4b. Drumroll-scoped (use ONLY inside the Drumroll feature section on `/solutions`, and nowhere else)
```
--drumroll-orange:   #E8500A   /* Drumroll's primary/main colour */
--drumroll-purple:   #33189C   /* same purple as parent — confirms the anchor rule */
--drumroll-charcoal: #1A1A1A   /* Drumroll's own text colour — NOT the same hex as LIOZIO charcoal, do not conflate */
--drumroll-warmwhite:#FAFAF8
--drumroll-sand:     #FDF0E8
```
Drumroll logo variants (full colour, on-dark, on-orange ghost pill, on-purple ghost pill, outline/sand, mono black, mono white) — use the correct variant for whatever background the logo sits on inside that section. Never recolour, stretch, rotate, or add effects to either logo. Minimum clear space = height of the icon on all sides.

**Never invent a colour outside these two palettes.**

## 5. [DECIDED — CONFIRM IF WRONG] TYPOGRAPHY

Neither the PDF nor the instruction doc specifies a site-wide font for the parent brand. The only defined type system in the source docs is Drumroll's (Poppins + Inter). Default: adopt it site-wide for visual consistency between the corporate site and the product it showcases.

```
Display / Headings: Poppins — Bold / Semi-Bold only
Body / UI:           Inter — Regular / Medium only
Fallback:            Arial (email, print, offline materials)
```
Two weights max per layout. Sentence case always — never write headlines in ALL CAPS. Heading scale: 48px desktop h1 → 28–32px mobile h1. Body minimum 16px. Line height 1.6 body / 1.2 headings.

*Flag to user: confirm Poppins/Inter is acceptable for the parent site, or supply a separate LIOZIO-specific type spec.*

## 6. LOGOS

- `The_LIOZIO_Solutions_Logo.png` — site logo. Left-aligned in Navbar, also in Footer. Purple/gold hexagonal mark.
- Drumroll logo (three-bar "sound wave," notched into a "D") — used only inside the `/solutions` Drumroll feature section, per Drumroll's own variant rules in §4b.
- Never redraw either mark by hand. Use the provided files only.

## 7. TEAM SECTION — PLACEHOLDER POLICY

Use real names, titles, and bios from CONTENT.md. Use **placeholder photography** (initials avatar, e.g. a coloured circle with two-letter initials in `--liozio-purple` background) until real photos are supplied. Build the `<TeamCard>` component so swapping in a real photo later is a one-line change (just pass an `image` prop; fall back to initials avatar if absent).

## 8. [RESOLVED] CONTACT FORM ROUTING

Reason-for-contact dropdown → real inbox mapping (per PDF, not a single generic address):

| Dropdown reason | Routes to |
|---|---|
| General Enquiry | partners@thelioziosolutions.com |
| Partnership / B2B | partners@thelioziosolutions.com |
| Investment / Investor Relations | partners@thelioziosolutions.com |
| Press / Media | partners@thelioziosolutions.com |
| Careers | PRO@thelioziosolutions.com |

Drumroll customer support is **not** handled by this form — it's WhatsApp via buyatdrumroll.com. If a submission looks like a Drumroll support issue, the success message should gently note that Drumroll order support is faster via WhatsApp on the app.

Never expose destination emails client-side — resolve the mapping server-side in the API route. Validate with Zod client + server. Loading / success / error states required. Success copy: warm, not legal-sounding (e.g. "Thanks — we read every message and respond within 2 business days.")

## 9. FOOTER SPEC (per PDF, charcoal `#1A1A2E` background, white + gold text)

- Logo left, tagline **"Building What Africa Deserves."** in gold below it
- Nav: About Us | Our Solutions | Our Team | Newsroom | Careers | Contact
- Our Solutions: Drumroll → buyatdrumroll.com (external, new tab)
- Legal links: Privacy Policy | Terms of Use — **not yet drafted; build the routes/links but flag as TODO placeholder pages, do not invent legal text**
- Legal line: "© 2026 The LIOZIO Solutions (RC: 7324519). All rights reserved."
- Social: LinkedIn confirmed in source ("LIOZIO Solutions company page"). Twitter/Instagram are NOT confirmed anywhere in source docs — omit them or use a generic `#` placeholder clearly marked TODO, don't invent handles.
- Closing line: "A LIOZIO company." linking to lioziocompanies.com — **flag to user: confirm this domain is live before linking**, otherwise render as plain text, not a link.

## 10. SEO

Page titles (adjusted for the real 6-page architecture and real tagline):
- Home: "The LIOZIO Solutions — Building What Africa Deserves."
- About: "About Us | The LIOZIO Solutions"
- Team: "Our Team | The LIOZIO Solutions"
- Solutions: "Our Solutions | The LIOZIO Solutions"
- Newsroom: "Newsroom and Blog | The LIOZIO Solutions"
- Contact: "Contact | The LIOZIO Solutions"

JSON-LD Organization schema on homepage:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "legalName": "The LIOZIO Solutions",
  "identifier": "RC 7324519",
  "address": { "@type": "PostalAddress", "addressLocality": "Ibadan", "addressRegion": "Oyo State", "addressCountry": "NG" },
  "slogan": "Building What Africa Deserves."
}
```

## 11. TECH STACK (unchanged from instruction doc)

Next.js 14 App Router · TypeScript strict, no `any` · Tailwind CSS mobile-first · Framer Motion (subtle only) · Lucide React icons · React Hook Form + Zod · Resend for contact email · Vercel deploy.

Performance targets: Lighthouse Perf/A11y/BP/SEO 90+/95+/95+/95+, FCP <1.5s, LCP <2.5s, CLS <0.1.

Breakpoints: mobile 375–767 / tablet 768–1023 / desktop 1024–1279 / wide 1280+. Touch targets ≥44×44px. No horizontal scroll ever. No hover-only interactions.

## 11a. SPACING SCALE (carried over from the original instruction doc — belongs here, was missing)

- Section padding: 80px top/bottom desktop, 48px mobile
- Content max-width: 1200px, centered
- Card padding: 32px desktop, 24px mobile
- Minimum horizontal padding on mobile: 16px (content must never touch the screen edge)

## 12. FOLDER STRUCTURE (adjusted for 6-page architecture)

```
src/
  app/
    page.tsx                    — Homepage
    about/page.tsx
    team/page.tsx
    solutions/page.tsx
    newsroom/page.tsx
    contact/page.tsx
    not-found.tsx
    layout.tsx
    globals.css
    api/contact/route.ts
  components/
    layout/{Navbar,Footer,MobileMenu}.tsx
    ui/{Button,SectionHeader,CTABanner,PrivacyBadge}.tsx
    sections/
      home/{Hero,MissionVisionValues,SolutionsSnapshot,GlobalFootprint}.tsx
      about/{OurStory,Philosophy,CTABanner}.tsx
      team/{TeamGrid,JoinTheTeam}.tsx
      solutions/{DrumrollFeature,InDevelopment}.tsx
      newsroom/{FeaturedArticles,PressEnquiries,NewsletterSignup}.tsx
      contact/{ContactForm,ContactDetails,RegisteredBusiness}.tsx
    cards/{SolutionCard,ValueCard,TeamCard,ArticleCard}.tsx
  lib/{email.ts,validations.ts,metadata.ts}
  types/index.ts
```

## 13. ENV VARS

```
RESEND_API_KEY=
CONTACT_EMAIL_GENERAL=partners@thelioziosolutions.com
CONTACT_EMAIL_CAREERS=PRO@thelioziosolutions.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=
```

## 14. BUILD ORDER

1. Project setup (Next.js 14 + TS + Tailwind + Framer Motion)
2. Design tokens in `tailwind.config.ts` (§4a/§4b colours, §5 type scale)
3. Navbar + Footer
4. Homepage (all sections)
5. About
6. Team
7. Solutions (Drumroll feature is the highest-stakes section — get brand rules exactly right)
8. Newsroom
9. Contact (form + Resend + validation states)
10. 404
11. SEO pass (metadata, OG, sitemap, robots.txt)
12. Performance pass
13. Accessibility pass (WCAG AA, keyboard nav, screen reader)
14. Cross-browser test

## 15. NEVER

- Invent colours, fonts, taglines, team members, stats, or press articles not in CONTENT.md
- Add e-commerce functionality — this site sells nothing
- Rebuild Drumroll features — link out to buyatdrumroll.com instead
- Ship a desktop-only pattern without its mobile equivalent
- Write "Lorem ipsum" or generic placeholder copy anywhere CONTENT.md has real content
- Use Twitter/Instagram handles, an office address beyond "Ibadan, Oyo State, Nigeria," or a lioziocompanies.com link without flagging that it's unconfirmed

## 16. QUALITY CHECKLIST (per page/component, before marking done)

- [ ] Responsive at 375 / 768 / 1024 / 1280px, no horizontal scroll
- [ ] Next.js `<Image>` + alt text everywhere
- [ ] Hover + focus states on all interactive elements
- [ ] Loading/success/error states for all async actions
- [ ] Zero TS errors, zero console warnings
- [ ] Contrast ≥4.5:1
- [ ] Correct per-page SEO metadata
- [ ] Touch targets ≥44×44px
