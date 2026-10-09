import { notFound } from "next/navigation"

import { newsData } from "@/lib/news-data"
import NewsDetailContent from "@/components/news-detail-content"

interface NewsDetailPageProps {
    params: Promise<{
        id: string
    }>
}

// NOTE: generateStaticParams works with Client Components in Next.js App Router
export function generateStaticParams() {
    return newsData.map((news) => ({
        id: news.id,
    }))
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
    const { id } = await params
    const newsItem = newsData.find((item) => item.id === id)

    if (!newsItem) {
        notFound()
    }

    return <NewsDetailContent newsItem={newsItem} />
}
