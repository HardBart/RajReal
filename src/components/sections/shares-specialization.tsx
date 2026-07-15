import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { STOCK_PHOTOS } from "@/data/images";

const POINTS = [
  "Wykupujemy udział nawet wtedy, gdy pozostali współwłaściciele się nie zgadzają.",
  "Nie musisz czekać na zgodę ani reakcję pozostałych stron.",
  "Rozumiemy specyfikę zniesienia współwłasności i spraw spadkowych.",
  "Zajmujemy się także udziałami obciążonymi sporem lub konfliktem.",
];

export function SharesSpecialization() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={STOCK_PHOTOS.documentsOnDesk.src}
              alt={STOCK_PHOTOS.documentsOnDesk.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-gold-foreground/80">
            Nasza specjalizacja
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-primary sm:text-4xl">
            Skup udziałów w nieruchomościach to nasza podstawowa działalność.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Współwłasność bywa źródłem wieloletnich sporów. Wykupujemy Twój
            udział niezależnie od tego, czy pozostali współwłaściciele są
            skłonni do współpracy.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground/85">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/skup-udzialow"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "mt-9 group",
            })}
          >
            Dowiedz się więcej o skupie udziałów
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
