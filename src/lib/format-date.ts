const FORMATTER = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Formatuje datę ISO na czytelny polski zapis, np. „1 lipca 2026". */
export function formatDatePl(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return FORMATTER.format(d);
}
