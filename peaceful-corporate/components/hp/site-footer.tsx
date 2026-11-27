import type { Lang } from "@/lib/seo"
import { CONTACT_URL, PRIVACY_PATH, SECURITY_POLICY_PATH } from "@/components/hp/links"

export default function SiteFooter({ lang, modelCredit = false }: { lang: Lang; modelCredit?: boolean }) {
  const ja = lang === "ja"
  return (
    <footer className="ft">
      <div className="ft-a">
        <img src="/logo.png" alt="peaceful" />
        <nav aria-label={ja ? "サイトの決まり" : "Site policies"} className="ft-nav">
          <a href={PRIVACY_PATH}>{ja ? "プライバシーポリシー" : "Privacy Policy"}</a>
          <a href={SECURITY_POLICY_PATH}>{ja ? "情報セキュリティ基本方針" : "Information Security Policy"}</a>
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            {ja ? "お問い合わせ" : "Contact"}
          </a>
        </nav>
      </div>
      <div className="ft-b">
        {modelCredit && <p>{ja ? "トップの動画のモデル：胡桃あやか様" : "Model in the top video: 胡桃あやか"}</p>}
        <p>© peaceful inc.</p>
      </div>
    </footer>
  )
}
