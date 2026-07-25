import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'NURVIS プライバシーポリシー | peaceful inc.',
}

export default function NurvisPrivacyPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-center">NURVIS プライバシーポリシー</h1>

        <div className="space-y-6 text-[15px] leading-relaxed">
          <p>
            株式会社peaceful（以下「当社」）は、看護業務支援アプリケーション「NURVIS」（以下「本アプリ」）における情報の取扱いについて、以下のとおり定めます。
          </p>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">1. 事業者情報</h2>
            <p>
              株式会社peaceful<br />
              所在地：東京都練馬区小竹町1-39-2-103<br />
              連絡先：masanari.jinnouchi@peaceful-inc.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">2. 本アプリの性格</h2>
            <p>
              本アプリは、医療機関に勤務する看護職が業務記録の作成等に用いる業務用アプリケーションであり、導入医療機関の管理下にある端末に限定して配信されます。一般消費者向けには提供していません。本アプリは、診断の確定や治療方針の決定を行うものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">3. 取得する情報、収集方法および利用目的</h2>
            <div className="space-y-6 mt-4">
              <div>
                <h3 className="font-bold mb-2">（1）マイクからの音声</h3>
                <p className="mb-2">【収集方法】利用者が本アプリの録音機能を操作した際に、端末に接続された骨伝導イヤホン等のマイクを通じて取得します。</p>
                <p className="mb-2">【利用目的】看護記録の作成支援およびAIへの質問入力のために使用します。</p>
                <p>音声はすべて端末内で文字に変換され、音声データそのものが当社のサーバーへ送信されることはありません。端末内の音声および変換直後のテキスト（生データ）は、24時間以内に自動削除されます。</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">（2）変換後テキスト</h3>
                <p className="mb-2">【収集方法】上記（1）の音声を端末内で文字に変換し、個人を特定しうる情報（氏名・病室番号・電話番号・住所）を自動的に伏字化（マスキング）した上で、伏字化済みテキストのみを当社サーバーへ送信します。</p>
                <p className="mb-2">【利用目的】本アプリの機能提供（AIによる応答の生成および看護記録の作成支援）、ならびに本アプリの品質の維持・向上のために利用します。</p>
                <p>患者を特定できる情報（氏名・患者ID等）は、いかなる形式でも当社サーバーへ送信されません。サーバー上の記録は、個人と直接結びつかない識別子（record_id）のみで管理されます。</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">（3）利用者アカウント情報</h3>
                <p className="mb-2">【収集方法】本アプリの利用開始にあたり、導入医療機関を通じて当社に届け出られた情報（氏名・メールアドレス）を基に、当社が利用者のアカウントを発行します。</p>
                <p>【利用目的】利用者の認証のためにログインID（メールアドレス）を使用します。本アプリの操作記録はログインIDに紐づけて記録され、導入医療機関における利用状況の確認および安全管理に用います。</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">（4）動作記録（ログ）</h3>
                <p className="mb-2">【収集方法】本アプリの利用に伴い、自動的に取得します。</p>
                <p>【利用目的】システムの安全管理・障害対応のために取得します。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">4. AIによる処理および処理の委託</h2>
            <p className="mb-4">
              本アプリは、応答の生成および看護記録の作成支援に大規模言語モデル（AI）を利用します。その取扱いは以下のとおりです。
            </p>
            <div className="space-y-3">
              <p>【処理を行う環境】当社が管理するAWSアカウント内で、Amazon Web Services, Inc.が提供するクラウドサービス「Amazon Bedrock」を利用します。処理は日本国内（東京リージョン）で行い、国外への移転は行いません。</p>
              <p>【送信される情報】第3項（2）に定める伏字化済みテキストのみです。音声データ、伏字化前のテキスト、患者を特定できる情報、および利用者ご本人のアカウント情報は、AIの処理に送信されません。</p>
              <p>【学習への不使用】送信されたテキストは、本アプリの機能提供のためにのみ処理され、大規模言語モデルの学習または再学習には使用されません。</p>
              <p>【委託の位置づけ】上記クラウドサービス事業者は、当社の管理の下で処理を受託する委託先です。当社は委託先に対し、当社と同等以上の安全管理措置を契約により義務づけ、その取扱状況を確認します。当該委託は、個人情報の保護に関する法律上の第三者提供には該当しません。</p>
              <p>【第三者AIサービスの不使用】当社は、当社の管理外にある第三者のAIサービスに対して、利用者または患者に関する情報を提供しません。</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">5. 保存先と保存期間</h2>
            <div className="space-y-2">
              <p>・サーバーは Amazon Web Services 東京リージョン（日本国内）を使用し、国外への移転は行いません。</p>
              <p>・端末内の生データ（音声・伏字化前テキスト）は24時間で自動削除されます。</p>
              <p>・伏字化済みの記録は実証事業の期間中保持し、終了後は導入医療機関との契約に従い処理します。</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">6. 第三者提供および同意の取得</h2>
            <p className="mb-4">
              本アプリが取得する情報は、導入医療機関と当社の間で共有されることがあります。
            </p>
            <p className="mb-4">
              本アプリの利用開始に際しては、利用者ご本人に本ポリシーの内容をご確認いただいた上で、書面その他の適切な方法により同意をいただきます。
            </p>
            <p className="mb-4">
              なお、第4項に定めるクラウドサービス事業者への処理の委託は、当社の管理の下における取扱いの委託であり、第三者提供には該当しません。
            </p>
            <p>
              その他、法令上許容される場合を除き、取得した情報を第三者に提供しません。広告目的での利用や第三者へのデータ提供・販売は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">7. トラッキング</h2>
            <p>
              本アプリは、他社のアプリやウェブサイトを横断して利用者を追跡すること（トラッキング）を行いません。広告識別子を使用しません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">8. 安全管理措置</h2>
            <p>
              通信の暗号化（TLS 1.2以上）、保存データの暗号化、アクセス元の制限、アクセス権限の管理、操作ログの記録・監視を実施しています。その他、個人情報の漏えい、滅失、毀損等を防止するために、組織的・人的・物理的・技術的な安全管理措置を定め、外的環境を把握し、必要かつ適切な措置を実施します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">9. お問い合わせ</h2>
            <p>
              本アプリで取り扱う情報に関するお問い合わせおよび開示・訂正・利用の停止・消去等のご請求は、第1項の連絡先までご連絡ください。医療機関での利用に係る記録については、当該医療機関の定めに従い対応します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#008C8C] mb-3 mt-8 pb-2 border-b border-gray-100">10. 改定</h2>
            <p>
              本ポリシーを改定する場合は、本ページにて公表します。
            </p>
          </section>

          <div className="mt-12 pt-8 text-right text-gray-600">
            <p>制定日：2026年7月6日</p>
            <p className="mt-1">最終更新日：2026年7月25日</p>
            <p className="mt-4">株式会社peaceful</p>
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
