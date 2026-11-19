import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import JsonLd from "@/components/json-ld"
import NurvisPage from "@/components/hp/product"
import { productFaqJsonLd } from "@/components/hp/product-faq"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/product",
  title: "NURVIS｜看護師向けAIエージェント｜peaceful",
  description:
    "NURVISは、ウェアラブルデバイスによる看護師向けAIエージェントシステムです。看護手順の確認や、会議の議事録づくりを任せられます。その日の段取りを組む機能は、開発中です。",
})

export default function ProductPage() {
  return (
    <>
      <JsonLd data={productFaqJsonLd("ja")} />
      <NurvisPage lang="ja" />
    </>
  )
}
