import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Opisujesz swoją sytuację",
    description:
      "Wypełniasz formularz lub dzwonisz do nas. Nie wymagamy na tym etapie żadnych dokumentów ani załączników.",
  },
  {
    number: "02",
    title: "Analizujemy stan prawny",
    description:
      "Sprawdzamy sytuację nieruchomości — również gdy jest to udział, sprawa spadkowa lub nieruchomość zadłużona.",
  },
  {
    number: "03",
    title: "Przedstawiamy propozycję",
    description:
      "Otrzymujesz jasną, pisemną propozycję warunków — bez presji czasowej i bez zobowiązań.",
  },
  {
    number: "04",
    title: "Finalizujemy transakcję",
    description:
      "Po Twojej akceptacji ustalamy dogodny termin u notariusza i formalnie kończymy sprawę.",
  },
];

export function Process() {
  return (
    <section id="proces" className="section-y scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Jak wygląda proces"
          title="Cztery jasne kroki, od pierwszego kontaktu do finalizacji"
          description="Każdy etap wyjaśniamy zanim do niego dojdzie. Możesz zrezygnować na dowolnym etapie przed podpisaniem umowy."
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative">
              <span className="font-heading text-5xl text-gold/60">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <span className="absolute top-6 right-[-1rem] hidden h-px w-8 bg-border lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
