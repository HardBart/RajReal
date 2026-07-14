# RajReal — Checklista wdrożeniowa (Go-Live)

Ten dokument jest **jedynym źródłem prawdy** o tym, co musi się wydarzyć przed publikacją serwisu RajReal (podmiot: Raj Real Estate Invest sp. z o.o., NIP 7393929439). Zanim strona trafi na produkcję, każdy „twardy bloker" z listy poniżej musi być odhaczony.

> **Ważne:** znaczna część zadań jest **poza kodem** — nie da się ich „zbudować" w repozytorium. Dotyczy to m.in. rejestracji domeny, potwierdzenia podmiotu prawnego, realnej treści dokumentów (polityka prywatności, regulamin) oraz Profilu Firmy w Google. Kod jest gotowy w stopniu, w jakim może być bez tych decyzji biznesowych i prawnych.

---

## Status faz

- [x] **Faza 1** — scaffold projektu, design system, strona główna, landing wzorcowy `/skup-udzialow`, formularz kontaktowy (wariant B), szkielety polityki prywatności i regulaminu, cookie banner.
- [x] **Faza 2** — pozostałe landingi SEO oraz pełne SEO: metadata, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`.
- [x] **Faza 3 / blog** — blog MDX, 3 wpisy, kategorie, disclaimer prawny, JSON-LD `BlogPosting`.
- [ ] **Faza 3 / optymalizacja** — pass Core Web Vitals, cel Lighthouse 90+. **DO ZROBIENIA** (zadanie w tle, nie blokuje startu).

---

## Łańcuch zależności (kolejność krytyczna)

Zadania blokują się nawzajem — nie da się zrobić kroku dalej bez ukończenia poprzedniego:

```
NAZWA + DOMENA  (✅ RajReal → rajreal.pl, kupiona na Hostinger)
      │
      ▼
POTWIERDZENIE PODMIOTU (kto jest administratorem danych)
      │
      ▼
RESEND / EMAIL (weryfikacja domeny, skrzynka na leady)
      │
      ▼
POLITYKA PRYWATNOŚCI + REGULAMIN (realna treść)
      │
      ▼
DNS + ŚRODOWISKO VPS (konfiguracja DNS na Hostinger → przygotowanie VPS)
      │
      ▼
DEPLOY na VPS Hostinger (build, zmienne środowiskowe, HTTPS, test formularza end-to-end)
```

**Dlaczego ta kolejność:**
- **Domena** jest już kupiona (`rajreal.pl`, Hostinger) i ustawiona w `NEXT_PUBLIC_SITE_URL` — canonical, OG, sitemap, robots generują się poprawnie.
- Bez **potwierdzenia podmiotu** nie wiadomo, kto jest administratorem danych — a to musi znaleźć się w polityce prywatności i w stopce (NIP/REGON).
- Bez działającego **e-maila** formularz nie dostarczy leadów (a leady to dane osobowe).
- Bez **realnej polityki i regulaminu** publikacja formularza zbierającego dane osobowe jest niezgodna z RODO.
- **DNS + środowisko VPS** — cel wdrożenia ustalony: **VPS Hostinger**. Trzeba wskazać DNS na VPS i przygotować serwer, zanim ruszy deploy.
- **Deploy** to ostatni krok — spina wszystko powyżej.

**Niezależne (mogą iść równolegle, NIE blokują startu):**
- Pass optymalizacyjny **CWV / Lighthouse**.
- **Merytoryczny przegląd treści** pod kątem ścisłości prawnej.

Te dwa strumienie warto zacząć wcześnie, ale start produkcyjny nie może na nie czekać.

---

## Checklista

### 🔴 Twarde blokery (bez tego brak startu)

- [x] Nazwa + domena — **RajReal → `rajreal.pl`, domena kupiona na Hostinger**, ustawiona w `NEXT_PUBLIC_SITE_URL`. (Pozostaje do domknięcia: weryfikacja kolizji znaku w UPRP/EUIPO, jeśli jeszcze nie zrobiona.)
- [ ] Potwierdzenie podmiotu prawnego (JDG vs sp. z o.o.) — kto jest administratorem danych; decyzja przed wpisaniem NIP. (Znane: Raj Real Estate Invest sp. z o.o., NIP 7393929439 — już wpisane w config/stopkę/JSON-LD.)
- [ ] Email/Resend: weryfikacja domeny `rajreal.pl` (SPF/DKIM/DMARC) + monitorowana skrzynka na leady (leady zawierają dane osobowe: imię, telefon, nr KW, opis sprawy).
- [ ] Polityka prywatności + regulamin — REALNA treść (nie szkielet), z imiennym wskazaniem administratora.
- [x] Realne dane w stopce — komplet z KRS (0000793577): nazwa, forma, NIP 7393929439, REGON 383807208, kapitał 5 000,00 zł, siedziba ul. Dworcowa 18/45, 10-436 Olsztyn, sąd rejestrowy. Wpisane w stopkę, politykę, regulamin i JSON-LD.
- [ ] Realne dane kontaktowe — **telefon ZROBIONY (881 244 700)**; pozostaje `TODO_EMAIL` (firmowy adres e-mail, docelowo `@rajreal.pl`).
- [x] **Cel hostingu ustalony: VPS Hostinger** (decyzja ostateczna; Vercel odpada).
- [ ] **Konfiguracja DNS `rajreal.pl` (panel Hostinger):** rekordy A/AAAA na IP VPS; redirect `www` → apex; rekordy pod e-mail (SPF/DKIM/DMARC — spójne z zadaniem e-mail powyżej).
- [ ] **Środowisko produkcyjne na VPS Hostinger:** Node (wersja zgodna z Next 16), `next build` + `next start` pod menedżerem procesów (PM2/systemd), reverse proxy nginx + HTTPS (Let's Encrypt), zmienne środowiskowe na serwerze, firewall, auto-restart.
- [ ] **Deploy na VPS + test:** build, zmienne środowiskowe (klucz Resend/SMTP, `NEXT_PUBLIC_SITE_URL=https://rajreal.pl`, `CONTACT_*`), HTTPS, **test formularza end-to-end na produkcji** (dostarczenie leada).

