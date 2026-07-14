import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { LANDING_SLUGS } from "@/data/landings";
import { getAllPosts } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/data/blog-categories";

/**
 * sitemap.xml generowany z NEXT_PUBLIC_SITE_URL. Obejmuje stronę główną,
 * wszystkie landingi SEO oraz strony prawne.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const landings: MetadataRoute.Sitemap = LANDING_SLUGS.map((slug) => ({
    url: absoluteUrl(`/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const legal: MetadataRoute.Sitemap = [
    "/polityka-prywatnosci",
    "/regulamin",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const posts = getAllPosts();

  const blogIndex: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/blog"),
    lastModified: posts[0] ? new Date(posts[0].date) : lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  };

  const blogCategories: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: absoluteUrl(`/blog/kategoria/${cat.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    home,
    ...landings,
    blogIndex,
    ...blogCategories,
    ...blogPosts,
    ...legal,
  ];
}
