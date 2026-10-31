# ホームページの作り直しの見本（2026年10月31日）

ホームページ（peaceful-inc.com）を白と金に作り直すための見本です。MJが見たうえで、この見本で作ると決めました（2026年10月31日）。見本のページ8枚を、ブラウザでそのまま開ける形にまとめています。作業は peaceful-inc/peaceful-website#18（見た目と各ページ）と peaceful-inc/peaceful-website#19（AI向けの説明ファイルと構造化データ）で行います。

このフォルダは読むための物です。作り直しの作業のPRでは、このフォルダを変えません。

## 中身

| 置き場 | 中身 |
|---|---|
| pages/ | 見本のページ8枚。ブラウザで開けます。画像と動画は、下の「素材」の置き場所から読みます。書体はGoogle Fontsから読みます |
| screens/ | 各ページの画面の写真。広い画面（幅1440px）とスマートフォン（幅390px）の、ページ全体。動きを減らす設定で撮ったので、動く所は動き終わった形で写っています |
| ai-text.md | AI向けの説明ファイル（llms.txt）の全文、構造化データに足す物、リンクを貼った時に出る説明文に使う文 |

## 見本とURLの対応

| 見本 | 日本語のURL | 英語のURL |
|---|---|---|
| pages/top.html | / | /en |
| pages/product.html | /product | /en/product |
| pages/vision.html | /vision | /en/vision |
| pages/research.html | /research | /en/research |
| pages/company.html | /company | /en/company |
| pages/news.html | /news | /en/news |
| pages/news-article.html | /news/[id] | /en/news/[id] |
| pages/security-policy.html | /security-policy | （英語のページは無い） |

英語のページの見本はありません。英語のページは、日本語の見本と同じ作りにし、文は今の英語のページの文を使います。

## 見た目の決まり

- 色は次の8色だけを使う。新しい色を作らない
  - 白 #FFFFFF（地）
  - 文字 #2D3436
  - 金 #C8A951（線・点・下線に使う。広い面には塗らない）
  - ティール #008C8C
  - 淡いティール #E8F4F4
  - ウォームグレー #636E72
  - グレー #9CA1A5
  - クリーム #FBF8F1
- 書体は明朝だけ。見出しも本文も、しっぽり明朝（Shippori Mincho の 500・600・700）
- 次の9字だけは、しっぽり明朝では右へ払う画の書き始めが折れる形になるため、Noto Serif JP から抜き出した書体（pf-fix）で出す：文・使・更・効・交・校・史・吏・便
  - 各ページのCSSの「pf-fix」の @font-face と、peaceful-corporate/public/fonts/pf-fix/ のファイルは同じ物
  - font-family は、見本のとおり 'pf-fix','Shippori Mincho','Hiragino Mincho ProN','Yu Mincho',serif の順にする（9字だけが pf-fix で出る）
- 区切りの帯の模様は、1ページに1つ
  - 扇：トップ、Product、会社情報、ニュースの一覧と記事、情報セキュリティ基本方針
  - 花：Vision
  - 三角：研究
  - 四角のタイルの壁と同じ所に並べない
- 四角のタイルの壁は、トップとProductの製品の絵の後ろだけに使う。スマートフォンの幅では壁を出さず、絵だけを出す
- 文の折り返し：見本の word-break: auto-phrase と、文の中の &lt;wbr&gt;（折り返してよい所の印）は残す。言葉の途中で折り返さないようにするため
- 日本語の文は、見本から1字も変えない
- トップのフッターだけに、イメージ動画のモデルの名前（胡桃あやか様）を書く。ほかのページには書かない

## 動き

- トップのはじめの場面：2枚の画像（peaceful-corporate/public/images/hero/ の hero-bg.jpg と hero-fg.webp）をゆっくり動かし、数秒たって右上にNURVISの札が入る（見本のCSSの hIn・hBgMove・hFgMove・hCard・hRule・hDesc）
- トップの4行の見出し：画面に3割入った時に、1行ずつ出す（pages/top.html の最後の短いスクリプトと、CSSの .armed・.on）
- VisionのGIGA-HOSPITAL構想の図：光る点が脈打つ（gPulse）
- トップとProductの製品の絵の中にある流れの線（.flow）と光る点（.pt）は、CSSで隠してある（display: none）。作らなくてよい
- 動きを減らす設定（prefers-reduced-motion: reduce）の人には、動かさずに最初から全部見せる（見本のCSSのとおり）

## リンクの行き先（見本で「#」になっている所）

| 見本の文字 | 行き先 |
|---|---|
| Contact、お問い合わせ、お問い合わせフォーム | https://forms.gle/nFwkK24V1MNS1EL18 （今のサイトと同じ。別のタブで開く） |
| JA、EN | 今のヘッダーと同じ、言語の切り替え |
| Menu | 今のヘッダーと同じ、スマートフォンの幅のメニュー |
| プライバシーポリシー | /nurvis/privacy |
| 会社情報の「これまでの歩み」の8行 | 上から順に /news/1、/news/2、/news/3、/news/9、/news/10、/news/11、/news/12、/news/13 |
| ニュースの一覧の各行 | /news/{id}（peaceful-corporate/lib/news-data.ts から出す） |

見本のニュースの一覧と記事の文は、見本を作った時点のデータを写した物です。本番では、今の peaceful-corporate/lib/news-data.ts から出します。

## 素材

本番で使う素材は、置く場所にすでに置いてある（このフォルダを入れたPRで一緒に入れた）。作り直しの作業では、ページのコードから読むだけにする。

| 置き場所 | 中身 | 使う所 |
|---|---|---|
| peaceful-corporate/public/videos/nurvis-intro.mp4 | NURVISの紹介動画（2分14秒、音声なし、約6.4MB） | Product。controls、muted、playsinline、preload="metadata" を付け、自動では再生しない |
| peaceful-corporate/public/videos/nurvis-intro-poster.jpg | 紹介動画の表紙の画像 | Product の動画の poster |
| peaceful-corporate/public/images/hero/hero-bg.jpg、hero-fg.webp | トップのはじめの場面の2枚（イメージ動画の場面から作った画像と、NURVISの札） | トップ |
| peaceful-corporate/public/fonts/pf-fix/ | 9字の書体（woff2 のファイル24個）、@font-face の書き方（pf-fix.css。unicode-range つき、url は /fonts/pf-fix/）、書体の使用の決まり（OFL.txt。SIL Open Font License 1.1） | 全ページ。pf-fix.css の中身を globals.css に入れる |
| peaceful-corporate/public/logo.png | ロゴ（前からある物） | ヘッダー、フッター |
| peaceful-corporate/public/nvidia-inception-badge.png | NVIDIA Inception のバッジ（前からある物） | 会社情報 |

しっぽり明朝は、ページを見る人のブラウザからGoogle Fontsへつながないよう、npm の @fontsource/shippori-mincho（500・600・700）で読む。見本のページはGoogle Fontsから読んでいるが、本番では使わない。
