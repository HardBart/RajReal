/**
 * Central site configuration. Change SITE_NAME / tagline / contact data here —
 * every page, layout, and metadata block reads from this file.
 *
 * Zasada nazewnictwa:
 * - SITE_NAME ("RajReal") — marka konsumencka; używaj w logo, nagłówkach,
 *   metadata, OG, treściach. NIGDY nie skracaj do samego „Raj".
 * - LEGAL_NAME — pełna nazwa prawna; tylko tożsamość prawna (stopka, polityka,
 *   regulamin, legalName w JSON-LD). Słowa „Invest" nie eksponujemy poza nią.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rajreal.pl";

export const SITE_NAME = "RajReal";
export const LEGAL_NAME = "Raj Real Estate Invest sp. z o.o.";
export const NIP = "7393929439";

export const SITE_TAGLINE =
  "Skup udziałów i nieruchomości mieszkalnych — Warmia, Mazury, Podlasie";

export const SITE_DESCRIPTION =
  "Profesjonalny skup udziałów i nieruchomości mieszkalnych w województwie warmińsko-mazurskim i podlaskim. Spokojny, transparentny proces — bez pośpiechu i bez presji.";

/**
 * Obszary działania — miasta i województwa, które obsługujemy. To NIE są biura.
 * Firma działa zdalnie: nieruchomości oglądamy na miejscu, formalności prowadzimy
 * korespondencyjnie lub u notariusza. Nie eksponujemy adresu „biura".
 */
export type ServiceArea = {
  id: "olsztyn" | "bialystok";
  city: string;
  region: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "olsztyn",
    city: "Olsztyn",
    region: "warmińsko-mazurskie",
    blurb:
      "Olsztyn i całe województwo warmińsko-mazurskie — miasto, mniejsze miejscowości i tereny wiejskie.",
  },
  {
    id: "bialystok",
    city: "Białystok",
    region: "podlaskie",
    blurb:
      "Białystok i całe województwo podlaskie — obsługujemy region w całości, bez konieczności dojazdu do biura.",
  },
];

export const CONTACT = {
  phone: "881 244 700",
  phoneHref: "+48881244700",
  email: "kontakt@rajreal.pl",
};

/**
 * Dane rejestrowe podmiotu — źródło: Krajowy Rejestr Sądowy (KRS 0000793577).
 * Adres siedziby rejestrowej; firma działa zdalnie (nie jest to biuro do wizyt).
 */
export const COMPANY_LEGAL = {
  fullName: LEGAL_NAME,
  legalForm: "sp. z o.o.",
  nip: NIP,
  regon: "383807208",
  krs: "0000793577",
  court:
    "Sąd Rejonowy w Olsztynie, VIII Wydział Gospodarczy Krajowego Rejestru Sądowego",
  shareCapital: "5 000,00 zł",
  address: {
    street: "ul. Dworcowa 18/45",
    postalCode: "10-436",
    city: "Olsztyn",
    region: "warmińsko-mazurskie",
    country: "PL",
  },
};

/** Adres siedziby jako jeden wiersz (stopka, dane rejestrowe). */
export function formatLegalAddress(): string {
  const a = COMPANY_LEGAL.address;
  return `${a.street}, ${a.postalCode} ${a.city}`;
}

export const SERVICE_REGIONS = [
  "warmińsko-mazurskie",
  "podlaskie",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/skup-udzialow", label: "Skup udziałów" },
  { href: "/#proces", label: "Jak to działa" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;
