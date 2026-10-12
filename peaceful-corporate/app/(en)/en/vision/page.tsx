import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import VisionContent from "@/components/vision-content"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/vision",
  title: "Vision | peaceful",
  description:
    "peaceful's vision: supporting nursing on the front line, preserving nursing knowledge, and changing how care is delivered through the GIGA-HOSPITAL concept.",
})

export default function VisionPageEn() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <VisionContent />
    </main>
  )
}
