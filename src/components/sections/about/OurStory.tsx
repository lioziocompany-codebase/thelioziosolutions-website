const STORY_PARAGRAPHS = [
  "LIOZIO Solutions was founded in Ibadan, Nigeria, with a straightforward observation: that millions of Nigerian households were spending enormous amounts of time and money on basic consumer needs — navigating markets, overpaying middlemen, and receiving unreliable service, while the technology and commercial infrastructure to solve these problems was sitting largely unused.",
  "The founding team identified three compounding problems in the Nigerian urban consumer market: fragmented supply chains that inflated prices at every layer, the absence of reliable digital commerce infrastructure outside of Lagos, and a consumer base that was digitally connected, economically active, and completely underserved.",
  "The answer was not to build another marketplace. It was to build a vertically integrated solutions company — one that sources directly, brands its own products, uses technology to remove friction, and generates the data needed to keep improving. A company that builds for the real Nigeria, not the imagined one.",
  "LIOZIO Solutions was registered under The LIOZIO Solutions and began operating its first commercial solution, Drumroll, in Ibadan in 2026. Drumroll demonstrated from its earliest operations that Nigerian urban consumers would embrace a pickup-first commerce model when it was built with genuine quality and priced fairly.",
  "Today, LIOZIO Solutions is building a portfolio of technology-powered e-commerce and commercial solutions for the African market. AI and automation are embedded in our operational model from the ground up; not as features, but as infrastructure. Every solution we build learns, adapts, and improves continuously.",
  "We are still early. But we are building on a proven foundation, with a clear philosophy, and with the conviction that the African consumer market represents one of the most significant commercial opportunities of this generation.",
];

export default function OurStory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        {/*
          Prose capped well below the 1200px container for readable line
          length. Not wrapped in FadeIn — this long-form text is the
          measured LCP candidate on this page (Lighthouse: ~2.9s render
          delay from the opacity animation gating it behind hydration);
          reading content renders immediately instead of animating in.
        */}
        <div className="mx-auto max-w-[700px]">
          <h1 className="font-heading text-h1 font-bold text-liozio-charcoal lg:text-h1-lg">
            We Started With a Question.
          </h1>
          <p className="mt-4 font-body text-xl leading-body text-liozio-charcoal/70">
            Why is it so hard to buy good things at fair prices in Nigeria?
          </p>

          <div className="mt-10 space-y-6">
            {STORY_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
