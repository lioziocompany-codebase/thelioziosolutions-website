"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Shared by Hero.tsx and TeamHero.tsx — auto-cycles a background photo
// slideshow. Respects prefers-reduced-motion by simply never starting the
// interval, so the first image stays put with no motion at all.
export function useImageSlideshow(imageCount: number, cycleMs: number): number {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % imageCount);
    }, cycleMs);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, imageCount, cycleMs]);

  return active;
}
