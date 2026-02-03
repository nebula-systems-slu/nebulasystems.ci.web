import { Github, Linkedin, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Footer = () => {
  const { t } = useLanguage();
  const version = import.meta.env.VITE_APP_VERSION || "1.0.0";
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

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
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-neon-cyan transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-neon-cyan transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setDocsOpen(true)}
              className="hover:text-neon-cyan transition-colors cursor-pointer"
            >
              {t.footer.docs}
            </button>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              
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

      {/* Privacy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background border-neon-cyan/30">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-neon-cyan text-xl">
              {t.footer.privacy}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t.footer.lastUpdated}: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground/90 font-mono">
            <p>{t.footer.privacyModal.intro}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.privacyModal.dataCollection}</h3>
            <p>{t.footer.privacyModal.dataCollectionText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.privacyModal.useOfInfo}</h3>
            <p>{t.footer.privacyModal.useOfInfoText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.privacyModal.dataSharing}</h3>
            <p>{t.footer.privacyModal.dataSharingText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.privacyModal.security}</h3>
            <p>{t.footer.privacyModal.securityText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.privacyModal.cookies}</h3>
            <p>{t.footer.privacyModal.cookiesText}</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background border-neon-cyan/30">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-neon-cyan text-xl">
              {t.footer.terms}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t.footer.lastUpdated}: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground/90 font-mono">
            <p>{t.footer.termsModal.intro}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.termsModal.acceptance}</h3>
            <p>{t.footer.termsModal.acceptanceText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.termsModal.serviceUse}</h3>
            <p>{t.footer.termsModal.serviceUseText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.termsModal.intellectualProperty}</h3>
            <p>{t.footer.termsModal.intellectualPropertyText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.termsModal.liability}</h3>
            <p>{t.footer.termsModal.liabilityText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.termsModal.modifications}</h3>
            <p>{t.footer.termsModal.modificationsText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.termsModal.applicableLaw}</h3>
            <p>{t.footer.termsModal.applicableLawText}</p>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={docsOpen} onOpenChange={setDocsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background border-neon-cyan/30">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-neon-cyan text-xl">
              {t.footer.docs}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t.footer.lastUpdated}: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground/90 font-mono">
            <p>{t.footer.docsModal.intro}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.docsModal.methodology}</h3>
            <p>{t.footer.docsModal.methodologyText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.docsModal.developmentProcess}</h3>
            <p>{t.footer.docsModal.developmentProcessText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.docsModal.toolsStack}</h3>
            <p>{t.footer.docsModal.toolsStackText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.docsModal.qualityAssurance}</h3>
            <p>{t.footer.docsModal.qualityAssuranceText}</p>
            <h3 className="font-orbitron text-neon-cyan text-sm mt-4">{t.footer.docsModal.communication}</h3>
            <p>{t.footer.docsModal.communicationText}</p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};
