import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata } from "@/lib/seo"
import Company from "@/components/hp/company"

export const metadata: Metadata = pageMetadata({
  lang: "ja",
  path: "/company",
  title: "会社情報｜peaceful",
  description:
    "株式会社peacefulの会社概要、代表の経歴、これまでの歩み。",
})

export default function CompanyPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd("ja")} />
      <Company lang="ja" />
    </>
  )
}
