import type { ContactFormValues } from "@/lib/contact-schema";
import { VOIVODESHIP_LABELS } from "@/lib/contact-schema";

const YES_NO_LABELS: Record<string, string> = { tak: "Tak", nie: "Nie" };

function row(label: string, value: string | undefined | null) {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#667;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0;font-size:13px">${value}</td></tr>`;
}

export function renderLeadEmailHtml(data: ContactFormValues): string {
  const rows = [
    row(
      "Sprzedaje",
      data.salesType === "udzial" ? "Udział" : data.salesType === "calosc" ? "Całość" : undefined
    ),
    row("Rodzaj nieruchomości", data.propertyType),
    row("Województwo", VOIVODESHIP_LABELS[data.voivodeship]),
    row("Miejscowość", data.city),
    row("Ulica", data.street),
    row("Powierzchnia (m²)", data.area),
    row("Liczba pokoi", data.rooms),
    row("Piętro", data.floor),
    row("Liczba pięter w budynku", data.totalFloors),
    row("Rok budowy", data.yearBuilt),
    row("Ogrzewanie", data.heating),
    row("Okna", data.windows),
    row("Balkon", data.balcony && YES_NO_LABELS[data.balcony]),
    row("Winda", data.elevator && YES_NO_LABELS[data.elevator]),
    row("Stan mieszkania", data.condition),
    row(
      "Budynek ocieplony",
      data.insulatedBuilding && YES_NO_LABELS[data.insulatedBuilding]
    ),
    row("Czynsz (msc)", data.rent),
    row("Liczba współwłaścicieli", data.coOwnersCount),
    row("Wielkość udziału", data.shareSize),
    row(
      "Konflikt między współwłaścicielami",
      data.coOwnerConflict && YES_NO_LABELS[data.coOwnerConflict]
    ),
    row(
      "Nieruchomość spadkowa",
      data.isInheritance && YES_NO_LABELS[data.isInheritance]
    ),
    row(
      "Postanowienie o nabyciu spadku",
      data.inheritanceDecision === "w-toku"
        ? "W toku"
        : data.inheritanceDecision && YES_NO_LABELS[data.inheritanceDecision]
    ),
    row(
      "Nieruchomość zadłużona",
      data.isIndebted && YES_NO_LABELS[data.isIndebted]
    ),
    row("Kwota zadłużenia", data.debtAmount),
    row(
      "Wystawione w internecie",
      data.listedOnline && YES_NO_LABELS[data.listedOnline]
    ),
    row("Numer KW", data.landRegistryNumber),
    row("Termin sprzedaży", data.timeline),
    row("Imię", data.firstName),
    row("Telefon", data.phone),
    row("E-mail", data.email),
    row("Preferowany kontakt", data.contactPreference),
    row(
      "Zgoda marketingowa",
      data.marketingConsent === true ? "Tak" : "Nie"
    ),
  ]
    .filter(Boolean)
    .join("");

  const message = data.message
    ? `<div style="margin-top:16px"><div style="color:#667;font-size:13px;margin-bottom:4px">Wiadomość</div><div style="font-size:14px;white-space:pre-wrap">${data.message}</div></div>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;color:#1f2421">
      <h2 style="margin:0 0 16px">Nowe zgłoszenie — formularz kontaktowy</h2>
      <table style="border-collapse:collapse">${rows}</table>
      ${message}
    </div>
  `;
}

type SendResult = { ok: true } | { ok: false; error: string };

async function sendViaResend(html: string, subject: string): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return { ok: false, error: "Brak konfiguracji Resend (RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL)." };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, html });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

async function sendViaSmtp(html: string, subject: string): Promise<SendResult> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return { ok: false, error: "Brak konfiguracji SMTP." };
  }

  const nodemailer = await import("nodemailer");
  const transport = nodemailer.default.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transport.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject,
      html,
    });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Nieznany błąd SMTP." };
  }
}

export async function sendLeadNotification(data: ContactFormValues): Promise<SendResult> {
  const html = renderLeadEmailHtml(data);
  const subject = `Nowe zgłoszenie: ${data.firstName || "Klient"} — ${VOIVODESHIP_LABELS[data.voivodeship]}`;
  const provider = process.env.CONTACT_PROVIDER === "smtp" ? "smtp" : "resend";

  return provider === "smtp" ? sendViaSmtp(html, subject) : sendViaResend(html, subject);
}
