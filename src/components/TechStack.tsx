import { Cpu, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import techBg from "@/assets/tech-bg.jpg";
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
  category: string;
  status: string;
  skills: TechnologySkill[];
}

const technologies: Technology[] = [
  { 
    name: "React", 
    category: "FRONTEND", 
    status: "ACTIVE",
    skills: [
      { name: "Hooks & Context API", description: "Estado e gerenciamento avançado" },
      { name: "React Query", description: "Cache e sincronização de dados" },
      { name: "Component Architecture", description: "Componentes reutilizáveis e escaláveis" },
      { name: "Performance Optimization", description: "Memoization, lazy loading, code splitting" },
    ]
  },
  { 
    name: "TypeScript", 
    category: "LANGUAGE", 
    status: "ACTIVE",
    skills: [
      { name: "Type System", description: "Tipos avançados e generics" },
      { name: "Decorators", description: "Metaprogramação e DI" },
      { name: "Utility Types", description: "Partial, Pick, Omit, Record" },
      { name: "Type Guards", description: "Validação de tipos em runtime" },
    ]
  },
  { 
    name: "Node.js", 
    category: "RUNTIME", 
    status: "ACTIVE",
    skills: [
      { name: "Express/Fastify", description: "APIs REST e GraphQL" },
      { name: "Streams", description: "Processamento de dados em tempo real" },
      { name: "Worker Threads", description: "Paralelismo e performance" },
      { name: "NPM/Yarn", description: "Gerenciamento de dependências" },
    ]
  },
  { 
    name: "Python", 
    category: "BACKEND", 
    status: "ACTIVE",
    skills: [
      { name: "FastAPI/Django", description: "Frameworks web modernos" },
      { name: "Data Science", description: "Pandas, NumPy, Scikit-learn" },
      { name: "Automation", description: "Scripts e automação de processos" },
      { name: "Testing", description: "Pytest e coverage" },
    ]
  },
  { 
    name: "AWS", 
    category: "CLOUD", 
    status: "ACTIVE",
    skills: [
      { name: "EC2 & ECS", description: "Compute e containers" },
      { name: "S3 & CloudFront", description: "Storage e CDN" },
      { name: "Lambda", description: "Serverless functions" },
      { name: "RDS & DynamoDB", description: "Databases gerenciados" },
      { name: "Organizations", description: "Multi-account management" },
      { name: "IAM & Security", description: "Controle de acesso e policies" },
    ]
  },
  { 
    name: "Azure", 
    category: "CLOUD", 
    status: "ACTIVE",
    skills: [
      { name: "Azure Functions", description: "Serverless compute" },
      { name: "App Service", description: "Web apps e APIs" },
      { name: "Blob Storage", description: "Object storage escalável" },
      { name: "Azure DevOps", description: "CI/CD pipelines" },
      { name: "Cosmos DB", description: "Database NoSQL global" },
    ]
  },
  { 
    name: "Docker", 
    category: "CONTAINER", 
    status: "ACTIVE",
    skills: [
      { name: "Dockerfile", description: "Build de imagens otimizadas" },
      { name: "Docker Compose", description: "Multi-container applications" },
      { name: "Registry", description: "Gestão de imagens privadas" },
      { name: "Networking", description: "Redes e comunicação entre containers" },
    ]
  },
  { 
    name: "Kubernetes", 
    category: "ORCHESTRATION", 
    status: "ACTIVE",
    skills: [
      { name: "Deployments", description: "Rolling updates e rollbacks" },
      { name: "Services & Ingress", description: "Load balancing e routing" },
      { name: "ConfigMaps & Secrets", description: "Gerenciamento de configuração" },
      { name: "Helm Charts", description: "Package management" },
      { name: "Monitoring", description: "Prometheus e Grafana" },
    ]
  },
  { 
    name: "PostgreSQL", 
    category: "DATABASE", 
    status: "ACTIVE",
    skills: [
      { name: "Query Optimization", description: "EXPLAIN e índices" },
      { name: "Partitioning", description: "Tabelas particionadas" },
      { name: "Extensions", description: "PostGIS, pg_trgm, etc" },
      { name: "Replication", description: "Read replicas e HA" },
    ]
  },
  { 
    name: "MongoDB", 
    category: "NOSQL", 
    status: "ACTIVE",
    skills: [
      { name: "Aggregation Pipeline", description: "Processamento de dados" },
      { name: "Indexing", description: "Compound e text indexes" },
      { name: "Sharding", description: "Horizontal scaling" },
      { name: "Atlas", description: "Cloud management" },
    ]
  },
  { 
    name: "Terraform", 
    category: "IAC", 
    status: "ACTIVE",
    skills: [
      { name: "Modules", description: "Código reutilizável" },
      { name: "State Management", description: "Remote state e locking" },
      { name: "Multi-cloud", description: "AWS, Azure, GCP" },
      { name: "Workspaces", description: "Ambientes isolados" },
    ]
  },
  { 
    name: "Next.js", 
    category: "FRAMEWORK", 
    status: "ACTIVE",
    skills: [
      { name: "SSR/SSG", description: "Rendering strategies" },
      { name: "API Routes", description: "Backend integrado" },
      { name: "App Router", description: "Server components" },
      { name: "Image Optimization", description: "Lazy loading automático" },
    ]
  },
];

export const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const { t } = useLanguage();

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
            <span className="gradient-text neon-text">{t.tech.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-rajdhani text-lg">
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
                {tech.category}
              </div>

              {/* Skills Count */}
              <div className="text-xs text-neon-cyan font-mono mt-1">
                {tech.skills.length} {t.tech.modules}
              </div>

              {/* Status Bar */}
              <div className="mt-3 h-1 bg-muted/50 rounded overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta w-0 group-hover:w-full transition-all duration-700"
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
              <span className="cyber-badge text-xs">{selectedTech?.category}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-3">
            <div className="text-xs text-muted-foreground font-mono mb-4">
              <span className="text-neon-green">{">"}</span> {t.tech.modulesAvailable}:
            </div>
            
            {selectedTech?.skills.map((skill) => (
              <div 
                key={skill.name}
                className="flex items-start gap-3 p-3 border border-border/30 hover:border-neon-cyan/50 transition-colors rounded"
              >
                <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-orbitron text-sm text-foreground">
                    {skill.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-rajdhani">
                    {skill.description}
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
