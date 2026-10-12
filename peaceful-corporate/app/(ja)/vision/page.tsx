import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import VisionContent from "@/components/vision-content"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/vision",
  title: "Vision｜peaceful",
  description:
    "株式会社peacefulのビジョン。看護の現場を支え、看護の知見を残し、医療の届け方を変える取り組みと、GIGA-HOSPITAL構想を紹介します。",
})

export default function VisionPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <VisionContent />
    </main>
  )
}
