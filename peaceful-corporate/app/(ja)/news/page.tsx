import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import NewsContent from "@/components/news-content"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/news",
  title: "ニュース一覧｜peaceful",
  description: "株式会社peacefulのニュースの一覧です。",
})

export default function NewsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <NewsContent />
    </main>
  )
}
