import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import SecH from "@/components/hp/sec-h"
import "@/components/hp/css/vision.css"

const gold = { borderColor: "var(--pf-gold)" }

const GOLD = "#C8A951"

const GlowDefs = ({ g, h }: { g: string; h: string }) => (
  <defs>
    <radialGradient id={g}>
      <stop offset="0" stopColor={GOLD} stopOpacity="0.75" />
      <stop offset="0.45" stopColor={GOLD} stopOpacity="0.22" />
      <stop offset="1" stopColor={GOLD} stopOpacity="0" />
    </radialGradient>
    <radialGradient id={h}>
      <stop offset="0" stopColor={GOLD} stopOpacity="0.34" />
      <stop offset="0.55" stopColor={GOLD} stopOpacity="0.10" />
      <stop offset="1" stopColor={GOLD} stopOpacity="0" />
    </radialGradient>
  </defs>
)

// GIGA-HOSPITAL構想の図（見本の SVG と同じ形。文字だけ言語で変える）
function GigaFigure({ ja }: { ja: boolean }) {
  const label = ja
    ? "GIGA-HOSPITAL構想の図。拠点病院を真ん中に置き、薬局・訪問看護ステーション・診療所・介護施設・患者の自宅と金の線で結んでいる"
    : "Diagram of the GIGA-HOSPITAL concept: a core hospital at the center, connected by gold lines to a pharmacy, a home-visit nursing station, a clinic, a care facility, and a patient's home"
  const t = ja
    ? { hub: ["拠点病院"], home: "患者の自宅", clinic: "診療所", visit: ["訪問看護ステーション"], visitN: ["訪問看護", "ステーション"], care: "介護施設", pharmacy: "薬局" }
    : { hub: ["Core", "hospital"], home: "Patient's home", clinic: "Clinic", visit: ["Home-visit nursing station"], visitN: ["Home-visit", "nursing station"], care: "Care facility", pharmacy: "Pharmacy" }
  const lines = (x: number, y: number, ls: string[], lh: number, center = false) => {
    const y0 = center ? y - ((ls.length - 1) * lh) / 2 : y
    return ls.length === 1
      ? ls[0]
      : ls.map((l, i) => (
          <tspan key={l} x={x} y={y0 + i * lh}>
            {l}
          </tspan>
        ))
  }
  return (
    <div className="giga">
      <svg className="g-w" viewBox="0 0 1120 500" role="img" aria-label={label} focusable="false" xmlns="http://www.w3.org/2000/svg">
        <GlowDefs g="ggw" h="ghw" />
        <line x1="560.0" y1="188.0" x2="560.0" y2="65.0" className="sp" />
        <line x1="621.3" y1="241.0" x2="949.9" y2="192.8" className="sp" />
        <line x1="612.7" y1="282.7" x2="801.0" y2="399.7" className="sp" />
        <line x1="507.3" y1="282.7" x2="319.0" y2="399.7" className="sp" />
        <line x1="498.7" y1="241.0" x2="170.1" y2="192.8" className="sp" />
        <circle cx="560" cy="250" r="130" fill="url(#ghw)" className="glow gh" />
        <circle cx="560" cy="250" r="62" className="hub" />
        <text x="560" y="259.0" textAnchor="middle" className="hub-t" style={{ fontSize: ja ? 25 : 21 }}>
          {lines(560, 257, t.hub, 26, true)}
        </text>
        <circle cx="560.0" cy="65.0" r="28" fill="url(#ggw)" className="glow g1" />
        <circle cx="560.0" cy="65.0" r="6" fill={GOLD} />
        <text x="560.0" y="35.0" textAnchor="middle" style={{ fontSize: 21 }}>{t.home}</text>
        <circle cx="949.9" cy="192.8" r="28" fill="url(#ggw)" className="glow g2" />
        <circle cx="949.9" cy="192.8" r="6" fill={GOLD} />
        <text x="979.9" y="200.4" textAnchor="start" style={{ fontSize: 21 }}>{t.clinic}</text>
        <circle cx="801.0" cy="399.7" r="28" fill="url(#ggw)" className="glow g3" />
        <circle cx="801.0" cy="399.7" r="6" fill={GOLD} />
        <text x="801.0" y="444.8" textAnchor="middle" style={{ fontSize: 21 }}>{t.visit[0]}</text>
        <circle cx="319.0" cy="399.7" r="28" fill="url(#ggw)" className="glow g4" />
        <circle cx="319.0" cy="399.7" r="6" fill={GOLD} />
        <text x="319.0" y="444.8" textAnchor="middle" style={{ fontSize: 21 }}>{t.care}</text>
        <circle cx="170.1" cy="192.8" r="28" fill="url(#ggw)" className="glow g5" />
        <circle cx="170.1" cy="192.8" r="6" fill={GOLD} />
        <text x="140.1" y="200.4" textAnchor="end" style={{ fontSize: 21 }}>{t.pharmacy}</text>
      </svg>
      <svg className="g-n" viewBox="0 0 360 416" role="img" aria-label={label} focusable="false" xmlns="http://www.w3.org/2000/svg">
        <GlowDefs g="ggn" h="ghn" />
        <line x1="180.0" y1="162.0" x2="180.0" y2="60.0" className="sp" />
        <line x1="221.0" y1="190.1" x2="296.0" y2="160.9" className="sp" />
        <line x1="202.8" y1="243.6" x2="251.7" y2="324.1" className="sp" />
        <line x1="157.2" y1="243.6" x2="108.3" y2="324.1" className="sp" />
        <line x1="139.0" y1="190.1" x2="64.0" y2="160.9" className="sp" />
        <circle cx="180" cy="206" r="92" fill="url(#ghn)" className="glow gh" />
        <circle cx="180" cy="206" r="44" className="hub" />
        <text x="180" y="212.5" textAnchor="middle" className="hub-t" style={{ fontSize: ja ? 18 : 15 }}>
          {lines(180, 211, t.hub, 18, true)}
        </text>
        <circle cx="180.0" cy="60.0" r="20" fill="url(#ggn)" className="glow g1" />
        <circle cx="180.0" cy="60.0" r="4.5" fill={GOLD} />
        <text x="180.0" y="32.0" textAnchor="middle" style={{ fontSize: 18 }}>{t.home}</text>
        <circle cx="296.0" cy="160.9" r="20" fill="url(#ggn)" className="glow g2" />
        <circle cx="296.0" cy="160.9" r="4.5" fill={GOLD} />
        <text x="296.0" y="201.8" textAnchor="middle" style={{ fontSize: 18 }}>{t.clinic}</text>
        <circle cx="251.7" cy="324.1" r="20" fill="url(#ggn)" className="glow g3" />
        <circle cx="251.7" cy="324.1" r="4.5" fill={GOLD} />
        <text x="251.7" y="365.1" textAnchor="middle" style={{ fontSize: 18 }}>
          {t.visitN.map((l, i) => (
            <tspan key={l} x="251.7" dy={i === 0 ? "0.0" : "23.4"}>
              {l}
            </tspan>
          ))}
        </text>
        <circle cx="108.3" cy="324.1" r="20" fill="url(#ggn)" className="glow g4" />
        <circle cx="108.3" cy="324.1" r="4.5" fill={GOLD} />
        <text x="108.3" y="365.1" textAnchor="middle" style={{ fontSize: 18 }}>{t.care}</text>
        <circle cx="64.0" cy="160.9" r="20" fill="url(#ggn)" className="glow g5" />
        <circle cx="64.0" cy="160.9" r="4.5" fill={GOLD} />
        <text x="64.0" y="201.8" textAnchor="middle" style={{ fontSize: 18 }}>{t.pharmacy}</text>
      </svg>
    </div>
  )
}

