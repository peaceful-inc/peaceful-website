"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function VisionContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (lang === "ja") {
      document.title = "Vision｜peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "株式会社peacefulのビジョン。看護の現場を支え、看護の知見を残し、医療の届け方を変える取り組みと、GIGA-HOSPITAL構想を紹介します。"
        )
      }
    } else {
      document.title = "Vision | peaceful"
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "peaceful's vision: supporting nursing on the front line, preserving nursing knowledge, and changing how care is delivered through the GIGA-HOSPITAL concept."
        )
      }
    }
  }, [lang])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* Page Title */}
      <div className="mb-20 w-full max-w-5xl">
        <h1
          className={`text-center font-bold tracking-tight transition-all duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } text-5xl md:text-6xl lg:text-7xl`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          {lang === 'ja' ? (
            <>
              世界に誇る日本の医療を、
              <br />
              未来へつなぐ
            </>
          ) : (
            <>
              Connecting Japan's
              <br />
              World-Class Healthcare
              <br />
              to the Future
            </>
          )}
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* Problem Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '課題' : 'The Challenge'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              THE PROBLEM
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? '医療を必要とする人が増える一方で、看護師をはじめとする担い手の確保は年々難しくなっています。看護師は記録などの間接業務に多くの時間を取られ、患者と向き合う時間が削られています。経験豊富な看護師の判断や観察は一人ひとりの中にとどまり、次の世代へ受け継がれにくいままです。'
              : 'As more people need medical care, it is becoming harder every year to secure the nurses and other professionals who provide it. Nurses spend much of their time on indirect work such as documentation, leaving less time for patients. The judgment and observations of experienced nurses stay within each individual and are rarely passed on to the next generation.'}
          </p>
        </section>

        {/* Approach Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '私たちの取り組み' : 'What We Do'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              OUR APPROACH
            </span>
          </div>

          <ul className="list-disc space-y-4 border-l-2 border-neon-blue/30 pl-10 text-base leading-relaxed text-foreground/90 marker:text-neon-blue md:text-lg">
            <li>
              <Link
                href="/product"
                className="font-bold text-neon-blue underline underline-offset-4 transition-colors hover:text-white"
              >
                {lang === 'ja' ? '看護の現場を支える' : 'Supporting nursing on the front line'}
              </Link>
              {lang === 'ja'
                ? '：看護師向けAIエージェントNURVISで、記録の負担を減らし、必要な情報をその場で届けます。'
                : ': With NURVIS, our AI agent for nurses, we reduce the burden of documentation and deliver the information nurses need on the spot.'}
            </li>
            <li>
              <Link
                href="/research"
                className="font-bold text-neon-blue underline underline-offset-4 transition-colors hover:text-white"
              >
                {lang === 'ja' ? '看護の知見を残す' : 'Preserving nursing knowledge'}
              </Link>
              {lang === 'ja'
                ? '：看護師の判断やケアを言語化し、次の世代やAIが学べる形に整えます。'
                : ": We put nurses' judgment and care into words and shape them into a form that the next generation and AI can learn from."}
            </li>
            <li>
              <Link
                href="#giga-hospital"
                className="font-bold text-neon-blue underline underline-offset-4 transition-colors hover:text-white"
              >
                {lang === 'ja' ? '医療の届け方を変える' : 'Changing how care is delivered'}
              </Link>
              {lang === 'ja'
                ? '：病院の外まで広がる医療のつながりを、テクノロジーで支えます。'
                : ': We use technology to support the network of care that extends beyond the hospital.'}
            </li>
          </ul>
        </section>

        {/* GIGA-HOSPITAL Section */}
        <section
          id="giga-hospital"
          className={`scroll-mt-28 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? 'GIGA-HOSPITAL構想' : 'The GIGA-HOSPITAL Concept'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              GIGA-HOSPITAL
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? '病院の集約や再編が進む中でも、医療を必要とする人に届け続けるための構想です。手術室やICUのように集めることで質が上がる機能は拠点病院に置き、薬局、訪問看護ステーション、診療所、介護施設、患者の自宅を、街に広がる医療の拠点として結びます。拠点が分かれるほど、看護師が一人で判断する場面は増えます。どこにいても同じ病棟で働いているように情報と知恵が行き渡る仕組みを、NURVISから作り始めています。'
              : "GIGA-HOSPITAL is our concept for continuing to deliver care to everyone who needs it, even as hospitals are consolidated and reorganized. Functions whose quality improves when concentrated, such as operating rooms and ICUs, stay in core hospitals, while pharmacies, home-visit nursing stations, clinics, care facilities, and patients' homes are connected as points of care across the community. The more dispersed these points become, the more often nurses must make decisions alone. Starting with NURVIS, we are building the means for information and expertise to reach nurses wherever they are, as if they were working on the same ward."}
          </p>
        </section>
      </div>
    </div>
  )
}
