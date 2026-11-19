// 区切りの帯（扇・花・三角）。模様は見本の SVG をそのまま public/images/hp/ に置いた物
export default function Band({ src, className }: { src: string; className?: string }) {
  return (
    <div className={className ? `bandw ${className}` : "bandw"} aria-hidden="true">
      <img className="band" src={src} alt="" />
    </div>
  )
}
