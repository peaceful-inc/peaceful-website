import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import SecH from "@/components/hp/sec-h"
import "@/components/hp/css/research.css"

const gold = { borderColor: "var(--pf-gold)" }

export default function ResearchPage({ lang }: { lang: Lang }) {
  const ja = lang === "ja"
  const p = (path: string) => localizePath(lang, path)
  return (
    <HpPage page="research">
      <div className="in">
        <SiteHeader lang={lang} current="research" />

        <section aria-label={ja ? "研究" : "Our Research"} className="head">
          <h1 className="ttl">{ja ? "研究" : "Our Research"}</h1>
          {ja && (
            <p className="ttl-e" lang="en">
              Our Research
            </p>
          )}
          <p className="sub">{ja ? "エゴセントリック看護データの収集と構造化" : "Collecting and structuring egocentric nursing data"}</p>
          <p className="lead-p">
            {ja
              ? "peacefulは、2026年9月から、看護師の一人称視点（エゴセントリック）動画データの収集と構造化に取り組んでいます。物理世界で認識・判断・行動するAI（フィジカルAI）の学習には、人がどう観て、判断し、動いたかを記録したデータが必要です。一方、看護の領域では患者のプライバシーを守る観点から実際の現場を撮影することが難しく、質の高いデータが世界的に不足しています。"
              : "Since September 2026, peaceful has been collecting and structuring egocentric (first-person) video data from nurses. Training AI that perceives, decides, and acts in the physical world (physical AI) requires data that records how people observe, judge, and move. In nursing, however, filming real clinical settings is difficult because of patient privacy, and high-quality data is scarce worldwide."}
          </p>
        </section>
        <Band src="/images/hp/band-research-1.svg" className="bh" />

        <section aria-label={ja ? "進め方" : "How We Work"} className="sec">
          <SecH h={ja ? "進め方" : "How We Work"} e="How We Work" ja={ja} />
          <div className="lst">
            {ja ? (
              <>
                <p>この取り組みでは、実際の患者さんを撮影するのではなく、看護師資格を持つ自社メンバーが模擬環境で看護ケアを実演し、その視点の映像を記録します。</p>
                <p>映像だけでなく、何を観察し、どう判断したかを本人が言語化し、構造化データとして整えます。</p>
              </>
            ) : (
              <>
                <p>In this initiative, rather than filming real patients, our own staff members who are licensed nurses demonstrate nursing care in a simulated environment, and we record video from their point of view.</p>
                <p>Beyond the video itself, the nurses describe in their own words what they observed and how they made their decisions, and we organize this into structured data.</p>
              </>
            )}
          </div>
        </section>

        <section aria-label={ja ? "NURVISとの関係" : "Relation to NURVIS"} className="sec">
          <SecH h={ja ? "NURVISとの関係" : "Relation to NURVIS"} e="Relation to NURVIS" ja={ja} />
          <p className="body-p">
            {ja ? "この研究は、NURVISの開発と並行して進めている取り組みです。" : "This research is an effort we pursue alongside the development of NURVIS."}
          </p>
          <Link href={p("/product")} className="more" style={gold}>
            {ja ? "NURVISについて" : "About NURVIS"}
          </Link>
        </section>

        <section aria-label={ja ? "目指すこと" : "Our Aim"} className="sec end">
          <SecH h={ja ? "目指すこと" : "Our Aim"} e="Our Aim" ja={ja} />
          <p className="body-p">
            {ja
              ? "日本の看護実践に蓄積された暗黙知を、AIが学べるデータとして残し、次の時代の医療の基盤づくりにつなげます。"
              : "We aim to preserve the tacit knowledge built up in Japanese nursing practice as data that AI can learn from, and to help lay the foundation for the next era of healthcare."}
          </p>
          <Link href={p("/news/13")} className="more" style={gold}>
            {ja ? "お知らせを読む" : "Read the news"}
          </Link>
        </section>

        <Band src="/images/hp/band-research-2.svg" />
        <SiteFooter lang={lang} />
      </div>
    </HpPage>
  )
}
