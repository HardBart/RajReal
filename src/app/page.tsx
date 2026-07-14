import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Process } from "@/components/sections/process";
import { SharesSpecialization } from "@/components/sections/shares-specialization";
import { CommonProblems } from "@/components/sections/common-problems";
import { PropertyTypes } from "@/components/sections/property-types";
import { ServiceArea } from "@/components/sections/service-area";
import { Faq, FAQ_ITEMS } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CoverageMap } from "@/components/sections/coverage-map";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/config/site";
import { absoluteUrl, faqJsonLd, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), faqJsonLd(FAQ_ITEMS)]} />
      <Hero />
      <Trust />
      <Process />
      <SharesSpecialization />
      <CommonProblems />
      <PropertyTypes />
      <ServiceArea />
      <Faq />
      <ContactSection />
      <CoverageMap />
    </>
  );
}
