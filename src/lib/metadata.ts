import type { Metadata } from "next";

export const SITE_NAME = "The LIOZIO Solutions";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thelioziosolutions.com";

// PLACEHOLDER — no proper 1200x630 OG image has been designed yet. Using the
// site logo (its real dimensions, 200x174) as a stand-in so OG/Twitter cards
// aren't blank. Swap for a real social-share image once one is designed.
export const DEFAULT_OG_IMAGE = {
  url: "/images/The_LIOZIO_Solutions_Logo.png",
  width: 200,
  height: 174,
  alt: "The LIOZIO Solutions",
};

// CLAUDE.md §10 — Organization JSON-LD, rendered on the homepage.
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: SITE_NAME,
  identifier: "RC 7324519",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG",
  },
  slogan: "Building What Africa Deserves.",
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

// Shared shape for every page's metadata export — title, description,
// canonical URL, Open Graph, and Twitter card, all from one call site so
// none of the pages drift out of sync with each other.
export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
