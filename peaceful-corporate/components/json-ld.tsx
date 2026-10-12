// 構造化データ（JSON-LD）。サーバー側で、最初に返る HTML に入れる
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": items }).replace(/</g, "\\u003c"),
      }}
    />
  )
}
