import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import ProductContent from "@/components/product-content"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/product",
  title: "NURVIS | AI Agent for Nurses | peaceful",
  description:
    "NURVIS is an AI agent for nurses, worn through a bone-conduction earphone and a smartphone. It turns what nurses say into nursing-record text and lets them check procedures and drug information on the spot.",
})

export default function ProductPageEn() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <ProductContent />
    </main>
  )
}
