export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  category: string;
  content: string;
  contentEn: string;
}

const rawNewsData: NewsItem[] = [
  {
    id: "1",
    title: "株式会社peaceful 設立",
    titleEn: "Establishment of peaceful Inc.",
    date: "2025.10.01",
    category: "Corporate",
    content: `
      <p class="mb-6">
        本日、株式会社peacefulを設立いたしました。
      </p>
      <p class="mb-6">
        我々は、医療現場の「崩壊」を座して待つのではなく、テクノロジーによる「再構築」を選択したDeep Techスタートアップです。
      </p>
      <p class="mb-6">
        代表の陣之内が臨床現場で目の当たりにしたのは、高度な専門性を持つ医療従事者が、非効率的な「本質ではない業務」に忙殺され、患者と向き合う時間を奪われている現実でした。
      </p>
      <p class="mb-6">
        「AIとロボティクスで、持続可能な医療インフラを再構築する」
      </p>
      <p>
        このミッションの下、我々はAIエージェントとロボティクス技術を駆使し、持続可能な次世代の医療インフラを実装します。現場の痛みを知る当事者として、医療のあり方を根底から変革する挑戦にご期待ください。
      </p>
    `,
    contentEn: `
      <p class="mb-6">
        We are pleased to announce the establishment of peaceful Inc. today.
      </p>
      <p class="mb-6">
        We are a Deep Tech startup that has chosen to "reconstruct" healthcare through technology, rather than sit back and watch the "medical collapse" unfold.
      </p>
      <p class="mb-6">
        What our CEO Jinnouchi witnessed in the clinical field was a reality where highly specialized healthcare professionals were overwhelmed by inefficient "non-essential tasks," depriving them of valuable time to face their patients.
      </p>
      <p class="mb-6">
        "Reconstructing sustainable healthcare infrastructure with AI and Robotics."
      </p>
      <p>
        Under this mission, we will implement sustainable next-generation healthcare infrastructure by leveraging AI agents and robotics technology. As stakeholders who know the pain of the field, please look forward to our challenge of fundamentally transforming the way healthcare is delivered.
      </p>
    `,
  },
  {
    id: "2",
    title: "三菱総合研究所『未来共創イニシアティブ(ICF)』に参画",
    titleEn: "Participation in Mitsubishi Research Institute's 'Initiative for Co-creating the Future (ICF)'",
    date: "2025.11.06",
    category: "Partnership",
    content: `
      <p class="mb-6">
        株式会社peacefulは、株式会社三菱総合研究所が主宰する
        『未来共創イニシアティブ（ICF: Initiative for Co-creating the Future）』に参画いたしました。
      </p>
      <p class="mb-6">
        ICFは、社会課題の解決と未来社会の創造を目指すオープンイノベーションプラットフォームです。
      </p>
      <p class="mb-6">
        2040年問題を待たずして、医療・介護の現場はすでに崩壊が始まっています。
        この待ったなしの状況に対し、当社はシンクタンクや大企業が持つリソースと、スタートアップの突破力を融合させ、即効性と持続性を兼ね備えたソリューションを実装します。
      </p>
      <p>
        単なる実証実験に留まらず、疲弊する地域医療インフラの「今」を救うための社会実装を加速させてまいります。
      </p>
    `,
    contentEn: `
      <p class="mb-6">
        peaceful Inc. has joined the "Initiative for Co-creating the Future (ICF)" sponsored by Mitsubishi Research Institute, Inc.
      </p>
      <p class="mb-6">
        ICF is an open innovation platform aimed at solving social issues and creating a future society.
      </p>
      <p class="mb-6">
        Without waiting for the 2040 problem, the "medical collapse" in healthcare and nursing care fields has already begun.
        In response to this urgent situation, we will fuse the resources of think tanks and large corporations with the breakthrough power of startups to implement solutions that are both immediate and sustainable.
      </p>
      <p>
        We will accelerate social implementation to save the "now" of exhausted regional healthcare infrastructure, going beyond mere demonstration experiments.
      </p>
    `,
  },
  {
    id: "3",
    title: "神戸市主催アクセラレーター『Be start KOBE』に採択",
    titleEn: "Selected for Kobe City's Accelerator Program 'Be start KOBE'",
    date: "2025.11.27",
    category: "Award",
    content: `
      <p class="mb-6">
        神戸市が主催するスタートアップ支援プログラム『Be start KOBE』に、株式会社peacefulが選出されました。
      </p>
      <p class="mb-6">
        神戸は、日本最大級のバイオメディカルクラスター「神戸医療産業都市（KBIC）」を擁する、医療イノベーションの最前線です。
        今回の採択により、神戸市内の高度医療機関との連携および実証フィールドの確保に向けて強い後押しを得ました。
      </p>
      <p>
        当社は、この強力なエコシステムを活用し、看護師向けAIエージェント「NURVIS」の臨床現場への導入検証を加速させます。
        「現場の崩壊」を食い止めるためのテクノロジーを、神戸から全国、そして世界へと実装してまいります。
      </p>
    `,
    contentEn: `
      <p class="mb-6">
        peaceful Inc. has been selected for the startup support program "Be start KOBE" organized by Kobe City.
      </p>
      <p class="mb-6">
        Kobe is at the forefront of medical innovation, hosting one of Japan's largest biomedical clusters, the "Kobe Biomedical Innovation Cluster (KBIC)."
        This selection provides strong support for collaboration with advanced medical institutions in Kobe City and securing demonstration fields.
      </p>
      <p>
        We will leverage this powerful ecosystem to accelerate the verification of our AI agent for nurses, "NURVIS," in clinical settings.
        We will implement technology to stop the "collapse of the field" from Kobe to the whole country and the world.
      </p>
    `,
  },
  {
    id: "8",
    title: "【2/13開催】異業種に学ぶこれからの医療 - 医療経営×データの実装論",
    titleEn: "[Event] 2/13 Seminar: The Future of Healthcare Management & Data Implementation",
    date: "2026.01.24",
    category: "Event",
    content: `
      <p class="mb-8">
        <img src="/images/news/news-event-20260213.png" alt="2/13 Event Flyer" class="w-full h-auto rounded-lg shadow-lg border border-gray-800" />
      </p>
      <p class="mb-6">
        2026年2月13日（金）、医療の構造改革に挑む3名の専門家をお招きし、トークイベントを開催いたします。<br>
        テーマは「医療経営とデータの実装」。精神論ではなく、「経営科学」と「データガバナンス」の視点から、持続可能な医療システムのあり方を議論します。
      </p>
      <h3 class="text-xl font-bold mb-4 text-white">登壇者</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-300">
        <li>蔭山 裕之 氏 (湖南メディカルコンソーシアム理事 / アメーバ経営の実践者)</li>
        <li>岡田 美保子 氏 (IDIAL代表理事 / 医療データガバナンスの専門家)</li>
        <li>杉村 和宣 氏 (総合高津中央病院 理事長補佐 / 元戦略コンサルタント)</li>
      </ul>
      <p class="mb-6">
        <span class="font-bold text-white">Facilitator:</span> 陣之内 将成 (株式会社peaceful 代表)
      </p>
      <p class="mb-6">
        <span class="font-bold text-white">日時・場所:</span> 2月13日 19:00-21:00 @ UN:O Otemachi
      </p>
      <p class="mt-8">
        <a href="https://forms.gle/wQN5af6navvZTjvc8" target="_blank" rel="noopener noreferrer" class="inline-block bg-neon-blue text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300">
          ▼参加申し込みはこちら
        </a>
      </p>
    `,
    contentEn: `
      <p class="mb-8">
        <img src="/images/news/news-event-20260213.png" alt="2/13 Event Flyer" class="w-full h-auto rounded-lg shadow-lg border border-gray-800" />
      </p>
      <p class="mb-6">
        We are hosting a special seminar on February 13th, inviting three experts challenging the structural reform of healthcare.<br>
        Moving beyond theory, we will discuss 'Management Science' and 'Data Governance' to build sustainable medical infrastructure.
      </p>
      <h3 class="text-xl font-bold mb-4 text-white">Speakers</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-300">
        <li>Hiroyuki Kageyama (Director, Konan Medical Consortium / Amoeba Management Expert)</li>
        <li>Mihoko Okada (Representative Director, IDIAL / Medical Data Governance Specialist)</li>
        <li>Kazunobu Sugimura (Advisor, Takatsu General Hospital / Ex-Strategy Consultant)</li>
      </ul>
      <p class="mb-6">
        <span class="font-bold text-white">Facilitator:</span> Masanari Jinnouchi (CEO, peaceful Inc.)
      </p>
      <p class="mb-6">
        <span class="font-bold text-white">Date & Venue:</span> Feb 13, 19:00-21:00 @ UN:O Otemachi
      </p>
      <p class="mt-8">
        <a href="https://forms.gle/wQN5af6navvZTjvc8" target="_blank" rel="noopener noreferrer" class="inline-block bg-neon-blue text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300">
          ▼Registration
        </a>
      </p>
    `,
  },
];

export const newsData = rawNewsData.sort((a, b) => b.date.localeCompare(a.date));
