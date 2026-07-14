import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { getPost, getPostSlugs } from "@/lib/blog";
import { resolveBlogCover } from "@/data/blog-images";
import { categoryLabel } from "@/data/blog-categories";
import { MdxContent } from "@/components/blog/mdx-content";
import { BlogDisclaimer } from "@/components/blog/disclaimer";
import { JsonLd } from "@/components/shared/json-ld";
import { ContactSection } from "@/components/sections/contact-section";
import { formatDatePl } from "@/lib/format-date";
import { buildMetadata, absoluteUrl, blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const cover = resolveBlogCover(post.cover);
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: cover.src,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const cover = resolveBlogCover(post.cover);
  const catLabel = categoryLabel(post.category);

  const jsonLd = [
    blogPostingJsonLd({
      title: post.title,
      description: post.description,
      slug: post.slug,
      datePublished: post.date,
      image: cover.src.startsWith("http") ? cover.src : absoluteUrl(cover.src),
      author: post.author,
    }),
    breadcrumbJsonLd([
      { name: "Strona główna", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: catLabel, path: `/blog/kategoria/${post.category}` },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <article className="section-y">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Wróć do bloga
            </Link>

            <div className="mt-6">
              <Link
                href={`/blog/kategoria/${post.category}`}
                className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                {catLabel}
              </Link>
            </div>

            <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                <time dateTime={post.date}>{formatDatePl(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readingMinutes} min czytania
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl border border-border shadow-sm">
              <Image
                src={cover.src}
                alt={post.coverAlt ?? cover.alt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <MdxContent source={post.content} />
            <BlogDisclaimer />
          </div>
        </div>
      </article>

      <ContactSection />
    </>
  );
}
