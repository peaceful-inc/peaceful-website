import type { Metadata } from "next"

export const SITE_URL = "https://www.peaceful-inc.com"

export type Lang = "ja" | "en"

// 日本語のパス（"/", "/vision" など）から、言語ごとのパスを作る
export const localizePath = (lang: Lang, path: string): string => {
  if (lang === "ja") return path
  return path === "/" ? "/en" : `/en${path}`
}

interface PageMetadataOptions {
  lang: Lang
  // 日本語のパス。英語のパスは /en を付けて作る
  path: string
  title: string
  description: string
  // 英語ページが無いページは false（hreflang に英語を付けない）
  hasEnglish?: boolean
  // トップだけ、llms.txt への <link rel="alternate"> を入れる
  llmsLink?: boolean
}

export const pageMetadata = ({
  lang,
  path,
  title,
  description,
  hasEnglish = true,
  llmsLink = false,
}: PageMetadataOptions): Metadata => {
  const alternates: Metadata["alternates"] = {
    canonical: localizePath(lang, path),
  }
  if (llmsLink) {
    alternates.types = { "text/plain": [{ url: "/llms.txt", title: "llms.txt" }] }
  }
  if (hasEnglish) {
    alternates.languages = {
      ja: path,
      en: localizePath("en", path),
      "x-default": path,
    }
  }
  const canonicalUrl = `${SITE_URL}${localizePath(lang, path)}`
  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "peaceful" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  }
}

// ニュース本文（HTML）の冒頭を、説明文用の文字だけにして取り出す
export const plainTextSummary = (html: string, maxLength = 120): string => {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&copy;/g, "©")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const FOUNDER_ID = `${SITE_URL}/company#founder`

const organizationDescription = {
  ja: "株式会社peacefulは、ウェアラブルデバイスによる看護師向けAIエージェントシステム「NURVIS」を開発しています。NURVISは、看護師がケアをしながら話した内容を看護記録の文章に整え、看護手順や薬剤情報をその場で確かめられるようにします。",
  en: "peaceful Inc. develops NURVIS, a wearable AI agent system for nurses. It drafts nursing records from what nurses say during care and lets them check procedures and drug information on the spot.",
}

// 会社ページに出している住所と同じ内容
const address = {
  ja: {
    "@type": "PostalAddress",
    postalCode: "140-0002",
    addressRegion: "東京都",
    addressLocality: "品川区",
    streetAddress: "東品川2-6-4 寺田倉庫G1ビル 2階",
    addressCountry: "JP",
  },
  en: {
    "@type": "PostalAddress",
    postalCode: "140-0002",
    addressRegion: "Tokyo",
    addressLocality: "Shinagawa-ku",
    streetAddress: "Warehouse TERRADA G1 Bldg. 2F, 2-6-4 Higashi-Shinagawa",
    addressCountry: "JP",
  },
}

export const organizationJsonLd = (lang: Lang) => ({
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "peaceful",
  legalName: "株式会社peaceful",
  alternateName: "peaceful Inc.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  description: organizationDescription[lang],
  address: address[lang],
  iso6523Code: "0188:7011601029057",
  foundingDate: "2025-10-01",
  founder: {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: lang === "ja" ? "陣之内 将成" : "Masanari Jinnouchi",
    ...(lang === "ja" ? { alternateName: "Masanari Jinnouchi" } : {}),
    jobTitle:
      lang === "ja"
        ? "代表取締役／看護師"
        : "Representative Director & CEO / Registered Nurse",
    url: `${SITE_URL}/company`,
  },
  brand: {
    "@type": "Brand",
    name: "NURVIS",
    description: "ウェアラブルデバイスによる看護師向けAIエージェントシステム",
    url: `${SITE_URL}/product`,
  },
})

export const websiteJsonLd = {
  "@type": "WebSite",
  name: "peaceful",
  alternateName: "株式会社peaceful",
  url: `${SITE_URL}/`,
  publisher: { "@id": ORGANIZATION_ID },
}

export const newsArticleJsonLd = (
  lang: Lang,
  item: { id: string; title: string; titleEn: string; date: string },
) => ({
  "@type": "NewsArticle",
  headline: lang === "ja" ? item.title : item.titleEn,
  datePublished: item.date.replaceAll(".", "-"),
  mainEntityOfPage: `${SITE_URL}${localizePath(lang, `/news/${item.id}`)}`,
  author: organizationJsonLd(lang),
  publisher: organizationJsonLd(lang),
})
