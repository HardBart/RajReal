import Image from "next/image";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SERVICE_AREAS } from "@/config/site";
import { STOCK_PHOTOS } from "@/data/images";

// Zdjęcie centrum miasta per obszar działania (podmiana w @/data/images).
const AREA_PHOTOS = {
  olsztyn: STOCK_PHOTOS.olsztynCity,
  bialystok: STOCK_PHOTOS.bialystokCity,
} as const;

export function ServiceArea() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Obszar działania"
          title="Działamy na terenie Warmii, Mazur i Podlasia."
          description="Obsługujemy dwa województwa — warmińsko-mazurskie i podlaskie. Pracujemy zdalnie: nieruchomość oglądamy na miejscu, a formalności prowadzimy korespondencyjnie lub u notariusza."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SERVICE_AREAS.map((area, i) => {
            const photo = AREA_PHOTOS[area.id] ?? STOCK_PHOTOS.buildingFacade;
            return (
            <Reveal key={area.id} delay={i * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-16/9 w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="size-5" />
                    <h3 className="text-xl font-medium">
                      {area.city} i okolice.
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {area.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
