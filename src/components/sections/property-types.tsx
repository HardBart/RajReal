import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { STOCK_PHOTOS } from "@/data/images";

const TYPES = [
  {
    title: "Mieszkania",
    description: "W blokach, kamienicach i nowym budownictwie.",
    image: STOCK_PHOTOS.modernApartmentInterior,
  },
  {
    title: "Domy jednorodzinne",
    description: "Niezależnie od stanu technicznego i wieku budynku.",
    image: STOCK_PHOTOS.singleFamilyHouse,
  },
  {
    title: "Udziały w nieruchomościach",
    description: "Częściowa własność mieszkania, domu lub gruntu.",
    image: STOCK_PHOTOS.buildingFacade,
  },
];

export function PropertyTypes() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Zakres skupu"
          title="Jakie nieruchomości kupujemy"
          description="Skupiamy się na nieruchomościach mieszkalnych — całych oraz w udziałach."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {TYPES.map((type, i) => (
            <Reveal key={type.title} delay={i * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={type.image.src}
                    alt={type.image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-foreground">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Sporadycznie rozważamy również zakup działek — w indywidualnych
          przypadkach, po wcześniejszym kontakcie.
        </p>
      </div>
    </section>
  );
}
