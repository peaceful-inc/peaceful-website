import type React from "react"
import Link from "next/link"
import { localizePath, type Lang } from "@/lib/seo"
import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import SecH from "@/components/hp/sec-h"
import { CONTACT_URL } from "@/components/hp/links"
import "@/components/hp/css/company.css"

const lines = (ls: string[]) => ls.flatMap((l, i) => (i === 0 ? [l] : [<br key={i} />, l]))

export default function CompanyPage({ lang }: { lang: Lang }) {
  const ja = lang === "ja"
  const p = (path: string) => localizePath(lang, path)

  const profile: { k: string; v: React.ReactNode }[] = ja
    ? [
        { k: "社名", v: "株式会社peaceful（peaceful Inc.）" },
        { k: "代表取締役", v: "陣之内 将成" },
        { k: "設立", v: "2025年10月1日" },
        { k: "所在地", v: "〒140-0002 東京都品川区東品川2-6-4 寺田倉庫G1ビル 2階" },
        {
          k: "事業内容",
          v: lines([
            "医療・介護の現場で働くロボットのAI（フィジカルAI）の研究開発",
            "医療・介護向けAIエージェントシステムの開発・提供（NURVIS）",
            "病院・介護施設のDXの導入と運用の支援",
          ]),
        },
        { k: "法人番号", v: "7011601029057" },
        { k: "取引銀行", v: "三井住友銀行" },
        { k: "加盟団体", v: lines(["日本デジタルヘルス・アライアンス（JaDHA）", "一般社団法人日本病院DX推進協会"]) },
      ]
    : [
        { k: "Company name", v: "peaceful Inc." },
        { k: "Representative Director & CEO", v: "Masanari Jinnouchi" },
        { k: "Founded", v: "October 1, 2025" },
        { k: "Location", v: "Warehouse TERRADA G1 Bldg. 2F, 2-6-4 Higashi-Shinagawa, Shinagawa-ku, Tokyo 140-0002" },
        {
          k: "Business",
          v: lines([
            "Research and development of AI for robots working in healthcare and nursing care (physical AI)",
            "Development and provision of AI agent systems for healthcare and nursing care (NURVIS)",
            "Support for DX implementation and operations at hospitals and care facilities",
          ]),
        },
        { k: "Corporate number", v: "7011601029057" },
        { k: "Bank", v: "Sumitomo Mitsui Banking Corporation" },
        { k: "Memberships", v: lines(["Japan Digital Health Alliance (JaDHA)", "一般社団法人日本病院DX推進協会"]) },
      ]

  const history = ja
    ? [
        ["1", "2025年10月", "株式会社peacefulを設立"],
        ["2", "2025年11月", "三菱総合研究所「未来共創イニシアティブ（ICF）」参画"],
        ["3", "2025年11月", "神戸市「Be start KOBE」採択"],
        ["9", "2026年3月", "DIA Global Forumに共著記事が掲載"],
        ["10", "2026年7月", "寺田倉庫「Creation Camp TENNOZ」第3期 採択"],
        ["11", "2026年8月", "NVIDIA Inception Program 採択"],
        ["12", "2026年8月", "洛和会丸太町病院でNURVISの実証を開始"],
        ["13", "2026年9月", "エゴセントリック看護データの収集と構造化に着手"],
      ]
    : [
        ["1", "Oct 2025", "Founded peaceful Inc."],
        ["2", "Nov 2025", "Joined Mitsubishi Research Institute's \"Initiative for Co-creating the Future (ICF)\""],
        ["3", "Nov 2025", "Selected for Kobe City's \"Be start KOBE\""],
        ["9", "Mar 2026", "Co-authored article published in DIA Global Forum"],
        ["10", "Jul 2026", "Selected for Warehouse TERRADA's \"Creation Camp TENNOZ\" (3rd Cohort)"],
        ["11", "Aug 2026", "Selected for the NVIDIA Inception Program"],
        ["12", "Aug 2026", "Began a NURVIS pilot at Rakuwakai Marutamachi Hospital"],
        ["13", "Sep 2026", "Began collecting and structuring egocentric nursing data"],
      ]

  return (
    <HpPage page="company">
      <div className="in">
        <SiteHeader lang={lang} current="company" />

        <section aria-label={ja ? "会社情報" : "Company Information"} className="head">
          <h1 className="ttl">{ja ? "会社情報" : "Company Information"}</h1>
          {ja && (
            <p className="ttl-e" lang="en">
              Company Information
            </p>
          )}
        </section>
        <Band src="/images/hp/band-company-1.svg" className="bh" />

        <section aria-label={ja ? "代表" : "Our Founder"} className="sec">
          <SecH h={ja ? "代表" : "Our Founder"} e="Our Founder" ja={ja} />
          <p className="fd-name">{ja ? "陣之内 将成" : "Masanari Jinnouchi"}</p>
          {ja && <p className="fd-kana">じんのうち まさなり</p>}
          <p className="fd-role">{ja ? "代表取締役／看護師" : "Representative Director & CEO / Registered Nurse"}</p>
          <div className="lst fd-list">
            {ja ? (
              <>
                <p>救急・ICU・脳神経外科の看護師として5年</p>
                <p>
                  CRA、<span style={{ whiteSpace: "nowrap" }}>Study Managerとして</span>臨床開発に約8年従事
                </p>
                <p>2025年10月 株式会社peacefulを創業</p>
                <p>日本デジタルヘルス・アライアンス（JaDHA）薬事・診療報酬制度の在り方検討委員会 副委員長</p>
                <p>DIA日本年会2026 プログラム委員／DIA Global Forum 共著（2026年3月号）</p>
              </>
            ) : (
              <>
                <p>Five years as a nurse in emergency care, ICU, and neurosurgery</p>
                <p>About eight years in clinical development as a CRA and Study Manager</p>
                <p>Founded peaceful Inc. in October 2025</p>
                <p>Vice Chair of the committee on regulatory and reimbursement policy, Japan Digital Health Alliance (JaDHA)</p>
                <p>Program Committee Member, DIA Japan Annual Meeting 2026 / Co-author, DIA Global Forum (March 2026 issue)</p>
              </>
            )}
          </div>
        </section>

        <section aria-label={ja ? "チーム" : "Our Team"} className="sec">
          <SecH h={ja ? "チーム" : "Our Team"} e="Our Team" ja={ja} />
          <p className="body-p">
            {ja
              ? "看護師・保健師のメンバーが加わり、現場の視点で製品づくりと導入支援に関わっています。"
              : "Our team includes nurses and public health nurses, who bring a frontline perspective to product development and implementation support."}
          </p>
        </section>

        <section aria-label={ja ? "会社概要" : "Company Profile"} className="sec">
          <SecH h={ja ? "会社概要" : "Company Profile"} e="Company Profile" ja={ja} />
          <dl className="rows" style={{ margin: 0 }}>
            {profile.map((r) => (
              <div key={r.k} className="r2">
                <dt className="k">{r.k}</dt>
                <dd className="v" style={{ margin: 0 }}>
                  {r.v}
                </dd>
              </div>
            ))}
            <div className="r2">
              <dt className="k">{ja ? "お問い合わせ" : "Contact"}</dt>
              <dd className="v" style={{ margin: 0 }}>
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", borderBottom: "1px solid var(--pf-gold)" }}>
                  {ja ? "お問い合わせフォーム" : "Contact form"}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section aria-label={ja ? "これまでの歩み" : "History"} className="sec end">
          <SecH h={ja ? "これまでの歩み" : "History"} e="History" ja={ja} />
          <div className="rows">
            {history.map(([id, k, v]) => (
              <Link key={id} href={p(`/news/${id}`)} className="r2">
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </Link>
            ))}
          </div>
          <div className="badge">
            <img src="/nvidia-inception-badge.png" alt="NVIDIA Inception Program Member" />
          </div>
          <p className="tm">
            © 2026 NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries.
          </p>
        </section>

        <Band src="/images/hp/band-company-2.svg" />
        <SiteFooter lang={lang} />
      </div>
    </HpPage>
  )
}
