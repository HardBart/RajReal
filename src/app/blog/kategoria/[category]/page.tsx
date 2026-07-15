import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/blog";
import { BLOG_CATEGORIES, getCategory } from "@/data/blog-categories";
import { PostCard } from "@/components/blog/post-card";
import { CategoryNav } from "@/components/blog/category-nav";
import { BlogDisclaimer } from "@/components/blog/disclaimer";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/shared/json-ld";
import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.label} — blog`,
    description: cat.description,
    path: `/blog/kategoria/${cat.slug}`,
  });
}

export default async function BlogCategoryPage({ params }: Params) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(cat.slug);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Strona główna", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: cat.label, path: `/blog/kategoria/${cat.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Blog"
            title={`${cat.label}.`}
            description={cat.description}
            align="center"
            className="mx-auto"
          />

          <div className="mt-10">
            <CategoryNav activeSlug={cat.slug} />
          </div>

          {posts.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              W tej kategorii nie ma jeszcze artykułów. Zajrzyj wkrótce.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          <div className="mx-auto mt-12 max-w-3xl">
            <BlogDisclaimer variant="inline" />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
