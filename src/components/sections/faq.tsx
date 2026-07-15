import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";

export const FAQ_ITEMS = [
  {
    question: "Czy mogę sprzedać sam udział, bez zgody pozostałych współwłaścicieli?",
    answer:
      "Tak. Współwłaściciel może rozporządzać swoim udziałem samodzielnie i nie potrzebuje na to zgody pozostałych współwłaścicieli. Chętnie wyjaśnimy, jak to wygląda w Twojej konkretnej sytuacji.",
  },
  {
    question: "Czy muszę mieć zakończone postępowanie spadkowe?",
    answer:
      "Nie zawsze — analizujemy sprawę indywidualnie. W wielu przypadkach możemy zacząć rozmowy jeszcze przed formalnym zakończeniem sprawy spadkowej.",
  },
  {
    question: "Czy sprzedaż zadłużonej nieruchomości jest możliwa?",
    answer:
      "Tak, zadłużenie samo w sobie nie wyklucza transakcji. Sprawdzamy strukturę zadłużenia i proponujemy rozwiązanie uwzględniające istniejące obciążenia.",
  },
  {
    question: "Ile trwa cały proces?",
    answer:
      "To zależy od stanu prawnego nieruchomości i Twoich preferencji. Zawsze dostosowujemy tempo do Twojej sytuacji — możemy działać szybko lub dać Ci czas na decyzję.",
  },
  {
    question: "Czy kontakt i wycena są bezpłatne?",
    answer:
      "Tak. Pierwsza rozmowa, analiza sytuacji i propozycja warunków są bezpłatne i niezobowiązujące.",
  },
  {
    question: "Mieszkam za granicą — czy to problem?",
    answer:
      "Nie. Regularnie prowadzimy sprawy z klientami mieszkającymi poza Polską, ustalając formę kontaktu i podpisania dokumentów dopasowaną do Twojej sytuacji.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="section-y scroll-mt-24 bg-secondary/40">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Najczęściej zadawane pytania."
          description="Nie znalazłeś odpowiedzi na swoje pytanie? Napisz do nas — odpowiadamy indywidualnie na każde zgłoszenie."
        />

        <Accordion className="divide-y divide-border">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-5 text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
