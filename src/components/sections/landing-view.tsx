import { LandingHero } from "@/components/sections/landing-hero";
import { LandingContentBlock } from "@/components/sections/landing-content-block";
import { LandingIconGrid } from "@/components/sections/landing-icon-grid";
import { LandingCtaBanner } from "@/components/sections/landing-cta-banner";
import { Faq, FAQ_ITEMS } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact-section";
import { JsonLd } from "@/components/shared/json-ld";
import { STOCK_PHOTOS } from "@/data/images";
import type { LandingData } from "@/data/landings";
import { breadcrumbJsonLd, faqJsonLd, businessJsonLd } from "@/lib/seo";

/**
 * Wzorcowy szablon landing page (z /skup-udzialow). Wszystkie landingi renderują
 * się z tego jednego komponentu na podstawie danych z @/data/landings, dzięki
 * czemu układ i SEO pozostają spójne.
 *
 * Kolejność sekcji: Hero → blok[0] → siatka ikon → blok[1..] → CTA → FAQ → Kontakt.
 */
export function LandingView({ data }: { data: LandingData }) {
  const [firstBlock, ...restBlocks] = data.blocks;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Strona główna", path: "/" },
    { name: data.breadcrumbLabel, path: `/${data.slug}` },
  ]);

  const jsonLd: object[] = [breadcrumb, faqJsonLd(FAQ_ITEMS)];
  // Landingi lokalizacyjne dokładają dane firmy (obszar działania obejmuje region).
  if (data.areaFocus) jsonLd.push(businessJsonLd());

  return (
    <>
      <JsonLd data={jsonLd} />

      <LandingHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        image={STOCK_PHOTOS[data.hero.image]}
        points={data.hero.points}
      />

      {firstBlock && (
        <LandingContentBlock
          eyebrow={firstBlock.eyebrow}
          title={firstBlock.title}
          description={firstBlock.description}
          points={firstBlock.points}
          image={STOCK_PHOTOS[firstBlock.image]}
          reverse={firstBlock.reverse}
          tint={firstBlock.tint}
        />
      )}

      <LandingIconGrid
        eyebrow={data.iconGrid.eyebrow}
        title={data.iconGrid.title}
        description={data.iconGrid.description}
        items={data.iconGrid.items}
        tint
      />

      {restBlocks.map((block) => (
        <LandingContentBlock
          key={block.title}
          eyebrow={block.eyebrow}
          title={block.title}
          description={block.description}
          points={block.points}
          image={STOCK_PHOTOS[block.image]}
          reverse={block.reverse}
          tint={block.tint}
        />
      ))}

      <LandingCtaBanner title={data.cta.title} description={data.cta.description} />

      <Faq />

      <ContactSection />
    </>
  );
}
