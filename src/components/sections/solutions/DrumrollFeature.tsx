import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const SUB_BRANDS = [
  { name: "Goodfood", category: "Foods and Consumables" },
  { name: "Bountiful", category: "Lifestyle and Personal Care" },
  { name: "Joombow", category: "Electronics and Appliances" },
];

// CLAUDE.md §4b — Drumroll-scoped palette ONLY inside this section. Never
// liozio-silver / liozio-charcoal here; drumroll-charcoal (#1A1A1A) is a
// distinct hex from liozio-charcoal (#1A1A2E), not the same colour.
export default function DrumrollFeature() {
  return (
    <section className="bg-drumroll-charcoal text-drumroll-warmwhite">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/*
            Real warehouse photography, cropped to the clean shelving/pallet
            region only — the source screenshot had Drumroll's own headline
            and "Get Started" button baked into the pixels, which would have
            visually duplicated this section's own (real, clickable) heading
            and CTA below. Ordered first in the DOM so it appears above the
            text on mobile; lg:order-2 moves it to the right on desktop.
          */}
          <FadeIn className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
              <Image
                src="/images/drumroll-warehouse.jpg"
                alt="Pallets of packaged goods inside a Drumroll fulfilment warehouse"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-2 lg:order-1">
            <span className="font-body text-xs font-medium uppercase tracking-wide text-drumroll-orange">
              Live Solution
            </span>

            {/*
              No Drumroll logo file exists in public/images (or anywhere in
              the repo) — per CLAUDE.md §6, the mark must never be hand-
              redrawn, so this is a typographic wordmark placeholder, not a
              recreation of the logo. Swap for a real <Image> the moment the
              asset lands.
            */}
            <p className="mt-4 font-heading text-4xl font-bold text-drumroll-orange sm:text-5xl">
              Drumroll
            </p>
            <p className="mt-2 font-heading text-xl font-semibold text-drumroll-warmwhite">
              You Deserve It.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-drumroll-sand px-3 py-1 font-body text-xs font-medium text-drumroll-charcoal">
                E-Commerce and Social Commerce
              </span>
              <span className="rounded-full bg-drumroll-sand px-3 py-1 font-body text-xs font-medium text-drumroll-charcoal">
                Ibadan, Nigeria
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-drumroll-sand px-3 py-1 font-body text-xs font-medium text-drumroll-charcoal">
                <span className="h-1.5 w-1.5 rounded-full bg-drumroll-purple" aria-hidden="true" />
                Live
              </span>
            </div>

            <p className="mt-6 max-w-2xl font-body text-base leading-body text-drumroll-warmwhite/80 sm:text-lg">
              Drumroll is a pickup-only e-commerce and social commerce
              platform built for urban Nigerian households. Customers order
              household essentials and lifestyle products online through the
              Drumroll website, WhatsApp, and social media channels, then
              collect their purchases from a designated pickup location —
              fast, reliably, and at a price that is better than the open
              market.
            </p>

            <p className="mt-8 font-body text-sm font-medium uppercase tracking-wide text-drumroll-warmwhite/50">
              Sub-Brands
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {SUB_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="rounded-2xl bg-drumroll-warmwhite p-card"
                >
                  <p className="font-heading text-base font-semibold text-drumroll-charcoal">
                    {brand.name}
                  </p>
                  <p className="mt-1 font-body text-sm leading-body text-drumroll-charcoal/70">
                    {brand.category}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-2xl font-body text-sm leading-body text-drumroll-warmwhite/60">
              All products are sourced directly from manufacturers and
              producers, removing middlemen and passing the cost saving to
              the customer.
            </p>

            <a
              href="https://buyatdrumroll.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full bg-drumroll-orange px-8 font-body text-sm font-medium text-drumroll-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drumroll-orange focus-visible:ring-offset-2 focus-visible:ring-offset-drumroll-charcoal sm:w-auto"
            >
              Visit Drumroll
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
