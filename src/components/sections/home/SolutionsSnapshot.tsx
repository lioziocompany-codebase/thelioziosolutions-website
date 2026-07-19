import { Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SolutionCard from "@/components/cards/SolutionCard";

export default function SolutionsSnapshot() {
  return (
    <section className="bg-liozio-silver">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <FadeIn>
          <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-purple">
            Our Solutions
          </h2>
        </FadeIn>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <SolutionCard
              name="Drumroll"
              status="Live"
              description="Our flagship e-commerce and social commerce solution. Pickup-only. Operating in Ibadan, Nigeria."
              subBrands={["Goodfood", "Bountiful", "Joombow"]}
              ctaLabel="Visit Drumroll"
              href="https://buyatdrumroll.com"
              image="/images/drumroll-warehouse-wide.jpg"
              imageAlt="Pallets of packaged goods inside a Drumroll fulfilment warehouse"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-dashed border-liozio-purple/30 bg-transparent p-card lg:p-card-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Sparkles className="h-5 w-5 text-liozio-purple" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-liozio-charcoal">
                Future Solutions
              </h3>
              <p className="mt-2 font-body text-base leading-body text-liozio-charcoal/70">
                Additional LIOZIO solutions are in development across
                adjacent technology and commerce markets. We announce
                solutions when they are ready.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
