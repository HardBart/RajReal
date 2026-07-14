import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function LandingIconGrid({
  eyebrow,
  title,
  description,
  items,
  tint = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: { icon: LucideIcon; title: string; description: string }[];
  tint?: boolean;
}) {
  return (
    <section className={tint ? "section-y bg-secondary/40" : "section-y"}>
      <div className="container-page">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <item.icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
