import FadeIn from "@/components/ui/FadeIn";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function NewsletterSignup() {
  return (
    <section className="bg-liozio-charcoal">
      <div className="mx-auto max-w-container px-gutter py-section text-center lg:px-8 lg:py-section-lg">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            The LIOZIO Brief
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-body text-white/80 sm:text-lg">
            Subscribe to The LIOZIO Brief; a monthly newsletter on African
            commerce, technology, and what we are building.
          </p>

          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
          <p className="mx-auto mt-3 max-w-md font-body text-xs leading-body text-white/50">
            Enter your email address and press Subscribe. We publish once a
            month. No noise, no spam. Just insight.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
