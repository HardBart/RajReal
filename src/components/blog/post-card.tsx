import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { resolveBlogCover } from "@/data/blog-images";
import { categoryLabel } from "@/data/blog-categories";
import { formatDatePl } from "@/lib/format-date";

export function PostCard({ post }: { post: PostMeta }) {
  const cover = resolveBlogCover(post.cover);
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-16/9 w-full overflow-hidden">
          <Image
            src={cover.src}
            alt={post.coverAlt ?? cover.alt}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            {categoryLabel(post.category)}
          </span>
          <h3 className="mt-4 text-lg font-medium leading-snug text-foreground group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {formatDatePl(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readingMinutes} min czytania
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
