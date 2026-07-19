import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import MissionVisionValues from "@/components/sections/home/MissionVisionValues";
import SolutionsSnapshot from "@/components/sections/home/SolutionsSnapshot";
import GlobalFootprint from "@/components/sections/home/GlobalFootprint";
import { ORGANIZATION_SCHEMA, buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The LIOZIO Solutions — Building What Africa Deserves.",
  description:
    "LIOZIO Solutions is a Nigerian technology and commerce group building e-commerce and AI-powered solutions for African consumers, starting in Ibadan, Nigeria.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* CLAUDE.md §10 — Organization JSON-LD schema, homepage only. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <Hero />
      <MissionVisionValues />
      <SolutionsSnapshot />
      <GlobalFootprint />
    </>
  );
}
