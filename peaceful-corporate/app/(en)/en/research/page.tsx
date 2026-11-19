import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Research from "@/components/hp/research"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/research",
  title: "Research | peaceful",
  description:
    "peaceful's research on collecting and structuring egocentric (first-person) video data from nurses.",
})

export default function ResearchPageEn() {
  return <Research lang="en" />
}
