"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface LogoLoaderProps {
  size?: "small" | "large";
  className?: string;
  /** Set when a parent control already announces its own loading state
   * (e.g. a submit button whose text becomes "Sending…") — omits the
   * redundant role="status"/aria-label so screen readers aren't told
   * "Loading" and "Sending" back to back for the same event. */
  decorative?: boolean;
}

// Matches the real file dimensions (200x174) — see Navbar/Footer's logo usage.
const SIZE_CLASSES = {
  small: "h-6 w-auto",
  large: "h-16 w-auto sm:h-20",
};

// Branded loading indicator — the LIOZIO hexagon mark with a subtle
// circling/pulsing animation. Respects prefers-reduced-motion: no rotation,
// just a gentle opacity pulse.
export default function LogoLoader({
  size = "large",
  className,
  decorative = false,
}: LogoLoaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      role={decorative ? undefined : "status"}
      aria-label={decorative ? undefined : "Loading"}
      aria-hidden={decorative ? "true" : undefined}
      className={className}
      animate={
        shouldReduceMotion
          ? { opacity: [0.4, 1, 0.4] }
          : { rotate: 360, scale: [1, 1.08, 1] }
      }
      transition={{
        duration: shouldReduceMotion ? 1.6 : 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/The_LIOZIO_Solutions_Logo.png"
        alt=""
        width={200}
        height={174}
        className={SIZE_CLASSES[size]}
      />
    </motion.div>
  );
}
