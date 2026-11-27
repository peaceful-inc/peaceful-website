import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import ProductFigure from "@/components/hp/product-figure"
import SecH from "@/components/hp/sec-h"
import NurvisYomi from "@/components/hp/nurvis-yomi"
import { productFaq } from "@/components/hp/product-faq"
import { CONTACT_URL, PRIVACY_PATH, SECURITY_POLICY_PATH } from "@/components/hp/links"
import "@/components/hp/css/product.css"

const gold = { borderColor: "var(--pf-gold)" }

export default function ProductPage({ lang }: { lang: Lang }) {
  const ja = lang === "ja"
  const p = (path: string) => localizePath(lang, path)
  return (
    <HpPage page="product">
      <div className="in">
        <SiteHeader lang={lang} current="product" />

        <section aria-label="NURVIS" className="head">
          <h1 className="ttl">
            <NurvisYomi ja={ja} />
          </h1>
          {ja ? (
            <>
              <p className="sub">看護師が身につけるAIエージェント</p>
              <p className="sub-e" lang="en">
                A wearable AI agent system for nurses
              </p>
              <p className="lead-p">
                NURVISは、<wbr />ウェアラブル<wbr />デバイスによる<wbr />看護師向け<wbr />AIエージェント<wbr />システムです。<wbr />たとえば、<wbr />看護手順の確認や、<wbr />会議の議事録づくりを<wbr />任せられます。<wbr />その日の段取りを<wbr />組む機能は、<wbr />開発中です。<wbr />くわしくは、<wbr />下の動画で<wbr />ご覧ください。
              </p>
            </>
          ) : (
            <>
              <p className="sub">A wearable AI agent system for nurses</p>
              <p className="lead-p">
                NURVIS is a wearable AI agent system for nurses. For example, you can leave it to check nursing procedures or to prepare meeting minutes. A feature that plans the day&apos;s work is in development. See the video below for details.
              </p>
            </>
          )}
          <div className="vid">
            <div className="vid-box is-video">
              <video
                src="/videos/nurvis-intro.mp4"
                poster="/videos/nurvis-intro-poster.jpg"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={ja ? "NURVISの紹介動画（2分14秒、音声なし）" : "NURVIS introduction video (2 min 14 s, no audio)"}
              ></video>
            </div>
            <p className="vid-note">
              {ja
                ? "動画には、開発中・開発予定の機能の画面イメージを含みます（音声はありません）。"
                : "The video includes screen mockups of features in development or planned (there is no audio)."}
            </p>
          </div>
        </section>
      </div>

      <section aria-label={ja ? "NURVISの仕組み" : "NURVIS"} className="spec">
        <div className="in spec-in">
          <ProductFigure lang={lang} page="product" />
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
        <section aria-label={ja ? "できること" : "Features"} className="sec">
          <SecH h={ja ? "できること" : "Features"} e="Features" ja={ja} />
          <div>
            {(ja
              ? [
                  { h: "看護手順と薬剤情報をその場で確かめる", dev: "（開発中）", t: "看護手順や薬剤情報を、声で問いかけて確かめられます。答えには出典が添えられます。" },
                  { h: "一日の業務を組み立てる", dev: "（開発中）", t: "その日の業務の流れを、時間に沿って組み立てて管理します。" },
                  { h: "会議の話をまとめる", t: "カンファレンスや会議の話を文字にし、議事録の形にまとめます。" },
                  { h: "記録の文章に整える", t: "話した内容をその場で文字にし、看護記録の文章に整えます。看護師が確認して、電子カルテに貼り付けます。" },
                ]
              : [
                  { h: "Check procedures and drug information on the spot", dev: " (in development)", t: "Ask about nursing procedures and drug information by voice. Answers come with their sources." },
                  { h: "Plan the day's work", dev: " (in development)", t: "Lays out the flow of the day's work along a timeline and helps you manage it." },
                  { h: "Summarize meetings", t: "Transcribes conferences and meetings and organizes them into minutes." },
                  { h: "Shape speech into record text", t: "What you say is transcribed on the spot and shaped into nursing-record text. Nurses review it and paste it into the electronic health record." },
                ]
            ).map((e: { h: string; dev?: string; t: string }) => (
              <div key={e.h} className="ent">
                <h3>
                  {e.h}
                  {e.dev && <span className="dev">{e.dev}</span>}
                </h3>
                <p>{e.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label={ja ? "使い方" : "Workflow"} className="sec">
          <SecH h={ja ? "使い方" : "Workflow"} e="Workflow" ja={ja} />
          <div className="steps s3">
            {(ja
              ? [
                  "イヤホンのボタンを1回押して、ケアの内容を話す",
                  "看護記録の文章に整えられ、看護師が確認して電子カルテに貼り付ける",
                  "知りたいことはボタンを2回押して質問し、答えを音声と画面で受け取る",
                ]
              : [
                  "Press the earphone button once and describe the care you are giving.",
                  "The text is shaped into a nursing record; the nurse reviews it and pastes it into the electronic health record.",
                  "To ask a question, press the button twice and receive the answer by voice and on screen.",
                ]
            ).map((t, i) => (
              <div key={i} className="step">
                <span className="no">{i + 1}</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label={ja ? "安全への配慮" : "Safeguards"} className="sec">
          <SecH h={ja ? "安全への配慮" : "Safeguards"} e="Safeguards" ja={ja} />
          <div className="lst">
            {(ja
              ? [
                  "患者さんの名前などの個人情報は、伏せてから扱います。",
                  "データは国内で保管します。",
                  "お預かりした情報は、病院との契約で決めた目的の範囲で使います。",
                  "記録の確定と臨床判断は看護師が行います。NURVISの答えは一般的な情報で、実施にあたっては所属施設の手順が優先されます。",
                ]
              : [
                  "Patients' names and other personal information are masked before processing.",
                  "Data is stored in Japan.",
                  "Information entrusted to us is used only for the purposes set out in our contract with the hospital.",
                  "Nurses finalize records and make clinical judgments. NURVIS's answers are general information, and your facility's procedures take precedence in practice.",
                ]
            ).map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          {ja ? (
            <p className="pol">
              くわしくは、
              <a href={SECURITY_POLICY_PATH} style={gold}>
                情報セキュリティ基本方針
              </a>
              と
              <a href={PRIVACY_PATH} style={gold}>
                プライバシーポリシー
              </a>
              をご覧ください。
            </p>
          ) : (
            <p className="pol">
              For details, see our{" "}
              <a href={SECURITY_POLICY_PATH} style={gold}>
                Information Security Policy
              </a>{" "}
              and{" "}
              <a href={PRIVACY_PATH} style={gold}>
                Privacy Policy
              </a>
              .
            </p>
          )}
          <p className="note">
            {ja
              ? "※記載の内容は掲載時点のものです。仕様は予告なく変更することがあります。"
              : "*The information on this page is current as of publication. Specifications are subject to change without notice."}
          </p>
        </section>

        <section aria-label={ja ? "導入の流れ" : "Getting Started"} className="sec">
          <SecH h={ja ? "導入の流れ" : "Getting Started"} e="Getting Started" ja={ja} />
          <div className="steps">
            {(ja
              ? [
                  { h: "ご相談", t: "現場の業務と課題をうかがいます。" },
                  { h: "試験導入", t: "病棟を決め、実際の業務で使っていただきます。" },
                  { h: "効果の確認", t: "業務の負担や、看護の質と働き方への影響を確かめます。" },
                  { h: "本導入" },
                ]
              : [
                  { h: "Consultation", t: "We learn about the work and challenges on your wards." },
                  { h: "Trial", t: "Choose a ward and use NURVIS in daily work." },
                  { h: "Evaluation", t: "We examine the effects on workload, quality of care, and working styles." },
                  { h: "Full deployment" },
                ]
            ).map((s: { h: string; t?: string }, i) => (
              <div key={s.h} className="step">
                <span className="no">{i + 1}</span>
                <h3>{s.h}</h3>
                {s.t && <p>{s.t}</p>}
              </div>
            ))}
          </div>
        </section>

        <section aria-label={ja ? "実証" : "Pilot Program"} className="sec">
          <SecH h={ja ? "実証" : "Pilot Program"} e="Pilot Program" ja={ja} />
          <p className="body-p">
            {ja
              ? "洛和会丸太町病院（京都市）との共同実証を2026年8月に開始しました。看護師がNURVISを日常の看護業務で使い、記録業務の負担軽減に加えて、看護の質や働き方への影響を検証します。"
              : "In August 2026, we began a joint demonstration study with Rakuwakai Marutamachi Hospital (Kyoto). Nurses use NURVIS in their daily work, and the study examines its effects on documentation burden as well as on the quality of care and nurses' working styles."}
          </p>
          <Link href={p("/news")} className="more" style={gold}>
            {ja ? "お知らせを読む" : "Read the news"}
          </Link>
        </section>

        <section aria-label={ja ? "よくある質問" : "Questions"} className="sec">
          <SecH h={ja ? "よくある質問" : "Questions"} e="Questions" ja={ja} />
          <div>
            {productFaq[lang].map(({ q, a }) => (
              <div key={q} className="qa">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
          <a href={CONTACT_URL} className="more" style={gold} target="_blank" rel="noopener noreferrer">
            {ja ? "お問い合わせ" : "Contact"}
          </a>
        </section>

        <section aria-label={ja ? "これから" : "Looking Ahead"} className="sec end">
          <SecH h={ja ? "これから" : "Looking Ahead"} e="Looking Ahead" ja={ja} />
          <p className="body-p">
            {ja
              ? "NURVISが目指すのは、記録の負担を減らすことだけではありません。これまで言語化されてこなかった看護師の判断やケアを可視化し、次の世代へ受け継ぐことです。この取り組みは、研究のページで紹介しています。"
              : "NURVIS aims to do more than reduce the burden of documentation. It seeks to make visible the judgment and care of nurses that have gone unspoken, and to pass them on to the next generation. This work is introduced on our Research page."}
          </p>
          <Link href={p("/research")} className="more" style={gold}>
            {ja ? "研究について" : "About our research"}
          </Link>
        </section>

        <Band src="/images/hp/band-product-1.svg" />
        <SiteFooter lang={lang} />
      </div>
    </HpPage>
  )
}
