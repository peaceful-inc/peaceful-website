# AI向けの文（2026年10月31日）

検索やAIがサイトを読む時に使う文です。peaceful-inc/peaceful-website#19（AI向けの説明ファイルと構造化データ）と、#18（各ページの説明文とProductのよくある質問）で使います。中身は、公開しているお知らせとページにある事実だけで書いています。

## 1. AI向けの説明ファイル（peaceful-corporate/public/llms.txt）の全文

English の節は、今の peaceful-corporate/public/llms.txt と同じです。

```markdown
# peaceful

> 株式会社peaceful（peaceful Inc.）は、ウェアラブルデバイスによる看護師向けAIエージェントシステム「NURVIS」を開発しています。

- 法人番号：7011601029057
- 代表取締役：陣之内 将成
- 設立：2025年10月1日
- 所在地：東京都品川区東品川2-6-4 寺田倉庫G1ビル 2階
- 加盟団体：日本デジタルヘルス・アライアンス（JaDHA）、一般社団法人日本病院DX推進協会
- 記載の内容は掲載時点のものです。仕様は予告なく変更することがあります。

## NURVIS

- [NURVIS](https://www.peaceful-inc.com/product): ウェアラブルデバイスによる看護師向けAIエージェントシステム。骨伝導イヤホンとスマートフォンで身につけ、看護の仕事を包括的に支える。看護手順の確認や会議の議事録づくりを任せられ、その日の段取りを組む機能は開発中。2026年8月に洛和会丸太町病院（京都市）との共同実証を開始した
- 患者さんの情報の扱い：名前などの個人情報は伏せてから扱い、データは国内で保管する。お預かりした情報は、病院との契約で決めた目的の範囲で使う
- [NURVISのプライバシーポリシー](https://www.peaceful-inc.com/nurvis/privacy)
- [情報セキュリティ基本方針](https://www.peaceful-inc.com/security-policy)

## 会社

- [Vision](https://www.peaceful-inc.com/vision): 看護の現場に入り、現場で使いながらNURVISを作り、看護の判断とケアをデータに残す進め方と、GIGA-HOSPITAL構想を紹介している
- [研究](https://www.peaceful-inc.com/research): 2026年9月から、看護師の一人称視点（エゴセントリック）動画データの収集と構造化に取り組んでいる。実際の患者さんを撮影するのではなく、看護師資格を持つ自社メンバーが模擬環境で看護ケアを実演する。NURVISの開発と並行して進める取り組み
- [会社情報](https://www.peaceful-inc.com/company): 会社概要、代表の経歴、これまでの歩み

## 代表

- 陣之内 将成（代表取締役／看護師）：救急・ICU・脳神経外科の看護師として5年、CRA・Study Managerとして臨床開発に約8年従事し、2025年10月に株式会社peacefulを創業。日本デジタルヘルス・アライアンス（JaDHA）薬事・診療報酬制度の在り方検討委員会 副委員長、DIA日本年会2026 プログラム委員

## これまでの歩み

- 2025年10月：株式会社peacefulを設立
- 2025年11月：三菱総合研究所「未来共創イニシアティブ（ICF）」参画
- 2025年11月：神戸市「Be start KOBE」採択
- 2026年3月：DIA Global Forumに共著記事が掲載
- 2026年7月：寺田倉庫「Creation Camp TENNOZ」第3期 採択
- 2026年8月：NVIDIA Inception Program 採択
- 2026年8月：洛和会丸太町病院でNURVISの実証を開始
- 2026年9月：エゴセントリック看護データの収集と構造化に着手

## ニュース

- [ニュース一覧](https://www.peaceful-inc.com/news)
- [【11/14登壇】第46回医療情報学連合大会の公募パネルディスカッションで座長と演者を務めます](https://www.peaceful-inc.com/news/14): 2026年10月26日
- [エゴセントリック看護データの収集と構造化に着手](https://www.peaceful-inc.com/news/13): 2026年9月21日
- [看護師向けAIエージェント「NURVIS」洛和会丸太町病院で実証を開始](https://www.peaceful-inc.com/news/12): 2026年9月1日
- [NVIDIA Inception Programに採択されました](https://www.peaceful-inc.com/news/11): 2026年8月4日
- [寺田倉庫「Creation Camp TENNOZ」第3期に採択](https://www.peaceful-inc.com/news/10): 2026年7月17日
- [DIA Global Forumに共著記事が掲載されました](https://www.peaceful-inc.com/news/9): 2026年3月1日
- [【2/13開催】異業種に学ぶこれからの医療 - 医療経営×データの実装論](https://www.peaceful-inc.com/news/8): 2026年1月24日
- [神戸市主催アクセラレーター『Be start KOBE』に採択](https://www.peaceful-inc.com/news/3): 2025年11月27日
- [三菱総合研究所『未来共創イニシアティブ(ICF)』に参画](https://www.peaceful-inc.com/news/2): 2025年11月6日
- [株式会社peaceful 設立](https://www.peaceful-inc.com/news/1): 2025年10月1日

## お問い合わせ

- [お問い合わせフォーム](https://forms.gle/nFwkK24V1MNS1EL18)

## English

- [Home](https://www.peaceful-inc.com/en): peaceful Inc. develops NURVIS, a wearable AI agent system for nurses.
- [NURVIS](https://www.peaceful-inc.com/en/product)
- [Vision](https://www.peaceful-inc.com/en/vision)
- [Research](https://www.peaceful-inc.com/en/research)
- [Company](https://www.peaceful-inc.com/en/company)
- [News](https://www.peaceful-inc.com/en/news)
```

