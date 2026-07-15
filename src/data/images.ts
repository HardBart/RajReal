/**
 * Curated stock photography (Unsplash). Swap the `src` values to replace
 * imagery — every consumer reads from this single map, so a global photo
 * swap only touches this file. Keep `alt` descriptive for SEO/accessibility.
 */

export type StockPhoto = {
  src: string;
  alt: string;
};

export const STOCK_PHOTOS = {
  heroRegionAerial: {
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=80",
    alt: "Drewniany pomost nad spokojnym jeziorem Warmii i Mazur, w tle las",
  },
  modernApartmentInterior: {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    alt: "Jasne, nowoczesne wnętrze mieszkania",
  },
  singleFamilyHouse: {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    alt: "Dom jednorodzinny w spokojnej okolicy",
  },
  documentsOnDesk: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    alt: "Dłoń podpisująca dokument na biurku",
  },
  keysHandover: {
    src: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1600&q=80",
    alt: "Dom jednorodzinny o zachodzie słońca",
  },
  quietConversationAtTable: {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80",
    alt: "Dwie osoby podczas spokojnej rozmowy przy stole",
  },
  buildingFacade: {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
    alt: "Drewniany dom wśród drzew o poranku",
  },
  olsztynCity: {
    // Rynek Starego Miasta w Olsztynie (Unsplash: xA_rhdMHP30)
    src: "https://images.unsplash.com/photo-1679871349105-5938aae97c6f?auto=format&fit=crop&w=1600&q=80",
    alt: "Kamienice na Rynku Starego Miasta w Olsztynie",
  },
  bialystokCity: {
    // Rynek Kościuszki w Białymstoku (Unsplash: BNpMl4B4OrU)
    src: "https://images.unsplash.com/photo-1601053135820-566317fdcfc6?auto=format&fit=crop&w=1600&q=80",
    alt: "Rynek Kościuszki w Białymstoku",
  },
} satisfies Record<string, StockPhoto>;
