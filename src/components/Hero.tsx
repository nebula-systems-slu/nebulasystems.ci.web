import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
// PONTO DE TROCA DO CARROSSEL:
// para usar as imagens profissionais novas, importe-as aqui e adicione ao array
// `heroImages` abaixo (mande os arquivos que eu converto p/ WebP otimizado).
// Set atual curado para a direção cyan/azul (coerente e legível sob o texto).
// Removidas da rotação (arquivos ainda em src/assets, é só reimportar se quiser):
// hero-nebula-4 (laranja saturada), hero-nebula-5 (verde fora da paleta),
// hero-workspace-1 (mesa poluída), hero-control-room (sala escura/suja).
import nebulaHero from "@/assets/nebula-hero.webp";
import heroNebulaNew2 from "@/assets/hero-nebula-new-2.webp";
import heroNebula3 from "@/assets/hero-nebula-3.webp";
import heroSatelliteStation from "@/assets/hero-satellite-station.webp";

const heroImages = [
  nebulaHero,
  heroNebulaNew2,
  heroNebula3,
  heroSatelliteStation,
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Only download images that have been shown (plus the next one to preload).
  // Avoids fetching all hero images on initial page load.
  const [loadedImages, setLoadedImages] = useState<Set<number>>(() => new Set([0]));
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % heroImages.length;
    setLoadedImages((prev) => {
      if (prev.has(currentImageIndex) && prev.has(nextIndex)) return prev;
      const next = new Set(prev);
      next.add(currentImageIndex);
      next.add(nextIndex);
      return next;
    });
  }, [currentImageIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Fade Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: loadedImages.has(index) ? `url(${image})` : undefined,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
      ))}

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Ir para imagem ${index + 1} de ${heroImages.length}`}
            aria-current={index === currentImageIndex}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary w-6 shadow-[0_0_10px_hsl(var(--primary))]' 
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>

      {/* Subtle grid + single ambient glow (restrained) */}
      <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in">
            <span className="w-8 h-px bg-neon-cyan" />
            <span className="text-xs md:text-sm font-orbitron uppercase tracking-[0.25em] text-neon-cyan">
              {t.hero.eyebrow}
            </span>
            <span className="w-8 h-px bg-neon-cyan" />
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold leading-[1.12] tracking-tight text-balance mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">{t.hero.title1}</span>{" "}
            <span className="text-primary">{t.hero.title2}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-foreground/75 font-rajdhani max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#contact">
              <Button variant="cyber" size="lg">
                {t.hero.cta.startProject}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg">
                {t.hero.cta.viewServices}
              </Button>
            </a>
          </div>

          {/* Tech stack strip */}
          <div
            className="mt-12 pt-6 border-t border-border/40 max-w-xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <p className="text-xs md:text-sm font-orbitron tracking-wider text-muted-foreground">
              {t.hero.stack}
            </p>
          </div>

          {/* Founder credit */}
          <a
            href="#founder"
            className="inline-flex items-center gap-3 mt-6 opacity-0 animate-fade-in group"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-orbitron font-bold text-background">
              {t.founder.name.charAt(0)}
            </span>
            <span className="text-sm text-muted-foreground font-rajdhani group-hover:text-foreground transition-colors">
              {t.hero.founderCredit}{" "}
              <span className="text-foreground font-medium">{t.founder.name}</span>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Scan Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px neon-divider" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-orbitron text-muted-foreground tracking-widest">{t.hero.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};
