import type { Lang } from "@/lib/seo"

// Productの「よくある質問」の4問。ページの表示と構造化データ（FAQPage）の両方で使う
export const productFaq: Record<Lang, { q: string; a: string }[]> = {
  ja: [
    { q: "電子カルテと連携していますか", a: "NURVISが整えた記録を、看護師が確認して電子カルテに貼り付ける形です。" },
    { q: "患者さんの情報はどう扱われますか", a: "名前などの個人情報は伏せてから扱い、データは国内で保管します。" },
    { q: "どの端末で使えますか", a: "市販の骨伝導イヤホンとスマートフォンで使います。" },
    { q: "費用はどのくらいですか", a: "病棟の規模や導入の形に合わせてご提案します。お問い合わせください。" },
  ],
  en: [
    { q: "Does it work with electronic health records?", a: "Nurses review the records NURVIS prepares and paste them into the electronic health record." },
    { q: "How is patient information handled?", a: "Names and other personal information are masked before processing, and data is stored in Japan." },
    { q: "What devices does it use?", a: "A commercially available bone-conduction earphone and a smartphone." },
    { q: "How much does it cost?", a: "We propose a plan based on the size of your wards and how you deploy it. Please contact us." },
  ],
}

export const productFaqJsonLd = (lang: Lang) => ({
  "@type": "FAQPage",
  inLanguage: lang,
  mainEntity: productFaq[lang].map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
})
