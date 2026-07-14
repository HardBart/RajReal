import type { Metadata } from "next";
import {
  LegalPageLayout,
  LegalSection,
  TodoNote,
} from "@/components/shared/legal-page-layout";
import { LEGAL_NAME, NIP, COMPANY_LEGAL, formatLegalAddress } from "@/config/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych przez RajReal.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <LegalPageLayout title="Polityka prywatności" updatedAt="TODO_DATA_AKTUALIZACJI">
      <LegalSection heading="1. Administrator danych osobowych">
        <p>
          Administratorem danych osobowych przetwarzanych za pośrednictwem
          niniejszej strony jest {LEGAL_NAME} z siedzibą w{" "}
          {COMPANY_LEGAL.address.city} ({formatLegalAddress()}), wpisana do
          Krajowego Rejestru Sądowego pod numerem KRS {COMPANY_LEGAL.krs}, NIP:{" "}
          {NIP}, REGON: {COMPANY_LEGAL.regon}.
        </p>
        <TodoNote>uzupełnić dane kontaktowe do spraw danych osobowych (adres e-mail do korespondencji w sprawach RODO).</TodoNote>
      </LegalSection>

      <LegalSection heading="2. Cele i podstawy prawne przetwarzania danych">
        <p>
          Dane osobowe podane w formularzu kontaktowym przetwarzane są w celu
          udzielenia odpowiedzi na zgłoszenie oraz przygotowania propozycji
          dotyczącej nieruchomości (art. 6 ust. 1 lit. b RODO), a w zakresie
          zgody marketingowej — w celu przesyłania informacji handlowych
          (art. 6 ust. 1 lit. a RODO).
        </p>
        <TodoNote>doprecyzować pełny katalog celów przetwarzania (np. archiwizacja, dochodzenie roszczeń) wraz z podstawami prawnymi i okresami retencji.</TodoNote>
      </LegalSection>

      <LegalSection heading="3. Odbiorcy danych">
        <p>
          Dane mogą być przekazywane podmiotom wspierającym administratora w
          świadczeniu usług (np. dostawcy poczty elektronicznej, kancelaria
          notarialna przy finalizacji transakcji).
        </p>
        <TodoNote>wymienić konkretnych podbiorców / kategorie podbiorców danych (np. dostawca hostingu, dostawca usługi mailowej).</TodoNote>
      </LegalSection>

      <LegalSection heading="4. Okres przechowywania danych">
        <TodoNote>określić okresy retencji danych dla poszczególnych celów przetwarzania.</TodoNote>
      </LegalSection>

      <LegalSection heading="5. Prawa osoby, której dane dotyczą">
        <p>
          Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia,
          ograniczenia przetwarzania, przenoszenia danych, wniesienia
          sprzeciwu wobec przetwarzania oraz prawo wniesienia skargi do
          Prezesa Urzędu Ochrony Danych Osobowych.
        </p>
      </LegalSection>

      <LegalSection heading="6. Pliki cookie">
        <p>
          Strona korzysta z niezbędnych plików cookie oraz — po wyrażeniu
          zgody — z opcjonalnych plików cookie (np. analitycznych).
          Szczegóły wyboru dostępne są w bannerze cookie wyświetlanym przy
          pierwszej wizycie.
        </p>
        <TodoNote>uzupełnić listę konkretnych plików cookie i narzędzi analitycznych, jeśli zostaną wdrożone.</TodoNote>
      </LegalSection>

      <LegalSection heading="7. Dobrowolność podania danych">
        <p>
          Podanie danych w formularzu kontaktowym jest dobrowolne, lecz
          niezbędne do udzielenia odpowiedzi na zgłoszenie.
        </p>
      </LegalSection>

      <LegalSection heading="8. Kontakt w sprawach danych osobowych">
        <TodoNote>uzupełnić dane kontaktowe do zgłaszania spraw dotyczących ochrony danych osobowych.</TodoNote>
      </LegalSection>
    </LegalPageLayout>
  );
}
