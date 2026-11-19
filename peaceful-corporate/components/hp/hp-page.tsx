import type React from "react"

// 白と金のページの外側。しっぽり明朝は public/fonts/shippori-mincho/ から読む（Google Fonts にはつながない）
export default function HpPage({ page, children }: { page: string; children: React.ReactNode }) {
  return (
    <div className={`pg hp-${page}`}>
      <link rel="stylesheet" href="/fonts/shippori-mincho/shippori-mincho.css" precedence="default" />
      {children}
    </div>
  )
}
