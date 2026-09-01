"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function ContactSection() {
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

        const element = document.getElementById("contact-section")
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
        <section id="contact-section" className="relative z-10 flex min-h-[70vh] items-center justify-center px-8 py-24 bg-background">
            <div className="w-full max-w-4xl text-center">
                <h2
                    className={`mb-8 font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                    style={{
                        textShadow: isVisible
                            ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2)"
                            : "none",
                    }}
                >
                    Contact
                </h2>

                <p
                    className={`mb-12 text-base md:text-lg text-foreground/80 md:text-xl transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    {lang === 'ja' ? (
                        <>
                            未来の医療を共に築くパートナーをお待ちしています。
                            <br className="block md:hidden" />
                            <br className="hidden md:block" />
                            お気軽にお問い合わせください。
                        </>
                    ) : (
                        "For partnership, investment, or recruitment inquiries."
                    )}
                </p>

                <a
                    href="https://forms.gle/nFwkK24V1MNS1EL18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-3 border-2 border-neon-blue bg-transparent px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-neon-blue transition-all duration-300 hover:bg-neon-blue hover:text-background hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                        }`}
                    style={{ transitionDelay: "600ms" }}
                >
                    <Mail className="h-6 w-6" />
                    <span>{lang === 'ja' ? 'CONTACT US' : 'Contact Us'}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </section>
    )
}
