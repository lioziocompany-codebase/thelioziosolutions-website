"use client";

import Image from "next/image";
import Link from "next/link";
import { useImageSlideshow } from "@/lib/useImageSlideshow";

// Real LIOZIO team photography. Both are bright, light-toned interiors —
// nowhere near dark enough on their own for reliable white-text contrast,
// hence the gradient overlay below rather than a light scrim.
const HERO_IMAGES = [
  { src: "/images/hero-team-1.jpg", objectPosition: "center" },
  // Source photo is near-square (1084x1080) inside a much wider desktop
  // hero band. At the previous 60% the crop sat on the subjects' chests —
  // both faces were entirely above the visible frame, not just brushed by
  // the header text. Re-tuned by rendering the real crop against the actual
  // headline/CTA text at several values; 22% is the point where both faces
  // clear the paragraph above and the buttons below with real margin on
  // both sides. Same single value is used at every breakpoint on purpose:
  // on narrow/tall mobile viewports the scaled image height already
  // matches the container height almost exactly (verified — 0% to 50% render
  // pixel-identical there), so there's no vertical slack left for this
  // value to affect. Mobile framing is a horizontal crop only.
  { src: "/images/hero-team-2.jpg", objectPosition: "center 22%" },
];

const CYCLE_MS = 7000;

// Not wrapped in FadeIn — this is the LCP candidate on every load. A
// Lighthouse audit measured ~1.3s of pure "element render delay" here
// caused by the opacity:0-until-hydrated animation gating; always-above-
// the-fold content renders immediately instead. See FadeIn.tsx for where
// the scroll-triggered reveal is still used (genuinely below-fold content).
//
// The background photos are decorative (alt="") — the headline/subhead
// already carry the message in real text, the photos add warmth/proof,
// not information.
export default function Hero() {
  const active = useImageSlideshow(HERO_IMAGES.length, CYCLE_MS);

  return (
    <section className="relative isolate overflow-hidden bg-liozio-charcoal">
      <div className="absolute inset-0 -z-10">
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="100vw"
            style={{ objectPosition: image.objectPosition }}
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/*
          Both source photos are bright (light walls/marble/floors), so a
          flat scrim alone needed ~65% opacity to guarantee 4.5:1 for white
          text against the brightest measured regions. Using a gradient
          instead concentrates that strength through the vertical middle
          band where the centered text block actually sits, and eases off
          slightly at the very top/bottom edges where nothing renders —
          verified against both photos' measured luminance, not eyeballed.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-liozio-charcoal/55 via-liozio-charcoal/72 to-liozio-charcoal/58" />
      </div>

      <div className="relative mx-auto max-w-container px-gutter py-section text-center lg:px-8 lg:py-section-lg">
        <h1 className="font-heading text-h1 font-bold text-white lg:text-h1-lg">
          Building What Africa Deserves.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-body text-liozio-silver">
          Technology-driven e-commerce and commercial solutions for the
          African consumer market.
        </p>
        <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-body text-white/70">
          LIOZIO Solutions is a Nigerian technology and commerce group. We
          build e-commerce, social commerce, and AI-powered solutions that
          solve real, recurring problems for African consumers and
          businesses. We start with clarity. We build with precision. We
          scale what the market confirms.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/solutions"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-liozio-gold px-8 font-body text-sm font-medium text-liozio-charcoal transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-gold focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal sm:w-auto"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/about"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/30 px-8 font-body text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:border-white/60 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-liozio-charcoal sm:w-auto"
          >
            About LIOZIO Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
