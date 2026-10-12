import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import ResearchContent from "@/components/research-content"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/research",
  title: "Research | peaceful",
  description:
    "peaceful's research on collecting and structuring egocentric (first-person) video data from nurses.",
})

export default function ResearchPageEn() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <ResearchContent />
    </main>
  )
}
