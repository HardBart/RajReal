import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function LandingCtaBanner({
  title,
  description,
  ctaLabel = "Opisz swoją sytuację",
}: {
  title: string;
  description: string;
  ctaLabel?: string;
}) {
  return (
    <section className="section-y bg-green-deep text-green-deep-foreground">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-white/75">{description}</p>
        <Link
          href="/#kontakt"
          className={buttonVariants({
            size: "lg",
            className: "h-12 bg-gold px-8 text-base text-gold-foreground hover:bg-gold/90",
          })}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
