"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import ArticleCard from "@/components/cards/ArticleCard";
import type { Article } from "@/lib/newsroom";

// CONTENT.md's /newsroom tag list, exactly — includes "Press" even though no
// article currently carries that tag, so the filter reflects the full taxonomy.
const CATEGORIES = [
  "All",
  "Company News",
  "Thought Leadership",
  "Technology",
  "African Commerce",
  "Press",
];

const PAGE_SIZE = 6;

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [articles, activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div>
      {/* Fixes a heading-order violation: without this, the page's h1 was
          followed directly by ArticleCard's h3 with no h2 between them. */}
      <h2 className="mb-6 font-body text-xs font-medium uppercase tracking-wide text-liozio-purple">
        All Articles
      </h2>
      <div
        role="tablist"
        aria-label="Filter articles by category"
        className="flex flex-wrap gap-2"
      >
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleCategoryChange(category)}
              className={`min-h-11 rounded-full px-4 font-body text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-liozio-purple text-white"
                  : "bg-liozio-silver text-liozio-charcoal hover:bg-liozio-silver/70"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((article, index) => (
            <FadeIn key={article.slug} delay={Math.min(index * 0.06, 0.3)}>
              <ArticleCard
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                byline={article.byline}
                date={article.date}
                slug={article.slug}
              />
            </FadeIn>
          ))}
        </div>
      ) : (
        <p className="mt-8 font-body text-base text-liozio-charcoal/70">
          No articles in this category yet.
        </p>
      )}

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-liozio-purple px-8 font-body text-sm font-medium text-liozio-purple transition-all duration-200 hover:scale-[1.02] hover:bg-liozio-purple hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
