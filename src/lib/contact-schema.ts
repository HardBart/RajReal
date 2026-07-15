import { z } from "zod";

const yesNo = z.enum(["tak", "nie"]);
const optionalText = z.string().trim().max(500).optional().or(z.literal(""));

export const contactFormSchema = z
  .object({
    // Co sprzedajesz
    salesType: z.enum(["calosc", "udzial"]).optional(),
    propertyType: z
      .enum(["mieszkanie", "dom", "udzial", "inne"])
      .optional(),

    // Lokalizacja
    voivodeship: z.enum(["warminsko-mazurskie", "podlaskie", "inne"], {
      error: "Wybierz województwo.",
    }),
    city: z.string().trim().min(1, "Podaj miejscowość.").max(500),
    street: optionalText,

    // Nieruchomość
    area: optionalText,
    rooms: optionalText,
    floor: optionalText,
    totalFloors: optionalText,
    yearBuilt: optionalText,
    heating: optionalText,
    windows: optionalText,
    balcony: yesNo.optional(),
    elevator: yesNo.optional(),
    condition: optionalText,
    insulatedBuilding: yesNo.optional(),
    rent: optionalText,

    // Sytuacja prawna
    coOwnersCount: optionalText,
    shareSize: optionalText,
    coOwnerConflict: yesNo.optional(),
    isInheritance: yesNo.optional(),
    inheritanceDecision: z.enum(["tak", "nie", "w-toku"]).optional(),
    isIndebted: yesNo.optional(),
    debtAmount: optionalText,
    listedOnline: yesNo.optional(),
    landRegistryNumber: optionalText,

    // Termin
    timeline: optionalText,

    // Kontakt
    firstName: optionalText,
    phone: optionalText,
    email: z
      .string()
      .trim()
      .email("Podaj poprawny adres e-mail.")
      .optional()
      .or(z.literal("")),
    contactPreference: optionalText,
    message: z.string().trim().max(3000).optional().or(z.literal("")),

    // Zgody
    rodoConsent: z.literal(true, {
      error: "Zgoda na przetwarzanie danych jest wymagana.",
    }),
    marketingConsent: z.boolean().optional(),

    // Honeypot — musi pozostać puste
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .refine((data) => Boolean(data.phone?.trim()) || Boolean(data.email?.trim()), {
    message: "Podaj telefon lub adres e-mail.",
    path: ["phone"],
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const VOIVODESHIP_LABELS: Record<
  ContactFormValues["voivodeship"],
  string
> = {
  "warminsko-mazurskie": "warmińsko-mazurskie",
  podlaskie: "podlaskie",
  inne: "inne",
};
