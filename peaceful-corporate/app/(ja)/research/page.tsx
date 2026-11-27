import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Research from "@/components/hp/research"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/research",
  title: "研究｜peaceful",
  description:
    "看護師の一人称視点（エゴセントリック）動画データの収集と構造化に関する、peacefulの研究の取り組みを紹介します。",
})

export default function ResearchPage() {
  return <Research lang="ja" />
}
