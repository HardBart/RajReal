import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { StockPhoto } from "@/data/images";

export function LandingHero({
  eyebrow,
  title,
  description,
  image,
  points,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: StockPhoto;
  points: { icon: LucideIcon; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-page grid gap-12 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.2rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#kontakt"
              className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}
            >
              Opisz swoją sytuację
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-5 border-t border-border pt-8 sm:grid-cols-3">
            {points.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-primary" />
                <dt className="text-sm font-medium text-foreground/80">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl sm:aspect-3/4 lg:aspect-4/5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
