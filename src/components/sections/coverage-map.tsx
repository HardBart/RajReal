import { Mail, Phone, MapPinned, MonitorSmartphone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { CONTACT, SERVICE_AREAS } from "@/config/site";

/**
 * Sekcja zasięgu działania — zamiast „mapy biur" (firma działa zdalnie).
 * Pokazuje obsługiwane województwa na mapach oraz model pracy bez biura.
 */
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
            {SERVICE_AREAS.map((area) => (
              <div key={area.id} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {area.region}
                </h3>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <iframe
                    title={`Obszar działania — ${area.region}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      area.mapEmbedQuery,
                    )}&output=embed`}
                    className="h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
