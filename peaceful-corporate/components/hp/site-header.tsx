"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"
import { localizePath, type Lang } from "@/lib/seo"
import { CONTACT_URL } from "@/components/hp/links"
import "@/components/hp/css/common.css"

export type NavKey = "vision" | "product" | "research" | "company" | "news"

const NAV: { key: NavKey; name: string; path: string }[] = [
  { key: "vision", name: "Vision", path: "/vision" },
  { key: "product", name: "Product", path: "/product" },
  { key: "research", name: "Research", path: "/research" },
  { key: "company", name: "Company", path: "/company" },
  { key: "news", name: "News", path: "/news" },
]

const gold = { borderColor: "var(--pf-gold)" }

export default function SiteHeader({
  lang,
  current,
  hasEnglish = true,
}: {
  lang: Lang
  current?: NavKey
  hasEnglish?: boolean
}) {
  const pathname = usePathname() ?? "/"
  const [open, setOpen] = useState(false)

  // JA / EN の切り替え先は、同じページの別の言語のURL（英語のページが無いページは英語のトップ）
  const jaPath = lang === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname
  const enPath = lang === "en" ? pathname : hasEnglish ? localizePath("en", pathname) : "/en"

  const langLinks = (
    <>
      <Link href={jaPath} aria-current={lang === "ja" ? "page" : undefined} style={lang === "ja" ? undefined : { color: "var(--pf-warm-gray)" }}>
        JA
      </Link>
      <span aria-hidden="true" style={{ color: "var(--pf-gray)" }}>
        /
      </span>
      <Link href={enPath} aria-current={lang === "en" ? "page" : undefined} style={lang === "en" ? undefined : { color: "var(--pf-warm-gray)" }}>
        EN
      </Link>
    </>
  )

  return (
    <header className="hd">
      <Link href={localizePath(lang, "/")} className="hd-logo">
        <img src="/logo.png" alt="peaceful" />
      </Link>
      <nav aria-label={lang === "ja" ? "サイトの案内" : "Site navigation"} className="nav">
        {NAV.map((item) =>
          item.key === current ? (
            <Link key={item.key} href={localizePath(lang, item.path)} className="pl cur" aria-current="page" style={gold}>
              {item.name}
            </Link>
          ) : (
            <Link key={item.key} href={localizePath(lang, item.path)} className="pl">
              {item.name}
            </Link>
          ),
        )}
        <button type="button" className="menu" aria-expanded={open} aria-controls="hp-menu" onClick={() => setOpen(true)}>
          Menu
        </button>
        <div className="lang">{langLinks}</div>
        <a href={CONTACT_URL} className="contact" style={gold} target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </nav>

      <div id="hp-menu" className={`hp-menu${open ? " open" : ""}`} hidden={!open}>
        <button type="button" className="hp-menu-close" aria-label={lang === "ja" ? "閉じる" : "Close"} onClick={() => setOpen(false)}>
          <X size={28} strokeWidth={1.5} />
        </button>
        <ul>
          {NAV.map((item) => (
            <li key={item.key}>
              <Link
                href={localizePath(lang, item.path)}
                aria-current={item.key === current ? "page" : undefined}
                style={item.key === current ? gold : undefined}
                className={item.key === current ? "cur" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
          <li className="hp-menu-lang">{langLinks}</li>
        </ul>
      </div>
    </header>
  )
}
