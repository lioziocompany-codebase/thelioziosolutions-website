import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | The LIOZIO Solutions",
};

// CLAUDE.md §9 — not yet drafted in source content. Stub only; do not invent legal text.
export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
      <h1 className="font-heading text-h1 font-semibold text-liozio-charcoal lg:text-h1-lg">
        Terms of Use
      </h1>
      <p className="mt-6 max-w-2xl font-body text-base leading-body text-liozio-charcoal/80">
        Coming soon. Our Terms of Use are currently being drafted and will be
        published here shortly.
      </p>
    </main>
  );
}
