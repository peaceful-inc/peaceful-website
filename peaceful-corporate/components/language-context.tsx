"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { localizePath, type Lang } from "@/lib/seo";

type Language = Lang;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 言語はURLで決まる（日本語は今のURL、英語は /en 付き）。layout が初期の言語を渡す
export const LanguageProvider = ({
    children,
    initialLang = "ja",
}: {
    children: ReactNode;
    initialLang?: Language;
}) => {
    const [lang, setLang] = useState<Language>(initialLang);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

// 日本語のパスを、今の言語のパスにする（英語なら /en を付ける）
export const useLocalePath = () => {
    const { lang } = useLanguage();
    return (path: string) => localizePath(lang, path);
};