### ⚖️ Prawne (łatwe do przeoczenia)

- [ ] DECYZJA: Resend (USA, transfer do państwa trzeciego → wymaga ujawnienia w polityce + DPA + mechanizm SCC/DPF) vs SMTP z UE (brak transferu, prostsza polityka). Rozstrzygnąć PRZED pisaniem polityki, bo zmienia jej treść.
- [ ] Jeśli Resend: podpisany DPA + weryfikacja aktualnego mechanizmu transferu w dokumentacji dostawcy.
- [ ] Polityka: poprawne podstawy przetwarzania (kontakt: art. 6 ust. 1 lit. f lub b; marketing: lit. a), retencja, prawa podmiotu, cookies spójne z bannerem.
- [ ] Merytoryczny przegląd treści (blog + landingi) pod kątem ścisłości prawnej — disclaimer nie chroni przed nieprawdziwą treścią. Do wykonania przez właściciela (prawnik).

### 🟢 Operacyjne / wzrost (nie blokuje startu, zacząć równolegle)

- [ ] Profil Firmy w Google ×2 (Olsztyn, Białystok) — weryfikacja bywa pocztą i trwa, zacząć wcześnie.
- [ ] Realne zdjęcia biur (podmiana slotów „TODO: realne zdjęcie biura").
- [ ] Analityka od dnia 1 (GA4 lub Plausible) zintegrowana z consent-mode cookie bannera.
- [ ] Auto-potwierdzenie mailem do zgłaszającego („odebraliśmy zgłoszenie") — wymaga poprawnego DKIM/DMARC dla dostarczalności.
- [ ] Pass optymalizacyjny CWV / Lighthouse 90+ (realne wymiary i priorytety obrazów, `sizes`, ograniczenie remote'ów Unsplash na własne pliki). Zadanie w tle — nie kamień milowy.

---

## Uwaga o środowisku (dev-flow)

W pliku `C:\Users\barto\.claude\launch.json` konfiguracja o nazwie **„dev" uruchamia inny projekt** (Najem Okazjonalny), dlatego serwer deweloperski RajReal startuje osobno (np. `localhost:3001`, gdy port 3000 jest zajęty przez inny projekt).

Do rozwiązania przed wygodnym dev-flow (np. dedykowana konfiguracja `launch.json` w katalogu projektu z jednoznaczną nazwą). **Nie blokuje startu produkcyjnego** — dotyczy wyłącznie lokalnej wygody pracy.
