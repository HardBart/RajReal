import type { Metadata } from "next";
import {
  LegalPageLayout,
  LegalSection,
  TodoNote,
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

/** TODO: wpisać dokładną nazwę podmiotu Hostinger z faktury/regulaminu. */
const HOSTING_PROVIDER = "TODO_NAZWA_PODMIOTU_HOSTINGER";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności",
  description:
    "Zasady przetwarzania danych osobowych w serwisie RajReal — administrator, cele, podstawy prawne, odbiorcy, retencja i prawa.",
  path: "/polityka-prywatnosci",
});

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border-b border-border px-3 py-2 text-left font-medium text-foreground">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="border-b border-border/60 px-3 py-2 align-top">{children}</td>
  );
}

export default function PolitykaPrywatnosciPage() {
  return (
    <LegalPageLayout
      title="Polityka prywatności serwisu rajreal.pl"
      updatedAt={UPDATED_AT}
    >
      <LegalSection heading="1. Administrator danych osobowych">
        <p>
          Administratorem Twoich danych osobowych jest{" "}
          <strong className="text-foreground">{LEGAL_NAME}</strong> z siedzibą w{" "}
          {COMPANY_LEGAL.address.city}, {formatLegalAddress()}, wpisana do
          rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez{" "}
          {COMPANY_LEGAL.court}, pod numerem KRS {COMPANY_LEGAL.krs}, NIP {NIP},
          REGON {COMPANY_LEGAL.regon}, kapitał zakładowy{" "}
          {COMPANY_LEGAL.shareCapital} (dalej: „Administrator", „my", „RajReal").
        </p>
        <p>
          <strong className="text-foreground">
            Kontakt w sprawach dotyczących danych osobowych:
          </strong>{" "}
          {CONTACT.email} lub adres siedziby wskazany powyżej.
        </p>
        <p>
          Administrator nie wyznaczył Inspektora Ochrony Danych. We wszystkich
          sprawach dotyczących przetwarzania danych osobowych możesz kontaktować
          się bezpośrednio z Administratorem pod wskazanym wyżej adresem.
        </p>
      </LegalSection>

      <LegalSection heading="2. Zakres zastosowania Polityki">
        <p>Polityka opisuje zasady przetwarzania danych osobowych:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>osób korzystających z serwisu internetowego rajreal.pl (dalej: „Serwis"),</li>
          <li>
            osób kontaktujących się z nami przez formularz kontaktowy,
            telefonicznie lub e-mailem,
          </li>
          <li>
            <strong className="text-foreground">
              osób trzecich, których dane zostały nam przekazane przez osobę
              zgłaszającą nieruchomość
            </strong>{" "}
            (zob. pkt 6).
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Jakie dane zbieramy">
        <p>
          Serwis nie wymaga rejestracji ani zakładania konta. Dane osobowe
          zbieramy wyłącznie wtedy, gdy sam(a) nam je podasz.
        </p>
        <p className="font-medium text-foreground">
          Za pośrednictwem formularza kontaktowego możesz podać:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">dane kontaktowe:</strong> imię,
            numer telefonu, adres e-mail, preferowaną formę i godziny kontaktu;
          </li>
          <li>
            <strong className="text-foreground">dane dotyczące nieruchomości:</strong>{" "}
            województwo, miejscowość, ulicę, powierzchnię, liczbę pokoi, piętro,
            liczbę pięter w budynku, rok budowy, rodzaj ogrzewania, okna, balkon,
            windę, stan lokalu, informację o ociepleniu budynku, wysokość czynszu,
            informację o wystawieniu nieruchomości w internecie;
          </li>
          <li>
            <strong className="text-foreground">
              dane dotyczące sytuacji prawnej nieruchomości:
            </strong>{" "}
            przedmiot sprzedaży (całość albo udział), wielkość udziału, liczbę
            współwłaścicieli, informację o konflikcie między współwłaścicielami,
            informację o charakterze spadkowym nieruchomości oraz o postanowieniu
            o stwierdzeniu nabycia spadku lub akcie poświadczenia dziedziczenia,
            informację o zadłużeniu i jego kwocie, numer księgi wieczystej;
          </li>
          <li>
            <strong className="text-foreground">treść wiadomości</strong> oraz
            oczekiwany termin sprzedaży.
          </li>
        </ul>
        <p>
          <strong className="text-foreground">Wymagane są wyłącznie:</strong>{" "}
          województwo, miejscowość, co najmniej jeden kanał kontaktu (numer
          telefonu albo adres e-mail) oraz zgoda na kontakt. Pozostałe pola są
          dobrowolne — formularz można wysłać także wtedy, gdy nie zostaną
          uzupełnione.
        </p>
        <p>
          <strong className="text-foreground">Nie zbieramy załączników.</strong>{" "}
          Formularz nie umożliwia przesyłania dokumentów (odpisów z księgi
          wieczystej, aktów notarialnych, postanowień o stwierdzeniu nabycia
          spadku ani innych). Dokumenty wymieniamy dopiero po nawiązaniu
          kontaktu, kanałem uzgodnionym indywidualnie.
        </p>
        <p>
          <strong className="text-foreground">
            Prosimy o niepodawanie w treści wiadomości danych szczególnych
            kategorii
          </strong>{" "}
          (np. dotyczących stanu zdrowia, przekonań czy życia prywatnego), o ile
          nie jest to niezbędne w sprawie.
        </p>
        <p>
          <strong className="text-foreground">Dane zbierane automatycznie:</strong>{" "}
          w związku z korzystaniem z Serwisu przetwarzamy adres IP oraz
          podstawowe dane techniczne zapytania (logi serwera oraz ochrona
          formularza przed nadużyciami).
        </p>
      </LegalSection>

      <LegalSection heading="4. Cele i podstawy prawne przetwarzania">
        <div className="not-prose overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <Th>Cel</Th>
                <Th>Podstawa prawna</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Udzielenie odpowiedzi na zapytanie i kontakt zwrotny</Td>
                <Td>
                  art. 6 ust. 1 lit. b RODO — podjęcie działań na Twoje żądanie
                  przed zawarciem umowy; a w zakresie, w jakim kontakt nie
                  zmierza do zawarcia umowy — art. 6 ust. 1 lit. f RODO (nasz
                  prawnie uzasadniony interes w prowadzeniu korespondencji)
                </Td>
              </tr>
              <tr>
                <Td>
                  Ocena stanu prawnego i technicznego nieruchomości, negocjacje,
                  przygotowanie transakcji
                </Td>
                <Td>
                  art. 6 ust. 1 lit. b oraz lit. f RODO (prowadzenie działalności
                  gospodarczej)
                </Td>
              </tr>
              <tr>
                <Td>Marketing bezpośredni (jeżeli wyraziłeś odrębną zgodę)</Td>
                <Td>
                  art. 6 ust. 1 lit. a RODO; w zakresie kontaktu telefonicznego i
                  e-mailowego — zgoda na marketing bezpośredni zgodnie z
                  obowiązującymi przepisami o komunikacji elektronicznej
                </Td>
              </tr>
              <tr>
                <Td>Ustalenie, dochodzenie lub obrona przed roszczeniami</Td>
                <Td>art. 6 ust. 1 lit. f RODO</Td>
              </tr>
              <tr>
                <Td>
                  Wypełnienie obowiązków księgowych i podatkowych (gdy dojdzie do
                  transakcji)
                </Td>
                <Td>art. 6 ust. 1 lit. c RODO</Td>
              </tr>
              <tr>
                <Td>
                  Zapewnienie bezpieczeństwa Serwisu i przeciwdziałanie
                  nadużyciom (m.in. ochrona formularza przed spamem)
                </Td>
                <Td>art. 6 ust. 1 lit. f RODO</Td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection heading="5. Odbiorcy danych">
        <p>Twoje dane możemy przekazywać:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Hostinger</strong> — dostawca
            hostingu (serwer VPS oraz poczta firmowa) — {HOSTING_PROVIDER},
            serwery zlokalizowane w Wilnie (Litwa, UE), na podstawie umowy
            powierzenia przetwarzania danych;
          </li>
          <li>
            <strong className="text-foreground">
              podmiotowi świadczącemu obsługę księgową
            </strong>{" "}
            — w zakresie niezbędnym, jeżeli dojdzie do transakcji;
          </li>
          <li>
            <strong className="text-foreground">
              doradcom prawnym oraz notariuszowi
            </strong>{" "}
            — w zakresie niezbędnym do oceny i przeprowadzenia transakcji;
          </li>
          <li>
            <strong className="text-foreground">organom publicznym</strong> —
            wyłącznie gdy obowiązek taki wynika z przepisów prawa.
          </li>
        </ul>
        <p>
          Dostęp do skrzynki {CONTACT.email} mają wyłącznie osoby upoważnione
          przez Administratora.
        </p>
        <p className="font-medium text-foreground">
          Nie sprzedajemy ani nie udostępniamy Twoich danych podmiotom trzecim w
          celach marketingowych.
        </p>
        <TodoNote>
          uzupełnić dokładną nazwę podmiotu Hostinger z faktury/regulaminu
          (obecnie: {HOSTING_PROVIDER}).
        </TodoNote>
      </LegalSection>

      <LegalSection heading="6. Dane osób trzecich (obowiązek informacyjny z art. 14 RODO)">
        <p>
          Jeżeli otrzymaliśmy Twoje dane{" "}
          <strong className="text-foreground">
            nie od Ciebie, lecz od osoby zgłaszającej nieruchomość
          </strong>{" "}
          (np. współwłaściciela lub spadkobiercy), informujemy, że:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Źródło danych:</strong> dane
            pochodzą od osoby, która skontaktowała się z nami w sprawie
            nieruchomości; mogą również pochodzić ze źródeł publicznie
            dostępnych, w szczególności z elektronicznej księgi wieczystej.
          </li>
          <li>
            <strong className="text-foreground">Kategorie danych:</strong> imię i
            nazwisko, wielkość przysługującego udziału, informacja o statusie
            współwłaściciela lub spadkobiercy, informacja o istnieniu sporu
            dotyczącego nieruchomości.
          </li>
          <li>
            <strong className="text-foreground">Cel i podstawa prawna:</strong>{" "}
            ocena stanu prawnego nieruchomości oraz możliwości i warunków jej
            nabycia — art. 6 ust. 1 lit. f RODO (nasz prawnie uzasadniony interes
            polegający na prowadzeniu działalności gospodarczej i ocenie
            transakcji).
          </li>
          <li>
            <strong className="text-foreground">Okres przechowywania:</strong> jak
            w pkt 8.
          </li>
          <li>
            <strong className="text-foreground">Twoje prawa:</strong> jak w pkt 9,
            w tym{" "}
            <strong className="text-foreground">
              prawo wniesienia sprzeciwu
            </strong>{" "}
            wobec przetwarzania opartego na prawnie uzasadnionym interesie.
          </li>
          <li>
            <strong className="text-foreground">Odbiorcy:</strong> jak w pkt 5.
          </li>
        </ul>
        <p>
          Osoba zgłaszająca nieruchomość oświadcza, że jest uprawniona do
          przekazania nam danych osób trzecich w podanym zakresie. Prosimy o
          ograniczanie tych danych do niezbędnego minimum.
        </p>
      </LegalSection>

      <LegalSection heading="7. Przekazywanie danych poza Europejski Obszar Gospodarczy">
        <p className="font-medium text-foreground">
          Nie przekazujemy danych poza EOG.
        </p>
        <p>
          Serwer oraz poczta firmowa znajdują się na terytorium Litwy (Unia
          Europejska).
        </p>
        <p>
          Serwis nie zawiera narzędzi analitycznych ani reklamowych (brak Google
          Analytics, brak pikseli reklamowych), nie zawiera wtyczek
          społecznościowych ani osadzonych map zewnętrznych. Zdjęcia
          wykorzystywane w Serwisie są przetwarzane i serwowane z naszego serwera
          — Twoja przeglądarka nie łączy się w tym celu z serwisami zewnętrznymi.
        </p>
      </LegalSection>

      <LegalSection heading="8. Okres przechowywania danych">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">
              Zapytania, które nie doprowadziły do transakcji:
            </strong>{" "}
            12 miesięcy od ostatniego kontaktu, po czym dane są usuwane.
          </li>
          <li>
            <strong className="text-foreground">
              Zapytania, które doprowadziły do transakcji:
            </strong>{" "}
            przez okres wynikający z obowiązków księgowych i podatkowych (co do
            zasady 5 lat od końca roku, w którym powstał obowiązek podatkowy) oraz
            do czasu przedawnienia ewentualnych roszczeń.
          </li>
          <li>
            <strong className="text-foreground">
              Dane przetwarzane na podstawie zgody marketingowej:
            </strong>{" "}
            do czasu wycofania zgody.
          </li>
          <li>
            <strong className="text-foreground">Logi serwera:</strong> do 12
            miesięcy.
          </li>
          <li>
            <strong className="text-foreground">Pliki cookies:</strong> zgodnie z
            czasem życia poszczególnych plików (zob. pkt 12).
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="9. Twoje prawa">
        <p>Przysługuje Ci prawo do:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">dostępu</strong> do danych oraz
            otrzymania ich kopii,
          </li>
          <li>
            <strong className="text-foreground">sprostowania</strong> danych
            nieprawidłowych lub niekompletnych,
          </li>
          <li>
            <strong className="text-foreground">usunięcia</strong> danych („prawo
            do bycia zapomnianym"),
          </li>
          <li>
            <strong className="text-foreground">ograniczenia</strong>{" "}
            przetwarzania,
          </li>
          <li>
            <strong className="text-foreground">przenoszenia</strong> danych — w
            zakresie, w jakim przetwarzanie odbywa się na podstawie zgody lub
            umowy i w sposób zautomatyzowany,
          </li>
          <li>
            <strong className="text-foreground">wniesienia sprzeciwu</strong>{" "}
            wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 6
            ust. 1 lit. f RODO) — w tym w każdym czasie wobec marketingu
            bezpośredniego,
          </li>
          <li>
            <strong className="text-foreground">cofnięcia zgody</strong> w
            dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania
            dokonanego przed jej cofnięciem,
          </li>
          <li>
            <strong className="text-foreground">wniesienia skargi</strong> do
            Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193
            Warszawa), jeżeli uznasz, że przetwarzamy Twoje dane niezgodnie z
            prawem.
          </li>
        </ul>
        <p>
          W celu skorzystania z powyższych praw skontaktuj się z nami:{" "}
          {CONTACT.email}.
        </p>
      </LegalSection>

      <LegalSection heading="10. Dobrowolność podania danych">
        <p>
          Podanie danych jest dobrowolne. Podanie województwa, miejscowości oraz
          co najmniej jednego kanału kontaktu (telefon albo e-mail) jest jednak
          niezbędne, abyśmy mogli udzielić odpowiedzi na zapytanie. Niepodanie
          pozostałych danych nie uniemożliwia wysłania zapytania — może jedynie
          wydłużyć wstępną ocenę sprawy.
        </p>
      </LegalSection>

      <LegalSection heading="11. Zautomatyzowane podejmowanie decyzji">
        <p>
          Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na
          zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby
          skutki prawne lub w podobny sposób istotnie na Ciebie wpływały.
        </p>
      </LegalSection>

      <LegalSection heading="12. Pliki cookies">
        <p>
          Serwis wykorzystuje{" "}
          <strong className="text-foreground">
            wyłącznie pliki cookies niezbędne
          </strong>{" "}
          do prawidłowego działania strony, w tym plik zapamiętujący Twoją decyzję
          dotyczącą informacji o cookies. Nie stosujemy cookies analitycznych,
          marketingowych ani profilujących. Nie korzystamy z Google Analytics ani
          pikseli reklamowych.
        </p>
        <p>
          Cookies niezbędne nie wymagają zgody. Możesz w każdej chwili zmienić
          ustawienia dotyczące plików cookies w swojej przeglądarce — może to
          jednak wpłynąć na działanie niektórych funkcji Serwisu.
        </p>
        <TodoNote>
          jeżeli w przyszłości wdrożone zostaną narzędzia analityczne, niniejszy
          punkt oraz pkt 5 i 7 wymagają aktualizacji, a skrypty muszą być
          blokowane do momentu uzyskania zgody.
        </TodoNote>
      </LegalSection>

      <LegalSection heading="13. Bezpieczeństwo danych">
        <p>
          Stosujemy środki techniczne i organizacyjne odpowiednie do ryzyka, w
          szczególności:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>szyfrowaną transmisję danych (protokół TLS/HTTPS),</li>
          <li>ograniczenie dostępu do danych wyłącznie do osób upoważnionych,</li>
          <li>
            zabezpieczenie formularza przed automatycznymi nadużyciami (m.in.
            mechanizm ograniczania liczby zapytań, w ramach którego czasowo
            przetwarzany jest adres IP),
          </li>
          <li>regularne kopie zapasowe,</li>
          <li>
            powierzenie przetwarzania wyłącznie podmiotom zapewniającym
            odpowiednie gwarancje, na podstawie umów powierzenia.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="14. Zmiany Polityki">
        <p>
          Polityka może być aktualizowana, w szczególności w przypadku zmiany
          zakresu przetwarzanych danych, wykorzystywanych narzędzi lub przepisów
          prawa. Aktualna wersja jest każdorazowo publikowana w Serwisie wraz z
          datą jej obowiązywania.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
