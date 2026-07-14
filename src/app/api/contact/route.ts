import { NextResponse, type NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { sendLeadNotification } from "@/lib/mailer";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Zbyt wiele prób. Spróbuj ponownie za chwilę." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Nieprawidłowe dane." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Formularz zawiera błędy.",
        issues: parsed.error.issues,
      },
      { status: 422 }
    );
  }

  // Honeypot: prawdziwi użytkownicy nigdy nie wypełniają tego pola.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const result = await sendLeadNotification(parsed.data);
  if (!result.ok) {
    console.error("Contact form send failure:", result.error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Nie udało się wysłać zgłoszenia. Spróbuj ponownie później lub skontaktuj się telefonicznie.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
