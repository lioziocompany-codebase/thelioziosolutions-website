import type { Metadata } from "next";
import Link from "next/link";
import OurStory from "@/components/sections/about/OurStory";
import Philosophy from "@/components/sections/about/Philosophy";
import FadeIn from "@/components/ui/FadeIn";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | The LIOZIO Solutions",
  description:
    "LIOZIO Solutions was founded in Ibadan, Nigeria, to solve fragmented supply chains, unreliable service, and unfair prices in the Nigerian consumer market.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <OurStory />
      <Philosophy />

      {/*
        Liozio Company acknowledgment — CONTENT.md marks this as "not explicitly
        in PDF," with instructions to write one brief sentence and omit any link
        until a parent site URL is confirmed. Placeholder pending real copy and
        a confirmed lioziocompanies.com (or equivalent) link from the user.
      */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-gutter py-section text-center lg:px-8 lg:py-section-lg">
          <FadeIn>
            <span className="font-body text-xs font-medium uppercase tracking-wide text-liozio-gold">
              Parent Company
            </span>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-body text-liozio-charcoal/80">
              The LIOZIO Solutions is a proud venture under Liozio Company.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA — reuses Hero's primary CTA styling; no new CTABanner component. */}
      <section className="bg-liozio-charcoal">
        <div className="mx-auto max-w-container px-gutter py-section text-center lg:px-8 lg:py-section-lg">
          <FadeIn>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal sm:w-auto"
            >
              Partner With Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
