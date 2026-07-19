import type { Metadata } from "next";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamGrid from "@/components/sections/team/TeamGrid";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Team | The LIOZIO Solutions",
  description:
    "Meet the lean team of operators, builders, and commercial thinkers building what Africa deserves — every founding member wears multiple hats and builds first.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
    </>
  );
}
