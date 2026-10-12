import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NewsSection from "@/components/news-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/",
  title: "株式会社peaceful｜看護師向けAIエージェント「NURVIS」",
  description:
    "株式会社peacefulは、ウェアラブルデバイスによる看護師向けAIエージェントシステム「NURVIS」を開発しています。NURVISは、看護師がケアをしながら話した内容を看護記録の文章に整え、看護手順や薬剤情報をその場で確かめられるようにします。",
  llmsLink: true,
})

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <JsonLd data={[organizationJsonLd("ja"), websiteJsonLd]} />
      <ParticleBackground />
      <Header />
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
