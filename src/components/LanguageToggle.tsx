import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pt-BR" ? "en" : "pt-BR");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-xs font-orbitron tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border/50 hover:border-neon-cyan/50 hover:shadow-[0_0_10px_hsl(var(--neon-cyan)/0.2)]"
      aria-label={`Switch to ${language === "pt-BR" ? "English" : "Português"}`}
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="text-neon-cyan">{language === "pt-BR" ? "PT" : "EN"}</span>
    </button>
  );
};
