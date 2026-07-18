import { Cpu, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import techBg from "@/assets/tech-bg.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TechnologySkill {
  name: string;
  description: string;
}

interface Technology {
  name: string;
  categoryKey: string;
  skills: { nameKey: string; descKey: string }[];
}

const technologies: Technology[] = [
  { 
    name: "React", 
    categoryKey: "frontend", 
    skills: [
      { nameKey: "reactHooks", descKey: "reactHooksDesc" },
      { nameKey: "reactQuery", descKey: "reactQueryDesc" },
      { nameKey: "componentArch", descKey: "componentArchDesc" },
      { nameKey: "perfOptimization", descKey: "perfOptimizationDesc" },
    ]
  },
  { 
    name: "TypeScript", 
    categoryKey: "language", 
    skills: [
      { nameKey: "typeSystem", descKey: "typeSystemDesc" },
      { nameKey: "decorators", descKey: "decoratorsDesc" },
      { nameKey: "utilityTypes", descKey: "utilityTypesDesc" },
      { nameKey: "typeGuards", descKey: "typeGuardsDesc" },
    ]
  },
  { 
    name: "Node.js", 
    categoryKey: "runtime", 
    skills: [
      { nameKey: "expressFastify", descKey: "expressFastifyDesc" },
      { nameKey: "streams", descKey: "streamsDesc" },
      { nameKey: "workerThreads", descKey: "workerThreadsDesc" },
      { nameKey: "npmYarn", descKey: "npmYarnDesc" },
    ]
  },
  { 
    name: "Python", 
    categoryKey: "backend", 
    skills: [
      { nameKey: "fastApiDjango", descKey: "fastApiDjangoDesc" },
      { nameKey: "dataScience", descKey: "dataScienceDesc" },
      { nameKey: "automation", descKey: "automationDesc" },
      { nameKey: "testing", descKey: "testingDesc" },
    ]
  },
  { 
    name: "AWS", 
    categoryKey: "cloud", 
    skills: [
      { nameKey: "ec2Ecs", descKey: "ec2EcsDesc" },
      { nameKey: "s3Cloudfront", descKey: "s3CloudfrontDesc" },
      { nameKey: "ecr", descKey: "ecrDesc" },
      { nameKey: "organizations", descKey: "organizationsDesc" },
      { nameKey: "iamSecurity", descKey: "iamSecurityDesc" },
    ]
  },
  { 
    name: "Vercel", 
    categoryKey: "deploy", 
    skills: [
      { nameKey: "vercelDeploy", descKey: "vercelDeployDesc" },
      { nameKey: "vercelEdge", descKey: "vercelEdgeDesc" },
      { nameKey: "vercelAnalytics", descKey: "vercelAnalyticsDesc" },
      { nameKey: "vercelPreview", descKey: "vercelPreviewDesc" },
    ]
  },
  { 
    name: "Docker", 
    categoryKey: "container", 
    skills: [
      { nameKey: "dockerfile", descKey: "dockerfileDesc" },
      { nameKey: "dockerCompose", descKey: "dockerComposeDesc" },
      { nameKey: "registry", descKey: "registryDesc" },
      { nameKey: "networking", descKey: "networkingDesc" },
    ]
  },
  { 
    name: "PostgreSQL", 
    categoryKey: "database", 
    skills: [
      { nameKey: "queryOptimization", descKey: "queryOptimizationDesc" },
      { nameKey: "partitioning", descKey: "partitioningDesc" },
      { nameKey: "extensions", descKey: "extensionsDesc" },
      { nameKey: "replication", descKey: "replicationDesc" },
    ]
  },
  { 
    name: "MongoDB", 
    categoryKey: "nosql", 
    skills: [
      { nameKey: "aggregation", descKey: "aggregationDesc" },
      { nameKey: "indexing", descKey: "indexingDesc" },
      { nameKey: "sharding", descKey: "shardingDesc" },
      { nameKey: "atlas", descKey: "atlasDesc" },
    ]
  },
  { 
    name: "Terraform", 
    categoryKey: "iac", 
    skills: [
      { nameKey: "modules", descKey: "modulesDesc" },
      { nameKey: "stateManagement", descKey: "stateManagementDesc" },
      { nameKey: "multiCloud", descKey: "multiCloudDesc" },
      { nameKey: "workspaces", descKey: "workspacesDesc" },
    ]
  },
  { 
    name: "Next.js", 
    categoryKey: "framework", 
    skills: [
      { nameKey: "ssrSsg", descKey: "ssrSsgDesc" },
      { nameKey: "apiRoutes", descKey: "apiRoutesDesc" },
      { nameKey: "appRouter", descKey: "appRouterDesc" },
      { nameKey: "imageOptimization", descKey: "imageOptimizationDesc" },
    ]
  },
];

