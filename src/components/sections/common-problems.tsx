import { Users, FileWarning, Landmark, Globe2, Gavel, Hourglass } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const PROBLEMS = [
  {
    icon: Users,
    title: "Konflikt między współwłaścicielami",
    description:
      "Współwłaściciele nie mogą dojść do porozumienia co do sprzedaży, podziału lub sposobu korzystania z nieruchomości.",
  },
  {
    icon: FileWarning,
    title: "Skomplikowana sprawa spadkowa",
    description:
      "Nieruchomość odziedziczona przez kilku spadkobierców, często bez zakończonego postępowania spadkowego.",
  },
  {
    icon: Landmark,
    title: "Zadłużona nieruchomość",
    description:
      "Zaległości czynszowe, kredyt hipoteczny lub inne obciążenia utrudniające sprzedaż na wolnym rynku.",
  },
  {
    icon: Globe2,
    title: "Mieszkanie za granicą",
    description:
      "Trudność w zajmowaniu się formalnościami i sprzedażą na odległość, bez konieczności przyjazdu do Polski.",
  },
  {
    icon: Gavel,
    title: "Problemy prawne nieruchomości",
    description:
      "Nieuregulowany stan prawny, brak księgi wieczystej lub inne kwestie formalne blokujące standardową sprzedaż.",
  },
  {
    icon: Hourglass,
    title: "Potrzeba szybkiego zakończenia sprawy",
    description:
      "Chęć zamknięcia tematu nieruchomości bez miesięcy oczekiwania typowych dla sprzedaży na wolnym rynku.",
  },
];

export function CommonProblems() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Rozumiemy trudne sytuacje"
          title="Najczęstsze problemy, z którymi się do nas zgłaszacie"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <problem.icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-medium text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
