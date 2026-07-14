/**
 * Grafiki nagłówkowe wpisów bloga (Unsplash). Frontmatter wpisu podaje klucz
 * w polu `cover`. Podmiana grafiki = zmiana `src` tutaj (jedno miejsce).
 * Aby dodać nowy wpis z własną grafiką, dopisz tu kolejny klucz.
 */
import type { StockPhoto } from "@/data/images";

export const BLOG_COVERS = {
  sharesGuide: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    alt: "Dokumenty i kalkulator na biurku podczas analizy sprawy",
  },
  coownership: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    alt: "Rozmowa dwóch osób nad dokumentami przy stole",
  },
  inheritance: {
    src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=1600&q=80",
    alt: "Stary dom rodzinny wśród zieleni",
  },
  debt: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    alt: "Dokumenty finansowe i notatnik na biurku",
  },
  legal: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    alt: "Otwarta księga i okulary na biurku",
  },
  market: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    alt: "Widok na budynki mieszkalne i klucze",
  },
} satisfies Record<string, StockPhoto>;

export type BlogCoverKey = keyof typeof BLOG_COVERS;

/** Zwraca grafikę wpisu; gdy klucz nieznany, używa neutralnego coveru. */
export function resolveBlogCover(key: string | undefined): StockPhoto {
  if (key && key in BLOG_COVERS) {
    return BLOG_COVERS[key as BlogCoverKey];
  }
  return BLOG_COVERS.legal;
}
