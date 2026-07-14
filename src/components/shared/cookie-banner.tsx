"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSENT_COOKIE = "rajreal-cookie-consent";

type Consent = "accepted" | "rejected";

function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`)
  );
  return (match?.[1] as Consent) ?? null;
}

function writeConsent(value: Consent) {
  const maxAge = 60 * 60 * 24 * 180; // 180 dni
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function CookieBanner() {
  const [visible, setVisible] = useState<boolean | null>(null);

  // Reads a browser-only API (document.cookie); the resulting state
  // necessarily differs between server and client, so the check can
  // only happen after mount.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(readConsent() === null);
  }, []);

  function handleChoice(value: Consent) {
    writeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookie"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/98 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur sm:p-6"
    >
      <div className="container-page flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Używamy plików cookie niezbędnych do działania strony. Za Twoją zgodą
          używamy również opcjonalnych plików cookie (np. analitycznych).
          Domyślnie aktywne są wyłącznie cookies niezbędne. Szczegóły znajdziesz
          w{" "}
          <Link href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-primary">
            Polityce prywatności
          </Link>
          .
        </p>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <Button
            variant="outline"
            className="flex-1 sm:flex-none"
            onClick={() => handleChoice("rejected")}
          >
            Odrzuć opcjonalne
          </Button>
          <Button className="flex-1 sm:flex-none" onClick={() => handleChoice("accepted")}>
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
}
