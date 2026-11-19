import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import Vision from "@/components/hp/vision"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/vision",
  title: "Vision | peaceful",
  description:
    "peaceful's vision: supporting nursing on the front line, preserving nursing knowledge, and changing how care is delivered through the GIGA-HOSPITAL concept.",
})

export default function VisionPageEn() {
  return <Vision lang="en" />
}
