"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function ResearchContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (lang === "ja") {
      document.title = "研究｜peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "看護師の一人称視点（エゴセントリック）動画データの収集と構造化に関する、peacefulの研究の取り組みを紹介します。"
        )
      }
    } else {
      document.title = "Research | peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "peaceful's research on collecting and structuring egocentric (first-person) video data from nurses."
        )
      }
    }
  }, [lang])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* Page Title */}
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
          {lang === "ja" ? "研究" : "Our Research"}
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            RESEARCH
          </span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* Overview Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "概要" : "About This Work"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              OVERVIEW
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "peacefulは、2026年9月から、看護師の一人称視点（エゴセントリック）動画データの収集と構造化に取り組んでいます。物理世界で認識・判断・行動するAI（フィジカルAI）の学習には、人がどう観て、判断し、動いたかを記録したデータが必要です。一方、看護の領域では患者のプライバシーを守る観点から実際の現場を撮影することが難しく、質の高いデータが世界的に不足しています。"
              : "Since September 2026, peaceful has been collecting and structuring egocentric (first-person) video data from nurses. Training AI that perceives, decides, and acts in the physical world (physical AI) requires data that records how people observe, judge, and move. In nursing, however, filming real clinical settings is difficult because of patient privacy, and high-quality data is scarce worldwide."}
          </p>
        </section>

        {/* Approach Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "進め方" : "How We Work"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              APPROACH
            </span>
          </div>
          <ul className="list-disc space-y-4 border-l-2 border-neon-blue/30 pl-10 text-base leading-relaxed text-foreground/90 marker:text-neon-blue md:text-lg">
            <li>
              {lang === "ja"
                ? "この取り組みでは、実際の患者さんを撮影するのではなく、看護師資格を持つ自社メンバーが模擬環境で看護ケアを実演し、その視点の映像を記録します。"
                : "In this initiative, rather than filming real patients, our own staff members who are licensed nurses demonstrate nursing care in a simulated environment, and we record video from their point of view."}
            </li>
            <li>
              {lang === "ja"
                ? "映像だけでなく、何を観察し、どう判断したかを本人が言語化し、構造化データとして整えます。"
                : "Beyond the video itself, the nurses describe in their own words what they observed and how they made their decisions, and we organize this into structured data."}
            </li>
          </ul>
        </section>

        {/* Relation to NURVIS Section */}
        <section
          className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "NURVISとの関係" : "Relation to NURVIS"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              RELATION TO NURVIS
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "この研究は、NURVISの開発と並行して進めている取り組みです。"
              : "This research is an effort we pursue alongside the development of NURVIS."}
          </p>
        </section>

        {/* Goal Section */}
        <section
          className={`transition-all duration-1000 delay-[900ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "目指すこと" : "Our Aim"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              GOAL
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "日本の看護実践に蓄積された暗黙知を、AIが学べるデータとして残し、次の時代の医療の基盤づくりにつなげます。"
              : "We aim to preserve the tacit knowledge built up in Japanese nursing practice as data that AI can learn from, and to help lay the foundation for the next era of healthcare."}{" "}
            <Link
              href="/news/13"
              className="inline-flex items-center gap-1 text-neon-blue hover:text-white transition-colors underline underline-offset-4 font-medium"
            >
              {lang === "ja" ? "詳しくはこちら" : "Read more"}
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}
