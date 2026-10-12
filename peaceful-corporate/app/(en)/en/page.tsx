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
  lang: "en",
  path: "/",
  title: "peaceful Inc. | NURVIS, an AI agent for nurses",
  description:
    "peaceful Inc. develops NURVIS, a wearable AI agent system for nurses. It drafts nursing records from what nurses say during care and lets them check procedures and drug information on the spot.",
  llmsLink: true,
})

export default function HomeEn() {
  return (
    <main className="relative min-h-screen bg-background">
      <JsonLd data={[organizationJsonLd("en"), websiteJsonLd]} />
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
