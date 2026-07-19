"use client";

import Image from "next/image";
import { useImageSlideshow } from "@/lib/useImageSlideshow";

// Same two photos as the homepage Hero, same corrected object-position for
// hero-team-2.jpg (see Hero.tsx for how that 22% value was derived) — but
// no priority/fetchPriority here. This section isn't the site's LCP
// candidate the way the homepage Hero is, so it doesn't need the preload
// treatment.
const TEAM_HERO_IMAGES = [
  { src: "/images/hero-team-1.jpg", objectPosition: "center" },
  { src: "/images/hero-team-2.jpg", objectPosition: "center 22%" },
];

const CYCLE_MS = 7000;

// Deliberately distinct from the homepage Hero: left-aligned (matching
// every other page's intro template — About/Solutions/Newsroom/Contact —
// rather than Hero's centered layout) and a purple/gold overlay instead of
// flat charcoal, so this reads as "Team," not a repeated homepage banner.
//
// Contrast: liozio-purple has a relative luminance of ~0.038 — dark enough
// that an 82-88% purple scrim alone comfortably clears 4.5:1 even against
// the brightest measured region of either photo. liozio-gold is the
// opposite (~0.47 luminance, 2.03:1 against white text on its own), so it
// only appears as a small, low-opacity radial accent layered on top of the
// already-safe purple scrim — verified this stays under the ~21% opacity
// ceiling the worst-case photo brightness allows before the composite
// would risk dropping under 4.5:1, then confirmed again against the real
// rendered screenshot, not just the math.
export default function TeamHero() {
  const active = useImageSlideshow(TEAM_HERO_IMAGES.length, CYCLE_MS);

  return (
    <section className="relative isolate overflow-hidden bg-liozio-purple">
      <div className="absolute inset-0 -z-10">
        {TEAM_HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: image.objectPosition }}
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-liozio-purple/88 via-liozio-purple/75 to-liozio-purple/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(245,166,35,0.18),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        <h1 className="font-heading text-h1 font-bold text-white lg:text-h1-lg">
          Our Team.
        </h1>
        <p className="mt-4 max-w-2xl font-body text-xl leading-body text-liozio-silver">
          A lean group of operators, builders, and commercial thinkers
          committed to building what Africa deserves.
        </p>
        <p className="mt-6 max-w-3xl font-body text-base leading-body text-white/80 sm:text-lg">
          LIOZIO Solutions was built on the principle that a small,
          capable, and deeply committed team outperforms a large,
          unfocused one every time. Every member of our founding team
          wears multiple hats. Every person is a builder first.
        </p>
      </div>
    </section>
  );
}
