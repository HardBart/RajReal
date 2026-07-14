import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import type { StockPhoto } from "@/data/images";

export function LandingContentBlock({
  eyebrow,
  title,
  description,
  points,
  image,
  reverse = false,
  tint = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
  image: StockPhoto;
  reverse?: boolean;
  tint?: boolean;
}) {
  return (
    <section className={tint ? "section-y bg-secondary/40" : "section-y"}>
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal
          className={`relative ${reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
        >
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className={reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-gold-foreground/80">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>

          {points && points.length > 0 && (
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
