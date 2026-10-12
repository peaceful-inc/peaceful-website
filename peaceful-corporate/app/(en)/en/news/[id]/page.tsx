import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { newsData } from "@/lib/news-data"
import NewsDetailContent from "@/components/news-detail-content"
import JsonLd from "@/components/json-ld"
import { newsArticleJsonLd, pageMetadata, plainTextSummary } from "@/lib/seo"

interface NewsDetailPageProps {
    params: Promise<{
        id: string
    }>
}

export function generateStaticParams() {
    return newsData.map((news) => ({
        id: news.id,
    }))
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
    const { id } = await params
    const newsItem = newsData.find((item) => item.id === id)
    if (!newsItem) return {}

    return pageMetadata({
        lang: "en",
        path: `/news/${newsItem.id}`,
        title: `${newsItem.titleEn} | peaceful`,
        description: plainTextSummary(newsItem.contentEn),
    })
}

export default async function NewsDetailPageEn({ params }: NewsDetailPageProps) {
    const { id } = await params
    const newsItem = newsData.find((item) => item.id === id)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <JsonLd data={newsArticleJsonLd("en", newsItem)} />
            <NewsDetailContent newsItem={newsItem} />
        </>
    )
}
