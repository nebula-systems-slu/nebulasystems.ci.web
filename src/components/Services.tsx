import { Cloud, Code2, Database, Rocket, Layers, Shield, Wrench, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import servicesBg from "@/assets/services-bg.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const icons = [Code2, Cloud, Layers, Database, Shield, Rocket];

const getColorClasses = (color: string) => {
  const colors = {
    cyan: {
      border: "border-neon-cyan/30 hover:border-neon-cyan/60",
      shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]",
      icon: "text-neon-cyan",
      badge: "text-neon-cyan border-neon-cyan/50",
    },
    magenta: {
      border: "border-neon-magenta/30 hover:border-neon-magenta/60",
      shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.3)]",
      icon: "text-neon-magenta",
      badge: "text-neon-magenta border-neon-magenta/50",
    },
    orange: {
      border: "border-neon-orange/30 hover:border-neon-orange/60",
      shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-orange)/0.3)]",
      icon: "text-neon-orange",
      badge: "text-neon-orange border-neon-orange/50",
    },
  };
  return colors[color as keyof typeof colors] || colors.cyan;
};

const colorPattern = ["cyan", "magenta", "orange", "cyan", "magenta", "orange"];

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  modalContent?: {
    intro: string;
    sections: { title: string; text: string }[];
  };
}

export const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleServiceClick = (service: ServiceItem, index: number) => {
    setSelectedService(service);
    setSelectedIndex(index);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="cyber-badge inline-block mb-4">
            <Wrench className="w-3 h-3 inline mr-2" />
            {t.services.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6">
            {t.services.title}{" "}
            <span className="text-primary">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-rajdhani text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const colorClasses = getColorClasses(colorPattern[index]);
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                onClick={() => handleServiceClick(service as ServiceItem, index)}
                className={`group cyber-card p-6 ${colorClasses.border} ${colorClasses.shadow} transition-all duration-300 cursor-pointer opacity-0 animate-fade-in bracket-corners`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${colorClasses.icon}`}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <span className={`text-xs font-orbitron px-2 py-1 border ${colorClasses.badge}`}>
                    {service.subtitle}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-orbitron font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-rajdhani">
                  {service.description}
                </p>

                {/* Terminal Footer */}
                <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
                  <span className="text-neon-green text-xs font-mono">
                    {">"} {t.services.status}: <span className="text-foreground">{t.services.operational}</span>
                  </span>
                  <span className="text-xs text-muted-foreground font-rajdhani flex items-center gap-1 group-hover:text-primary transition-colors">
                    {t.services.learnMore} <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="cyber-card border-neon-cyan/30 bg-background/95 backdrop-blur-xl max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-2xl flex items-center gap-3">
              <span className="text-primary">{selectedService?.title}</span>
              <span className="cyber-badge text-xs">{selectedService?.subtitle}</span>
            </DialogTitle>
          </DialogHeader>
          
          {selectedService?.modalContent && (
            <div className="mt-4 space-y-4">
              <p className="text-muted-foreground font-rajdhani text-sm leading-relaxed">
                {selectedService.modalContent.intro}
              </p>
              
              <div className="space-y-3">
                {selectedService.modalContent.sections.map((section) => (
                  <div 
                    key={section.title}
                    className="flex items-start gap-3 p-3 border border-border/30 hover:border-neon-cyan/50 transition-colors rounded"
                  >
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getColorClasses(colorPattern[selectedIndex]).icon}`} />
                    <div>
                      <div className="font-orbitron text-sm text-foreground">
                        {section.title}
                      </div>
                      <div className="text-xs text-muted-foreground font-rajdhani">
                        {section.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="text-xs text-muted-foreground font-mono">
              <span className="text-neon-cyan">{t.services.status}:</span>{" "}
              <span className="text-neon-green">{t.services.operational}</span> // 
              <span className="text-neon-magenta"> {selectedService?.modalContent?.sections.length || 0} modules loaded</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px neon-divider" />
    </section>
  );
};
