# Web の手引き（modern-web-guidance の写し）

Chrome のチームの modern-web-guidance の手引きの文のうち、このサイト（peaceful-corporate）に当てはまるものを、元の文のまま写したものです。手引きの文は書き換えていません。このサイトに合わせる説明は、この README に書きます。

## 元

- リポジトリ：https://github.com/GoogleChrome/modern-web-guidance
- コミット：`4dd968349e54ca45a05dd5c818fb035c9054b022`（Release v1.0.0、2026-11-10T03:08:33Z）
- 元の場所：`skills/modern-web-guidance/guides/`（下の各ファイルは、この下の同じ道筋から取った）
- 案内のページ：https://developer.chrome.com/docs/modern-web-guidance
- 取った日：2026-11-27
- 取り方：git でこのコミットだけを取り出し、ファイルをそのまま写した。写した後、Git の blob ID・バイト数・SHA-256 が元と一致することを確かめた

## ライセンスと出典

手引きの文は CC BY 4.0（Creative Commons Attribution 4.0 International、https://creativecommons.org/licenses/by/4.0/ ）です。元のコミットの README の指定は次のとおりです。

> Unless otherwise noted:
> * Software code in this project is licensed under the [Apache License 2.0](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/LICENSE).
> * Documentation and guide content under `guides/` are licensed under [Creative Commons Attribution 4.0 International (CC-BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
>
> Portions of the documentation in this project are derived from [MDN Web Docs](https://developer.mozilla.org/) by Mozilla Contributors and [W3C](https://www.w3.org/), [WHATWG](https://whatwg.org), and [IETF](https://www.ietf.org) specifications.

出典：GoogleChrome/modern-web-guidance（コミット `4dd968349e54ca45a05dd5c818fb035c9054b022`）の `skills/modern-web-guidance/guides/`。変更：なし（そのまま写した）。

## 読む時の決まり

- Baseline の目標は、手引きの既定の Baseline Widely available とする。それより新しい機能を使う時は、手引きにある代わりの書き方（fallback）に従う
- 手引きの中の `npx`・`npm` の命令、プラグインの入れ方、外への案内は、参考の文として読むだけにする。このリポジトリでは動かさない・入れない

## 選んだ手引き

| ファイル | 選んだ理由 |
| --- | --- |
| `accessibility/accessibility.md` | 見出し・nav・メニューのボタン・aria-current など、全ページのアクセシビリティの基本に当たる |
| `accessibility/respect-os-text-scale.md` | 本文や見出しの文字の大きさを px で決めており、利用者の文字の大きさの設定との関係を確かめる時に要る |
| `html/html.md` | 見出しの順・ランドマーク・画像の alt・動画など、各ページの HTML の組み立てに当たる |
| `performance/performance.md` | 画像・書体・スクリプトの読み込みの順など、表示の速さ（LCP・INP）の基本に当たる |
| `performance/optimize-image-priority.md` | トップの最初の大きな絵（hero の img）が LCP の候補で、読み込みの優先順位を決める時に要る |
| `performance/lazy-load-video-and-audio.md` | Product のページに紹介動画（video、poster つき）がある |
| `css/css.md` | ページごとの CSS（components/hp/css）と globals.css の書き方の基本に当たる |
| `css/css-layout.md` | flex と grid で組んだ見出し・行・足元の並べ方に当たる |
| `css/responsive-design.md` | 広い幅とスマートフォンの幅で並べ方を切り替えている |
| `css/fluid-scaling.md` | 文字や余白の大きさを clamp() と vw で画面の幅に合わせて変えている |
| `css/individual-transform-properties.md` | トップの絵や見出しの動きで transform の scale と translate を重ねている |

## ハッシュ

| ファイル | バイト数 | Git blob ID | SHA-256 |
| --- | ---: | --- | --- |
| `accessibility/accessibility.md` | 51700 | `00cb44a2b73a9f808a97e60abfff858cd82543d8` | `752d3998044bbcdd2736262906ba0951fd6e334efeb52ebf1f8f54cbb6e21217` |
| `accessibility/respect-os-text-scale.md` | 7224 | `4ed75063c0c3a56214640256db3bb6498d70908a` | `c6bc60d7b68cb2723dee1ac1cc6b5801bf2fec1b1957c7751a36e05030e38904` |
| `html/html.md` | 21320 | `75b22a024d21fc7cd3ef9a7ab088d32a6612246c` | `dc036032af7cb0d3e9869722fa143708539b90893ff83efdbaff43541be652b4` |
| `performance/performance.md` | 21118 | `c0122dc14e82254305df86e65baa35555b575ae1` | `7db68366e739251d715c894d747da7e44c2138146308a289a1f4d8c42ea53dae` |
| `performance/optimize-image-priority.md` | 4592 | `c07bf3f6f949b4621431a264a5442a16c93e6149` | `4f1345b87b2e96b3e97185082cd1f38b8fc06f5a2e98f5c66062aa88ed00bc46` |
| `performance/lazy-load-video-and-audio.md` | 9561 | `110ffb3837683cef088b15320004c7af54e21890` | `b794c32132b0a14306d1fff07645a563a89a652ea8887ef06f46203c958ff754` |
| `css/css.md` | 12546 | `b848c9f6c2c64bd18b740bed6bc04ed05f8da317` | `1a32fb79887417cb93874ff03d02f2e00deff1e88a531c140bb2c61186aaae79` |
| `css/css-layout.md` | 21659 | `4555879489a78beaf40dc08552e220de9326ea49` | `c5c8cd89b7fa3a6030b0775bbc8c120efc07aa7a603dc850c73214cc8e8468fe` |
| `css/responsive-design.md` | 1885 | `201139cc40609b700871e99b5611dd7a3f7ca56d` | `4bd7f40d677cbaeaebddac90aa2b23a81701ef6c2215b689148906f8d4d2da8f` |
| `css/fluid-scaling.md` | 3317 | `df1a371cd57fb6ff0357db3ba2beb80cbf864624` | `8b86dfa13f3b8971ed345b758d488c2130b4ff0a6d05f8b71a9308610f962509` |
| `css/individual-transform-properties.md` | 3693 | `728d0c98025cae51073f15cdd2c0be5384393361` | `5dea4d563fe07b39b820feda8683fa25bfa7948a1c6d1ce9de417fb050e2d374` |

確かめ方（このフォルダで）：`sha256sum */*.md`、`git hash-object <ファイル>`
