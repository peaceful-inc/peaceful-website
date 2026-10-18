import type { MetadataRoute } from "next"
import { newsData } from "@/lib/news-data"
import { SITE_URL, localizePath } from "@/lib/seo"

// 日英の両方がある公開ページ。/giga-hospital（転送）と /mj（noindex）は入れない
const bilingualPaths = ["/", "/vision", "/product", "/research", "/company", "/news"]

const entry = (path: string): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path === "/" ? "/" : path}`,
  alternates: {
    languages: {
      ja: `${SITE_URL}${localizePath("ja", path)}`,
      en: `${SITE_URL}${localizePath("en", path)}`,
    },
  },
})

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...bilingualPaths, ...newsData.map((item) => `/news/${item.id}`)]
  const entries: MetadataRoute.Sitemap = []

  for (const path of paths) {
    const base = entry(path)
    entries.push(base)
    entries.push({ ...base, url: `${SITE_URL}${localizePath("en", path)}` })
  }

  // 英語ページが無い公開ページ
  entries.push({ url: `${SITE_URL}/nurvis/privacy` })
  entries.push({ url: `${SITE_URL}/security-policy` })

  return entries
}
