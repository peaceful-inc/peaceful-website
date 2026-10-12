import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import CompanyContent from "@/components/company-content"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/company",
  title: "Company | peaceful",
  description:
    "Company information for peaceful Inc.: our founder, team, company profile, and recognition.",
})

export default function CompanyPageEn() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <JsonLd data={organizationJsonLd("en")} />
      <ParticleBackground />
      <Header />
      <CompanyContent />
    </main>
  )
}
