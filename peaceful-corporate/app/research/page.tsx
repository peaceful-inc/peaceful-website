import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import ResearchContent from "@/components/research-content"

export const metadata: Metadata = {
  title: "研究｜peaceful",
  description:
    "看護師の一人称視点（エゴセントリック）動画データの収集と構造化に関する、peacefulの研究の取り組みを紹介します。",
}

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <ResearchContent />
    </main>
  )
}
