import { Fragment } from "react"

const KATA = /^[\p{scx=Katakana}ー・]+$/u
const HIRA = /^[\p{scx=Hiragana}ー]+$/u
const KANJI1 = /^\p{scx=Han}$/u
const ASCII = /^[0-9A-Za-z/.:]+$/u
const OPEN = /[「『（(【［\[〈《]$/u

// 日本語の見出しを、言葉の途中で折り返さないよう、言葉の切れ目に <wbr> を入れる（見本の <wbr> と同じ考え方）
export const phraseChunks = (text: string): string[] => {
  const chunks: string[] = []
  let prev = ""
  for (const { segment: s, isWordLike } of new Intl.Segmenter("ja", { granularity: "word" }).segment(text)) {
    const last = chunks[chunks.length - 1] ?? ""
    const attach =
      chunks.length > 0 &&
      (OPEN.test(last) ||
        (!isWordLike && !OPEN.test(s)) ||
        HIRA.test(s) ||
        (KATA.test(s) && KATA.test(prev)) ||
        (ASCII.test(s) && ASCII.test(prev)) ||
        (KANJI1.test(s) && /\p{scx=Han}$/u.test(last)) ||
        (KANJI1.test(prev) && /^\p{scx=Han}/u.test(s)))
    if (attach) chunks[chunks.length - 1] += s
    else chunks.push(s)
    prev = s
  }
  return chunks
}

export default function PhraseBreaks({ text }: { text: string }) {
  return (
    <>
      {phraseChunks(text).map((c, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {c}
        </Fragment>
      ))}
    </>
  )
}
