"use client"

import type React from "react"
import { useEffect, useRef } from "react"

// トップの4行の見出し：画面に3割入った時に1行ずつ出す。動きを減らす設定の人には最初から全部見せる
export default function LeadReveal({ label, children }: { label: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") return
    el.classList.add("armed")
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          el.classList.add("on")
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section ref={ref} aria-label={label} className="lead">
      {children}
    </section>
  )
}
