import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import LeadReveal from "@/components/hp/lead-reveal"
import ProductFigure from "@/components/hp/product-figure"
import NurvisYomi from "@/components/hp/nurvis-yomi"
import "@/components/hp/css/top.css"

const gold = { borderColor: "var(--pf-gold)" }

export default function TopPage({ lang }: { lang: Lang }) {
  const ja = lang === "ja"
  const p = (path: string) => localizePath(lang, path)
  return (
    <HpPage page="top">
      <div className="in">
        <SiteHeader lang={lang} />
      </div>

      <section aria-label={ja ? "はじめの場面" : "Opening"} className="hero">
        <div className="media">
          <img className="lyr h-bg" src="/images/hero/hero-bg.jpg" alt="" />
          <img
            className="lyr h-fg"
            src="/images/hero/hero-fg.webp"
            alt={ja ? "骨伝導イヤホンを着けて患者さんと話す看護師" : "A nurse wearing a bone-conduction earphone, talking with a patient"}
          />
          <p className="pill">{ja ? "イメージ映像" : "Image footage"}</p>
        </div>
        <div className="card">
          <p className="card-w">
            <NurvisYomi ja={ja} />
          </p>
          <div className="card-r" aria-hidden="true" style={{ background: "var(--pf-gold)" }}></div>
          {ja ? (
            <>
              <p className="card-d">
                看護師が身につける
                <br />
                AIエージェント
              </p>
              <p className="card-e" lang="en">
                A wearable AI agent system for nurses
              </p>
            </>
          ) : (
            <p className="card-d">
              A wearable AI agent
              <br />
              system for nurses
            </p>
          )}
        </div>
      </section>

      <div className="in">
        <LeadReveal label={ja ? "ことば" : "Message"}>
          {ja ? (
            <h1>
              <span className="ln">その手の温もり、</span>
              <span className="ln">語りかける声。</span>
              <span className="ln">我々の葛藤のすべてが、</span>
              <span className="ln">次世代への礎となる。</span>
            </h1>
          ) : (
            <h1>
              <span className="ln">The warmth of a hand,</span>
              <span className="ln">the sound of a voice.</span>
              <span className="ln">Our struggles today lay the foundation</span>
              <span className="ln">for the next generation.</span>
            </h1>
          )}
          <p className="mission">
            {ja ? "AIとロボティクスで、持続可能な医療インフラを再構築する。" : "Reconstructing sustainable healthcare infrastructure with AI & Robotics."}
          </p>
        </LeadReveal>
      </div>

      <section aria-label={ja ? "NURVISの仕組み" : "NURVIS"} className="sp">
        <div className="in sp-in">
          <ProductFigure lang={lang} page="top" />
          <div className="plate">
            <h2>NURVIS</h2>
            <div className="pl-t">
              {ja ? (
                <>
                  <p>
                    骨伝導イヤホンと<wbr />スマートフォンで<wbr />身につける、<wbr />看護師向けの<wbr />AIエージェントです。
                  </p>
                  <p className="pl-e" lang="en">
                    NURVIS is an AI agent that nurses wear through a bone-conduction earphone and a smartphone.
                  </p>
                </>
              ) : (
                <p>NURVIS is an AI agent that nurses wear through a bone-conduction earphone and a smartphone.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="in">
        <section aria-label={ja ? "つくっている場所" : "Who builds NURVIS"} className="s2">
          {ja ? (
            <h2 className="s2-h">
              現場を<wbr />経験した<wbr />看護師が<wbr />作る
            </h2>
          ) : (
            <h2 className="s2-h">Built by nurses who know the front line</h2>
          )}
          <div className="s2-t">
            {ja ? (
              <p>
                NURVISは、<wbr />ウェアラブル<wbr />デバイスによる<wbr />看護師向け<wbr />AIエージェント<wbr />システムです。<wbr />看護の<wbr />仕事を<wbr />包括的に<wbr />支える、<wbr />看護師の<wbr />パートナーです。
              </p>
            ) : (
              <p>NURVIS is a wearable AI agent system for nurses. It is a partner for nurses that supports their work comprehensively.</p>
            )}
            <Link href={p("/product")} className="more" style={gold}>
              {ja ? "NURVISについて" : "About NURVIS"}
            </Link>
          </div>
        </section>

        <Band src="/images/hp/band-top-1.svg" />
        <section aria-label={ja ? "これまでの事実" : "Milestones"} className="facts">
          <div className="fact">
            <p className="d">2026.08</p>
            <p className="t">{ja ? "洛和会丸太町病院で実証を開始" : "Began a pilot at Rakuwakai Marutamachi Hospital"}</p>
          </div>
          <div className="fact">
            <p className="d">2026.08</p>
            <p className="t">{ja ? "NVIDIA Inception Programに採択" : "Selected for the NVIDIA Inception Program"}</p>
          </div>
        </section>

        <section aria-label={ja ? "くわしく" : "More"} className="idx">
          {(ja
            ? [
                { href: "/product", n: "NURVIS", s: "看護師向けAIエージェント", e: "A wearable AI agent system for nurses" },
                { href: "/research", n: "研究", s: "エゴセントリック看護データの収集と構造化", e: "Collecting and structuring egocentric nursing data" },
                { href: "/company", n: "会社情報", s: "株式会社peaceful", e: "peaceful inc." },
              ]
            : [
                { href: "/product", n: "NURVIS", s: "A wearable AI agent system for nurses" },
                { href: "/research", n: "Research", s: "Collecting and structuring egocentric nursing data" },
                { href: "/company", n: "Company", s: "peaceful Inc." },
              ]
          ).map((row: { href: string; n: string; s: string; e?: string }) => (
            <Link key={row.href} href={p(row.href)} className="row">
              <span className="n">{row.n === "NURVIS" ? <NurvisYomi ja={ja} /> : row.n}</span>
              <span className="s">
                <span>{row.s}</span>
                {row.e && (
                  <span className="e" lang="en">
                    {row.e}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </section>

        <Band src="/images/hp/band-top-2.svg" />
        <SiteFooter lang={lang} modelCredit />
      </div>
    </HpPage>
  )
}
