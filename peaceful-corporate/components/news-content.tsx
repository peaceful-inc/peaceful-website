"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { newsData } from "@/lib/news-data"

import { useLanguage, useLocalePath } from "@/components/language-context"

export default function NewsContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()
  const localePath = useLocalePath()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* Page Title */}
      <div className="mb-20 w-full max-w-5xl">
        <h1
          className={`text-center font-bold tracking-tight transition-all duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } text-5xl md:text-6xl lg:text-7xl`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          {lang === 'en' ? 'News' : 'ニュース一覧'}
        </h1>
      </div>

      {/* News List */}
      <div className="w-full max-w-4xl space-y-8">
        {newsData.map((item, index) => (
          <Link key={item.id} href={localePath(`/news/${item.id}`)} className="block group">
            <article
              className={`cursor-pointer border-l-2 border-transparent pl-6 transition-all duration-1000 hover:border-neon-blue ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <time className="mb-2 block text-sm font-medium text-neon-blue/60 transition-colors group-hover:text-neon-blue md:text-base">
                {item.date}
              </time>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-neon-blue md:text-3xl">
                {lang === 'en' ? item.titleEn : item.title}
              </h2>
              <div
                className="text-base leading-relaxed text-foreground/80 md:text-lg line-clamp-2"
                dangerouslySetInnerHTML={{ __html: lang === 'en' ? item.contentEn : item.content }}
              />
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