## 2. 構造化データ（peaceful-corporate/lib/seo.ts）に足す物

| 項目 | 中身 |
|---|---|
| 法人番号 | identifier に、法人番号 7011601029057 を入れる。今の iso6523Code（0188:7011601029057）は残す |
| 加盟団体 | memberOf に、日本デジタルヘルス・アライアンス（JaDHA）と、一般社団法人日本病院DX推進協会の2つを入れる |
| 会社のSNS | sameAs に、LinkedIn（https://www.linkedin.com/company/peaceful-inc）と Facebook（https://www.facebook.com/profile.php?id=61595960253630）の2つを入れる |
| 代表 | founder（陣之内 将成）の description に、1の「代表」の節の経歴の文を入れ、sameAs に LinkedIn（https://jp.linkedin.com/in/mjinnouchi）を入れる。英語は同じ中身で |
| 会社の説明 | organizationDescription を、3の「トップ」の文にする。英語は同じ中身で |
| よくある質問 | NURVISのページの「よくある質問」の4問を、問いと答えの形のまま FAQPage にする。#18 でProductのページ（日本語と英語）の中に入れ、peaceful-corporate/lib/seo.ts には入れない |

- 今あるもの（会社・代表・ブランド・サイト・お知らせ）は消さない

## 3. リンクを貼った時に出る説明文（metadata の description）に使う文

| ページ | 文 |
|---|---|
| トップ | 株式会社peacefulは、ウェアラブルデバイスによる看護師向けAIエージェントシステム「NURVIS」を開発しています。NURVISは、看護の仕事を包括的に支える、看護師のパートナーです。 |
| NURVISのページ | NURVISは、ウェアラブルデバイスによる看護師向けAIエージェントシステムです。看護手順の確認や、会議の議事録づくりを任せられます。その日の段取りを組む機能は、開発中です。 |
| 会社情報 | 株式会社peacefulの会社概要、代表の経歴、これまでの歩み。 |
| 英語の説明文 | 日本語の文（上の3つ）と同じ中身で英語にする |

- 英語の説明文は、日本語と同じ中身で書く。英語でも、NURVISを記録を作る道具として書かない（drafts nursing records のような言い方を使わない）
- 説明文がある場所：peaceful-corporate/app/(ja)/layout.tsx、peaceful-corporate/app/(ja)/page.tsx、peaceful-corporate/app/(ja)/product/page.tsx、peaceful-corporate/app/(ja)/company/page.tsx、peaceful-corporate/app/(en)/layout.tsx、peaceful-corporate/app/(en)/en/page.tsx、peaceful-corporate/app/(en)/en/product/page.tsx（ここまで #18）、peaceful-corporate/lib/seo.ts の organizationDescription、peaceful-corporate/public/llms.txt（ここまで #19）
