import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Handshake, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { STOCK_PHOTOS } from "@/data/images";

const HERO_POINTS = [
  { icon: ShieldCheck, label: "Transparentny proces" },
  { icon: Handshake, label: "Uczciwa wycena" },
  { icon: Clock, label: "Tempo dopasowane do Ciebie" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-page grid gap-12 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Warmia i Mazury &middot; Podlasie &middot; Olsztyn &middot; Białystok
          </span>
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.4rem]">
            Profesjonalny skup udziałów i nieruchomości,{" "}
            <span className="text-gold-foreground">bez pośpiechu i presji</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Pomagamy współwłaścicielom, spadkobiercom i osobom w trudnej
            sytuacji prawnej lub finansowej zakończyć temat nieruchomości —
            w sposób jasny, spokojny i zgodny z prawem.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#kontakt" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
              Opisz swoją sytuację
            </Link>
            <Link
              href="/#proces"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "h-12 px-8 text-base",
              })}
            >
              Zobacz jak wygląda proces
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-5 border-t border-border pt-8 sm:grid-cols-3">
            {HERO_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-primary" />
                <dt className="text-sm font-medium text-foreground/80">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl sm:aspect-3/4 lg:aspect-4/5">
            <Image
              src={STOCK_PHOTOS.heroRegionAerial.src}
              alt={STOCK_PHOTOS.heroRegionAerial.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-lg sm:block">
            <p className="text-sm text-muted-foreground">
              Obsługujemy klientów w całym regionie — również mieszkających za
              granicą.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
