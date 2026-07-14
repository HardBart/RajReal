/**
 * Kategorie bloga. Slug (w URL) ↔ etykieta (PL). Frontmatter wpisu podaje slug
 * w polu `category`. Dodanie kategorii = jeden wpis tutaj.
 */
export type BlogCategory = {
  slug: string;
  label: string;
  description: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "sprzedaz-udzialow",
    label: "Sprzedaż udziałów",
    description:
      "Jak działa sprzedaż udziału w nieruchomości i na co zwrócić uwagę jako współwłaściciel.",
  },
  {
    slug: "wspolwlasnosc",
    label: "Współwłasność",
    description:
      "Współwłasność, zniesienie współwłasności i sytuacje sporne między współwłaścicielami.",
  },
  {
    slug: "spadki",
    label: "Spadki",
    description:
      "Nieruchomości w spadku, dziedziczenie i porządkowanie spraw spadkowych.",
  },
  {
    slug: "zadluzone",
    label: "Zadłużone nieruchomości",
    description:
      "Sprzedaż nieruchomości obciążonych zadłużeniem, hipoteką lub innymi zobowiązaniami.",
  },
  {
    slug: "porady-prawne",
    label: "Porady prawne",
    description:
      "Ogólne, edukacyjne informacje o kwestiach prawnych związanych z nieruchomościami.",
  },
  {
    slug: "rynek",
    label: "Rynek nieruchomości",
    description:
      "Rynek nieruchomości na Warmii, Mazurach i Podlasiu — trendy i praktyczne obserwacje.",
  },
];

const BY_SLUG = new Map(BLOG_CATEGORIES.map((c) => [c.slug, c]));

export function getCategory(slug: string): BlogCategory | undefined {
  return BY_SLUG.get(slug);
}

export function categoryLabel(slug: string): string {
  return BY_SLUG.get(slug)?.label ?? slug;
}
