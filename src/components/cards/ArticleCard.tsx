import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  byline: string;
  date: string;
  slug: string;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  byline,
  date,
  slug,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex h-full flex-col rounded-2xl bg-liozio-silver p-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg lg:p-card-lg">
      <span className="inline-flex w-fit items-center rounded-full bg-liozio-purple/10 px-3 py-1 font-body text-xs font-medium text-liozio-purple">
        {category}
      </span>
      <h3 className="mt-4 font-heading text-lg font-semibold text-liozio-charcoal">
        {title}
      </h3>
      <p className="mt-2 flex-1 font-body text-base leading-body text-liozio-charcoal/75">
        {excerpt}
      </p>
      <div className="mt-4 font-body text-xs text-liozio-charcoal/70">
        {byline} · {formattedDate}
      </div>
      <Link
        href={`/newsroom/${slug}`}
        className="mt-4 inline-flex w-fit items-center gap-1 rounded-sm font-body text-sm font-medium text-liozio-purple hover:text-liozio-purple/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2"
      >
        Read more
        <span className="sr-only"> about {title}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
