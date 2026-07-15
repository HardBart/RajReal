/**
 * Grafiki nagłówkowe wpisów bloga (Unsplash). Frontmatter wpisu podaje klucz
 * w polu `cover`. Podmiana grafiki = zmiana `src` tutaj (jedno miejsce).
 * Aby dodać nowy wpis z własną grafiką, dopisz tu kolejny klucz.
 *
 * Wszystkie kadry sprawdzone pod kątem czytelnego obcojęzycznego tekstu.
 */
import type { StockPhoto } from "@/data/images";

export const BLOG_COVERS = {
  sharesGuide: {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80",
    alt: "Spokojna rozmowa przy stole",
  },
  coownership: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    alt: "Uścisk dłoni po dobiciu targu w biurze",
  },
  inheritance: {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
    alt: "Dom rodzinny wśród drzew o poranku",
  },
  debt: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    alt: "Dłoń podpisująca dokumenty na biurku",
  },
  legal: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    alt: "Figurka Temidy z wagą — symbol prawa",
  },
  market: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    alt: "Makieta domu i klucze na stole",
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
