import { Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { CONTACT } from "@/config/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="section-y scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kontakt"
          title="Opisz swoją sytuację — odezwiemy się z propozycją"
          description="Formularz nie wymaga załączników. Dokumenty dotyczące nieruchomości omówimy w kolejnym kroku, bezpiecznym kanałem."
          align="center"
          className="mx-auto"
        />

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
          <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-2 hover:text-primary">
            <Phone className="size-4" /> {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-primary">
            <Mail className="size-4" /> {CONTACT.email}
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
