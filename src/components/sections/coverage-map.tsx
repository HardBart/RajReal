import Image from "next/image";
import { Mail, Phone, MapPinned, MonitorSmartphone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { CONTACT, SERVICE_AREAS } from "@/config/site";
import { STOCK_PHOTOS } from "@/data/images";

/**
 * Sekcja zasięgu działania — zamiast „mapy biur" (firma działa zdalnie).
 * Pokazuje obsługiwane województwa oraz model pracy bez biura.
 *
 * Świadomie NIE osadzamy map Google: iframe łączyłby przeglądarkę odwiedzającego
 * z Google (IP + cookies, transfer poza EOG) jeszcze przed zgodą. Zamiast tego
 * własne zdjęcia symboli regionów — dzięki temu polityka prywatności może
 * uczciwie deklarować brak zewnętrznych osadzeń i brak transferu poza EOG.
 */
const AREA_MEDIA = {
  olsztyn: {
    photo: STOCK_PHOTOS.cormorantMazury,
    caption: "Kormoran — symbol mazurskich jezior.",
  },
  bialystok: {
    photo: STOCK_PHOTOS.bisonPodlasie,
    caption: "Żubr — symbol Podlasia i Puszczy Białowieskiej.",
  },
} as const;
export function CoverageMap() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Zasięg działania"
          title="Obsługujemy Warmię, Mazury i Podlasie."
          description="Nie prowadzimy stacjonarnego biura — pracujemy zdalnie i dojeżdżamy do nieruchomości. Dzięki temu obsługujemy oba województwa w całości, także mniejsze miejscowości."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <MonitorSmartphone className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-medium text-foreground">
                Jak pracujemy.
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <MapPinned className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    Nieruchomość oglądamy na miejscu — dojeżdżamy do Ciebie, nie odwrotnie.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MonitorSmartphone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    Rozmowy i wymianę dokumentów prowadzimy zdalnie, w dogodnej dla Ciebie formie.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPinned className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    Finalizację przeprowadzamy u notariusza — w lokalizacji dogodnej dla obu stron.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-medium text-foreground">Kontakt</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-primary">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICE_AREAS.map((area) => {
              const media = AREA_MEDIA[area.id];
              return (
                <figure key={area.id} className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {area.region}
                  </h3>
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={media.photo.src}
                      alt={media.photo.alt}
                      fill
                      sizes="(min-width: 640px) 25vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground">
                    {media.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
