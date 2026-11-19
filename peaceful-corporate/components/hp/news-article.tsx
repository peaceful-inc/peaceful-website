import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import type { NewsItem } from "@/lib/news-data"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import PhraseBreaks from "@/components/hp/phrase-breaks"
import "@/components/hp/css/news-article.css"

const gold = { borderColor: "var(--pf-gold)" }

export default function NewsArticlePage({ lang, item }: { lang: Lang; item: NewsItem }) {
  const ja = lang === "ja"
  const back = localizePath(lang, "/news")
  const backLabel = ja ? "ニュース一覧へ" : "Back to News"
  return (
    <HpPage page="news-article">
      <div className="in">
        <SiteHeader lang={lang} current="news" />

        <section aria-label={ja ? "お知らせ" : "News"} className="head end">
          <Link href={back} className="back" style={gold}>
            {backLabel}
          </Link>
          <p className="art-d">
            <time dateTime={item.date.replace(/\./g, "-")}>{item.date}</time>
          </p>
          {ja ? (
            <h1 className="art-t" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
              <PhraseBreaks text={item.title} />
            </h1>
          ) : (
            <h1 className="art-t">{item.titleEn}</h1>
          )}
          {ja && (
            <p className="ttl-e" lang="en">
              {item.titleEn}
            </p>
          )}
          <div className="art-b" dangerouslySetInnerHTML={{ __html: ja ? item.content : item.contentEn }} />
          <Link href={back} className="more" style={gold}>
            {backLabel}
          </Link>
        </section>

        <Band src="/images/hp/band-news-article-1.svg" />
        <SiteFooter lang={lang} />
      </div>
    </HpPage>
  )
}
