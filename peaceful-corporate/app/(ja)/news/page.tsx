import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import NewsList from "@/components/hp/news-list"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/news",
  title: "ニュース一覧｜peaceful",
  description: "株式会社peacefulのニュースの一覧です。",
})

export default function NewsPage() {
  return <NewsList lang="ja" />
}
