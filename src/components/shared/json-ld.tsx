/**
 * Wstrzykuje strukturalne dane JSON-LD do <head>/<body> jako <script type="application/ld+json">.
 * Server Component — dane budowane są przez helpery z @/lib/seo.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Dane pochodzą wyłącznie z naszej konfiguracji (nie z inputu użytkownika).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
