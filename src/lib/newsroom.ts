import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const NEWSROOM_DIR = path.join(process.cwd(), "content", "newsroom");

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  byline: string;
  date: string;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

function readArticleFile(filename: string): Article {
  const filePath = path.join(NEWSROOM_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as ArticleFrontmatter), content };
}

// Server-only: reads content/newsroom/*.mdx from disk. Never import this
// from a "use client" component.
export function getAllArticles(): Article[] {
  const files = fs.readdirSync(NEWSROOM_DIR).filter((file) => file.endsWith(".mdx"));
  const articles = files.map(readArticleFile);
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}
