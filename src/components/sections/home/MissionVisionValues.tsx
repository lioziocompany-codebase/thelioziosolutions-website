import {
  Database,
  FlaskConical,
  Hammer,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import ValueCard from "@/components/cards/ValueCard";

const CORE_VALUES = [
  {
    icon: Hammer,
    title: "Build for Reality, Not for Ideal Conditions",
    description:
      "We design every solution for Africa today, accounting for its infrastructure, constraints, and enormous consumer potential. We do not wait for perfect conditions. We build for real ones.",
  },
  {
    icon: FlaskConical,
    title: "Prove Before You Scale",
    description:
      "We achieve product-market fit before we invest in scale. Every decision is grounded in data, customer feedback, and commercial evidence. Growth without proof is just spending.",
  },
  {
    icon: Database,
    title: "Data is a Strategic Asset",
    description:
      "Every LIOZIO solution is designed from day one to generate customer and commercial data. That data makes our solutions smarter, our decisions sharper, and our next solution stronger.",
  },
  {
    icon: HeartHandshake,
    title: "Technology Serves People",
    description:
      "We use AI, automation, and technology to make life easier for real people; not to replace human connection, but to extend it. Technology is a tool. People are the point.",
  },
  {
    icon: Zap,
    title: "Lean is a Competitive Advantage",
    description:
      "We do more with less. A lean operation moves faster, learns quicker, and serves customers better than a bloated one. We never confuse activity with progress or spending with building.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity in Every Interaction",
    description:
      "With customers, partners, suppliers, and team members, we say what we mean, and we do what we say. Our reputation is our most valuable commercial asset.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <div className="h-full rounded-2xl bg-liozio-silver p-card lg:p-card-lg">
              <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-gold">
                Mission
              </h2>
              <p className="mt-4 font-body text-base leading-body text-liozio-charcoal">
                To build technology-powered e-commerce and commercial
                solutions that give African consumers access to quality
                products, fair prices, and experiences they deserve, starting
                in Nigeria and growing across the continent.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl bg-liozio-silver p-card lg:p-card-lg">
              <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-gold">
                Vision
              </h2>
              <p className="mt-4 font-body text-base leading-body text-liozio-charcoal">
                A continent where every African household has access to
                quality goods and services through smart, reliable, and
                affordable technology-driven solutions built by Africans for
                Africans.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16">
          <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-purple">
            Core Values
          </h2>
        </FadeIn>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value, index) => (
            <FadeIn key={value.title} delay={Math.min(index * 0.08, 0.32)}>
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
