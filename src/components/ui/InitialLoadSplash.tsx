"use client";

import { useEffect, useState } from "react";
import LogoLoader from "@/components/ui/LogoLoader";

const MIN_SPLASH_MS = 1500;
const FADE_MS = 300;

// Lives in the root layout, not app/loading.tsx — see the note in this
// build step's summary for why. In short: every route in this site is
// fully static/prerendered, so there is no async Suspense boundary on the
// initial request for app/loading.tsx to ever act as a fallback for; it
// would be dead code. A client component in the root layout can actually
// cover the page while it hydrates and fade out once ready, and — because
// the root layout stays mounted across client-side navigations in the App
// Router — it naturally only ever shows once per hard page load, not on
// every Link click.
//
// Unlike RouteLoader, this always shows immediately and unconditionally —
// no network-aware skip/delay. It holds for a fixed minimum of 1.5s
// *since navigation started* (not since this component mounted — hydration
// itself eats a few hundred ms before this can render at all, and that time
// counts against the 1.5s budget, so the fade lands close to the 1.5-1.8s
// window a user actually experiences from the moment they clicked/reloaded).
// If the page genuinely takes longer than 1.5s to become ready, it keeps
// showing until it is: 1.5s is a floor, not a cap. It deliberately does not
// use useNetworkAwareLoading — that hook's entire purpose is the "skip if
// fast" behavior this component is specifically not supposed to have
// anymore. RouteLoader still uses it, unchanged.
export default function InitialLoadSplash() {
  const [isReady, setIsReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleLoad() {
      setIsReady(true);
    }

    if (document.readyState === "complete") {
      // Defer instead of calling setState synchronously in the effect body.
      const raf = requestAnimationFrame(handleLoad);
      return () => cancelAnimationFrame(raf);
    }

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Once the page is ready, wait out whatever's left of the 1.5s budget —
  // measured from navigation start via performance.now(), so hydration time
  // is already counted against it — before starting the fade.
  useEffect(() => {
    if (!isReady) return;

    const remaining = Math.max(MIN_SPLASH_MS - performance.now(), 0);
    const timeout = setTimeout(() => setIsFadingOut(true), remaining);
    return () => clearTimeout(timeout);
  }, [isReady]);

  // Unmount only after the CSS fade transition has actually finished.
  useEffect(() => {
    if (!isFadingOut) return;

    const timeout = setTimeout(() => setIsVisible(false), FADE_MS);
    return () => clearTimeout(timeout);
  }, [isFadingOut]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-white pointer-events-none transition-opacity duration-300 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <LogoLoader size="large" />
    </div>
  );
}
