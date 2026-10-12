import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import NewsContent from "@/components/news-content"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/news",
  title: "News | peaceful",
  description: "News from peaceful Inc.",
})

export default function NewsPageEn() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <NewsContent />
    </main>
  )
}
