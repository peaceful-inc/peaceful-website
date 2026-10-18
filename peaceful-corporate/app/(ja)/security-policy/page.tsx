import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: '情報セキュリティ基本方針 | peaceful inc.',
  alternates: { canonical: '/security-policy' },
}

const policies = [
  {
    title: "1 経営者の責任",
    body: "当社は、経営者が主導して情報セキュリティに取り組み、そのために必要な体制と資源を確保します。",
  },
  {
    title: "2 体制の整備と目標の設定",
    body: "当社は、情報セキュリティの責任者を置きます。お預かりする情報のリスクを評価したうえで目標を定め、その達成状況を定期的に確かめます。",
  },
  {
    title: "3 役員・従業員と委託先の取り組み",
    body: "当社の役員と従業員は、情報セキュリティに必要な知識と技術を身につけ、日々の業務で実践します。業務を外部に委託する場合は、委託先にも当社と同じ水準の対策を求め、その状況を管理します。",
  },
  {
    title: "4 法令・ガイドライン・契約の順守",
    body: "当社は、個人情報の保護に関する法律をはじめとする法令、厚生労働省「医療情報システムの安全管理に関するガイドライン」、経済産業省・総務省「医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン」、およびお客様との契約で定めた情報セキュリティに関する事項を守ります。",
  },
  {
    title: "5 AIの安全な利用",
    body: "当社は、製品の開発と提供にAIを用いるにあたり、お預かりした情報がAIによって目的の外で扱われることのないよう、利用の範囲と手順を定めて管理します。",
  },
  {
    title: "6 事故への対応",
    body: "当社は、情報セキュリティ上の事故が起きた場合、または起きるおそれがある場合は、速やかに原因を調べて被害を最小限にとどめ、関係者へ報告するとともに、再発の防止に努めます。",
  },
  {
    title: "7 継続的な改善",
    body: "当社は、以上の取り組みを定期的に見直し、情報セキュリティの仕組みを継続して改善します。",
  },
]

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3436] flex flex-col items-center py-12 px-6 font-sans">
      {/* Logo */}
      <div className="mb-10 mt-8">
        <a href="/" className="transition-opacity hover:opacity-80 block">
          <Image
            src="/logo.png"
            alt="peaceful inc."
            width={160}
            height={44}
            className="h-10 w-auto object-contain invert"
            priority
          />
        </a>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-center">情報セキュリティ基本方針</h1>

        <div className="space-y-6 text-[15px] leading-relaxed">
          <p>
            株式会社peaceful（以下「当社」）は、看護と介護の現場を支えるAIエージェントの開発と提供を通じて、医療機関や介護事業所の患者・利用者の情報と、そこで働く職員の情報をお預かりしています。当社は、これらの情報を事故、災害、犯罪などの脅威から守ることを経営の重要な課題と位置づけ、次の方針に基づいて情報セキュリティに取り組みます。
          </p>

          {policies.map((item) => (
            <section key={item.title}>
              <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">{item.title}</h2>
              <p>{item.body}</p>
            </section>
          ))}

          <div className="mt-12 pt-8 text-right text-gray-600">
            <p>2026年10月18日 制定</p>
            <p className="mt-1">株式会社peaceful 代表取締役 陣之内 将成</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 pb-4">
        <p className="text-xs text-gray-400 font-medium">© peaceful inc.</p>
      </div>
    </div>
  )
}
