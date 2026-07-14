import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Prosta warstwa danych bloga oparta o pliki .mdx w `src/content/blog`.
 * Dodanie wpisu = wrzucenie nowego pliku `<slug>.mdx` z frontmatterem.
 * Rendering treści MDX obsługuje osobno komponent artykułu (next-mdx-remote/rsc).
 */

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO, np. 2026-07-01
  category: string; // slug kategorii (zob. blog-categories.ts)
  cover?: string; // klucz w BLOG_COVERS
  coverAlt?: string;
  author?: string;
  draft?: boolean;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type PostFull = PostMeta & {
  content: string; // surowy MDX (bez frontmattera)
};

function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function fileToSlug(file: string): string {
  return file.replace(/\.mdx?$/, "");
}

function listFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
}

function readPost(slug: string): PostFull | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    category: fm.category,
    cover: fm.cover,
    coverAlt: fm.coverAlt,
    author: fm.author,
    draft: fm.draft,
    readingMinutes: readingMinutes(content),
    content,
  };
}

const isPublished = (p: { draft?: boolean }) =>
  process.env.NODE_ENV === "development" ? true : !p.draft;

/** Wszystkie opublikowane wpisy, posortowane malejąco po dacie. */
export function getAllPosts(): PostMeta[] {
  return listFiles()
    .map((f) => readPost(fileToSlug(f)))
    .filter((p): p is PostFull => p !== null)
    .filter(isPublished)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPost(slug: string): PostFull | null {
  const post = readPost(slug);
  if (!post || !isPublished(post)) return null;
  return post;
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

/** Sloty kategorii, które faktycznie mają opublikowane wpisy. */
export function getUsedCategorySlugs(): string[] {
  return Array.from(new Set(getAllPosts().map((p) => p.category)));
}
