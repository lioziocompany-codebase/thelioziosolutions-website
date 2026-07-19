import { Mail } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function PressEnquiries() {
  return (
    <section className="bg-liozio-silver">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <FadeIn className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-semibold text-liozio-charcoal">
              Press Enquiries and Media Resources
            </h2>
            <p className="mt-3 font-body text-base leading-body text-liozio-charcoal/75">
              For interview requests, press releases, company information,
              logos, and executive commentary, contact the LIOZIO Solutions
              communications team directly.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <a
              href="mailto:partners@thelioziosolutions.com"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-liozio-purple px-8 font-body text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              partners@thelioziosolutions.com
            </a>
            <span className="font-body text-xs font-medium uppercase tracking-wide text-liozio-charcoal/70">
              Always Available
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
