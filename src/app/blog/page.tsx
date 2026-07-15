import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";
import { CategoryNav } from "@/components/blog/category-nav";
import { BlogDisclaimer } from "@/components/blog/disclaimer";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/shared/json-ld";
import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata, absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog — udziały, współwłasność, spadki i zadłużone nieruchomości",
  description:
    "Praktyczne, edukacyjne artykuły o sprzedaży udziałów, współwłasności, sprawach spadkowych i zadłużonych nieruchomościach na Warmii, Mazurach i Podlasiu.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog"),
    name: `Blog — ${SITE_NAME}`,
    url: absoluteUrl("/blog"),
    publisher: { "@id": absoluteUrl("/#organization") },
  };
  const breadcrumb = breadcrumbJsonLd([
    { name: "Strona główna", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={[blogLd, breadcrumb]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Blog"
            title="Wiedza o udziałach, współwłasności i trudnych nieruchomościach."
            description="Zbieramy praktyczne, przystępne informacje dla współwłaścicieli, spadkobierców i osób w trudnej sytuacji prawnej lub finansowej. Bez żargonu i bez presji."
            align="center"
            className="mx-auto"
          />

          <div className="mt-10">
            <CategoryNav activeSlug={null} />
          </div>

          {posts.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              Pierwsze artykuły pojawią się już wkrótce.
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
