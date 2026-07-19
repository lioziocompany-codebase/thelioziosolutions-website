import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[60vh] max-w-container flex-col items-center justify-center px-gutter py-section text-center lg:px-8 lg:py-section-lg">
        <FadeIn>
          <span className="font-body text-xs font-medium uppercase tracking-wide text-liozio-gold">
            404
          </span>
          <h1 className="mt-4 font-heading text-h1 font-bold text-liozio-charcoal lg:text-h1-lg">
            This page doesn&rsquo;t exist — yet.
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-body text-liozio-charcoal/70">
            You might be early. We&rsquo;re building fast.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2"
          >
            Go back home
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
