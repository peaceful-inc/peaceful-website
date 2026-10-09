"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: lang === 'ja' ? 'Vision' : 'Vision', href: "/vision" },
    { name: lang === 'ja' ? 'Product' : 'Product', href: "/product" },
    { name: lang === 'ja' ? 'Research' : 'Research', href: "/research" },
    { name: lang === 'ja' ? 'Company' : 'Company', href: "/company" },
    { name: lang === 'ja' ? 'News' : 'News', href: "/news" },
    { name: lang === 'ja' ? 'Contact' : 'Contact', href: "https://forms.gle/nFwkK24V1MNS1EL18", external: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="peaceful"
            width={180}
            height={50}
            className="h-8 w-auto md:h-12 object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden relative z-50 text-foreground hover:text-neon-blue transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.name}
                {hoveredItem === item.name && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-neon-blue shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                )}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2 text-sm font-medium">
            <button
              onClick={() => setLang('ja')}
              className={`transition-colors ${lang === 'ja' ? 'text-neon-blue' : 'text-foreground/60 hover:text-foreground'}`}
            >
              JP
            </button>
            <span className="text-foreground/40">/</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${lang === 'en' ? 'text-neon-blue' : 'text-foreground/60 hover:text-foreground'}`}
            >
              EN
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-2xl font-bold tracking-tight text-foreground/80 transition-colors hover:text-neon-blue"
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-4 text-xl font-bold mt-4">
              <button
                onClick={() => {
                  setLang('ja')
                  setIsMenuOpen(false)
                }}
                className={`transition-colors ${lang === 'ja' ? 'text-neon-blue' : 'text-foreground/60 hover:text-foreground'}`}
              >
                JP
              </button>
              <span className="text-foreground/40">/</span>
              <button
                onClick={() => {
                  setLang('en')
                  setIsMenuOpen(false)
                }}
                className={`transition-colors ${lang === 'en' ? 'text-neon-blue' : 'text-foreground/60 hover:text-foreground'}`}
              >
                EN
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
