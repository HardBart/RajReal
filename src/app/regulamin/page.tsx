import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPageLayout,
  LegalSection,
} from "@/components/shared/legal-page-layout";
import {
  LEGAL_NAME,
  NIP,
  COMPANY_LEGAL,
  CONTACT,
  formatLegalAddress,
} from "@/config/site";
import { buildMetadata } from "@/lib/seo";

/** Data ostatniej aktualizacji dokumentu — zmieniaj przy każdej zmianie treści. */
const UPDATED_AT = "14 lipca 2026";

export const metadata: Metadata = buildMetadata({
  title: "Regulamin",
  description:
    "Regulamin świadczenia usług drogą elektroniczną za pośrednictwem serwisu RajReal.",
  path: "/regulamin",
});

export default function RegulaminPage() {
  return (
    <LegalPageLayout title="Regulamin serwisu rajreal.pl" updatedAt={UPDATED_AT}>
      <LegalSection heading="§ 1. Postanowienia ogólne">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Niniejszy Regulamin określa zasady świadczenia usług drogą
            elektroniczną za pośrednictwem serwisu internetowego dostępnego pod
            adresem rajreal.pl, zgodnie z art. 8 ustawy z dnia 18 lipca 2002 r.
            o świadczeniu usług drogą elektroniczną.
          </li>
          <li>
            Usługodawcą jest <strong className="text-foreground">{LEGAL_NAME}</strong>{" "}
            z siedzibą w {COMPANY_LEGAL.address.city}, {formatLegalAddress()},
            wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego
            prowadzonego przez {COMPANY_LEGAL.court}, pod numerem KRS{" "}
            {COMPANY_LEGAL.krs}, NIP {NIP}, REGON {COMPANY_LEGAL.regon}, kapitał
            zakładowy {COMPANY_LEGAL.shareCapital}.
          </li>
          <li>
            Kontakt z Usługodawcą: {CONTACT.email}, tel. {CONTACT.phone}, adres
            korespondencyjny jak w ust. 2.
          </li>
          <li>
            Regulamin jest udostępniany nieodpłatnie w sposób umożliwiający jego
            pozyskanie, odtwarzanie i utrwalanie.
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="§ 2. Definicje">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Serwis</strong> — serwis
            internetowy dostępny pod adresem rajreal.pl.
          </li>
          <li>
            <strong className="text-foreground">Usługodawca / RajReal</strong> —
            podmiot wskazany w § 1 ust. 2.
          </li>
          <li>
            <strong className="text-foreground">Użytkownik</strong> — osoba
            korzystająca z Serwisu.
          </li>
          <li>
            <strong className="text-foreground">Formularz</strong> — formularz
            kontaktowy udostępniony w Serwisie.
          </li>
          <li>
            <strong className="text-foreground">Zapytanie</strong> — wiadomość
            przesłana Usługodawcy za pośrednictwem Formularza.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="§ 3. Rodzaj i zakres usług świadczonych drogą elektroniczną">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Usługodawca świadczy nieodpłatnie następujące usługi:
            <ul className="mt-1 list-[lower-alpha] space-y-1 pl-5">
              <li>udostępnianie treści Serwisu (strony informacyjne oraz blog),</li>
              <li>
                udostępnienie Formularza umożliwiającego przesłanie Zapytania.
              </li>
            </ul>
          </li>
          <li>Korzystanie z Serwisu nie wymaga rejestracji ani założenia konta.</li>
          <li>
            Umowa o świadczenie usługi polegającej na udostępnianiu treści
            zawierana jest na czas oznaczony i ulega rozwiązaniu z chwilą
            opuszczenia Serwisu. Umowa o świadczenie usługi Formularza zawierana
            jest na czas oznaczony i ulega rozwiązaniu z chwilą przesłania
            Zapytania albo zaprzestania korzystania z Formularza.
          </li>
          <li>Użytkownik może w każdej chwili zakończyć korzystanie z Serwisu.</li>
        </ol>
      </LegalSection>

      <LegalSection heading="§ 4. Warunki techniczne">
        <p>
          Do korzystania z Serwisu niezbędne są: urządzenie z dostępem do
          internetu, aktualna wersja przeglądarki internetowej, włączona obsługa
          plików cookies niezbędnych, a w przypadku wskazania poczty
          elektronicznej jako kanału kontaktu — aktywne konto e-mail.
        </p>
      </LegalSection>

      <LegalSection heading="§ 5. Zasady korzystania z Formularza">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Przesłanie Zapytania wymaga podania: województwa, miejscowości, co
            najmniej jednego kanału kontaktu (numeru telefonu albo adresu
            e-mail) oraz wyrażenia zgody na przetwarzanie danych w celu
            kontaktu. Pozostałe pola są dobrowolne —{" "}
            <strong className="text-foreground">
              Zapytanie można przesłać także wtedy, gdy nie zostaną uzupełnione
            </strong>
            .
          </li>
          <li>
            <strong className="text-foreground">
              Formularz nie umożliwia przesyłania załączników.
            </strong>{" "}
            Prosimy o nieprzesyłanie za pośrednictwem Formularza odpisów z
            księgi wieczystej, aktów notarialnych, postanowień o stwierdzeniu
            nabycia spadku ani innych dokumentów. Wymiana dokumentów następuje po
            nawiązaniu kontaktu, kanałem uzgodnionym indywidualnie.
          </li>
          <li>
            Podając w Zapytaniu dane osób trzecich (w szczególności
            współwłaścicieli lub spadkobierców), Użytkownik oświadcza, że jest
            uprawniony do ich przekazania, oraz zobowiązuje się ograniczyć je do
            zakresu niezbędnego do oceny sprawy.
          </li>
          <li>
            Użytkownika obowiązuje{" "}
            <strong className="text-foreground">
              zakaz dostarczania treści o charakterze bezprawnym
            </strong>
            .
          </li>
          <li>
            Usługodawca dokłada starań, aby odpowiedzieć na Zapytanie bez zbędnej
            zwłoki. Przesłanie Zapytania nie zobowiązuje Usługodawcy do
            udzielenia odpowiedzi ani do złożenia oferty. Usługodawca może
            pozostawić bez rozpoznania Zapytania o charakterze spamowym lub
            oczywiście bezprzedmiotowe.
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="§ 6. Charakter treści Serwisu — brak oferty">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Treści zamieszczone w Serwisie, w tym informacje o zakresie
            działalności Usługodawcy,{" "}
            <strong className="text-foreground">
              nie stanowią oferty w rozumieniu art. 66 § 1 Kodeksu cywilnego
            </strong>
            , lecz zaproszenie do zawarcia umowy w rozumieniu art. 71 Kodeksu
            cywilnego.
          </li>
          <li>
            Ani przesłanie Zapytania, ani odpowiedź Usługodawcy, ani prowadzenie
            rozmów nie zobowiązują żadnej ze stron do zawarcia umowy.
          </li>
          <li>
            Warunki wskazane w korespondencji lub w toku rozmów, w tym warunki
            cenowe, mają{" "}
            <strong className="text-foreground">
              charakter wstępny i niewiążący
            </strong>{" "}
            do chwili zawarcia umowy.
          </li>
          <li>
            Nabycie nieruchomości lub udziału w nieruchomości następuje wyłącznie
            w formie aktu notarialnego (art. 158 Kodeksu cywilnego).
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="§ 7. Rola Usługodawcy — zastrzeżenie">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Usługodawca występuje jako{" "}
            <strong className="text-foreground">potencjalny nabywca</strong>{" "}
            nieruchomości lub udziałów w nieruchomościach, działający we własnym
            imieniu i na własny rachunek.
          </li>
          <li>
            Usługodawca{" "}
            <strong className="text-foreground">
              nie jest pełnomocnikiem, doradcą ani reprezentantem Użytkownika
            </strong>
            . Interesy Usługodawcy i Użytkownika jako stron potencjalnej
            transakcji mogą być rozbieżne.
          </li>
          <li>
            Usługodawca{" "}
            <strong className="text-foreground">
              nie świadczy pomocy prawnej ani doradztwa podatkowego
            </strong>
            . Treści zamieszczone w Serwisie, w tym artykuły na blogu, mają
            charakter ogólnoinformacyjny i nie stanowią porady prawnej,
            podatkowej ani rekomendacji w indywidualnej sprawie. W sprawach
            indywidualnych zalecamy skorzystanie z pomocy własnego doradcy.
          </li>
          <li>
            Usługodawca nie świadczy usług pośrednictwa w obrocie
            nieruchomościami.
          </li>
          <li>
            Usługodawca dokłada starań, aby treści w Serwisie były aktualne i
            rzetelne, nie ponosi jednak odpowiedzialności za decyzje podjęte
            wyłącznie na ich podstawie, bez konsultacji w indywidualnej sprawie.
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="§ 8. Prawa autorskie">
        <p>
          Treści zamieszczone w Serwisie, w tym teksty, grafiki i układ stron,
          podlegają ochronie prawnej. Korzystanie z nich jest dopuszczalne
          wyłącznie w granicach dozwolonego użytku. Wykorzystanie w innym
          zakresie wymaga zgody Usługodawcy.
        </p>
      </LegalSection>

      <LegalSection heading="§ 9. Reklamacje dotyczące usług świadczonych drogą elektroniczną">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Reklamacje dotyczące funkcjonowania Serwisu lub usług świadczonych
            drogą elektroniczną można składać na adres: {CONTACT.email}.
          </li>
          <li>
            Reklamacja powinna zawierać: dane umożliwiające kontakt, opis
            nieprawidłowości oraz oczekiwany sposób jej rozpatrzenia.
          </li>
          <li>
            Usługodawca rozpatruje reklamację w terminie 14 dni od jej
            otrzymania i informuje o wyniku na wskazany adres.
          </li>
          <li>
            Użytkownik będący konsumentem może skorzystać z pomocy miejskiego lub
            powiatowego rzecznika konsumentów albo właściwej organizacji
            konsumenckiej.
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="§ 10. Dane osobowe">
        <p>
          Zasady przetwarzania danych osobowych opisane są w{" "}
          <Link
            href="/polityka-prywatnosci"
            className="underline underline-offset-2 hover:text-primary"
          >
            Polityce prywatności
          </Link>{" "}
          dostępnej w Serwisie.
        </p>
      </LegalSection>

      <LegalSection heading="§ 11. Postanowienia końcowe">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            W sprawach nieuregulowanych Regulaminem zastosowanie mają przepisy
            prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy o
            świadczeniu usług drogą elektroniczną.
          </li>
          <li>
            Usługodawca może zmienić Regulamin z ważnych przyczyn, w
            szczególności w razie zmiany przepisów prawa, zakresu świadczonych
            usług lub funkcjonalności Serwisu. Zmieniony Regulamin publikowany
            jest w Serwisie wraz z datą obowiązywania.
          </li>
          <li>
            Do korzystania z Serwisu stosuje się Regulamin w wersji obowiązującej
            w chwili korzystania.
          </li>
          <li>Zmiana Regulaminu nie narusza praw nabytych Użytkowników.</li>
        </ol>
      </LegalSection>
    </LegalPageLayout>
  );
}
