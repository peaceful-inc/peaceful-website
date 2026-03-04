"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"

export default function ProductContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
          NURVIS
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            {lang === 'ja'
              ? '看護師の能力を拡張するAIエージェント'
              : 'AI Agent Extending Nurse Capabilities'}
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
              {lang === 'ja' ? '概要' : 'OVERVIEW'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">WHAT IT IS</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? 'NURVISは、単なる記録ツールではない。あなたの「第二の脳」として、常に隣で思考を続ける、能動的なAIエージェントです。'
              : 'NURVIS is not just a recording tool. It is an active AI agent that serves as your "Second Brain," constantly thinking alongside you.'}
          </p>
        </section>

        {/* Value Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '提供価値' : 'VALUE'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">WHAT IT DOES</span>
          </div>

          {/* Value Points */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === 'ja' ? '思考を止めない' : 'Uninterrupted Thinking'}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === 'ja'
                  ? 'ハンズフリー・アイズフリーのUXで、患者ケアに集中したまま、記録・情報アクセス・判断支援をリアルタイムで実行。'
                  : 'Real-time recording, information access, and decision support with a hands-free, eyes-free UX, allowing you to stay focused on patient care.'}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === 'ja' ? '暗黙知を構造化' : 'Structuring Tacit Knowledge'}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === 'ja'
                  ? 'あなたの「気づき」や「判断プロセス」そのものを、独自のFPP（First Person Perspective）データとして収集・解析。'
                  : 'Collecting and analyzing your "noticing" and "judgment processes" themselves as unique FPP (First Person Perspective) data.'}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === 'ja' ? '判断を支援' : 'Decision Support'}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === 'ja'
                  ? '蓄積されたデータを基に、臨床判断を支援するインサイト（洞察）を提供。あなたの能力を拡張します。'
                  : 'Providing insights to support clinical judgment based on accumulated data. Extending your capabilities.'}
              </p>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section
          className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '未来' : 'THE FUTURE'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">THE FUTURE</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? 'NURVISが収集する世界唯一のFPPデータは、我々が開発するフィジカルAI（看護ヒューマノイド）の基盤となります。あなたの今日の仕事が、明日のあなたの最高のパートナーを育てる。peacefulは、その未来を実現する、最初のパートナーです。'
              : 'The world\'s only FPP data collected by NURVIS will serve as the foundation for the physical AI (nursing humanoids) we are developing. Your work today nurtures your best partner of tomorrow. peaceful is the first partner to realize that future.'}
          </p>
        </section>

        {/* Video Section */}
        <section
          className={`transition-all duration-1000 delay-[900ms] w-full flex flex-col items-center ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="w-full max-w-3xl relative aspect-video mt-4 mb-2 rounded-xl overflow-hidden border border-neon-blue/20 shadow-[0_0_30px_rgba(96,165,250,0.1)]">
            <iframe src="https://www.youtube.com/embed/LwRxlmNrVsI?si=Yogf280wVeGlyJHA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute top-0 left-0 w-full h-full"></iframe>
          </div>
          <p className="text-xs text-foreground/60 mt-2">モデル: 胡桃あやか様@sllow</p>
        </section>
      </div>
    </div>
  )
}
