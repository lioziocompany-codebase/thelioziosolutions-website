import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import RegisteredBusiness from "@/components/sections/contact/RegisteredBusiness";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact | The LIOZIO Solutions",
  description:
    "LIOZIO Solutions is open to real commercial, partnership, and talent conversations — reach us directly for enquiries, partnerships, press, and careers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Not wrapped in FadeIn — measured LCP candidate on this page. */}
            <div>
              <h1 className="font-heading text-h1 font-bold text-liozio-charcoal lg:text-h1-lg">
                Let&rsquo;s Talk.
              </h1>
              <p className="mt-4 max-w-2xl font-body text-xl leading-body text-liozio-charcoal/70">
                We are open to conversations that create genuine value.
              </p>
              <p className="mt-6 max-w-3xl font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg">
                LIOZIO Solutions does not pursue conversations for the sake
                of it. But where there is a real commercial, partnership, or
                talent opportunity, we are always available. Reach us
                directly, no contact forms, no automated responses.
              </p>
            </div>

            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-liozio-silver">
        <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
          <ContactDetails />
          <RegisteredBusiness />
        </div>
      </section>
    </>
  );
}
