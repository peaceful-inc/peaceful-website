// 節の見出し。日本語のページだけ、英語の小さな見出しを添える（見本のとおり）
export default function SecH({ h, e, ja, className = "sec-h" }: { h: string; e: string; ja: boolean; className?: string }) {
  return (
    <div className={className}>
      <h2>{h}</h2>
      {ja && (
        <p className="h-e" lang="en">
          {e}
        </p>
      )}
    </div>
  )
}
