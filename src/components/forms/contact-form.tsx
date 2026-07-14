"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormFieldWrapper } from "@/components/forms/form-field-wrapper";
import { YesNoSelect } from "@/components/forms/yes-no-select";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { LEGAL_NAME, NIP } from "@/config/site";

const defaultValues: Partial<ContactFormValues> = {
  rodoConsent: undefined,
  marketingConsent: false,
  website: "",
};

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-5">
      <legend className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
        {title}
      </legend>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const propertyType = watch("propertyType");
  const isIndebted = watch("isIndebted");

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send-failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="text-xl font-medium text-foreground">
          Dziękujemy za zgłoszenie
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Odezwiemy się najszybciej, jak to możliwe, na podany kontakt.
          Dokumenty dotyczące nieruchomości wymienimy w kolejnym kroku,
          bezpiecznym kanałem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Strona WWW</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <FormSection title="Co sprzedajesz">
        <Controller
          control={control}
          name="salesType"
          render={({ field }) => (
            <FormFieldWrapper label="Sprzedajesz całość czy udział?" htmlFor="salesType">
              <Select
                value={field.value ?? ""}
                onValueChange={field.onChange}
                items={{ calosc: "Całe mieszkanie / dom", udzial: "Udział" }}
              >
                <SelectTrigger id="salesType" className="w-full">
                  <SelectValue placeholder="Wybierz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="calosc">Całe mieszkanie / dom</SelectItem>
                  <SelectItem value="udzial">Udział</SelectItem>
                </SelectContent>
              </Select>
            </FormFieldWrapper>
          )}
        />
        <Controller
          control={control}
          name="propertyType"
          render={({ field }) => (
            <FormFieldWrapper label="Rodzaj nieruchomości" htmlFor="propertyType">
              <Select
                value={field.value ?? ""}
                onValueChange={field.onChange}
                items={{
                  mieszkanie: "Mieszkanie",
                  dom: "Dom",
                  udzial: "Udział",
                  inne: "Inne",
                }}
              >
                <SelectTrigger id="propertyType" className="w-full">
                  <SelectValue placeholder="Wybierz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mieszkanie">Mieszkanie</SelectItem>
                  <SelectItem value="dom">Dom</SelectItem>
                  <SelectItem value="udzial">Udział</SelectItem>
                  <SelectItem value="inne">Inne</SelectItem>
                </SelectContent>
              </Select>
            </FormFieldWrapper>
          )}
        />
      </FormSection>

      <FormSection title="Lokalizacja">
        <Controller
          control={control}
          name="voivodeship"
          render={({ field, fieldState }) => (
            <FormFieldWrapper
              label="Województwo"
              htmlFor="voivodeship"
              optional={false}
              error={fieldState.error?.message}
            >
              <Select
                value={field.value ?? ""}
                onValueChange={field.onChange}
                items={{
                  "warminsko-mazurskie": "warmińsko-mazurskie",
                  podlaskie: "podlaskie",
                  inne: "inne",
                }}
              >
                <SelectTrigger id="voivodeship" className="w-full" aria-invalid={!!fieldState.error}>
                  <SelectValue placeholder="Wybierz województwo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warminsko-mazurskie">warmińsko-mazurskie</SelectItem>
                  <SelectItem value="podlaskie">podlaskie</SelectItem>
                  <SelectItem value="inne">inne</SelectItem>
                </SelectContent>
              </Select>
            </FormFieldWrapper>
          )}
        />
        <FormFieldWrapper label="Miejscowość" htmlFor="city">
          <Input id="city" {...register("city")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Ulica" htmlFor="street">
          <Input id="street" {...register("street")} />
        </FormFieldWrapper>
      </FormSection>

      <FormSection title="Nieruchomość">
        <FormFieldWrapper label="Powierzchnia (m²)" htmlFor="area">
          <Input id="area" inputMode="decimal" {...register("area")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Liczba pokoi" htmlFor="rooms">
          <Input id="rooms" inputMode="numeric" {...register("rooms")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Piętro" htmlFor="floor">
          <Input id="floor" {...register("floor")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Liczba pięter w budynku" htmlFor="totalFloors">
          <Input id="totalFloors" {...register("totalFloors")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Rok budowy" htmlFor="yearBuilt">
          <Input id="yearBuilt" inputMode="numeric" {...register("yearBuilt")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Ogrzewanie" htmlFor="heating">
          <Input id="heating" placeholder="np. miejskie, gazowe" {...register("heating")} />
        </FormFieldWrapper>
        <FormFieldWrapper label="Okna" htmlFor="windows">
          <Input id="windows" placeholder="np. plastikowe, drewniane" {...register("windows")} />
        </FormFieldWrapper>
        <YesNoSelect control={control} name="balcony" label="Balkon" />
        <YesNoSelect control={control} name="elevator" label="Winda" />
        <FormFieldWrapper label="Stan mieszkania" htmlFor="condition">
          <Input id="condition" placeholder="np. do remontu, dobry" {...register("condition")} />
        </FormFieldWrapper>
        <YesNoSelect control={control} name="insulatedBuilding" label="Budynek ocieplony?" />
        <FormFieldWrapper label="Czynsz (msc)" htmlFor="rent">
          <Input id="rent" inputMode="decimal" {...register("rent")} />
        </FormFieldWrapper>
      </FormSection>

      <FormSection title="Sytuacja prawna">
        <FormFieldWrapper label="Liczba współwłaścicieli" htmlFor="coOwnersCount">
          <Input id="coOwnersCount" inputMode="numeric" {...register("coOwnersCount")} />
        </FormFieldWrapper>
        {propertyType === "udzial" && (
          <FormFieldWrapper label="Wielkość udziału (np. 1/2)" htmlFor="shareSize">
            <Input id="shareSize" placeholder="np. 1/4" {...register("shareSize")} />
          </FormFieldWrapper>
        )}
        <YesNoSelect
          control={control}
          name="coOwnerConflict"
          label="Czy jest konflikt między współwłaścicielami?"
        />
        <YesNoSelect control={control} name="isInheritance" label="Nieruchomość spadkowa?" />
        <YesNoSelect
          control={control}
          name="inheritanceDecision"
          label="Postanowienie o nabyciu spadku / akt poświadczenia dziedziczenia?"
          options={[
            { value: "tak", label: "Tak" },
            { value: "nie", label: "Nie" },
            { value: "w-toku", label: "W toku" },
          ]}
        />
        <YesNoSelect control={control} name="isIndebted" label="Nieruchomość zadłużona?" />
        {isIndebted === "tak" && (
          <FormFieldWrapper label="Kwota zadłużenia" htmlFor="debtAmount">
            <Input id="debtAmount" inputMode="decimal" {...register("debtAmount")} />
          </FormFieldWrapper>
        )}
        <YesNoSelect
          control={control}
          name="listedOnline"
          label="Czy mieszkanie jest wystawione w internecie?"
        />
        <FormFieldWrapper label="Numer księgi wieczystej" htmlFor="landRegistryNumber">
          <Input id="landRegistryNumber" {...register("landRegistryNumber")} />
        </FormFieldWrapper>
      </FormSection>

      <FormSection title="Termin">
        <FormFieldWrapper
          label="Jak szybko chcesz sprzedać nieruchomość?"
          htmlFor="timeline"
          className="sm:col-span-2"
        >
          <Input id="timeline" placeholder="np. w ciągu miesiąca, nie spieszy mi się" {...register("timeline")} />
        </FormFieldWrapper>
      </FormSection>

      <FormSection title="Kontakt">
        <FormFieldWrapper label="Imię" htmlFor="firstName">
          <Input id="firstName" {...register("firstName")} />
        </FormFieldWrapper>
        <FormFieldWrapper
          label="Preferowana forma i godziny kontaktu"
          htmlFor="contactPreference"
        >
          <Input
            id="contactPreference"
            placeholder="np. telefon po 17:00"
            {...register("contactPreference")}
          />
        </FormFieldWrapper>
        <FormFieldWrapper
          label="Telefon"
          htmlFor="phone"
          optional={false}
          error={errors.phone?.message}
        >
          <Input id="phone" type="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </FormFieldWrapper>
        <FormFieldWrapper
          label="E-mail"
          htmlFor="email"
          optional={false}
          error={errors.email?.message}
        >
          <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
        </FormFieldWrapper>
        <FormFieldWrapper
          label="Wiadomość / opisz swoją sytuację"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <Textarea id="message" rows={5} {...register("message")} />
        </FormFieldWrapper>
      </FormSection>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Administratorem danych osobowych podanych w formularzu jest{" "}
        {LEGAL_NAME} (NIP: {NIP}). Dane będą przetwarzane wyłącznie w celu kontaktu i
        przygotowania propozycji dotyczącej nieruchomości, na podstawie art.
        6 ust. 1 lit. a i b RODO. Podanie danych jest dobrowolne, ale
        niezbędne do udzielenia odpowiedzi. Przysługuje Ci prawo dostępu do
        danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz
        wniesienia sprzeciwu. Szczegóły w{" "}
        <a href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-primary">
          Polityce prywatności
        </a>
        .
      </p>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Controller
            control={control}
            name="rodoConsent"
            render={({ field }) => (
              <Checkbox
                id="rodoConsent"
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-invalid={!!errors.rodoConsent}
              />
            )}
          />
          <label htmlFor="rodoConsent" className="text-sm leading-relaxed text-foreground/85">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            kontaktu w sprawie mojego zgłoszenia, zgodnie z art. 13 RODO.
            <span className="ml-1 text-destructive">*</span>
          </label>
        </div>
        {errors.rodoConsent && (
          <p className="text-xs text-destructive">{errors.rodoConsent.message}</p>
        )}

        <div className="flex items-start gap-3">
          <Controller
            control={control}
            name="marketingConsent"
            render={({ field }) => (
              <Checkbox
                id="marketingConsent"
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
            )}
          />
          <label htmlFor="marketingConsent" className="text-sm leading-relaxed text-muted-foreground">
            Wyrażam zgodę na otrzymywanie informacji marketingowych drogą
            elektroniczną (opcjonalnie).
          </label>
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          Nie udało się wysłać formularza. Spróbuj ponownie lub skontaktuj się
          telefonicznie.
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 w-full px-8 text-base sm:w-auto">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        Wyślij zgłoszenie
      </Button>
    </form>
  );
}
