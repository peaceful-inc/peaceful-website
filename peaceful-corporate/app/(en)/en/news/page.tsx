import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import NewsList from "@/components/hp/news-list"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/news",
  title: "News | peaceful",
  description: "News from peaceful Inc.",
})

export default function NewsPageEn() {
  return <NewsList lang="en" />
}
