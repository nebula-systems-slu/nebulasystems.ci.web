import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Language } from "./translations";

type Translations = typeof translations["pt-BR"] | typeof translations["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "nebula-language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "pt-BR") {
        return saved;
      }
      // Detect browser language
      const browserLang = navigator.language;
      if (browserLang.startsWith("pt")) {
        return "pt-BR";
      }
    }
    return "pt-BR";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt-BR" ? "pt-BR" : "en";
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
