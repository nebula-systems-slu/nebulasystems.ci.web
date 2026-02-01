import { Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const version = import.meta.env.VITE_APP_VERSION || "1.0.0";

  return (
    <footer className="py-12 border-t border-border/30 relative">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-neon-cyan/50 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-neon-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-bold text-foreground">NEBULA</span>
              <span className="text-[8px] font-orbitron text-neon-cyan tracking-[0.2em]">SYSTEMS</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs font-orbitron text-muted-foreground">
            <a href="#" className="hover:text-neon-cyan transition-colors">
              {t.footer.privacy}
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-neon-cyan transition-colors">
              {t.footer.terms}
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-neon-cyan transition-colors">
              {t.footer.docs}
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)] transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-border/30">
          <div className="text-xs text-muted-foreground font-mono">
            <span className="text-neon-green">{">"}</span> © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            <span className="text-neon-cyan">v{version}</span> // {t.footer.status}: <span className="text-neon-green">{t.footer.operational}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
