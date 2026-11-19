import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import JsonLd from "@/components/json-ld"
import NurvisPage from "@/components/hp/product"
import { productFaqJsonLd } from "@/components/hp/product-faq"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/product",
  title: "NURVIS | AI Agent for Nurses | peaceful",
  description:
    "NURVIS is a wearable AI agent system for nurses. You can leave it to check nursing procedures or to prepare meeting minutes. A feature that plans the day's work is in development.",
})

export default function ProductPageEn() {
  return (
    <>
      <JsonLd data={productFaqJsonLd("en")} />
      <NurvisPage lang="en" />
    </>
  )
}
