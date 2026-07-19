import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface SolutionCardProps {
  name: string;
  status: string;
  description: string;
  subBrands?: string[];
  ctaLabel: string;
  href: string;
  /** Optional edge-to-edge photo strip above the card content. Omit for
   * solutions with no real photography yet (e.g. Future Solutions). */
  image?: string;
  imageAlt?: string;
}

// Every LIOZIO solution anchors on liozio-purple — CLAUDE.md §4a connection rule.
export default function SolutionCard({
  name,
  status,
  description,
  subBrands,
  ctaLabel,
  href,
  image,
  imageAlt = "",
}: SolutionCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-liozio-purple/15 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-card lg:p-card-lg">
        <span className="inline-flex w-fit items-center rounded-full bg-liozio-gold/15 px-3 py-1 font-body text-xs font-medium text-liozio-charcoal">
          {status}
        </span>
        <h3 className="mt-4 font-heading text-xl font-semibold text-liozio-purple">
          {name}
        </h3>
        <p className="mt-2 font-body text-base leading-body text-liozio-charcoal/75">
          {description}
        </p>
        {subBrands && subBrands.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {subBrands.map((brand) => (
              <li
                key={brand}
                className="rounded-full bg-liozio-silver px-3 py-1 font-body text-xs font-medium text-liozio-charcoal"
              >
                {brand}
              </li>
            ))}
          </ul>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 w-fit items-center gap-1.5 rounded-full bg-liozio-purple px-8 font-body text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
