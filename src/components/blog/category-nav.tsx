import Link from "next/link";
import { BLOG_CATEGORIES } from "@/data/blog-categories";
import { cn } from "@/lib/utils";

/**
 * Pasek kategorii bloga. `activeSlug === null` → „Wszystkie" aktywne.
 * `activeSlug === undefined` → żadna nie jest wyróżniona (np. widok wpisu).
 */
export function CategoryNav({ activeSlug }: { activeSlug?: string | null }) {
  const base =
    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors";
  return (
    <nav className="flex flex-wrap justify-center gap-2.5">
      <Link
        href="/blog"
        className={cn(
          base,
          activeSlug === null
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
        )}
      >
        Wszystkie
      </Link>
      {BLOG_CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog/kategoria/${cat.slug}`}
          className={cn(
            base,
            activeSlug === cat.slug
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
          )}
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}