export default function VisionPage({ lang }: { lang: Lang }) {
  const ja = lang === "ja"
  const p = (path: string) => localizePath(lang, path)
  return (
    <HpPage page="vision">
      <div className="in">
        <SiteHeader lang={lang} current="vision" />

        <section aria-label={ja ? "ビジョン" : "Vision"} className="head">
          {ja ? (
            <>
              <h1 className="ttl">
                <span className="ln">世界に誇る日本の医療を</span>
                <span className="ln">未来へつなぐ</span>
              </h1>
              <p className="ttl-e" lang="en">
                Connecting Japan&#39;s World-Class Healthcare to the Future
              </p>
            </>
          ) : (
            <h1 className="ttl">
              <span className="ln">Connecting Japan&#39;s World-Class Healthcare</span>
              <span className="ln">to the Future</span>
            </h1>
          )}
          <p className="sub">
            {ja ? "AIとロボティクスで、持続可能な医療インフラを再構築する。" : "Reconstructing sustainable healthcare infrastructure with AI & Robotics."}
          </p>
        </section>
        <Band src="/images/hp/band-vision-1.svg" className="bh" />

        <section aria-label={ja ? "課題" : "The Challenge"} className="sec two">
          <SecH h={ja ? "課題" : "The Challenge"} e="The Challenge" ja={ja} />
          <p className="body-p">
            {ja
              ? "医療を必要とする人が増える一方で、看護師をはじめとする担い手の確保は年々難しくなっています。看護師は記録などの間接業務に多くの時間を取られ、患者と向き合う時間が削られています。経験豊富な看護師の判断や観察は一人ひとりの中にとどまり、次の世代へ受け継がれにくいままです。"
              : "As more people need medical care, it is becoming harder every year to secure the nurses and other professionals who provide it. Nurses spend much of their time on indirect work such as documentation, leaving less time for patients. The judgment and observations of experienced nurses stay within each individual and are rarely passed on to the next generation."}
          </p>
        </section>

        <section aria-label={ja ? "私たちの取り組み" : "What We Do"} className="sec">
          <SecH h={ja ? "私たちの取り組み" : "What We Do"} e="What We Do" ja={ja} className="sec-h row-h" />
          <div className="cols">
            <div className="col">
              <h3>NURVIS</h3>
              {ja ? (
                <p className="kp">
                  看護師が身につける<wbr />AIエージェント<wbr />NURVISで、<wbr />看護師一人ひとりが<wbr />自立して<wbr />動けるように<wbr />支えます。
                </p>
              ) : (
                <p>With NURVIS, an AI agent that nurses wear, we support each nurse in working independently.</p>
              )}
              <Link href={p("/product")} className="more" style={gold}>
                {ja ? "NURVISについて" : "About NURVIS"}
              </Link>
            </div>
            <div className="col">
              {ja ? (
                <h3>
                  エゴセントリック<wbr />看護データの研究
                </h3>
              ) : (
                <h3>Research on egocentric nursing data</h3>
              )}
              <p>
                {ja
                  ? "2026年9月から、看護師の一人称の映像と、何を観察しどう判断したかを本人が言葉にしたものを集め、データに整えています。"
                  : "Since September 2026, we have been collecting first-person video from nurses, together with their own accounts of what they observed and how they made decisions, and shaping it into data."}
              </p>
              <Link href={p("/research")} className="more" style={gold}>
                {ja ? "研究について" : "About our research"}
              </Link>
            </div>
            <div className="col">
              <h3>{ja ? "GIGA-HOSPITAL構想" : "The GIGA-HOSPITAL Concept"}</h3>
              <p>
                {ja
                  ? "拠点病院と、薬局・訪問看護ステーション・診療所・介護施設・患者の自宅を結ぶ構想です。"
                  : "A concept that connects core hospitals with pharmacies, home-visit nursing stations, clinics, care facilities, and patients' homes."}
              </p>
              <a href="#giga-hospital" className="more" style={gold}>
                {ja ? "GIGA-HOSPITAL構想" : "The GIGA-HOSPITAL Concept"}
              </a>
            </div>
          </div>
        </section>

        <section aria-label={ja ? "進め方" : "How We Work"} className="sec">
          <SecH h={ja ? "進め方" : "How We Work"} e="How We Work" ja={ja} className="sec-h row-h" />
          <div className="loop">
            {(ja
              ? [
                  { h: "現場に入る", t: "看護師資格を持つメンバーが現場に入り、看護師が困っていることと考えていることを聞き取ります。" },
                  { h: "現場で使いながら作る", t: "聞き取ったことをNURVISに入れ、現場で使ってもらいながら直します。" },
                  { h: "判断とケアをデータに残す", t: "看護の判断とケアを言葉にし、次の現場とAIの学習に使えるデータとして残します。" },
                ]
              : [
                  { h: "Go into the field", t: "Members of our team who are licensed nurses go into clinical settings and listen to what nurses struggle with and what they are thinking." },
                  { h: "Build it while it is used in the field", t: "We put what we hear into NURVIS and refine it while nurses use it on the job." },
                  { h: "Preserve judgment and care as data", t: "We put nursing judgment and care into words and preserve them as data that the next care setting and AI training can use." },
                ]
            ).flatMap((s, i) => [
              ...(i > 0
                ? [
                    <span key={`a${i}`} className="arw" aria-hidden="true">
                      →
                    </span>,
                  ]
                : []),
              <div key={s.h} className="lp">
                <span className="no">{i + 1}</span>
                <h3>{s.h}</h3>
                <p>{s.t}</p>
              </div>,
            ])}
          </div>
        </section>

        <section id="giga-hospital" aria-label={ja ? "GIGA-HOSPITAL構想" : "The GIGA-HOSPITAL Concept"} className="sec end">
          <SecH h={ja ? "GIGA-HOSPITAL構想" : "The GIGA-HOSPITAL Concept"} e="The GIGA-HOSPITAL Concept" ja={ja} className="sec-h row-h" />
          <p className="body-p">
            {ja
              ? "病院の集約や再編が進む中でも、医療を必要とする人に届け続けるための構想です。手術室やICUのように集めることで質が上がる機能は拠点病院に置き、薬局、訪問看護ステーション、診療所、介護施設、患者の自宅を、街に広がる医療の拠点として結びます。拠点が分かれるほど、看護師が一人で判断する場面は増えます。どこにいても同じ病棟で働いているように情報と知恵が行き渡る仕組みを、NURVISから作り始めています。"
              : "GIGA-HOSPITAL is our concept for continuing to deliver care to everyone who needs it, even as hospitals are consolidated and reorganized. Functions whose quality improves when concentrated, such as operating rooms and ICUs, stay in core hospitals, while pharmacies, home-visit nursing stations, clinics, care facilities, and patients' homes are connected as points of care across the community. The more dispersed these points become, the more often nurses must make decisions alone. Starting with NURVIS, we are building the means for information and expertise to reach nurses wherever they are, as if they were working on the same ward."}
          </p>
          <GigaFigure ja={ja} />
        </section>

        <Band src="/images/hp/band-vision-2.svg" />
        <SiteFooter lang={lang} />
      </div>
    </HpPage>
  )
}
