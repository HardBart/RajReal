# RajReal — stan wdrożenia i runbook

**🚀 Serwis opublikowany: 17 lipca 2026** — [https://rajreal.pl](https://rajreal.pl) jest publicznie dostępny.

Podmiot: **Raj Real Estate Invest sp. z o.o.**, NIP 7393929439, KRS 0000793577.

Ten dokument był checklistą przed startem. Po publikacji pełni rolę **jedynego źródła prawdy o stanie wdrożenia** oraz **runbooka** (jak aktualizować stronę, jak cofnąć zmiany, co jeszcze przed nami).

---

## Status faz

- [x] **Faza 1** — scaffold, design system, strona główna, landing wzorcowy `/skup-udzialow`, formularz kontaktowy (wariant B), strony prawne, cookie banner.
- [x] **Faza 2** — pozostałe landingi SEO + pełne SEO: metadata, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`.
- [x] **Faza 3 / blog** — blog MDX, 3 wpisy, kategorie, disclaimer prawny, JSON-LD `BlogPosting`.
- [ ] **Faza 3 / optymalizacja** — pass Core Web Vitals, cel Lighthouse 90+. *Nie blokuje — zadanie w tle.*

---

## ✅ Twarde blokery — wszystkie zamknięte

- [x] **Nazwa + domena** — RajReal → `rajreal.pl`, kupiona na Hostinger, DNS wskazuje na VPS (72.60.18.217). Wszystkie pełne URL-e czytają `NEXT_PUBLIC_SITE_URL`.
- [x] **Podmiot prawny potwierdzony** — Raj Real Estate Invest sp. z o.o. (dane z KRS): KRS 0000793577, NIP 7393929439, REGON 383807208, kapitał 5 000,00 zł, siedziba ul. Dworcowa 18/45, 10-436 Olsztyn, Sąd Rejonowy w Olsztynie VIII Wydz. Gospodarczy KRS.
- [x] **E-mail / skrzynka na leady** — `kontakt@rajreal.pl` (Hostinger, UE). Wysyłka przez **SMTP** (`smtp.hostinger.com:465`). Test end-to-end na produkcji: mail dochodzi **do Odebranych** (nie spam).
- [x] **Polityka prywatności + regulamin** — realna treść na `/polityka-prywatnosci` i `/regulamin`, zero placeholderów.
- [x] **Realne dane w stopce** — nazwa, siedziba, NIP, REGON, KRS, **kapitał zakładowy** (wymóg art. 206 KSH), sąd rejestrowy.
- [x] **Realne dane kontaktowe** — tel. **881 244 700**, e-mail **kontakt@rajreal.pl**.
- [x] **Cel hostingu** — VPS Hostinger (Vercel odrzucony).
- [x] **DNS** — A `@` → 72.60.18.217, `www` → CNAME na apex. Propagacja potwierdzona.
- [x] **Środowisko produkcyjne** — Ubuntu 24.04, Node 24, app w `/var/www/rajreal` pod **PM2 (port 3003)**, nginx reverse proxy, HTTPS Let's Encrypt z auto-odnawianiem.
- [x] **Deploy + test** — strona live, formularz przetestowany na produkcji (`{"ok":true}` + mail).

## ⚖️ Prawne

- [x] **Decyzja Resend vs SMTP** → **SMTP Hostinger (UE)**. Brak transferu do państwa trzeciego → prostsza polityka, bez DPA/SCC dla USA.
- [x] **Polityka** — podstawy przetwarzania (art. 6 ust. 1 lit. a/b/c/f), retencja, prawa podmiotu, cookies spójne z bannerem.
- [x] **Dane osób trzecich** — klauzula z **art. 14 RODO** (współwłaściciele, spadkobiercy, nr KW) — specyfika skupu udziałów, brak w typowych szablonach.
- [x] **Brak oferty** — regulamin § 6: art. 66 vs 71 k.c. + akt notarialny (art. 158 k.c.) → ochrona przed związaniem ceną.
- [x] **Rola potencjalnego nabywcy** + brak porad prawnych/podatkowych — spójne z disclaimerem na blogu.
- [ ] **Merytoryczny przegląd treści przez prawnika** (blog + landingi + dokumenty). Dokumenty są zgodne z tym, co strona faktycznie robi, ale nie były weryfikowane przez prawnika. **Zalecane, nie blokujące.**

## 🟢 Operacyjne / wzrost

- [ ] **Google Search Console** — dodać `rajreal.pl`, zgłosić `https://rajreal.pl/sitemap.xml`. *Priorytet — przyspiesza indeksację.*
- [ ] **Profil Firmy w Google** (Olsztyn / Podlasie) — weryfikacja bywa pocztą i trwa. *Zwykle największe źródło telefonów lokalnie.*
- [ ] **Analityka** — obecnie **brak jakichkolwiek trackerów** (świadomie). Jeśli dojdzie GA4/Plausible: skrypty muszą być blokowane do zgody, a polityka (pkt 5, 7, 12) i banner wymagają aktualizacji.
- [ ] **Auto-potwierdzenie mailem do zgłaszającego** („odebraliśmy zgłoszenie").
- [ ] **Pass CWV / Lighthouse 90+** — wymiary i priorytety obrazów, `sizes`, ewentualnie własne pliki zamiast Unsplash.
- [x] ~~Realne zdjęcia biur~~ — **nieaktualne**: firma nie ma biura stacjonarnego, sloty usunięte; regiony pokazują zdjęcia miast oraz symboli (kormoran / żubr).

---

## 🔧 Runbook — jak to obsługiwać

### Aktualizacja strony
Zmiany w kodzie → `git push` → na serwerze **jedna komenda**:
```bash
bash /var/www/rajreal/deploy.sh
```
(robi `git fetch` + `reset --hard origin/main` + `npm install` + `npm run build` + `pm2 restart rajreal` + `pm2 save`)

> `.env.local` z hasłem SMTP jest **poza gitem** — deploy go nie nadpisze.

### Tryb „strona w budowie"
```bash
# włącz
cp /etc/nginx/sites-available/rajreal.pl.MAINT-bak /etc/nginx/sites-available/rajreal.pl && nginx -t && systemctl reload nginx
# wyłącz (powrót na live)
cp /etc/nginx/sites-available/rajreal.pl.LIVE-bak /etc/nginx/sites-available/rajreal.pl && nginx -t && systemctl reload nginx
```
W trybie „w budowie" podgląd pełnej strony: `https://rajreal.pl/podglad-2026` (ustawia ciasteczko na 7 dni).

### Diagnostyka
```bash
pm2 ls                 # status aplikacji
pm2 logs rajreal       # logi (wyjście: Ctrl+C)
pm2 restart rajreal --update-env
nginx -t && systemctl reload nginx
```

### ⚠️ Pułapki, które już nas ugryzły
1. **Po `systemctl reload nginx` odczekaj ~3 s przed testem.** Dwa razy zmyliło nas to, że zmiana „nie działa" — a nginx po prostu jeszcze nie przełączył workerów.
2. **Porty 3000–3002 są zajęte** przez inne projekty na tym VPS (m.in. apka `spadek` na 3001). **RajReal działa na 3003.** Nigdy nie przywracaj configu wskazującego na 3001 — podstawi cudzą stronę pod `rajreal.pl`.
3. **`npm ci` nie zadziała** — lockfile powstał na Windowsie i brakuje w nim paczek linuxowych. Deploy używa `npm install` i to jest celowe.
4. **Nie używaj `!!` / `!!!` w komendach** wklejanych do interaktywnego bash — historia poleceń je rozwija i psuje skrypt.

---

## Kluczowe fakty techniczne

| | |
|---|---|
| Repo | `github.com/HardBart/RajReal` (main) |
| Serwer | VPS Hostinger, Ubuntu 24.04, IP 72.60.18.217, **Vilnius (Litwa, UE)** |
| Katalog | `/var/www/rajreal` |
| Proces | PM2, nazwa `rajreal`, **port 3003** |
| Poczta | `kontakt@rajreal.pl`, SMTP `smtp.hostinger.com:465` |
| Procesor | **Hostinger International Ltd.**, Larnaka, Cypr (UE) |
| Prywatność | **zero zewnętrznych hostów** — brak Google, trackerów, map; fonty i zdjęcia serwowane z własnego serwera |

---

## Uwaga o środowisku (dev-flow)

W `C:\Users\barto\.claude\launch.json` konfiguracja „dev" uruchamia **inny projekt** (Najem Okazjonalny). Serwer deweloperski RajReal uruchamiaj z katalogu projektu:
```powershell
cd C:\Users\barto\projects\terra-polnoc
npm run dev
```
Nie blokuje niczego — dotyczy wyłącznie lokalnej wygody.

> **Nazwa katalogu** to wciąż `terra-polnoc` (historyczna, robocza nazwa projektu). Sam kod, repo i marka są w pełni przemianowane na RajReal — zmiana nazwy katalogu jest kosmetyczna i nieobowiązkowa.
