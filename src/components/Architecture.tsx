import { useState } from "react";
import { Network, Maximize2, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import awsWebApp from "@/assets/diagrams/aws-web-app.svg";
import cicdPipeline from "@/assets/diagrams/cicd-pipeline.svg";
import awsServerless from "@/assets/diagrams/aws-serverless.svg";
import awsWebAppEn from "@/assets/diagrams/aws-web-app-en.svg";
import cicdPipelineEn from "@/assets/diagrams/cicd-pipeline-en.svg";
import awsServerlessEn from "@/assets/diagrams/aws-serverless-en.svg";

const diagramsPt = [awsWebApp, cicdPipeline, awsServerless];
const diagramsEn = [awsWebAppEn, cicdPipelineEn, awsServerlessEn];

export const Architecture = () => {
  const { t, language } = useLanguage();
  const diagrams = language === "en" ? diagramsEn : diagramsPt;
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="cyber-badge inline-block mb-4">
            <Network className="w-3 h-3 inline mr-2" />
            {t.architecture.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6">
            {t.architecture.title}{" "}
            <span className="text-primary">{t.architecture.titleHighlight}</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-rajdhani text-lg">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.architecture.items.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setSelected(index)}
              className="group cyber-card text-left overflow-hidden cyber-hover opacity-0 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Diagram preview */}
              <div className="relative bg-cyber-dark border-b border-border/40 overflow-hidden">
                <img
                  src={diagrams[index]}
                  alt={item.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 right-3 w-8 h-8 border border-neon-cyan/40 bg-background/70 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-neon-cyan" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-rajdhani mb-4">
                  {item.caption}
                </p>
                <span className="mt-auto text-xs text-neon-cyan font-orbitron tracking-wider flex items-center gap-1">
                  {t.architecture.viewDetail} <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-5xl bg-background border-neon-cyan/30 p-0 overflow-hidden">
          {selected !== null && (
            <>
              <DialogHeader className="p-6 pb-4 border-b border-border/30">
                <DialogTitle className="font-orbitron text-xl flex items-center gap-3">
                  <Network className="w-5 h-5 text-neon-cyan" />
                  <span className="text-primary">{t.architecture.items[selected].title}</span>
                </DialogTitle>
              </DialogHeader>

              {/* Full diagram */}
              <div className="bg-cyber-dark overflow-x-auto">
                <img
                  src={diagrams[selected]}
                  alt={t.architecture.items[selected].title}
                  className="w-full min-w-[720px]"
                />
              </div>

              {/* Highlights */}
              <div className="p-6 grid sm:grid-cols-2 gap-3">
                {t.architecture.items[selected].points.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-muted-foreground font-rajdhani">
                    <span className="text-neon-green mt-1">▹</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="absolute bottom-0 left-0 right-0 h-px neon-divider" />
    </section>
  );
};
