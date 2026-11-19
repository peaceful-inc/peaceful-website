// NURVIS の読み「ナービス」のルビ（日本語のページの見出しだけ。2026-11-09 MJ の決め、PR #53）
export default function NurvisYomi({ ja }: { ja: boolean }) {
  if (!ja) return <>NURVIS</>
  return (
    <ruby className="yomi">
      NURVIS
      <rt>ナービス</rt>
    </ruby>
  )
}
