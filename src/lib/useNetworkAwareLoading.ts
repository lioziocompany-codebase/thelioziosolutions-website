"use client";

import { useEffect, useRef, useState } from "react";

const FAST_DELAY_MS = 200;
const MIN_VISIBLE_MS = 400;

type EffectiveConnectionType = "slow-2g" | "2g" | "3g" | "4g";

interface NetworkInformation {
  effectiveType?: EffectiveConnectionType;
  saveData?: boolean;
}

function getConnection(): NetworkInformation | undefined {
  if (typeof navigator === "undefined") return undefined;
  return (navigator as Navigator & { connection?: NetworkInformation }).connection;
}

// The Network Information API is unavailable outside Chromium browsers —
// per §16, treat that as "fast" rather than assuming the worst.
function isSlowConnection(): boolean {
  const connection = getConnection();
  if (!connection) return false;
  if (connection.saveData) return true;
  return connection.effectiveType === "slow-2g" || connection.effectiveType === "2g";
}

// Debounced, network-aware loading indicator visibility.
// - Fast (or unavailable) connections: wait ~200ms before showing the
//   loader, so a near-instant load never flashes one at all.
// - Slow connections: show immediately (via a 0ms timeout — every setState
//   here runs from a timer callback, never synchronously in the effect
//   body, per react-hooks/set-state-in-effect).
// - Once shown, stays visible for a minimum of ~400ms to avoid a flicker.
export function useNetworkAwareLoading(isLoading: boolean): boolean {
  const [shouldShow, setShouldShow] = useState(false);
  const shownAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isLoading) {
      const hideDelay =
        shownAtRef.current === null
          ? 0
          : Math.max(MIN_VISIBLE_MS - (Date.now() - shownAtRef.current), 0);

      const timeout = setTimeout(() => {
        setShouldShow(false);
        shownAtRef.current = null;
      }, hideDelay);

      return () => clearTimeout(timeout);
    }

    const showDelay = isSlowConnection() ? 0 : FAST_DELAY_MS;

    const timeout = setTimeout(() => {
      shownAtRef.current = Date.now();
      setShouldShow(true);
    }, showDelay);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return shouldShow;
}
