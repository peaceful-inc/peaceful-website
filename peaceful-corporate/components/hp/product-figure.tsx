import type { Lang } from "@/lib/seo"

// トップとProductの製品の絵。広い幅は四角のタイルの壁つき、スマートフォンの幅は絵だけ
export default function ProductFigure({ lang, page }: { lang: Lang; page: "top" | "product" }) {
  const ja = lang === "ja"
  return (
    <div className="sp-fig">
      <img
        className="wallfig"
        src={`/images/hp/wall-${page}.svg`}
        width={1232}
        height={660}
        alt={ja ? "白いタイルの壁の前に置いた、骨伝導イヤホンとスマートフォンの絵" : "Illustration of a bone-conduction earphone and a smartphone in front of a white tiled wall"}
      />
      <img
        className="fig"
        src={`/images/hp/fig-${page}.svg`}
        width={1200}
        height={760}
        alt={
          ja
            ? "骨伝導イヤホン（耳の前に当てる2つの部分を、頭の後ろを回るバンドでつないだ形）とスマートフォン"
            : "A bone-conduction earphone (two parts that rest in front of the ears, joined by a band that goes around the back of the head) and a smartphone"
        }
      />
    </div>
  )
}
