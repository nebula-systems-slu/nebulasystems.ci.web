import { Linkedin, Github, Mail, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// TODO: adicionar o LinkedIn real quando disponível
const FOUNDER_LINKS = {
  linkedin: "#",
  github: "https://github.com/Wayfiding",
  email: "mailto:albertojr11@hotmail.com",
};

export const Founder = () => {
  const { t } = useLanguage();

  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-8 md:p-12 grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-center">
            {/* Photo — trocar o placeholder por uma foto real */}
            <div className="relative w-[180px] h-[180px] mx-auto md:mx-0">
              <div className="w-full h-full border border-neon-cyan/30 bg-gradient-to-br from-cyber-dark to-muted flex items-center justify-center overflow-hidden">
                {/* TODO: <img src={...} alt={t.founder.name} className="w-full h-full object-cover" /> */}
                <span className="text-6xl font-orbitron font-bold text-neon-cyan/80">
                  {t.founder.name.charAt(0)}
                </span>
              </div>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-neon-cyan" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-neon-cyan" />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-orbitron tracking-widest text-muted-foreground uppercase">
                [ {t.founder.photoPlaceholder} ]
              </span>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <div className="cyber-badge inline-block mb-4">
                <Terminal className="w-3 h-3 inline mr-2" />
                {t.founder.label}
              </div>

              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-1">
                {t.founder.name}
              </h2>
              <div className="text-sm font-orbitron text-neon-cyan tracking-wide mb-5">
                {t.founder.role}
              </div>

              <p className="text-foreground/80 font-rajdhani text-lg leading-relaxed mb-4">
                {t.founder.bio}
              </p>

              <div className="border-l-2 border-neon-cyan/50 pl-4 mb-6">
                <p className="text-muted-foreground font-rajdhani italic">
                  {t.founder.boutique}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  { icon: Linkedin, label: t.founder.links.linkedin, href: FOUNDER_LINKS.linkedin },
                  { icon: Github, label: t.founder.links.github, href: FOUNDER_LINKS.github },
                  { icon: Mail, label: t.founder.links.email, href: FOUNDER_LINKS.email },
                ].filter(({ href }) => href !== "#").map(({ icon: Icon, label, href }) => {
                  const external = href.startsWith("http");
                  return (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-2 px-4 py-2 border border-border/50 text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.2)] transition-all font-orbitron text-xs tracking-wider"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px neon-divider" />
    </section>
  );
};
