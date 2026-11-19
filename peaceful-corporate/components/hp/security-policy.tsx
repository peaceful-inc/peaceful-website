import HpPage from "@/components/hp/hp-page"
import SiteHeader from "@/components/hp/site-header"
import SiteFooter from "@/components/hp/site-footer"
import Band from "@/components/hp/band"
import "@/components/hp/css/security-policy.css"

const policies = [
  { h: "経営者の責任", t: "当社は、経営者が主導して情報セキュリティに取り組み、そのために必要な体制と資源を確保します。" },
  { h: "体制の整備と目標の設定", t: "当社は、情報セキュリティの責任者を置きます。お預かりする情報のリスクを評価したうえで目標を定め、その達成状況を定期的に確かめます。" },
  {
    h: "役員・従業員と委託先の取り組み",
    t: "当社の役員と従業員は、情報セキュリティに必要な知識と技術を身につけ、日々の業務で実践します。業務を外部に委託する場合は、委託先にも当社と同じ水準の対策を求め、その状況を管理します。",
  },
  {
    h: "法令・ガイドライン・契約の順守",
    t: "当社は、個人情報の保護に関する法律をはじめとする法令、厚生労働省「医療情報システムの安全管理に関するガイドライン」、経済産業省・総務省「医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン」、およびお客様との契約で定めた情報セキュリティに関する事項を守ります。",
  },
  { h: "AIの安全な利用", t: "当社は、製品の開発と提供にAIを用いるにあたり、お預かりした情報がAIによって目的の外で扱われることのないよう、利用の範囲と手順を定めて管理します。" },
  {
    h: "事故への対応",
    t: "当社は、情報セキュリティ上の事故が起きた場合、または起きるおそれがある場合は、速やかに原因を調べて被害を最小限にとどめ、関係者へ報告するとともに、再発の防止に努めます。",
  },
  { h: "継続的な改善", t: "当社は、以上の取り組みを定期的に見直し、情報セキュリティの仕組みを継続して改善します。" },
]

// 情報セキュリティ基本方針（日本語のみ。英語のページは無い）
export default function SecurityPolicyPage() {
  return (
    <HpPage page="security-policy">
      <div className="in">
        <SiteHeader lang="ja" hasEnglish={false} />

        <section aria-label="情報セキュリティ基本方針" className="head end">
          <h1 className="ttl">情報セキュリティ基本方針</h1>
          <p className="ttl-e" lang="en">
            Information Security Policy
          </p>
          <p className="lead-p">
            株式会社peaceful（以下「当社」）は、看護と介護の現場を支えるAIエージェントの開発と提供を通じて、医療機関や介護事業所の患者・利用者の情報と、そこで働く職員の情報をお預かりしています。当社は、これらの情報を事故、災害、犯罪などの脅威から守ることを経営の重要な課題と位置づけ、次の方針に基づいて情報セキュリティに取り組みます。
          </p>
          <div className="pol">
            {policies.map((x, i) => (
              <div key={x.h} className="pi">
                <h2>
                  <span>{i + 1}</span>
                  {x.h}
                </h2>
                <p>{x.t}</p>
              </div>
            ))}
          </div>
          <div className="sign">
            <p>2026年10月18日 制定</p>
            <p>
              株式会社peaceful <span style={{ whiteSpace: "nowrap" }}>代表取締役 陣之内 将成</span>
            </p>
          </div>
        </section>

        <Band src="/images/hp/band-security-policy-1.svg" />
        <SiteFooter lang="ja" />
      </div>
    </HpPage>
  )
}
