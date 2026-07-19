import FadeIn from "@/components/ui/FadeIn";

// Deliberately quiet — per CONTENT.md: "We announce solutions when they are
// ready. Not before." No cards, no icons, no CTA; nothing to overpromise.
export default function InDevelopment() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <FadeIn className="max-w-2xl">
          <span className="font-body text-xs font-medium uppercase tracking-wide text-liozio-charcoal/70">
            In Development
          </span>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-liozio-charcoal/80">
            Future Solutions
          </h2>
          <p className="mt-4 font-body text-base leading-body text-liozio-charcoal/70">
            LIOZIO Solutions is developing additional technology and commerce
            solutions across African market categories. Each solution will
            leverage the data infrastructure, supply chain relationships, and
            operational knowledge built through Drumroll. AI and automation
            are embedded in every future solution from its first day of
            design. We do not retrofit technology - we build it in. We
            announce solutions when they are ready. Not before.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
