import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import { newsData } from "@/lib/news-data"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import "@/components/hp/css/news.css"

export default function NewsListPage({ lang }: { lang: Lang }) {
  const ja = lang === "ja"
  return (
    <HpPage page="news">
      <div className="in">
        <SiteHeader lang={lang} current="news" />

        <section aria-label={ja ? "ニュース" : "News"} className="head">
          <h1 className="ttl">{ja ? "ニュース" : "News"}</h1>
          {ja && (
            <p className="ttl-e" lang="en">
              News
            </p>
          )}
        </section>

        <section aria-label={ja ? "ニュースの一覧" : "News list"} className="sec end" style={{ paddingTop: "clamp(56px,6.944vw,100px)" }}>
          <div className="rows nw">
            {newsData.map((item) => (
              <Link key={item.id} href={localizePath(lang, `/news/${item.id}`)} className="r2">
                <span className="k">{item.date}</span>
                <span className="v">{ja ? item.title : item.titleEn}</span>
              </Link>
            ))}
          </div>
        </section>

        <Band src="/images/hp/band-news-1.svg" />
        <SiteFooter lang={lang} />
      </div>
    </HpPage>
  )
}
