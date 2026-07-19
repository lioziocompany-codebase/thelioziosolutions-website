import type { Metadata } from "next";
import JoinTheTeam from "@/components/sections/careers/JoinTheTeam";
import CultureGallery from "@/components/sections/careers/CultureGallery";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers | The LIOZIO Solutions",
  description:
    "LIOZIO Solutions is building its founding team for a long-term commercial journey. See what it's like to build with us, and reach out if you want in.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JoinTheTeam />
      <CultureGallery />
    </>
  );
}
