import { useState } from "react";
import { Lightbulb, Palette, Building2, Code2, Rocket, Play, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const stepIcons = [Lightbulb, Palette, Building2, Code2, Rocket];

// Vídeos das 5 etapas (opcional). Coloque os arquivos em `public/videos/`
// e preencha o caminho aqui — ex.: "/videos/process-01.mp4".
// Enquanto estiver `null`, o card mostra o placeholder "em breve".
const stepVideos: (string | null)[] = [
  "/videos/process-01.mp4", // 01 · Ideia → Estrutura
  "/videos/process-02.mp4", // 02 · Design e Prototipação
  "/videos/process-03.mp4", // 03 · Arquitetura
  "/videos/process-04.mp4", // 04 · Desenvolvimento
  "/videos/process-05.mp4", // 05 · Entrega e Evolução
];

const getStepColorClasses = (index: number) => {
  const colors = [
    { border: "border-neon-cyan/40", glow: "shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]", hoverGlow: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]", icon: "text-neon-cyan", line: "from-neon-cyan", number: "text-neon-cyan", bg: "bg-neon-cyan/10" },
    { border: "border-neon-magenta/40", glow: "shadow-[0_0_30px_hsl(var(--neon-magenta)/0.2)]", hoverGlow: "hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.2)]", icon: "text-neon-magenta", line: "from-neon-magenta", number: "text-neon-magenta", bg: "bg-neon-magenta/10" },
    { border: "border-neon-orange/40", glow: "shadow-[0_0_30px_hsl(var(--neon-orange)/0.2)]", hoverGlow: "hover:shadow-[0_0_30px_hsl(var(--neon-orange)/0.2)]", icon: "text-neon-orange", line: "from-neon-orange", number: "text-neon-orange", bg: "bg-neon-orange/10" },
    { border: "border-neon-cyan/40", glow: "shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]", hoverGlow: "hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]", icon: "text-neon-cyan", line: "from-neon-cyan", number: "text-neon-cyan", bg: "bg-neon-cyan/10" },
    { border: "border-neon-magenta/40", glow: "shadow-[0_0_30px_hsl(var(--neon-magenta)/0.2)]", hoverGlow: "hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.2)]", icon: "text-neon-magenta", line: "from-neon-magenta", number: "text-neon-magenta", bg: "bg-neon-magenta/10" },
  ];
  return colors[index];
};

export const Process = () => {
  const { t } = useLanguage();
  const steps = t.process.steps;
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--neon-cyan) / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--neon-magenta) / 0.1) 0%, transparent 50%)",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            <span className="text-neon-cyan font-orbitron text-xs tracking-widest">
              {t.process.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            {t.process.title}{" "}
            <span className="text-neon-cyan">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-rajdhani text-lg">
            {t.process.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-cyan/25 to-transparent md:-translate-x-px" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const colors = getStepColorClasses(index);
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex items-start mb-16 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 rounded-full border-2 ${colors.border} ${colors.bg} ${colors.glow} flex items-center justify-center backdrop-blur-sm transition-all duration-500`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? "md:pr-4" : "md:pl-4 md:ml-auto"}`}>
                  <div
                    className={`cyber-card p-6 border ${colors.border} ${colors.hoverGlow} transition-all duration-500 group cursor-pointer`}
                    onClick={() => setSelectedStep(index)}
                  >
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`font-orbitron text-xs ${colors.number} tracking-widest`}>
                        {t.process.stepLabel} 0{index + 1}
                      </span>
                      <div className={`h-px flex-1 bg-gradient-to-r ${colors.line} to-transparent opacity-30`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Checklist */}
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground font-rajdhani">
                          <span className={`${colors.icon} text-sm mt-1`}>▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Note if exists */}
                    {step.note && (
                      <div className="mt-4 pt-3 border-t border-border/30">
                        <p className={`text-xs font-orbitron ${colors.number} opacity-70`}>
                          {step.note}
                        </p>
                      </div>
                    )}

                    {/* Hover play indicator */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-8 h-8 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                        <Play className={`w-3 h-3 ${colors.icon} ml-0.5`} />
                      </div>
                      <span className={`text-xs font-orbitron ${colors.number} tracking-wider`}>
                        {t.process.watchVideo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <div className="inline-block max-w-3xl border border-neon-cyan/20 bg-card/50 backdrop-blur-sm p-8">
            <p className="text-foreground font-rajdhani text-lg md:text-xl italic leading-relaxed">
              "{t.process.quote}"
            </p>
          </div>
        </div>
      </div>

      {/* Video Preview Dialog */}
      <Dialog open={selectedStep !== null} onOpenChange={(open) => !open && setSelectedStep(null)}>
        <DialogContent className="max-w-3xl bg-background border border-neon-cyan/30 p-0 overflow-hidden">
          {selectedStep !== null && (() => {
            const colors = getStepColorClasses(selectedStep);
            const Icon = stepIcons[selectedStep];
            const step = steps[selectedStep];

            return (
              <>
                <DialogHeader className="p-6 pb-4 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <div>
                      <DialogTitle className="font-orbitron text-lg">
                        <span className={`${colors.number} mr-2`}>{t.process.stepLabel} 0{selectedStep + 1}</span>
                        {step.title}
                      </DialogTitle>
                      <DialogDescription className="font-rajdhani text-sm">
                        {t.process.videoPreview}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                {/* Video area — mostra o vídeo se houver; senão, placeholder */}
                <div className="relative aspect-video bg-muted/30 flex items-center justify-center">
                  {stepVideos[selectedStep] ? (
                    <video
                      key={stepVideos[selectedStep] as string}
                      src={stepVideos[selectedStep] as string}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  ) : (
                    <>
                      {/* Placeholder enquanto o vídeo não é adicionado */}
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at center, hsl(var(--neon-cyan) / 0.05) 0%, transparent 70%)`,
                      }} />
                      <div className="flex flex-col items-center gap-4 text-center z-10">
                        <div className={`w-20 h-20 rounded-full ${colors.bg} border-2 ${colors.border} ${colors.glow} flex items-center justify-center`}>
                          <Play className={`w-8 h-8 ${colors.icon} ml-1`} />
                        </div>
                        <p className="text-muted-foreground font-orbitron text-xs tracking-widest">
                          {t.process.videoComingSoon}
                        </p>
                      </div>
                      <div className="absolute inset-0 scan-lines pointer-events-none opacity-10" />
                    </>
                  )}
                </div>

                {/* Step details in modal */}
                <div className="p-6 pt-4">
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground font-rajdhani">
                        <span className={`${colors.icon} text-sm mt-1`}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {step.note && (
                    <div className="mt-4 pt-3 border-t border-border/30">
                      <p className={`text-xs font-orbitron ${colors.number} opacity-70`}>
                        {step.note}
                      </p>
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
};
