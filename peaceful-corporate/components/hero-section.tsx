"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"

const messagesJa = ["その手の温もり、", "語りかける声。", "我々の葛藤のすべてが、", "次世代への礎となる。"]
const messagesEn = [
  "The warmth of a hand,",
  "the sound of a voice.",
  "Our struggles today lay the foundation",
  "for the next generation.",
]

export default function HeroSection() {
  const { lang } = useLanguage()
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  const messages = lang === "ja" ? messagesJa : messagesEn

  // Reset animation when language changes
  useEffect(() => {
    setVisibleLines([])
    const timings = [500, 1200, 2500, 3200]
    const timeouts: ReturnType<typeof setTimeout>[] = []

    messages.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => {
          if (!prev.includes(index)) {
            return [...prev, index]
          }
          return prev
        })
      }, timings[index])
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [lang, messages])

  return (
    <section className="flex min-h-screen items-center justify-center px-8">
      <div className="w-full max-w-4xl mx-auto text-center">
        {messages.map((message, index) => (
          <h1
            key={`${lang}-${index}`}
            className={`font-bold leading-tight tracking-tight text-foreground transition-all duration-1000 text-3xl md:text-5xl lg:text-6xl mb-4 ${visibleLines.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            style={{
              textShadow: visibleLines.includes(index)
                ? "0 0 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.2), 0 0 90px rgba(96, 165, 250, 0.1)"
                : "none",
            }}
          >
            {message}
          </h1>
        ))}
        {/* Mission Statement */}
        <div
          className={`mt-10 text-center transition-all duration-1000 delay-500 ${visibleLines.length === messages.length ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-2 font-bold text-white/90">
            <p className="text-base md:text-lg tracking-widest">
              {lang === "ja"
                ? "AIとロボティクスで、持続可能な医療インフラを再構築する。"
                : "Reconstructing sustainable healthcare infrastructure with AI & Robotics."}
            </p>
            <p className="text-lg md:text-xl tracking-widest mt-1">
              {lang === "ja" ? (
                <>
                  看護師向けAIエージェント &quot;
                  <ruby>
                    NURVIS
                    <rt className="text-[0.6em] font-normal tracking-[0.1em]" style={{ rubyAlign: "center" }}>ナービス</rt>
                  </ruby>
                  &quot;
                </>
              ) : (
                "AI Agent for Nurses: NURVIS"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
