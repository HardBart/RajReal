import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { buttonVariants } from "@/components/ui/button";
import { BlogDisclaimer } from "@/components/blog/disclaimer";
import { cn } from "@/lib/utils";

/**
 * Komponenty renderujące elementy MDX oraz komponenty dostępne bezpośrednio
 * w treści wpisów (Disclaimer, Cta). Styl „prose" ustawiony w artykule.
 */

function Anchor({ href = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link
        href={href}
        className="font-medium text-primary underline underline-offset-2"
        {...props}
      />
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary underline underline-offset-2"
      {...props}
    />
  );
}

/** Obraz w treści wpisu (opcjonalny), z podpisem. */
function MdxImage({
  src,
  alt = "",
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl border border-border">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 720px, 90vw" className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Wewnętrzne wezwanie do kontaktu, dostępne w treści wpisu jako <Cta />. */
function Cta({
  title = "Masz podobną sytuację?",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-border bg-green-deep p-7 text-center">
      <h3 className="text-xl font-medium text-white">{title}</h3>
      {children && (
        <div className="mt-2 text-sm text-white/75 [&_p]:m-0">{children}</div>
      )}
      <Link
        href="/#kontakt"
        className={buttonVariants({
          size: "lg",
          className: "mt-5 bg-gold text-gold-foreground hover:bg-gold/90",
        })}
      >
        Opisz swoją sytuację
      </Link>
    </aside>
  );
}

const components = {
  a: Anchor,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 scroll-mt-24 text-2xl font-medium tracking-tight text-primary" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 text-xl font-medium text-foreground" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-4 list-disc space-y-2 pl-6 marker:text-primary" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 marker:text-muted-foreground" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="my-6 border-l-4 border-gold/60 bg-secondary/40 py-2 pl-5 pr-4 text-foreground/80 italic" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-10 border-border" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-border px-4 py-2 font-medium text-foreground" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-border/60 px-4 py-2 text-muted-foreground" {...props} />
  ),
  Image: MdxImage,
  Disclaimer: BlogDisclaimer,
  Cta,
};

export function MdxContent({ source, className }: { source: string; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-none text-[1.05rem] leading-relaxed text-foreground/85 [&_p]:my-4",
        className,
      )}
    >
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  );
}
