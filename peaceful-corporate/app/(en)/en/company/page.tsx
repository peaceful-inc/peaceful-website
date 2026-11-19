import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import { organizationJsonLd, pageMetadata } from "@/lib/seo"
import Company from "@/components/hp/company"

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/company",
  title: "Company | peaceful",
  description:
    "Company information for peaceful Inc.: our founder, team, company profile, and recognition.",
})

export default function CompanyPageEn() {
  return (
    <>
      <JsonLd data={organizationJsonLd("en")} />
      <Company lang="en" />
    </>
  )
}
