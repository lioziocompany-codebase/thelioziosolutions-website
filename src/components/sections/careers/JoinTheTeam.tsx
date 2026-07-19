// Page-level intro for /careers (moved out of /team, where this used to be
// an in-page section anchored at #join). Now a standalone page's opening
// moment, so the heading is an h1 at the same text-h1/h1-lg scale every
// other page's opening section uses, not the smaller in-page h2 it had
// when it lived inside /team.
//
// Not wrapped in FadeIn — this is the LCP candidate on this page, matching
// every other page's un-gated opening section (Hero.tsx, solutions/page.tsx,
// TeamGrid's h1, etc.).
export default function JoinTheTeam() {
  return (
    <section className="bg-liozio-charcoal">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <div className="max-w-3xl">
          <h1 className="font-heading text-h1 font-bold text-white lg:text-h1-lg">
            Join the Team
          </h1>
          <p className="mt-6 max-w-2xl font-body text-xl leading-body text-white/80">
            LIOZIO Solutions is building its founding team for a long-term
            commercial journey. If you want to build something real, operate
            at the frontier of African commerce and technology, and grow with
            a company that rewards execution over credentials, we want to
            hear from you.
          </p>
          <p className="mt-4 max-w-2xl font-body text-sm italic leading-body text-liozio-silver">
            &ldquo;Tell us who you are, what you want to build, and why
            LIOZIO.&rdquo;
          </p>
          <a
            href="mailto:PRO@thelioziosolutions.com"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal sm:w-auto"
          >
            PRO@thelioziosolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}
