import type { Metadata } from "next"
import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import ProductContent from "@/components/product-content"

export const metadata: Metadata = {
  title: "NURVIS｜看護師向けAIエージェント｜peaceful",
  description:
    "骨伝導イヤホンとスマートフォンで身につける看護師向けAIエージェントNURVIS。話した内容を看護記録の文章に整え、看護手順や薬剤情報をその場で確認できます。",
}

export default function ProductPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <ProductContent />
    </main>
  )
}
