"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

export default function Footer() {
    const { lang } = useLanguage()

    return (
        <footer className="relative z-10 border-t border-neon-blue/20 bg-background px-8 py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

                {/* Logo & Address */}
                <div className="text-center md:text-left">
                    <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                        <Image
                            src="/logo.png"
                            alt="peaceful"
                            width={150}
                            height={42}
                            className="h-7 w-auto md:h-10 object-contain"
                        />
                    </Link>
                    <address className="mt-4 not-italic text-sm text-foreground/60">
                        {lang === 'ja' ? (
                            <>
                                株式会社peaceful<br />
                                〒140-0002 東京都品川区東品川2-6-4 寺田倉庫G1ビル 2階
                            </>
                        ) : (
                            <>
                                Warehouse TERRADA G1 Bldg. 2F, 2-6-4 Higashi-Shinagawa, Shinagawa-ku, Tokyo 140-0002 / CEO: Masanari Jinnouchi
                            </>
                        )}
                    </address>
                </div>

                {/* Our Business */}
                <div className="text-center md:text-left">
                    <h3 className="mb-4 text-sm font-bold text-foreground">Our Business</h3>
                    <ul className="space-y-2 text-sm text-foreground/60">
                        {lang === 'ja' ? (
                            <>
                                <li>医療・介護向けAIシステムの開発</li>
                                <li>医療ロボティクス研究開発</li>
                                <li>医療DXコンサルティング</li>
                            </>
                        ) : (
                            <>
                                <li>AI System Development for Medical & Nursing Care</li>
                                <li>Medical Robotics R&D</li>
                                <li>Medical DX Consulting</li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-8 md:justify-end">
                    <Link href="/vision" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Vision
                    </Link>
                    <Link href="/product" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Product
                    </Link>
                    <Link href="/research" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Research
                    </Link>
                    <Link href="/company" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        Company
                    </Link>
                    <Link href="/news" className="text-sm font-medium text-foreground/80 hover:text-neon-blue transition-colors">
                        News
                    </Link>
                </nav>
            </div>

            <div className="mt-12 text-center text-xs text-foreground/40">
                &copy; 2026 peaceful Inc. All rights reserved.
            </div>
        </footer>
    )
}
