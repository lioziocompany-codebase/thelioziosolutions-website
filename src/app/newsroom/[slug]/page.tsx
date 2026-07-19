import type { Metadata } from "next";
import type { ComponentProps } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import FadeIn from "@/components/ui/FadeIn";
import { getAllArticles, getArticleBySlug } from "@/lib/newsroom";
import { buildPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: `${article.title} | The LIOZIO Solutions`,
    description: article.excerpt,
    path: `/newsroom/${article.slug}`,
  });
}

// Site typography (Poppins headings / Inter body) for MDX body content.
// Inter is only loaded at weights 400/500 (see layout.tsx), so `strong`
// uses font-medium, not font-semibold, to match what's actually preloaded.
const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-10 font-heading text-2xl font-semibold text-liozio-charcoal"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-8 font-heading text-xl font-semibold text-liozio-charcoal"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="mt-5 font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-5 font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => <li {...props} />,
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-liozio-purple underline underline-offset-2 hover:text-liozio-purple/80"
      {...props}
    />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-medium text-liozio-charcoal" {...props} />
  ),
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
        {/* Prose capped below the 1200px container, matching About's OurStory pattern. */}
        <div className="mx-auto max-w-[700px]">
          <FadeIn>
            <Link
              href="/newsroom"
              className="inline-flex items-center gap-1.5 rounded-sm font-body text-sm font-medium text-liozio-purple hover:text-liozio-purple/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liozio-purple focus-visible:ring-offset-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Newsroom
            </Link>

            <span className="mt-6 inline-flex w-fit items-center rounded-full bg-liozio-purple/10 px-3 py-1 font-body text-xs font-medium text-liozio-purple">
              {article.category}
            </span>

            <h1 className="mt-4 font-heading text-h1 font-bold text-liozio-charcoal lg:text-h1-lg">
              {article.title}
            </h1>

            <div className="mt-4 font-body text-sm text-liozio-charcoal/70">
              {article.byline} · {formattedDate}
            </div>

            {/* MDX body content — not individually wrapped in FadeIn; the
                whole article (header + body) fades in as one block. */}
            <div className="mt-8">
              <MDXRemote source={article.content} components={mdxComponents} />
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
