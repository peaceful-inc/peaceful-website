"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { Globe, Linkedin, Facebook, Mail } from "lucide-react"

export default function MjProfile() {
  const { lang, setLang } = useLanguage()

  const profile = {
    name: lang === 'ja' ? '陣之内 将成' : 'Masanari Jinnouchi',
    title: lang === 'ja' ? '株式会社peaceful 代表取締役CEO' : 'CEO, peaceful inc.',
    desc: lang === 'ja' ? '看護師＋臨床開発専門職 13年。NURVIS開発中。' : 'Nurse & Clinical Development Professional for 13 years. Currently developing NURVIS.',
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3436] flex flex-col items-center py-12 px-6 font-sans">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 flex gap-2 text-sm font-medium z-10">
        <button
          onClick={() => setLang('ja')}
          className={`transition-colors ${lang === 'ja' ? 'text-[#008C8C] font-bold' : 'text-gray-400 hover:text-gray-600'}`}
        >
          JP
        </button>
        <span className="text-gray-300">/</span>
        <button
          onClick={() => setLang('en')}
          className={`transition-colors ${lang === 'en' ? 'text-[#008C8C] font-bold' : 'text-gray-400 hover:text-gray-600'}`}
        >
          EN
        </button>
      </div>

      {/* Logo */}
      <div className="mb-10 mt-8">
        <a href="/" className="transition-opacity hover:opacity-80 block">
          <Image
            src="/logo.png"
            alt="peaceful inc."
            width={160}
            height={44}
            className="h-10 w-auto object-contain invert"
            priority
          />
        </a>
      </div>

      {/* Profile Image */}
      <div className="mb-6 rounded-full overflow-hidden w-36 h-36 border-4 border-[#008C8C]/20 shadow-md">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          <span className="text-sm">Photo</span>
        </div>
      </div>

      {/* Profile Info */}
      <h1 className="text-2xl font-bold mb-2 tracking-tight">{profile.name}</h1>
      <h2 className="text-[15px] text-[#008C8C] font-medium mb-4">{profile.title}</h2>
      <p className="text-sm text-center text-gray-600 mb-10 max-w-[280px] leading-relaxed">
        {profile.desc}
      </p>

      {/* Links */}
      <div className="w-full max-w-[320px] flex flex-col gap-4">
        <LinkButton 
          href="https://www.peaceful-inc.com/" 
          icon={<Globe size={20} />} 
          label="Website" 
        />
        <LinkButton 
          href="https://www.linkedin.com/in/mjinnouchi/" 
          icon={<Linkedin size={20} />} 
          label="LinkedIn" 
        />
        <LinkButton 
          href="https://www.facebook.com/masanari.jinnouchi" 
          icon={<Facebook size={20} />} 
          label="Facebook" 
        />
        <LinkButton 
          href="mailto:masanari.jinnouchi@peaceful-inc.com" 
          icon={<Mail size={20} />} 
          label="Email" 
        />
      </div>

      {/* Footer */}
      <div className="mt-auto pt-16 pb-4">
        <p className="text-xs text-gray-400 font-medium">© peaceful inc.</p>
      </div>
    </div>
  )
}

function LinkButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center gap-3 w-full py-[14px] px-6 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#C8A951] transition-all duration-300"
    >
      <span className="text-[#008C8C] group-hover:text-[#C8A951] transition-colors">{icon}</span>
      <span className="font-medium text-[#2D3436] group-hover:text-[#C8A951] transition-colors">{label}</span>
    </a>
  )
}
