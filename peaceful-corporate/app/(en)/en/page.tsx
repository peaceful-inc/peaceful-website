import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo"
import TopPage from "@/components/hp/top"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/",
  title: "peaceful Inc. | NURVIS, an AI agent for nurses",
  description:
    "peaceful Inc. develops NURVIS, a wearable AI agent system for nurses. NURVIS is a partner for nurses that supports their work comprehensively.",
  llmsLink: true,
})

export default function HomeEn() {
  return (
    <>
      <JsonLd data={[organizationJsonLd("en"), websiteJsonLd]} />
      <TopPage lang="en" />
    </>
  )
}
