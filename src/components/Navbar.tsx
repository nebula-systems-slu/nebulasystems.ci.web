import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.inicio, href: "#hero" },
    { label: t.nav.servicos, href: "#services" },
    { label: t.nav.tech, href: "#tech" },
    { label: t.nav.sobre, href: "#about" },
    { label: t.nav.contato, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-neon-cyan/20"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar - Decorative */}
      <div className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-orange" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-neon-cyan flex items-center justify-center relative group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300">
              <Terminal className="w-5 h-5 text-neon-cyan" />
              <div className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-neon-cyan" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-neon-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-orbitron font-bold text-foreground">
                NEBULA
              </span>
              <span className="text-[10px] font-orbitron text-neon-cyan tracking-[0.3em]">
                SYSTEMS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs font-orbitron tracking-wider group"
              >
                <span className="text-neon-cyan/50 mr-1">0{index + 1}</span>
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-neon-cyan group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button + Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button variant="neon" size="sm">
              {t.nav.connect}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 border border-border hover:border-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden cyber-card p-4 mt-2 animate-fade-in border-t border-neon-cyan/30">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 font-orbitron text-sm border-b border-border/30 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-neon-cyan mr-2">0{index + 1}</span>
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <LanguageToggle />
                <Button variant="neon" size="sm" className="flex-1">
                  {t.nav.connect}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
