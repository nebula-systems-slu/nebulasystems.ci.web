import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import nebulaHero from "@/assets/nebula-hero.jpg";
import heroNebulaNew2 from "@/assets/hero-nebula-new-2.jpg";
import heroNebula3 from "@/assets/hero-nebula-3.jpg";
import heroNebula4 from "@/assets/hero-nebula-4.jpg";
import heroNebula5 from "@/assets/hero-nebula-5.jpg";
import heroWorkspace1 from "@/assets/hero-workspace-1.jpg";
import heroControlRoom from "@/assets/hero-control-room.jpg";
import heroSatelliteStation from "@/assets/hero-satellite-station.jpg";

const heroImages = [
  nebulaHero,
  heroNebulaNew2,
  heroNebula3,
  heroNebula4,
  heroNebula5,
  heroWorkspace1,
  heroControlRoom,
  heroSatelliteStation,
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
      ))}

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary w-6 shadow-[0_0_10px_hsl(var(--primary))]' 
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>

      {/* Scan Lines Overlay */}
      <div className="absolute inset-0 scan-lines pointer-events-none opacity-30" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon-orange/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />

      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 text-neon-cyan/20 animate-float hidden lg:block">
        <Terminal className="w-12 h-12" />
      </div>
      <div className="absolute bottom-32 right-20 text-neon-magenta/20 animate-float hidden lg:block" style={{ animationDelay: "3s" }}>
        <Cpu className="w-16 h-16" />
      </div>
      <div className="absolute top-1/3 right-10 text-neon-orange/20 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <Rocket className="w-10 h-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-3 cyber-card px-5 py-3 mb-8 animate-fade-in">
            <span className="text-neon-green font-orbitron text-xs">{">"}</span>
            <span className="text-sm text-muted-foreground font-rajdhani tracking-wide">
              {t.hero.systemInit} // <span className="text-primary">{t.hero.missionActive}</span>
            </span>
            <span className="w-2 h-4 bg-neon-green animate-pulse" />
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-bold mb-6 leading-tight opacity-0 animate-fade-in tracking-tight"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">{t.hero.title1}</span>
            <br />
            <span className="gradient-text neon-text">{t.hero.title2}</span>
          </h1>

          {/* Subtitle with brackets */}
          <div
            className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-neon-magenta font-orbitron text-2xl">[</span>
            <p className="text-lg md:text-xl text-muted-foreground font-rajdhani max-w-2xl">
              {t.hero.subtitle}
            </p>
            <span className="text-neon-magenta font-orbitron text-2xl">]</span>
          </div>

          {/* Stats Row */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "8+", label: t.hero.stats.years },
              //{ value: "50+", label: t.hero.stats.projects },
              { value: "FULL", label: t.hero.stats.stack },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-orbitron font-bold text-primary neon-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-orbitron tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="cyber" size="lg">
              {t.hero.cta.startProject}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              {t.hero.cta.viewServices}
            </Button>
          </div>

          {/* Tech Pills */}
          <div
            className="flex flex-wrap justify-center gap-3 mt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { icon: "⚡", label: t.hero.pills.cloud, color: "cyan" },
              { icon: "🛠", label: t.hero.pills.devops, color: "magenta" },
              { icon: "🚀", label: t.hero.pills.deploy, color: "orange" },
            ].map((item) => (
              <div
                key={item.label}
                className={`cyber-badge ${item.color === 'magenta' ? 'cyber-badge-magenta' : ''}`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
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
