"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function CompanyContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (lang === "ja") {
      document.title = "会社情報｜peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "株式会社peacefulの会社情報。代表、チーム、会社概要、採択・参画の実績を掲載しています。"
        )
      }
    } else {
      document.title = "Company | peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Company information for peaceful Inc.: our founder, team, company profile, and recognition."
        )
      }
    }
  }, [lang])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* 1. Page Title */}
      <div className="mb-20 w-full max-w-5xl">
        <h1
          className={`text-center font-bold tracking-tight transition-all duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } text-4xl md:text-5xl lg:text-6xl`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          {lang === "ja" ? "会社情報" : "Company"}
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            {lang === "ja" ? "COMPANY" : "ABOUT US"}
          </span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* 2. Founder Section (FOUNDER) */}
        <section
          className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "代表" : "FOUNDER"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              FOUNDER
            </span>
          </div>

          <div className="space-y-4 border-l-2 border-neon-blue/30 pl-6">
            <div>
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                {lang === "ja"
                  ? "陣之内 将成（じんのうち まさなり）"
                  : "Masanari Jinnouchi"}
              </h3>
              <p className="mt-1 text-base font-semibold text-neon-blue md:text-lg">
                {lang === "ja"
                  ? "代表取締役／看護師"
                  : "Representative Director & CEO / Registered Nurse"}
              </p>
            </div>

            <ul className="space-y-2 pt-2">
              <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
                <span className="mr-3 text-neon-blue">・</span>
                <span>
                  {lang === "ja"
                    ? "救急・ICU・脳神経外科の看護師"
                    : "Nurse in emergency care, ICU, and neurosurgery"}
                </span>
              </li>
              <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
                <span className="mr-3 text-neon-blue">・</span>
                <span>
                  {lang === "ja"
                    ? "CRA、Study Managerとして臨床開発に従事"
                    : "Worked in clinical development as a CRA and Study Manager"}
                </span>
              </li>
              <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
                <span className="mr-3 text-neon-blue">・</span>
                <span>
                  {lang === "ja"
                    ? "2025年10月 株式会社peacefulを創業"
                    : "Founded peaceful Inc. in October 2025"}
                </span>
              </li>
              <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
                <span className="mr-3 text-neon-blue">・</span>
                <span>
                  {lang === "ja"
                    ? "日本デジタルヘルス・アライアンス（JaDHA）薬事・診療報酬制度の在り方検討委員会 副委員長"
                    : "Vice Chair of the committee on regulatory and reimbursement policy, Japan Digital Health Alliance (JaDHA)"}
                </span>
              </li>
              <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
                <span className="mr-3 text-neon-blue">・</span>
                <span>
                  {lang === "ja"
                    ? "DIA日本年会2026 プログラム委員／DIA Global Forum 共著（2026年3月号）"
                    : "Program Committee Member, DIA Japan Annual Meeting 2026 / Co-author, DIA Global Forum (March 2026 issue)"}
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Team Section (TEAM) */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "チーム" : "TEAM"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              TEAM
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "看護師・保健師のメンバーが加わり、現場の視点で製品づくりと導入支援に関わっています。"
              : "Our team includes nurses and public health nurses, who bring a frontline perspective to product development and implementation support."}
          </p>
        </section>

        {/* 4. Company Profile Section (PROFILE) */}
        <section
          className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "会社概要" : "COMPANY PROFILE"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              PROFILE
            </span>
          </div>
          <dl className="space-y-4 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === "ja" ? "社名" : "Company name"}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === "ja"
                  ? "株式会社peaceful（peaceful Inc.）"
                  : "peaceful Inc."}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === "ja" ? "代表取締役" : "Representative Director & CEO"}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === "ja" ? "陣之内 将成" : "Masanari Jinnouchi"}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === "ja" ? "設立" : "Founded"}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === "ja" ? "2025年10月1日" : "October 1, 2025"}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === "ja" ? "所在地" : "Location"}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === "ja" ? "東京都練馬区" : "Nerima-ku, Tokyo"}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === "ja" ? "事業内容" : "Business"}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === "ja"
                  ? "医療・介護向けAIシステムの開発／医療ロボティクス研究開発／医療DXコンサルティング"
                  : "Development of AI systems for healthcare and nursing care / Research and development of medical robotics / Healthcare DX consulting"}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === "ja" ? "お問い合わせ" : "Contact"}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                <a
                  href="https://forms.gle/nFwkK24V1MNS1EL18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:text-white underline underline-offset-4 transition-colors font-medium"
                >
                  {lang === "ja" ? "お問い合わせフォーム" : "Contact form"}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* 5. Recognition Section (RECOGNITION) */}
        <section
          className={`transition-all duration-1000 delay-[900ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "採択・参画" : "RECOGNITION"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              RECOGNITION
            </span>
          </div>

          <ul className="space-y-4 border-l-2 border-neon-blue/30 pl-6">
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg group">
              <span className="mr-3 text-neon-blue shrink-0">・</span>
              <Link
                href="/news/11"
                className="hover:text-neon-blue transition-colors underline underline-offset-4"
              >
                {lang === "ja"
                  ? "2026年8月　NVIDIA Inception Program 採択"
                  : "Aug 2026　Selected for the NVIDIA Inception Program"}
              </Link>
            </li>
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg group">
              <span className="mr-3 text-neon-blue shrink-0">・</span>
              <Link
                href="/news/10"
                className="hover:text-neon-blue transition-colors underline underline-offset-4"
              >
                {lang === "ja"
                  ? "2026年7月　寺田倉庫「Creation Camp TENNOZ」第3期 採択"
                  : "Jul 2026　Selected for Warehouse TERRADA's \"Creation Camp TENNOZ\" (3rd Cohort)"}
              </Link>
            </li>
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg group">
              <span className="mr-3 text-neon-blue shrink-0">・</span>
              <Link
                href="/news/3"
                className="hover:text-neon-blue transition-colors underline underline-offset-4"
              >
                {lang === "ja"
                  ? "2025年11月　神戸市「Be start KOBE」採択"
                  : "Nov 2025　Selected for Kobe City's \"Be start KOBE\""}
              </Link>
            </li>
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg group">
              <span className="mr-3 text-neon-blue shrink-0">・</span>
              <Link
                href="/news/2"
                className="hover:text-neon-blue transition-colors underline underline-offset-4"
              >
                {lang === "ja"
                  ? "2025年11月　三菱総合研究所「未来共創イニシアティブ（ICF）」参画"
                  : "Nov 2025　Joined Mitsubishi Research Institute's \"Initiative for Co-creating the Future (ICF)\""}
              </Link>
            </li>
          </ul>

          <div className="mt-8 border-l-2 border-transparent pl-6">
            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <img
                src="/nvidia-inception-badge.png"
                alt="NVIDIA Inception Program Member"
                className="h-[30px] md:h-[40px] w-auto"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
