import { Globe } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const FOOTPRINT = [
  {
    label: "Headquarters",
    value: "Ibadan, Oyo State, Nigeria",
  },
  {
    label: "First Solution Live",
    value: "Ibadan, Nigeria — Drumroll",
  },
  {
    label: "Technology Infrastructure",
    value:
      "Cloud-based. Built for national and continental scale from day one.",
  },
  {
    label: "Expansion Roadmap",
    value:
      "Lagos next. Pan-African scale follows product-market fit confirmation.",
  },
];

export default function GlobalFootprint() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <FadeIn className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-liozio-purple" aria-hidden="true" />
          <h2 className="font-body text-xs font-medium uppercase tracking-wide text-liozio-purple">
            Global Footprint
          </h2>
        </FadeIn>

        <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FOOTPRINT.map((row, index) => (
            <FadeIn
              key={row.label}
              delay={Math.min(index * 0.08, 0.24)}
              className="h-full rounded-2xl bg-liozio-silver p-card lg:p-card-lg"
            >
              <dt className="font-body text-sm font-medium text-liozio-charcoal/70">
                {row.label}
              </dt>
              <dd className="mt-2 font-body text-base leading-body text-liozio-charcoal">
                {row.value}
              </dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
