"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function ServicesSection() {
    const { lang } = useLanguage()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("services-section")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return (
        <section id="services-section" className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-24 bg-background">
            <div className="mx-auto w-full max-w-6xl">
                <h2
                    className={`mb-20 text-center font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                    style={{
                        textShadow: isVisible
                            ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2)"
                            : "none",
                    }}
                >
                    Services
                </h2>

                <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
                    {/* Service 1: NURVIS */}
                    <div
                        className={`group flex flex-col justify-between rounded-lg border border-neon-blue/20 bg-card/50 p-6 md:p-8 backdrop-blur-sm transition-all duration-700 hover:border-neon-blue/60 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                            }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div>
                            <h3 className="mb-4 text-3xl font-bold text-neon-blue group-hover:text-white transition-colors">NURVIS</h3>
                            <h4 className="mb-2 text-xl font-semibold text-white">
                                {lang === 'ja' ? '看護師向けウェアラブルAIエージェント' : 'Wearable AI Agent for Nurses'}
                            </h4>
                            <p className="mb-6 text-lg leading-relaxed text-foreground/80">
                                {lang === 'ja'
                                    ? '看護師の能力を拡張するAIエージェント。あなたの「第二の脳」として、常に隣で思考を続ける能動的なパートナー。'
                                    : 'Liberation from Documentation. Return to Care.'}
                            </p>
                            {lang === 'en' && (
                                <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-6">
                                    <li>Voice Logging: Zero-touch documentation via automated transcription & summarization.</li>
                                    <li>Operation Support: Hands-free protocol access and instant communication.</li>
                                    <li>Behavior Analysis: Accelerating skill transfer by learning from expert nurses&apos; FPP data.</li>
                                </ul>
                            )}
                        </div>
                        <Link
                            href="/product"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-neon-blue transition-colors group-hover:text-white"
                        >
                            READ MORE <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Service 2: Giga-Hospital */}
                    <div
                        className={`group flex flex-col justify-between rounded-lg border border-neon-blue/20 bg-card/50 p-6 md:p-8 backdrop-blur-sm transition-all duration-700 hover:border-neon-blue/60 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                            }`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        <div>
                            <h3 className="mb-4 text-3xl font-bold text-neon-blue group-hover:text-white transition-colors">Giga-Hospital</h3>
                            <p className="mb-6 text-lg leading-relaxed text-foreground/80">
                                {lang === 'ja'
                                    ? '街全体を、ひとつの巨大な病院へ。ひとつの箱に集中させすぎた医療機能を街全体に溶かし込み、届け方を変える。'
                                    : 'Transforming an entire city into one giant hospital. Dissolving medical functions from a single building into the fabric of the city, and changing the way healthcare is delivered.'}
                            </p>
                        </div>
                        <Link
                            href="/giga-hospital"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-neon-blue transition-colors group-hover:text-white"
                        >
                            READ MORE <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
