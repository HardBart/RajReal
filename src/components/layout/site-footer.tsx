import Link from "next/link";
import {
  SERVICE_AREAS,
  SITE_NAME,
  LEGAL_NAME,
  SITE_TAGLINE,
  COMPANY_LEGAL,
  CONTACT,
  formatLegalAddress,
} from "@/config/site";

const FOOTER_LINKS = [
  { href: "/skup-udzialow", label: "Skup udziałów" },
  { href: "/#proces", label: "Jak wygląda proces" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Najczęstsze pytania" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

const LEGAL_LINKS = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/regulamin", label: "Regulamin" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-green-deep text-green-deep-foreground">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <span className="block font-heading text-xl tracking-tight text-white sm:text-2xl">
            {SITE_NAME}
          </span>
          <span className="block text-xs text-white/55">{LEGAL_NAME}</span>
          <p className="max-w-xs text-sm text-white/70">{SITE_TAGLINE}</p>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="inline-block text-sm font-medium text-white/90 transition-colors hover:text-gold"
          >
            tel. {CONTACT.phone}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Nawigacja
          </h3>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Obszar działania
          </h3>
          <ul className="space-y-4">
            {SERVICE_AREAS.map((area) => (
              <li key={area.id} className="text-sm text-white/80">
                <div className="font-medium text-white">{area.city} i okolice</div>
                <div className="text-white/60">woj. {area.region}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
            Dokumenty
          </h3>
          <ul className="space-y-2.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page space-y-1 py-6 text-xs leading-relaxed text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_LEGAL.fullName} z siedzibą
            w {COMPANY_LEGAL.address.city} ({formatLegalAddress()}).
          </p>
          <p>
            NIP: {COMPANY_LEGAL.nip} &middot; REGON: {COMPANY_LEGAL.regon}{" "}
            &middot; KRS: {COMPANY_LEGAL.krs}
          </p>
          <p>{COMPANY_LEGAL.court}.</p>
        </div>
      </div>
    </footer>
  );
}
