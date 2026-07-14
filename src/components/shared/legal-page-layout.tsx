import type { ReactNode } from "react";

export function LegalPageLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <article className="container-page section-y max-w-3xl">
      <h1 className="text-3xl font-medium tracking-tight text-primary sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ostatnia aktualizacja: {updatedAt}
      </p>
      <div className="prose-legal mt-10 space-y-10">{children}</div>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-medium text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function TodoNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-gold/60 bg-accent/40 px-4 py-3 text-xs text-gold-foreground">
      TODO: {children}
    </p>
  );
}
