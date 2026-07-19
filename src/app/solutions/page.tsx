import type { Metadata } from "next";
import DrumrollFeature from "@/components/sections/solutions/DrumrollFeature";
import InDevelopment from "@/components/sections/solutions/InDevelopment";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Solutions | The LIOZIO Solutions",
  description:
    "Explore Drumroll, LIOZIO Solutions' live pickup-only e-commerce and social commerce platform in Ibadan, Nigeria, plus solutions currently in development.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      {/* Not wrapped in FadeIn — measured LCP candidate on this page. */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
          <h1 className="font-heading text-h1 font-bold text-liozio-charcoal lg:text-h1-lg">
            We Build Solutions. We Do Not Just Build Products.
          </h1>
          <p className="mt-4 max-w-2xl font-body text-xl leading-body text-liozio-charcoal/70">
            Every LIOZIO solution solves a verified, recurring market
            problem at scale.
          </p>
          <p className="mt-6 max-w-3xl font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg">
            LIOZIO Solutions is a portfolio builder. We identify gaps in
            African consumer and technology markets, build solutions to
            close those gaps, and scale what the market confirms. Every
            solution we build is powered by technology, driven by data, and
            designed for the realities of African commerce.
          </p>
        </div>
      </section>

      <DrumrollFeature />
      <InDevelopment />
    </>
  );
}
