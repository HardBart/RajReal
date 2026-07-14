import { Info } from "lucide-react";
import { SITE_NAME } from "@/config/site";

/**
 * Zastrzeżenie prawne widoczne przy treściach blogowych. Podkreśla, że nie
 * świadczymy porad prawnych i występujemy jako potencjalny nabywca — spójne
 * z tonem „nie udajemy kancelarii".
 */
export function BlogDisclaimer({ variant = "full" }: { variant?: "full" | "inline" }) {
  if (variant === "inline") {
    return (
      <p className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground">
        <strong className="font-medium text-foreground">Uwaga:</strong> ten
        tekst ma charakter ogólny i edukacyjny. Nie stanowi porady prawnej ani
        podatkowej. {SITE_NAME} występuje jako potencjalny nabywca nieruchomości,
        a nie doradca sprzedającego.
      </p>
    );
  }

  return (
    <aside className="not-prose mt-12 rounded-2xl border border-border bg-secondary/40 p-6">
      <div className="flex items-start gap-3">
        <Info className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
        <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">
            To nie jest porada prawna ani podatkowa.
          </p>
          <p>
            Artykuł ma charakter wyłącznie ogólny i informacyjny. Nie świadczymy
            usług prawnych, doradztwa prawnego ani podatkowego i nie zastępujemy
            porady radcy prawnego, adwokata, notariusza czy doradcy podatkowego.
            Każda sytuacja jest inna — szczegóły skonsultuj z odpowiednim
            specjalistą.
          </p>
          <p>
            {SITE_NAME} działa jako <strong className="text-foreground">potencjalny
            nabywca</strong> nieruchomości i udziałów. Nie reprezentujemy interesu
            sprzedającego i nie występujemy w roli jego pełnomocnika ani doradcy.
          </p>
        </div>
      </div>
    </aside>
  );
}
