"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { newsData } from "@/lib/news-data"
import { useLanguage, useLocalePath } from "@/components/language-context"

const displayedNews = newsData.slice(0, 3)

export default function NewsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const { lang } = useLanguage()
    const localePath = useLocalePath()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("news-section")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return (
        <section id="news-section" className="relative z-10 flex min-h-[50vh] flex-col justify-center px-8 py-24 bg-background">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-12 flex items-baseline justify-between">
                    <h2
                        className={`font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                        style={{
                            textShadow: isVisible
                                ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2)"
                                : "none",
                        }}
                    >
                        News
                    </h2>

                </div>

                <div className="space-y-6 border-l-2 border-neon-blue/30 pl-4 md:pl-6">

                    {displayedNews.map((item, index) => (
                        <Link key={item.id} href={localePath(`/news/${item.id}`)} className="group block">
                            <article
                                className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${500 + index * 200}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                                    <time className="mb-1 text-xs md:text-sm font-medium text-neon-blue/60 transition-colors group-hover:text-neon-blue md:mb-0">
                                        {item.date}
                                    </time>
                                    <h3 className="text-lg md:text-xl md:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-neon-blue">
                                        {lang === 'en' ? item.titleEn : item.title}
                                    </h3>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className={`mt-10 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <Link
                        href={localePath("/news")}
                        className="group relative px-6 py-2 text-sm font-medium text-white transition-all hover:text-neon-blue"
                    >
                        <span className="relative z-10">{lang === 'en' ? "VIEW ALL NEWS" : "ニュース一覧"}</span>
                        <span className="absolute inset-0 border border-white/20 transition-all group-hover:border-neon-blue/50"></span>
                        <span className="absolute inset-0 bg-white/5 opacity-0 transition-all group-hover:opacity-100"></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