export const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const { t } = useLanguage();

  const getCategory = (categoryKey: string) => {
    return t.tech.categories[categoryKey as keyof typeof t.tech.categories] || categoryKey.toUpperCase();
  };

  const getSkillName = (nameKey: string) => {
    return t.tech.skills[nameKey as keyof typeof t.tech.skills] || nameKey;
  };

  const getSkillDesc = (descKey: string) => {
    return t.tech.skills[descKey as keyof typeof t.tech.skills] || descKey;
  };

  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${techBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="cyber-badge inline-block mb-4">
            <Cpu className="w-3 h-3 inline mr-2" />
            {t.tech.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mt-4 mb-6">
            {t.tech.title}{" "}
            <span className="text-primary">{t.tech.titleHighlight}</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-rajdhani text-lg">
            {t.tech.subtitle}
          </p>
        </div>

        {/* Tech Grid - Terminal Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className="group cyber-card p-4 cyber-hover cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Tech Name */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              </div>
              
              {/* Category */}
              <div className="text-xs text-muted-foreground font-orbitron tracking-wider">
                {getCategory(tech.categoryKey)}
              </div>

              {/* Skills Count */}
              <div className="text-xs text-neon-cyan font-mono mt-1">
                {tech.skills.length} {t.tech.modules}
              </div>

              {/* Status Bar */}
              <div className="mt-3 h-1 bg-muted/50 rounded overflow-hidden">
                <div 
                  className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Tech Banner */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-8 animate-[scroll_30s_linear_infinite]">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={`scroll-${index}`}
                className="flex-shrink-0 px-6 py-3 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors font-orbitron text-sm tracking-wider whitespace-nowrap"
              >
                &lt;{tech.name}/&gt;
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Command */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 cyber-card px-6 py-3">
            <span className="text-neon-green font-mono">$</span>
            <span className="text-muted-foreground font-mono text-sm">
              {t.tech.terminalCommand}
            </span>
            <span className="w-2 h-4 bg-neon-green animate-pulse" />
          </div>
        </div>
      </div>

      {/* Skills Modal */}
      <Dialog open={!!selectedTech} onOpenChange={() => setSelectedTech(null)}>
        <DialogContent className="cyber-card border-neon-cyan/30 bg-background/95 backdrop-blur-xl max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-2xl flex items-center gap-3">
              <span className="text-primary">{selectedTech?.name}</span>
              <span className="cyber-badge text-xs">{selectedTech && getCategory(selectedTech.categoryKey)}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-3">
            <div className="text-xs text-muted-foreground font-mono mb-4">
              <span className="text-neon-green">{">"}</span> {t.tech.modulesAvailable}:
            </div>
            
            {selectedTech?.skills.map((skill) => (
              <div 
                key={skill.nameKey}
                className="flex items-start gap-3 p-3 border border-border/30 hover:border-neon-cyan/50 transition-colors rounded"
              >
                <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-orbitron text-sm text-foreground">
                    {getSkillName(skill.nameKey)}
                  </div>
                  <div className="text-xs text-muted-foreground font-rajdhani">
                    {getSkillDesc(skill.descKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border/30">
            <div className="text-xs text-muted-foreground font-mono">
              <span className="text-neon-cyan">{t.tech.status}:</span>{" "}
              <span className="text-neon-green">OPERATIONAL</span> // 
              <span className="text-neon-magenta"> {selectedTech?.skills.length} {t.tech.skillsLoaded}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};
