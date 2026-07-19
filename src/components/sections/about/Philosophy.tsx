import FadeIn from "@/components/ui/FadeIn";

const PHILOSOPHY = [
  {
    label: "On Building",
    statement:
      "We build solutions, not products. A product solves a problem once. A solution solves it repeatedly, at scale, and gets better over time. Every LIOZIO solution is designed to compound in value.",
  },
  {
    label: "On Technology",
    statement:
      "We are a technology company that operates in commerce. AI and automation are not additions to our solutions; they are built into the foundation. Every process that can be automated is. Every insight that can be generated from data will be.",
  },
  {
    label: "On Africa",
    statement:
      "We do not believe Africa needs solutions designed elsewhere and adapted here. We believe Africa needs solutions designed here, from the first line of code and the first supplier conversation.",
  },
  {
    label: "On Scale",
    statement:
      "We prove before we scale. We measure before we move. We confirm that a solution has genuine product-market fit — that customers love it, return to it, and refer others to it — before we invest in expansion.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-liozio-silver">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <FadeIn>
          <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-purple">
            Our Philosophy
          </h2>
        </FadeIn>

        <div className="mt-6 divide-y divide-liozio-charcoal/10 border-t border-liozio-charcoal/10">
          {PHILOSOPHY.map((item, index) => (
            <FadeIn
              key={item.label}
              delay={Math.min(index * 0.08, 0.24)}
              className="grid grid-cols-1 gap-3 py-8 lg:grid-cols-[220px_1fr] lg:gap-12"
            >
              <h3 className="font-heading text-xl font-semibold text-liozio-purple md:text-2xl">
                {item.label}
              </h3>
              <p className="max-w-2xl font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg">
                {item.statement}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
