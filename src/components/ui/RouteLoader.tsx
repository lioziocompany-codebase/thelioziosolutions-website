"use client";

import LogoLoader from "@/components/ui/LogoLoader";
import { useNetworkAwareLoading } from "@/lib/useNetworkAwareLoading";

// Rendered by Next.js's per-segment loading.tsx convention while a route
// transition is in flight. `isLoading` is passed as always-true: this
// component's own mount/unmount lifecycle IS the loading state — Next.js
// controls when it unmounts (once the route is ready), so only the
// "delay showing on fast connections" half of the hook is meaningful here.
export default function RouteLoader() {
  const shouldShow = useNetworkAwareLoading(true);

  if (!shouldShow) return null;

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LogoLoader size="small" />
    </div>
  );
}
