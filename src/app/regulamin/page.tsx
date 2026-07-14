import type { Metadata } from "next";
import {
  LegalPageLayout,
  LegalSection,
  TodoNote,
} from "@/components/shared/legal-page-layout";
import { LEGAL_NAME, NIP, COMPANY_LEGAL, formatLegalAddress } from "@/config/site";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin świadczenia usług za pośrednictwem strony RajReal.",
};

export default function RegulaminPage() {
  return (
    <LegalPageLayout title="Regulamin" updatedAt="TODO_DATA_AKTUALIZACJI">
      <LegalSection heading="1. Postanowienia ogólne">
        <p>
          Niniejszy regulamin określa zasady korzystania ze strony
          internetowej RajReal, prowadzonej przez {LEGAL_NAME} z siedzibą w{" "}
          {COMPANY_LEGAL.address.city} ({formatLegalAddress()}), KRS:{" "}
          {COMPANY_LEGAL.krs}, NIP: {NIP}, REGON: {COMPANY_LEGAL.regon}, oraz
          zasady kontaktu za pośrednictwem formularza kontaktowego.
        </p>
      </LegalSection>

      <LegalSection heading="2. Definicje">
        <TodoNote>uzupełnić definicje pojęć używanych w regulaminie (np. Usługodawca, Użytkownik, Formularz kontaktowy, Zgłoszenie).</TodoNote>
      </LegalSection>

      <LegalSection heading="3. Zakres i charakter usług">
        <p>
          Strona umożliwia przesłanie zgłoszenia dotyczącego nieruchomości w
          celu uzyskania niezobowiązującej propozycji jej nabycia. Przesłanie
          formularza nie stanowi oferty w rozumieniu Kodeksu cywilnego ani
          nie zobowiązuje żadnej ze stron do zawarcia transakcji.
        </p>
      </LegalSection>

      <LegalSection heading="4. Zasady korzystania z formularza kontaktowego">
        <p>
          Formularz kontaktowy służy wyłącznie do przesyłania zgłoszeń
          zgodnych z jego przeznaczeniem. Zabronione jest przesyłanie treści
          o charakterze bezprawnym.
        </p>
      </LegalSection>

      <LegalSection heading="5. Reklamacje">
        <TodoNote>uzupełnić tryb i termin składania reklamacji dotyczących działania strony.</TodoNote>
      </LegalSection>

      <LegalSection heading="6. Odpowiedzialność">
        <TodoNote>uzupełnić zakres odpowiedzialności usługodawcy za dostępność i działanie strony.</TodoNote>
      </LegalSection>

      <LegalSection heading="7. Postanowienia końcowe">
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie
          mają przepisy powszechnie obowiązującego prawa polskiego.
        </p>
        <TodoNote>uzupełnić dane kontaktowe do zgłaszania pytań dotyczących regulaminu.</TodoNote>
      </LegalSection>
    </LegalPageLayout>
  );
}
