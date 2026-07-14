import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  NIP,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  COMPANY_LEGAL,
  CONTACT,
  SERVICE_REGIONS,
} from "@/config/site";

/** Buduje absolutny URL na podstawie NEXT_PUBLIC_SITE_URL. Nigdy nie hardkoduj domeny. */
export function absoluteUrl(path = "/"): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataArgs = {
  title: string;
  description: string;
  /** Ścieżka względna, np. "/skup-udzialow". Domyślnie strona główna. */
  path?: string;
  /** Nadpisz obraz OG; domyślnie globalny /opengraph-image z layoutu. */
  ogImage?: string;
};

/**
 * Wspólny konstruktor metadanych dla podstron. Canonical, Open Graph i Twitter
 * czytają NEXT_PUBLIC_SITE_URL przez absoluteUrl(). Tytuł jest bez nazwy firmy —
 * szablon w layout.tsx dokleja „— {SITE_NAME}".
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
}: BuildMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders — wszystkie pola „url" czytają NEXT_PUBLIC_SITE_URL */
/* ------------------------------------------------------------------ */

const REGION_LABEL: Record<string, string> = {
  "warmińsko-mazurskie": "województwo warmińsko-mazurskie",
  podlaskie: "województwo podlaskie",
};

/**
 * Jeden podmiot biznesowy (RealEstateAgent). Firma działa zdalnie, bez sieci
 * biur — adres to siedziba rejestrowa (placeholder do uzupełnienia), a
 * `areaServed` obejmuje oba obsługiwane województwa. Wszystkie „url"/„@id"
 * czytają NEXT_PUBLIC_SITE_URL.
 */
export function businessJsonLd() {
  const a = COMPANY_LEGAL.address;
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    taxID: NIP, // polski NIP
    url: absoluteUrl("/"),
    description: SITE_DESCRIPTION,
    slogan: SITE_TAGLINE,
    // TODO: uzupełnić realnym telefonem/e-mailem po ustaleniu danych kontaktowych
    telephone: CONTACT.phoneHref,
    email: CONTACT.email,
    // TODO: adres siedziby — pola poniżej to placeholdery do uzupełnienia
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      postalCode: a.postalCode,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    areaServed: SERVICE_REGIONS.map((r) => ({
      "@type": "AdministrativeArea",
      name: REGION_LABEL[r] ?? r,
    })),
  };
}

/** Alias zachowany dla czytelności wywołań na stronie głównej. */
export const organizationJsonLd = businessJsonLd;

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(args: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${args.slug}`),
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    ...(args.image ? { image: args.image } : {}),
    author: { "@type": "Organization", name: args.author ?? SITE_NAME },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(`/blog/${args.slug}`),
    url: absoluteUrl(`/blog/${args.slug}`),
  };
}

export function breadcrumbJsonLd(
  crumbs: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
