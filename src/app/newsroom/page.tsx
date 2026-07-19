import type { Metadata } from "next";
import ArticleGrid from "@/components/sections/newsroom/ArticleGrid";
import PressEnquiries from "@/components/sections/newsroom/PressEnquiries";
import NewsletterSignup from "@/components/sections/newsroom/NewsletterSignup";
import { getAllArticles } from "@/lib/newsroom";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Newsroom and Blog | The LIOZIO Solutions",
  description:
    "Company announcements, press coverage, and original content from LIOZIO Solutions on African commerce, e-commerce, technology, and building in Nigeria.",
  path: "/newsroom",
});

export default function NewsroomPage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Not wrapped in FadeIn — measured LCP candidate on this page. */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-gutter py-section lg:px-8 lg:py-section-lg">
          <h1 className="font-heading text-h1 font-bold text-liozio-charcoal lg:text-h1-lg">
            Insights. Updates. Stories from the Field.
          </h1>
          <p className="mt-4 max-w-2xl font-body text-xl leading-body text-liozio-charcoal/70">
            The LIOZIO Perspective on African Commerce and Technology.
          </p>
          <p className="mt-6 max-w-3xl font-body text-base leading-body text-liozio-charcoal/85 sm:text-lg">
            This page will be updated regularly with company
            announcements, press coverage, and original content from the
            LIOZIO Solutions team. We write about what we know: African
            commerce, e-commerce and social commerce operations, AI and
            automation in business, and the realities of building a
            consumer solutions company in Nigeria.
          </p>

          <div className="mt-12">
            <ArticleGrid articles={articles} />
          </div>
        </div>
      </section>

      <PressEnquiries />
      <NewsletterSignup />
    </>
  );
}
