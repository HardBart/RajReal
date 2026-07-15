import { Scale, Eye, MessageCircle, FileCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const REASONS = [
  {
    icon: Scale,
    title: "Działamy zgodnie z prawem.",
    description:
      "Każda transakcja jest przygotowywana i przeprowadzana zgodnie z obowiązującymi przepisami, z udziałem notariusza.",
  },
  {
    icon: Eye,
    title: "Transparentne warunki.",
    description:
      "Przedstawiamy jasną wycenę i warunki transakcji na piśmie, zanim podejmiesz jakąkolwiek decyzję.",
  },
  {
    icon: MessageCircle,
    title: "Jasna komunikacja.",
    description:
      "Tłumaczymy proces krok po kroku, bez prawniczego żargonu i bez wywierania presji czasowej.",
  },
  {
    icon: FileCheck,
    title: "Rzetelna analiza sytuacji.",
    description:
      "Zanim złożymy propozycję, dokładnie analizujemy stan prawny nieruchomości — również w skomplikowanych sprawach.",
  },
];

export function Trust() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Dlaczego warto nam zaufać"
          title="Podchodzimy do każdej sprawy z powagą, na jaką zasługuje."
          description="Nie jesteśmy pośrednikiem ani kancelarią — jesteśmy nabywcą, który działa jawnie i przewidywalnie na każdym etapie."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <reason.icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
