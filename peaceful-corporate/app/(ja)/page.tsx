import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo"
import TopPage from "@/components/hp/top"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/",
  title: "株式会社peaceful｜看護師向けAIエージェント「NURVIS」",
  description:
    "株式会社peacefulは、ウェアラブルデバイスによる看護師向けAIエージェントシステム「NURVIS」を開発しています。NURVISは、看護の仕事を包括的に支える、看護師のパートナーです。",
  llmsLink: true,
})

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationJsonLd("ja"), websiteJsonLd]} />
      <TopPage lang="ja" />
    </>
  )
}
