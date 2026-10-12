import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import CompanyContent from "@/components/company-content"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/company",
  title: "会社情報｜peaceful",
  description:
    "株式会社peacefulの会社情報。代表、チーム、会社概要、採択・参画の実績を掲載しています。",
})

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <JsonLd data={organizationJsonLd("ja")} />
      <ParticleBackground />
      <Header />
      <CompanyContent />
    </main>
  )
}
