"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function ProductContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (lang === "ja") {
      document.title = "NURVIS｜看護師向けAIエージェント｜peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "骨伝導イヤホンとスマートフォンで身につける看護師向けAIエージェントNURVIS。話した内容を看護記録の文章に整え、看護手順や薬剤情報をその場で確認できます。"
        )
      }
    } else {
      document.title = "NURVIS | AI Agent for Nurses | peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "NURVIS is an AI agent for nurses, worn through a bone-conduction earphone and a smartphone. It turns what nurses say into nursing-record text and lets them check procedures and drug information on the spot."
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
          NURVIS
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            {lang === "ja"
              ? "看護師の能力を拡張するAIエージェント"
              : "AI Agent Extending Nurse Capabilities"}
          </span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* 2. Overview Section (WHAT IT IS) */}
        <section
          className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "概要" : "OVERVIEW"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              WHAT IT IS
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "NURVISは、骨伝導イヤホンとスマートフォンを通じて看護師が身につけるAIエージェントです。ケアをしながら話した内容を看護記録の文章に整え、看護手順や薬剤情報をその場で確かめられるようにします。目指すのは音声入力の道具ではなく、看護師の思考に寄り添い、必要な情報を必要なときに差し出す「右腕」です。"
              : "NURVIS is an AI agent that nurses wear through a bone-conduction earphone and a smartphone. It turns what nurses say during care into nursing-record text and lets them check nursing procedures and drug information on the spot. Rather than a voice-input tool, NURVIS aims to be a nurse's right hand: staying close to their thinking and offering the information they need, when they need it."}
          </p>
        </section>

        {/* 3. What It Does Section (WHAT IT DOES) */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "できること" : "WHAT IT DOES"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              WHAT IT DOES
            </span>
          </div>

          {/* Cards */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja" ? "話すだけで記録" : "Record by speaking"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja"
                  ? "話した内容がその場で文字になり、看護記録の文章に整えられます。看護師が確認して、電子カルテに貼り付けます"
                  : "What you say is transcribed on the spot and shaped into nursing-record text. Nurses review it and paste it into the electronic health record."}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja" ? "その場で確認" : "Check on the spot"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja"
                  ? "看護手順や薬剤情報を声で聞けます。答えには出典が添えられます"
                  : "Ask about nursing procedures and drug information by voice. Answers come with their sources."}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja" ? "端末の中で伏せる" : "Masked on the device"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja"
                  ? "名前などを端末の中で伏せてから、クラウドへ送ります"
                  : "Names and other identifiers are masked on the device before anything is sent to the cloud."}
              </p>
            </div>
          </div>
        </section>

        {/* 4. How It Works Section (HOW IT WORKS) */}
        <section
          className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "使い方" : "HOW IT WORKS"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              HOW IT WORKS
            </span>
          </div>

          {/* 4 Steps */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">1</span>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {lang === "ja"
                    ? "イヤホンのボタンを1回押して、ケアの内容を話す"
                    : "Press the earphone button once and describe the care you are giving."}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">2</span>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {lang === "ja"
                    ? "端末の中で文字になり、名前などを伏せてからクラウドへ送られる"
                    : "Your speech is transcribed on the device, and names and other identifiers are masked before it is sent to the cloud."}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">3</span>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {lang === "ja"
                    ? "看護記録の文章に整えられ、看護師が確認して電子カルテに貼り付ける"
                    : "The text is shaped into a nursing record; the nurse reviews it and pastes it into the electronic health record."}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">4</span>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {lang === "ja"
                    ? "知りたいことはボタンを2回押して質問し、答えを音声と画面で受け取る"
                    : "To ask a question, press the button twice and receive the answer by voice and on screen."}
                </p>
              </div>
            </div>
          </div>

          {/* Demo Video */}
          <div className="mt-8 w-full flex flex-col items-center">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-neon-blue/20 shadow-[0_0_30px_rgba(96,165,250,0.1)] bg-black">
              <video
                src="/videos/nurvis-demo.mp4"
                controls
                preload="metadata"
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <p className="w-full text-left text-xs text-foreground/60 mt-2">
              {lang === "ja"
                ? "動画の一部は画面イメージです"
                : "Parts of this video are screen mockups."}
            </p>
          </div>
        </section>

        {/* 5. Privacy Section (PRIVACY) */}
        <section
          className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "安全への配慮" : "PRIVACY"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              PRIVACY
            </span>
          </div>

          <ul className="space-y-4 border-l-2 border-neon-blue/30 pl-6">
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
              <span className="mr-3 text-neon-blue">・</span>
              <span>
                {lang === "ja"
                  ? "音声は端末の中で文字にし、音声そのものは端末の外に出しません"
                  : "Speech is transcribed on the device; the audio itself never leaves the device."}
              </span>
            </li>
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
              <span className="mr-3 text-neon-blue">・</span>
              <span>
                {lang === "ja"
                  ? "データは国内で保管します"
                  : "Data is stored in Japan."}
              </span>
            </li>
            <li className="flex items-start text-base leading-relaxed text-foreground/90 md:text-lg">
              <span className="mr-3 text-neon-blue">・</span>
              <span>
                {lang === "ja"
                  ? "記録の確定と臨床判断は看護師が行います。NURVISの答えは一般的な情報で、実施にあたっては所属施設の手順が優先されます"
                  : "Nurses finalize records and make clinical judgments. NURVIS's answers are general information, and your facility's procedures take precedence in practice."}
              </span>
            </li>
          </ul>

          <p className="text-xs text-foreground/60 mt-4 pl-6">
            {lang === "ja"
              ? "※記載の内容は掲載時点のものです。仕様は予告なく変更することがあります"
              : "*The information on this page is current as of publication. Specifications are subject to change without notice."}
          </p>
        </section>

        {/* 6. Introduction Section (INTRODUCTION) */}
        <section
          className={`transition-all duration-1000 delay-[900ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "導入の流れ" : "INTRODUCTION"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              INTRODUCTION
            </span>
          </div>

          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">1</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground md:text-xl inline mr-2">
                    {lang === "ja" ? "ご相談：" : "Consultation: "}
                  </h3>
                  <span className="text-base leading-relaxed text-foreground/90 md:text-lg">
                    {lang === "ja"
                      ? "現場の記録業務と課題をうかがいます"
                      : "We learn about your documentation work and challenges."}
                  </span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">2</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground md:text-xl inline mr-2">
                    {lang === "ja" ? "試験導入：" : "Trial: "}
                  </h3>
                  <span className="text-base leading-relaxed text-foreground/90 md:text-lg">
                    {lang === "ja"
                      ? "病棟を決め、実際の業務で使っていただきます"
                      : "Choose a ward and use NURVIS in daily work."}
                  </span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">3</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground md:text-xl inline mr-2">
                    {lang === "ja" ? "効果の確認：" : "Evaluation: "}
                  </h3>
                  <span className="text-base leading-relaxed text-foreground/90 md:text-lg">
                    {lang === "ja"
                      ? "記録にかかる時間などを測ります"
                      : "We measure effects such as time spent on documentation."}
                  </span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neon-blue md:text-2xl">4</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground md:text-xl">
                    {lang === "ja" ? "本導入" : "Full deployment"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Case Section (CASE) */}
        <section
          className={`transition-all duration-1000 delay-[1000ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "実証" : "CASE"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              CASE
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "洛和会丸太町病院（京都市）との共同実証を2026年8月に開始しました。看護師がNURVISを日常の看護業務で使い、記録業務の負担軽減に加えて、看護の質や働き方への影響を検証します。"
              : "In August 2026, we began a joint demonstration study with Rakuwakai Marutamachi Hospital (Kyoto). Nurses use NURVIS in their daily work, and the study examines its effects on documentation burden as well as on the quality of care and nurses' working styles."}{" "}
            <Link
              href="/news/12"
              className="inline-flex items-center gap-1 text-neon-blue hover:text-white transition-colors underline underline-offset-4 font-medium"
            >
              {lang === "ja" ? "詳しくはこちら" : "Read more"}
            </Link>
          </p>
        </section>

        {/* 8. FAQ Section (FAQ) */}
        <section
          className={`transition-all duration-1000 delay-[1100ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "よくある質問" : "FAQ"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              FAQ
            </span>
          </div>

          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja"
                  ? "Q 電子カルテと連携していますか"
                  : "Q Does it work with electronic health records?"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja"
                  ? "A NURVISが整えた記録を、看護師が確認して電子カルテに貼り付ける形です"
                  : "A Nurses review the records NURVIS prepares and paste them into the electronic health record."}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja"
                  ? "Q 音声はどこに送られますか"
                  : "Q Where is the audio sent?"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja"
                  ? "A 音声は端末の中で文字にし、音声そのものは端末の外に出しません"
                  : "A Speech is transcribed on the device; the audio itself never leaves the device."}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja"
                  ? "Q どの端末で使えますか"
                  : "Q What devices does it use?"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja"
                  ? "A 市販の骨伝導イヤホンとスマートフォンで使います"
                  : "A A commercially available bone-conduction earphone and a smartphone."}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === "ja"
                  ? "Q 費用はどのくらいですか"
                  : "Q How much does it cost?"}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === "ja" ? (
                  <>
                    A 病棟の規模や導入の形に合わせてご提案します。
                    <a
                      href="https://forms.gle/nFwkK24V1MNS1EL18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:text-white underline underline-offset-4 transition-colors font-medium ml-1"
                    >
                      お問い合わせください
                    </a>
                  </>
                ) : (
                  <>
                    A We propose a plan based on the size of your wards and how you deploy it.{" "}
                    <a
                      href="https://forms.gle/nFwkK24V1MNS1EL18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-blue hover:text-white underline underline-offset-4 transition-colors font-medium"
                    >
                      Please contact us.
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* 9. The Future Section (THE FUTURE) */}
        <section
          className={`transition-all duration-1000 delay-[1200ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === "ja" ? "これから" : "THE FUTURE"}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              THE FUTURE
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === "ja"
              ? "NURVISが目指すのは、記録の負担を減らすことだけではありません。これまで言語化されてこなかった看護師の判断やケアを可視化し、次の世代へ受け継ぐことです。"
              : "NURVIS aims to do more than reduce the burden of documentation. It seeks to make visible the judgment and care of nurses that have gone unspoken, and to pass them on to the next generation."}
          </p>
        </section>

        {/* 10. Video Section (YouTube Embed) */}
        <section
          className={`transition-all duration-1000 delay-[1300ms] w-full flex flex-col items-center ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="w-full max-w-3xl relative aspect-video mt-4 mb-2 rounded-xl overflow-hidden border border-neon-blue/20 shadow-[0_0_30px_rgba(96,165,250,0.1)]">
            <iframe
              src="https://www.youtube.com/embed/LwRxlmNrVsI?si=Yogf280wVeGlyJHA&autoplay=1&mute=1&loop=1&playlist=LwRxlmNrVsI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-xs text-foreground/60 mt-2">モデル: 胡桃あやか様@sllow</p>
        </section>
      </div>
    </div>
  )
}
