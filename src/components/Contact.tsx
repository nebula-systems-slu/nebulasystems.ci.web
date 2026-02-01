import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import contactBg from "@/assets/contact-bg.jpg";

const icons = [Mail, Phone, MapPin];
const colors = ["cyan", "magenta", "orange"];

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/95 via-background/85 to-background/95" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/10 rounded-full blur-3xl" />

      {/* Perspective Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-64 perspective-grid opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="cyber-card p-8 md:p-12 text-center mb-16 relative overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-neon-cyan" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-neon-cyan" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-neon-magenta" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-neon-magenta" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-magenta/5" />
            
            <div className="relative z-10">
              <div className="cyber-badge inline-block mb-6">
                <Zap className="w-3 h-3 inline mr-2" />
                {t.contact.badge}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
                {t.contact.title}{" "}
                <span className="gradient-text neon-text">{t.contact.titleHighlight}</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-rajdhani text-lg">
                {t.contact.subtitle}
              </p>
              
              <Button variant="cyber" size="lg">
                {t.contact.cta}
                <ArrowRight className="w-5 h-5" />
              </Button>

              {/* Status Line */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-xs font-orbitron text-muted-foreground">
                  {t.contact.status}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.contact.info.map((item, index) => {
              const Icon = icons[index];
              const color = colors[index];
              const href = index === 0 
                ? `mailto:${item.value}` 
                : index === 1 
                  ? `tel:${item.value.replace(/\D/g, '')}` 
                  : "#";
              
              return (
                <a
                  key={item.title}
                  href={href}
                  className="cyber-card p-6 text-center cyber-hover group"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center text-neon-${color}`}>
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="text-xs text-muted-foreground font-orbitron tracking-widest mb-2">
                    {item.title}
                  </div>
                  <div className="font-rajdhani text-lg group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px neon-divider" />
    </section>
  );
};
