"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage, useLocalePath } from "@/components/language-context"
import { NewsItem } from "@/lib/news-data"

interface NewsDetailContentProps {
    newsItem: NewsItem
}

export default function NewsDetailContent({ newsItem }: NewsDetailContentProps) {
    const { lang } = useLanguage()
    const localePath = useLocalePath()

    return (
        <div className="flex min-h-screen flex-col bg-black text-white selection:bg-neon-blue selection:text-black">
            <Header />

            <main className="container relative z-10 mx-auto flex-1 px-4 py-32 md:py-40">
                <div className="mx-auto max-w-4xl">
                    <Button variant="ghost" asChild className="group mb-12 pl-0 text-gray-400 hover:bg-transparent hover:text-white">
                        <Link href={localePath("/")} className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            <span className="text-sm font-medium tracking-wider">
                                {lang === 'en' ? "BACK TO HOME" : "ホームに戻る"}
                            </span>
                        </Link>
                    </Button>

                    <article className="animate-fade-in-up">
                        <div className="mb-8 flex items-center gap-4 text-sm tracking-wider text-gray-400">
                            <time dateTime={newsItem.date.replace(/\./g, "-")}>{newsItem.date}</time>
                            <span className="h-px w-8 bg-gray-700"></span>
                            <span className="uppercase text-neon-blue tracking-widest text-xs">
                                {newsItem.category}
                            </span>
                        </div>

                        <h1 className="mb-12 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl text-glow-white">
                            {lang === 'en' ? newsItem.titleEn : newsItem.title}
                        </h1>

                        <div
                            className="prose prose-invert prose-lg max-w-none 
              prose-p:leading-relaxed prose-p:text-gray-300 prose-p:font-light 
              text-justify break-words"
                            dangerouslySetInnerHTML={{ __html: lang === 'en' ? newsItem.contentEn : newsItem.content }}
                        />
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    )
}
