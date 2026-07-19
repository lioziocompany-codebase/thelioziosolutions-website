import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Site-wide LIOZIO palette — CLAUDE.md §4a. Use everywhere except inside the Drumroll feature section.
        "liozio-purple": "#33189C",
        "liozio-gold": "#F5A623",
        "liozio-charcoal": "#1A1A2E",
        "liozio-silver": "#E8EAF0",
        // Drumroll-scoped palette — CLAUDE.md §4b. Use ONLY inside the Drumroll feature section on /solutions.
        "drumroll-orange": "#E8500A",
        "drumroll-purple": "#33189C",
        "drumroll-charcoal": "#1A1A1A",
        "drumroll-warmwhite": "#FAFAF8",
        "drumroll-sand": "#FDF0E8",
      },
      fontFamily: {
        // CLAUDE.md §5 — Display/Headings: Poppins (Bold/Semi-Bold only). Fallback: Arial.
        heading: ["var(--font-poppins)", "Arial", "sans-serif"],
        // CLAUDE.md §5 — Body/UI: Inter (Regular/Medium only). Fallback: Arial.
        body: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      fontSize: {
        // CLAUDE.md §5 heading scale: mobile default here, pair with `lg:text-h1-lg` for the desktop step.
        h1: ["2rem", { lineHeight: "1.2" }], // 32px mobile (within the 28-32px spec range)
        "h1-lg": ["3rem", { lineHeight: "1.2" }], // 48px desktop (lg breakpoint = 1024px, matches §11)
      },
      lineHeight: {
        body: "1.6", // CLAUDE.md §5
        heading: "1.2", // CLAUDE.md §5
      },
      spacing: {
        section: "3rem", // 48px mobile section padding — CLAUDE.md §11a
        "section-lg": "5rem", // 80px desktop section padding, pair with `lg:py-section-lg` — §11a
        card: "1.5rem", // 24px mobile card padding — §11a
        "card-lg": "2rem", // 32px desktop card padding, pair with `lg:p-card-lg` — §11a
        gutter: "1rem", // 16px minimum mobile horizontal padding — §11a
      },
      maxWidth: {
        container: "1200px", // §11a
      },
    },
  },
  plugins: [],
};

export default config;
