import { Activity } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import statsBg from "@/assets/stats-bg.jpg";

export const Stats = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${statsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px neon-divider z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* About Content - Primeiro */}
        <div className="mb-12 text-center">
          <div className="cyber-badge inline-block mb-4">
            <Activity className="w-3 h-3 inline mr-2" />
            {t.stats.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mt-4 mb-6 text-foreground">
            {t.stats.title}{" "}
            <span className="gradient-text neon-text">{t.stats.titleHighlight}</span>
          </h2>
          <p className="text-foreground/80 mb-4 leading-relaxed font-rajdhani text-lg max-w-3xl mx-auto">
            {t.stats.description1}
          </p>
          <p className="text-foreground/80 leading-relaxed font-rajdhani text-lg max-w-3xl mx-auto">
            {t.stats.description2}
          </p>
        </div>

        {/* Stats Grid - Abaixo do texto */}
        <div className="cyber-card p-8 md:p-12 relative overflow-hidden mb-12">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/50" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-neon-magenta/50" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-neon-magenta/50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/50" />

          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-magenta/10 rounded-full blur-3xl" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {t.stats.items.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-orbitron font-bold gradient-text neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs font-orbitron tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two columns: dev_info + 4 cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Output */}
          <div className="cyber-card p-4">
            <div className="text-neon-green text-xs font-mono mb-2">
              {">"} {t.stats.terminal.command}
            </div>
            <div className="text-muted-foreground text-xs font-mono space-y-1">
              <p>{t.stats.terminal.type}: <span className="text-foreground">{t.stats.terminal.soloDeveloper}</span></p>
              <p>{t.stats.terminal.experience}: <span className="text-foreground">{t.stats.terminal.experienceValue}</span></p>
              <p>{t.stats.terminal.stack}: <span className="text-neon-cyan">{t.stats.terminal.stackValue}</span></p>
              <p>{t.stats.terminal.status}: <span className="text-neon-green">{t.stats.terminal.statusValue}</span></p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {t.stats.cards.map((item, index) => (
              <div
                key={item.title}
                className="cyber-card p-5 cyber-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-orbitron font-semibold mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-rajdhani">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
