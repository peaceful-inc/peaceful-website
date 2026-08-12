"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"

export default function CompanyContent() {
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
          {lang === 'ja' ? '我々について' : 'ABOUT US'}
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">{lang === 'ja' ? 'ABOUT US' : 'WHO WE ARE'}</span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* CEO Message Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '代表メッセージ' : 'CEO MESSAGE'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">MESSAGE</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? 'CEOは、医療の最前線にいた一人の当事者です。そこで見たのは、誇り高き専門家たちが、その能力の多くを本質的ではない業務に奪われているという現実でした。「我々の仕事は、こんなものではないはずだ」。その葛藤が、peacefulの原点です。'
              : 'The CEO is an individual who has been on the front lines of healthcare. What was seen there was the reality that proud professionals were having much of their ability stolen by non-essential tasks. "Our work should not be like this." That conflict is the origin of peaceful.'}
          </p>
        </section>

        {/* Philosophy Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '我々の哲学' : 'OUR PHILOSOPHY'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">PHILOSOPHY</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? '我々は、テクノロジーの会社である前に、医療への深いリスペクトを持つ一人の「当事者」です。AIは、決して人間に取って代わるものではありません。人間を、人間にしかできない、最も価値ある仕事へと解放するための、最高のパートナーであると信じています。第一原則思考に基づき、あらゆる非効率を根絶し、医療従事者と患者、双方のポテンシャルが最大化される未来を設計します。'
              : 'Before being a technology company, we are "stakeholders" with deep respect for medicine. AI will never replace humans. We believe it is the best partner to liberate humans to do the most valuable work that only humans can do. Based on first-principles thinking, we will eradicate all inefficiencies and design a future where the potential of both medical professionals and patients is maximized.'}
          </p>
        </section>

        {/* Company Info Section */}
        <section
          className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '会社概要' : 'COMPANY PROFILE'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">PROFILE</span>
          </div>
          <dl className="space-y-4 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === 'ja' ? '社名' : 'Company Name'}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === 'ja' ? '株式会社peaceful' : 'peaceful Inc.'}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === 'ja' ? '代表取締役' : 'Representative Director'}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === 'ja' ? '陣之内 将成' : 'Masanari Jinnouchi'}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === 'ja' ? '所在地' : 'Location'}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === 'ja' ? '東京都練馬区' : 'Nerima-ku, Tokyo'}
              </dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">
                {lang === 'ja' ? '設立' : 'Established'}
              </dt>
              <dd className="text-lg text-foreground/90 md:text-xl">
                {lang === 'ja' ? '2025年' : '2025'}
              </dd>
            </div>
          </dl>
          <div className="mt-8 border-l-2 border-transparent pl-6">
            <a href="https://www.nvidia.com/en-us/startups/" target="_blank" rel="noopener noreferrer" className="inline-block transition-opacity hover:opacity-80">
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
