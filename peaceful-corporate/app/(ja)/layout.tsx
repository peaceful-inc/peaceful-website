import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-context"
import { SITE_URL } from "@/lib/seo"
import { Suspense } from "react"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "株式会社peaceful｜看護師向けAIエージェント「NURVIS」",
  description:
    "株式会社peacefulは、ウェアラブルデバイスによる看護師向けAIエージェントシステム「NURVIS」を開発しています。NURVISは、看護師がケアをしながら話した内容を看護記録の文章に整え、看護手順や薬剤情報をその場で確かめられるようにします。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider initialLang="ja">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
