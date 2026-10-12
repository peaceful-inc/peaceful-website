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
  title: "peaceful Inc. | NURVIS, an AI agent for nurses",
  description:
    "peaceful Inc. develops NURVIS, a wearable AI agent system for nurses. It drafts nursing records from what nurses say during care and lets them check procedures and drug information on the spot.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider initialLang="en">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
