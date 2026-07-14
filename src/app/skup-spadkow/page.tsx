import type { Metadata } from "next";
import { LandingView } from "@/components/sections/landing-view";
import { LANDINGS } from "@/data/landings";
import { buildMetadata } from "@/lib/seo";

const data = LANDINGS["skup-spadkow"];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/${data.slug}`,
});

export default function SkupSpadkowPage() {
  return <LandingView data={data} />;
}
