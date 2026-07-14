import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/config/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Domyślny obraz Open Graph dla całej witryny (statycznie generowany przy buildzie).
 * Kolorystyka zgodna z design systemem: grafit, ciemna zieleń, złote akcenty.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #14251d 0%, #1f3a2c 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#c9a24b",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 600, color: "#ffffff" }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            Skup udziałów i nieruchomości
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 32,
              color: "#c9a24b",
              fontWeight: 500,
            }}
          >
            <div style={{ width: 48, height: 3, background: "#c9a24b" }} />
            Warmia · Mazury · Podlasie
          </div>
        </div>

        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          Transparentny proces · Warmia, Mazury i Podlasie
        </div>
      </div>
    ),
    { ...size },
  );
}
