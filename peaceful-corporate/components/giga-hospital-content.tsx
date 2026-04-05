"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"
import Link from "next/link"

export default function GigaHospitalContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* Page Title */}
      <div className="mb-24 w-full max-w-5xl">
        <h1
          className={`text-center font-bold tracking-tight transition-all duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } text-3xl md:text-5xl lg:text-5xl leading-snug`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          {lang === 'ja' ? '街全体を、ひとつの巨大な病院へ。' : 'Turning the Entire City into a Giant Hospital.'}
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-24 flex flex-col items-center">
        {/* Section 1 */}
        <section
          className={`w-full transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-8 flex items-baseline gap-4 border-b border-neon-blue/20 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? 'なぜ今、医療の「かたち」を変えるのか' : 'Why Change the "Shape" of Healthcare Now?'}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-loose">
            {lang === 'ja' ? (
              <>
                <p>日本の病院は、これから確実に減っていきます。</p>
                <ul className="space-y-4 pl-2 sm:pl-6 bg-card/30 p-6 rounded-lg border border-neon-blue/10">
                  <li className="flex items-start">
                    <span className="mr-3 text-neon-blue">•</span>
                    <span><strong>2040年問題：</strong>高齢者人口がピークを迎える一方、支える生産年齢人口は減少し続ける。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neon-blue">•</span>
                    <span><strong>人材の枯渇：</strong>看護師の有効求人倍率はすでに2.5倍超。医療需要の増加に、人が追いつかない。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neon-blue">•</span>
                    <span><strong>国の転換：</strong>2026年、国は急性期病院の集約（人口20〜30万人に1施設）とテクノロジー活用による人員配置の緩和へ、大きく舵を切りました。</span>
                  </li>
                </ul>
                <p>巨大な箱を建てて維持するモデルは、経済的にも人的にも限界を迎えています。一部の地域では、すでに大規模病院の機能分離と広域連携による医療再編が始まっています。これは一時的なトレンドではなく、不可逆の構造変化です。</p>
                <p>しかし、病院が減ることと、医療が届かなくなることは同義ではありません。</p>
                <p>過疎地、離島、山間部——人が暮らすすべての場所に、医療は届かなければならない。これは医療政策であると同時に、国土を維持するための地政学的な要請でもあります。人が住めない土地は、国土として機能しなくなる。医療の届かない地域は、静かに消えていきます。</p>
                <p>問題の本質は明快です。ひとつの箱に集中させすぎた医療機能を、街全体に溶かし込む。機能は残し、届け方を変える。それが私たちの答え、<strong className="text-neon-blue">GIGA-HOSPITAL構想</strong>です。</p>
              </>
            ) : (
              <p>English content to be added.</p>
            )}
          </div>
        </section>

        {/* Section 2 */}
        <section
          className={`w-full transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-8 flex items-baseline gap-4 border-b border-neon-blue/20 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '「リンパ節」型の分散医療ネットワーク' : 'Lymph Node-Type Distributed Healthcare Network'}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-loose">
            {lang === 'ja' ? (
              <>
                <p>人体のリンパ系には、巨大な中央臓器が存在しません。全身に散らばった小さなリンパ節が、それぞれの持ち場で機能を果たしながらリンパ管で繋がり、ひとつの強固な防衛システムとして機能しています。</p>
                <p>GIGA-HOSPITALは、この構造を日本の医療に実装する構想です。</p>
                <ul className="space-y-4 pl-2 sm:pl-6 bg-card/30 p-6 rounded-lg border border-neon-blue/10">
                  <li className="flex items-start">
                    <span className="mr-3 text-neon-blue">•</span>
                    <span><strong>拠点病院（中央臓器）：</strong>手術室やICUなど、集約することで質が上がる高度急性期機能だけを凝縮する。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-neon-blue">•</span>
                    <span><strong>医療ノード（リンパ節）：</strong>薬局、訪問看護ステーション、小規模診療所、介護施設、そして患者の自宅。これらを街に散らばる医療拠点として再定義する。</span>
                  </li>
                </ul>
                <p>薬局は単なる調剤の場から、医療物資を支える地域の供給ハブへと役割を拡張します。看護師はステーションに出勤する代わりに、自宅から直接患者のもとへ向かい、必要な物品はハブで受け取る。通勤の概念が消え、ケアそのものに集中できる新しい働き方が生まれます。</p>
                <p>これは単なる効率化の話ではありません。看護師が「看護が好きだから、看護を続けられる」環境をつくることです。記録に追われず、移動に消耗せず、患者と向き合う時間を最大化する。働き方が変われば、この職業の魅力そのものが変わります。</p>
              </>
            ) : (
              <p>English content to be added.</p>
            )}
          </div>
        </section>

        {/* Section 3 */}
        <section
          className={`w-full transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-8 flex items-baseline gap-4 border-b border-neon-blue/20 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '分散の「弱点」を、知能で克服する' : 'Overcoming Vulnerabilities with Intelligence'}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-loose">
            {lang === 'ja' ? (
              <>
                <p>ただし、この分散ネットワークには致命的な弱点があります。拠点が散らばった瞬間、その「間」が空白になることです。</p>
                <p>病院であれば、廊下を歩けばベテランに相談できた。ナースステーションで申し送りがあった。モニターアラームが異変を知らせてくれた。しかし分散した世界では、看護師は一人で訪問し、一人で判断し、一人で帰る。</p>
                <p>リンパ節が機能するのは、リンパ管で繋がっているからです。</p>
                <p>物理的に分散しても、医療の質を落とさない。判断を孤立させない。どこにいても、まるで同じ病棟で働いているかのように、情報と知恵が行き渡る。その隙間を埋める「知能」がなければ、GIGA-HOSPITALはただの絵空事に終わります。</p>
              </>
            ) : (
              <p>English content to be added.</p>
            )}
          </div>
        </section>

        {/* Section 4 */}
        <section
          className={`w-full transition-all duration-1000 delay-[900ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-8 flex items-baseline gap-4 border-b border-neon-blue/20 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? 'peacefulが実装するもの' : 'What We Implement'}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-loose">
            {lang === 'ja' ? (
              <>
                <p>この構想を現実にするために、peacefulは存在します。</p>
                <p>分散した医療ノードの隙間をシームレスに繋ぐ知能。そして、やがてその知能を身体に宿し、人の手が届かない場所と時間にも医療を届ける技術。病院という箱の中に閉じていた医療を、街全体へと開く。その基盤となるテクノロジーを、私たちは実装します。</p>
                <p>その第一歩として、私たちは看護師向けAIエージェント「NURVIS」から始めています。</p>
                <div className="pt-6">
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 text-base font-bold tracking-widest text-neon-blue transition-colors hover:text-white md:text-lg"
                  >
                    → NURVISについて詳しく見る
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p>English content to be added.</p>
                <div className="pt-6">
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 text-base font-bold tracking-widest text-neon-blue transition-colors hover:text-white md:text-lg"
                  >
                    → Learn more about NURVIS
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Closing */}
        <div className={`mt-32 pb-20 w-full text-center transition-all duration-1000 delay-[1100ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide italic text-neon-blue">
            {lang === 'ja' ? '「病院を建てる時代から、医療を届ける時代へ。」' : '"From building hospitals, to delivering healthcare."'}
          </p>
        </div>

      </div>
    </div>
  )
}
