export const translations = {
  "pt-BR": {
    // Navbar
    nav: {
      inicio: "INÍCIO",
      servicos: "SERVIÇOS",
      processo: "PROCESSO",
      arquitetura: "ARQUITETURA",
      tech: "TECH",
      sobre: "SOBRE",
      contato: "CONTATO",
      connect: "<CONNECT/>",
    },

    // Hero
    hero: {
      eyebrow: "Engenharia de software & cloud",
      title1: "Software sob medida,",
      title2: "da ideia à produção.",
      subtitle:
        "Aplicações web e infraestrutura AWS para empresas que dependem de tecnologia que funciona. Você fala direto com o engenheiro — sem intermediários.",
      stack: "React · TypeScript · Node.js · AWS · Docker · Terraform",
      founderCredit: "Fundado e desenvolvido por",
      cta: {
        startProject: "ENTRAR EM CONTATO",
        viewServices: "VER SERVIÇOS",
      },
      scroll: "SCROLL",
    },

    // Services
    services: {
      badge: "MÓDULOS DE SERVIÇO",
      title: "SISTEMAS",
      titleHighlight: "OPERACIONAIS",
      subtitle:
        "Soluções de engenharia para construir, escalar e proteger sua infraestrutura digital.",
      status: "status",
      operational: "OPERATIONAL",
      items: [
        {
          title: "Web Engineering",
          subtitle: "FRONTEND / BACKEND",
          description:
            "Aplicações web de alta performance com React, TypeScript e arquiteturas modernas.",
          modalContent: {
            intro: "Desenvolvimento de aplicações web modernas e escaláveis utilizando as melhores práticas e tecnologias do mercado.",
            sections: [
              { title: "Frontend Development", text: "Interfaces responsivas e interativas com React, TypeScript e frameworks modernos. Foco em performance, acessibilidade e experiência do usuário." },
              { title: "Backend Development", text: "APIs robustas com Node.js, Python e frameworks como Express, FastAPI e NestJS. Arquiteturas RESTful e GraphQL." },
              { title: "Full Stack Solutions", text: "Integração completa entre frontend e backend, com deploy contínuo e monitoramento em produção." },
            ],
          },
        },
        {
          title: "Cloud Architecture",
          subtitle: "AWS / IAC",
          description:
            "Infraestrutura escalável e resiliente em nuvem com otimização de custos.",
          modalContent: {
            intro: "Arquitetura de cloud nativa com foco em escalabilidade, segurança e otimização de custos utilizando AWS.",
            sections: [
              { title: "AWS Services", text: "EC2, ECS, S3, CloudFront, Lambda, RDS e outros serviços gerenciados para construir infraestruturas robustas." },
              { title: "Infrastructure as Code", text: "Terraform e CloudFormation para provisionar e gerenciar recursos de forma automatizada e versionada." },
              { title: "Cost Optimization", text: "Análise e otimização de custos, rightsizing de recursos e implementação de reserved instances." },
            ],
          },
        },
        {
          title: "DevOps & CI/CD",
          subtitle: "DOCKER / VERCEL / HEROKU",
          description:
            "Pipelines automatizados, containerização e deploy em plataformas modernas.",
          modalContent: {
            intro: "Automação de processos de desenvolvimento, build, teste e deploy para entregas rápidas e confiáveis.",
            sections: [
              { title: "Containerização", text: "Docker para criar ambientes consistentes de desenvolvimento e produção, facilitando o deploy e escalabilidade." },
              { title: "Plataformas de Deploy", text: "Vercel, Heroku, Railway e Render para deploy rápido e gerenciado de aplicações web e APIs." },
              { title: "CI/CD Pipelines", text: "GitHub Actions e GitLab CI para automação de testes, builds e deploys contínuos." },
            ],
          },
        },
        {
          title: "Data Engineering",
          subtitle: "SQL / NOSQL",
          description:
            "Arquitetura de dados, ETL pipelines e soluções de analytics em tempo real.",
          modalContent: {
            intro: "Soluções de dados escaláveis para armazenamento, processamento e análise de grandes volumes de informação.",
            sections: [
              { title: "Bancos Relacionais", text: "PostgreSQL e MySQL para dados estruturados, com otimização de queries e índices." },
              { title: "NoSQL Databases", text: "MongoDB, Redis e DynamoDB para dados não estruturados e cache de alta performance." },
              { title: "ETL & Analytics", text: "Pipelines de extração, transformação e carga de dados para dashboards e relatórios em tempo real." },
            ],
          },
        },
        {
          title: "Security Ops",
          subtitle: "LGPD / ISO",
          description:
            "Auditorias de segurança, compliance e proteção de infraestrutura crítica.",
          modalContent: {
            intro: "Implementação de práticas de segurança e conformidade para proteger dados e sistemas críticos.",
            sections: [
              { title: "Security Audits", text: "Análise de vulnerabilidades, pen testing e implementação de correções de segurança." },
              { title: "Compliance", text: "Adequação a LGPD, GDPR e normas ISO para garantir conformidade regulatória." },
              { title: "Infrastructure Security", text: "Firewalls, WAF, VPN e políticas de acesso para proteção em camadas." },
            ],
          },
        },
        {
          title: "Digital Strategy",
          subtitle: "CONSULTING",
          description:
            "Transformação digital, modernização de legados e otimização de processos.",
          modalContent: {
            intro: "Consultoria estratégica para transformação digital e modernização de sistemas legados.",
            sections: [
              { title: "Digital Transformation", text: "Análise de processos e implementação de soluções digitais para aumentar eficiência operacional." },
              { title: "Legacy Modernization", text: "Migração e refatoração de sistemas legados para arquiteturas modernas e escaláveis." },
              { title: "Process Optimization", text: "Automação de workflows, integração de sistemas e eliminação de gargalos operacionais." },
            ],
          },
        },
      ],
      learnMore: "Saiba mais",
    },

    // Tech Stack
    tech: {
      badge: "TECH ARSENAL",
      title: "STACK",
      titleHighlight: "TECNOLÓGICA",
      subtitle:
        "Ferramentas de engenharia que dominamos para construir sistemas robustos e escaláveis. Clique para ver os módulos.",
      modules: "módulos",
      modulesAvailable: "MÓDULOS DISPONÍVEIS",
      status: "STATUS",
      skillsLoaded: "skills loaded",
      terminalCommand: "nebula install --stack=full-service",
      categories: {
        frontend: "FRONTEND",
        language: "LINGUAGEM",
        runtime: "RUNTIME",
        backend: "BACKEND",
        cloud: "CLOUD",
        container: "CONTAINER",
        database: "BANCO DE DADOS",
        nosql: "NOSQL",
        iac: "IAC",
        framework: "FRAMEWORK",
        deploy: "DEPLOY",
      },
      skills: {
        // React
        reactHooks: "Hooks & Context API",
        reactHooksDesc: "Estado e gerenciamento avançado",
        reactQuery: "React Query",
        reactQueryDesc: "Cache e sincronização de dados",
        componentArch: "Component Architecture",
        componentArchDesc: "Componentes reutilizáveis e escaláveis",
        perfOptimization: "Performance Optimization",
        perfOptimizationDesc: "Memoization, lazy loading, code splitting",
        // TypeScript
        typeSystem: "Type System",
        typeSystemDesc: "Tipos avançados e generics",
        decorators: "Decorators",
        decoratorsDesc: "Metaprogramação e DI",
        utilityTypes: "Utility Types",
        utilityTypesDesc: "Partial, Pick, Omit, Record",
        typeGuards: "Type Guards",
        typeGuardsDesc: "Validação de tipos em runtime",
        // Node.js
        expressFastify: "Express/Fastify",
        expressFastifyDesc: "APIs REST e GraphQL",
        streams: "Streams",
        streamsDesc: "Processamento de dados em tempo real",
        workerThreads: "Worker Threads",
        workerThreadsDesc: "Paralelismo e performance",
        npmYarn: "NPM/Yarn",
        npmYarnDesc: "Gerenciamento de dependências",
        // Python
        fastApiDjango: "FastAPI/Django",
        fastApiDjangoDesc: "Frameworks web modernos",
        dataScience: "Data Science",
        dataScienceDesc: "Pandas, NumPy, Scikit-learn",
        automation: "Automation",
        automationDesc: "Scripts e automação de processos",
        testing: "Testing",
        testingDesc: "Pytest e coverage",
        // AWS
        ec2Ecs: "EC2 & ECS",
        ec2EcsDesc: "Compute e containers",
        s3Cloudfront: "S3 & CloudFront",
        s3CloudfrontDesc: "Storage e CDN",
        ecr: "ECR",
        ecrDesc: "Container registry privado",
        organizations: "Organizations",
        organizationsDesc: "Multi-account management",
        iamSecurity: "IAM & Security",
        iamSecurityDesc: "Controle de acesso e policies",
        // Vercel
        vercelDeploy: "Deploy Automático",
        vercelDeployDesc: "Deploy contínuo a partir do Git",
        vercelEdge: "Edge Functions",
        vercelEdgeDesc: "Funções serverless na edge",
        vercelAnalytics: "Web Analytics",
        vercelAnalyticsDesc: "Métricas de performance",
        vercelPreview: "Preview Deployments",
        vercelPreviewDesc: "Ambientes de preview por branch",
        // Keep cosmosDb for compatibility but unused
        cosmosDbDesc: "Database NoSQL global",
        // Docker
        dockerfile: "Dockerfile",
        dockerfileDesc: "Build de imagens otimizadas",
        dockerCompose: "Docker Compose",
        dockerComposeDesc: "Multi-container applications",
        registry: "Registry",
        registryDesc: "Gestão de imagens privadas",
        networking: "Networking",
        networkingDesc: "Redes e comunicação entre containers",
        // PostgreSQL
        queryOptimization: "Query Optimization",
        queryOptimizationDesc: "EXPLAIN e índices",
        partitioning: "Partitioning",
        partitioningDesc: "Tabelas particionadas",
        extensions: "Extensions",
        extensionsDesc: "PostGIS, pg_trgm, etc",
        replication: "Replication",
        replicationDesc: "Read replicas e HA",
        // MongoDB
        aggregation: "Aggregation Pipeline",
        aggregationDesc: "Processamento de dados",
        indexing: "Indexing",
        indexingDesc: "Compound e text indexes",
        sharding: "Sharding",
        shardingDesc: "Horizontal scaling",
        atlas: "Atlas",
        atlasDesc: "Cloud management",
        // Terraform
        modules: "Modules",
        modulesDesc: "Código reutilizável",
        stateManagement: "State Management",
        stateManagementDesc: "Remote state e locking",
        multiCloud: "Multi-cloud",
        multiCloudDesc: "AWS, Azure, GCP",
        workspaces: "Workspaces",
        workspacesDesc: "Ambientes isolados",
        // Next.js
        ssrSsg: "SSR/SSG",
        ssrSsgDesc: "Rendering strategies",
        apiRoutes: "API Routes",
        apiRoutesDesc: "Backend integrado",
        appRouter: "App Router",
        appRouterDesc: "Server components",
        imageOptimization: "Image Optimization",
        imageOptimizationDesc: "Lazy loading automático",
      },
    },

    // Stats / About
    stats: {
      badge: "SOBRE A MISSÃO",
      title: "ENGENHARIA DE",
      titleHighlight: "SOFTWARE",
      description1:
        "Sou um desenvolvedor solo especializado em construir sistemas de software e infraestrutura cloud de alta performance. Minha missão é transformar ideias complexas em código limpo e escalável.",
      description2:
        "Desde startups até operações enterprise, entrego soluções que funcionam na escala e velocidade que seu negócio exige.",
      items: [
        { value: "8+", label: "ANOS DE EXPERIÊNCIA", icon: "⌨️" },
        { value: "1:1", label: "ACESSO DIRETO AO FUNDADOR", icon: "🤝" },
        { value: "AWS", label: "CLOUD & INFRAESTRUTURA", icon: "☁️" },
        { value: "CI/CD", label: "ENTREGAS VERSIONADAS", icon: "🔁" },
      ],
      terminal: {
        command: "dev_info",
        type: "type",
        soloDeveloper: "solo developer",
        experience: "experience",
        experienceValue: "8+ years",
        stack: "stack",
        stackValue: "FULL_STACK",
        status: "status",
        statusValue: "AVAILABLE",
      },
      cards: [
        { title: "Agile Sprint", desc: "Entregas iterativas", icon: "⚡" },
        { title: "Code Review", desc: "Qualidade garantida", icon: "🔍" },
        { title: "Full Stack", desc: "Documentação técnica", icon: "📚" },
        { title: "Auto Scale", desc: "Arquitetura elástica", icon: "📈" },
      ],
    },

    // Founder
    founder: {
      label: "QUEM CONSTRÓI",
      name: "Alberto",
      role: "Fundador & Engenheiro de Software · Nebula Systems",
      bio: "Sou engenheiro de software com 8+ anos construindo aplicações web e infraestrutura em nuvem. Na Nebula Systems você trabalha diretamente comigo — sem camadas, sem repasse para júnior. Cuido do projeto de ponta a ponta: da arquitetura ao deploy na AWS e à evolução contínua.",
      boutique: "Boutique, não fábrica: acesso direto ao engenheiro que escreve o código.",
      photoPlaceholder: "sua foto aqui",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "E-mail",
      },
    },

    // Architecture
    architecture: {
      badge: "ARQUITETURA DE REFERÊNCIA",
      title: "COMO EU",
      titleHighlight: "CONSTRUO",
      subtitle: "Padrões que uso em produção — escaláveis, versionados e seguros. Clique para ver cada arquitetura em detalhe.",
      viewDetail: "ver em detalhe",
      items: [
        {
          title: "Aplicação Web em produção",
          caption: "Alta disponibilidade com containers e cache",
          points: [
            "CloudFront + WAF na borda",
            "ECS Fargate com auto-scaling",
            "RDS Multi-AZ + ElastiCache",
            "VPC privada, infra em Terraform (IaC)",
          ],
        },
        {
          title: "Pipeline CI/CD",
          caption: "Do commit à produção, sem downtime",
          points: [
            "Testes automatizados a cada Pull Request",
            "Build e push de imagem para o ECR",
            "Deploy rolling no ECS",
            "Rollback automático em falha de health check",
          ],
        },
        {
          title: "Arquitetura Serverless",
          caption: "Escala automática, custo por uso",
          points: [
            "API Gateway + Lambda",
            "DynamoDB on-demand",
            "Autenticação com Cognito",
            "Sem servidores para manter",
          ],
        },
      ],
    },

    // Process
    process: {
      badge: "FLUXO DE DESENVOLVIMENTO",
      title: "NOSSO",
      titleHighlight: "PROCESSO",
      subtitle: "Cada projeto segue um fluxo estruturado para garantir qualidade, escalabilidade e redução de riscos.",
      stepLabel: "ETAPA",
      steps: [
        {
          title: "Ideia → Estrutura",
          items: [
            "Entendimento do problema e contexto do negócio",
            "Definição da solução e escopo do projeto",
            "Mapeamento de requisitos e objetivos",
          ],
          note: null,
        },
        {
          title: "Design e Prototipação",
          items: [
            "Wireframes e mockups visuais",
            "Fluxos de usuário e jornadas",
            "Validação antes de escrever código",
          ],
          note: "Protótipos interativos para aprovação visual",
        },
        {
          title: "Arquitetura",
          items: [
            "Definição técnica e escolha de stack",
            "Planejamento de escalabilidade",
            "Organização do sistema e módulos",
          ],
          note: "Alinhado com ISO/IEC 42010:2022",
        },
        {
          title: "Desenvolvimento",
          items: [
            "Implementação com boas práticas",
            "Code review e testes automatizados",
            "Versionamento e CI/CD",
          ],
          note: null,
        },
        {
          title: "Entrega e Evolução",
          items: [
            "Deploy em ambiente de produção",
            "Monitoramento e observabilidade",
            "Melhorias contínuas e suporte",
          ],
          note: null,
        },
      ],
      quote: "Antes de escrever código, estruturamos a solução visual e tecnicamente — reduzindo riscos e retrabalho.",
      videoPreview: "PREVIEW DO PROCESSO",
      watchVideo: "Assista ao vídeo demonstrativo",
      videoComingSoon: "Vídeo demonstrativo em breve",
    },

    // Contact
    contact: {
      badge: "INICIAR CONEXÃO",
      title: "PRONTO PARA",
      titleHighlight: "DECOLAR",
      subtitle:
        "Inicie uma transmissão e descubra como posso engenheirar a solução perfeita para sua missão.",
      cta: "INICIAR TRANSMISSÃO",
      status: "CANAL ABERTO // RESPOSTA EM < 24H",
      info: [
        { title: "EMAIL", value: "albertojr11@hotmail.com" },
        { title: "WHATSAPP", value: "+55 (71) 9 9399-9204" },
        { title: "BASE", value: "Bahia, Brasil" },
      ],
    },

    // Footer
    footer: {
      privacy: "PRIVACIDADE",
      terms: "TERMOS",
      docs: "DOCS",
      copyright: "NEBULA SYSTEMS. ALL RIGHTS RESERVED.",
      status: "STATUS",
      operational: "OPERATIONAL",
      lastUpdated: "Última atualização",
      privacyModal: {
        intro: "A Nebula Systems, inscrita no CNPJ sob o nº 63.551.104/0001-04, respeita a privacidade dos usuários e está comprometida com a proteção dos dados pessoais tratados em suas operações, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).",
        dataCollection: "1. Coleta de Dados",
        dataCollectionText: "Coletamos apenas dados pessoais fornecidos voluntariamente pelo usuário, como nome e endereço de e-mail, por meio de formulários de contato. Informações técnicas, como endereço IP, tipo de navegador e páginas acessadas, podem ser coletadas automaticamente para fins estatísticos e de segurança.",
        useOfInfo: "2. Uso das Informações",
        useOfInfoText: "Os dados pessoais coletados são utilizados para responder solicitações de contato, fornecer informações sobre serviços, melhorar a experiência do usuário e cumprir obrigações legais e regulatórias. Os dados são tratados apenas pelo tempo necessário para atender a essas finalidades.",
        dataSharing: "3. Compartilhamento de Dados",
        dataSharingText: "A Nebula Systems não comercializa dados pessoais. O compartilhamento poderá ocorrer apenas quando necessário para cumprimento de obrigações legais, execução de serviços contratados ou proteção dos direitos da empresa.",
        security: "4. Segurança",
        securityText: "Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida, utilizando boas práticas de segurança da informação compatíveis com o mercado.",
        cookies: "5. Cookies",
        cookiesText: "O site pode utilizar cookies estritamente necessários para seu funcionamento e para análise de desempenho. O usuário pode configurar seu navegador para recusar cookies, ciente de que algumas funcionalidades podem ser afetadas.",
      },
      termsModal: {
        intro: "Estes Termos de Uso regulam o acesso e a utilização do site da Nebula Systems, inscrita no CNPJ sob o nº 63.551.104/0001-04. Ao acessar este site, o usuário concorda com os termos e condições aqui descritos.",
        acceptance: "1. Aceitação dos Termos",
        acceptanceText: "Ao acessar ou utilizar este site, o usuário declara que leu, compreendeu e concorda integralmente com estes Termos de Uso. Caso não concorde, recomenda-se que não utilize o site.",
        serviceUse: "2. Uso do Site",
        serviceUseText: "O conteúdo disponibilizado neste site tem caráter informativo e institucional. O usuário compromete-se a utilizar o site de forma lícita, ética e em conformidade com a legislação vigente, não praticando atos que possam causar danos à empresa ou a terceiros.",
        intellectualProperty: "3. Propriedade Intelectual",
        intellectualPropertyText: "Todos os conteúdos deste site, incluindo textos, códigos, imagens, marcas e logotipos, são de propriedade da Nebula Systems ou de seus licenciadores, sendo protegidos pelas leis de direitos autorais e propriedade intelectual. É vedada a reprodução, distribuição ou modificação sem autorização prévia.",
        liability: "4. Limitação de Responsabilidade",
        liabilityText: "A Nebula Systems não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site, bem como por eventuais falhas técnicas, indisponibilidades temporárias ou informações de terceiros.",
        modifications: "5. Modificações dos Termos",
        modificationsText: "A Nebula Systems reserva-se o direito de alterar estes Termos de Uso a qualquer momento, mediante atualização deste conteúdo. Recomenda-se a revisão periódica para ciência de eventuais alterações.",
        applicableLaw: "6. Lei Aplicável",
        applicableLawText: "Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Eventuais controvérsias serão dirimidas no foro do domicílio da empresa, salvo disposição legal em contrário.",
      },
      docsModal: {
        intro: "Esta seção descreve minha metodologia de trabalho e processo de desenvolvimento. Cada projeto segue um fluxo estruturado para garantir qualidade e eficiência.",
        methodology: "1. Metodologia de Trabalho",
        methodologyText: "Utilizo metodologias ágeis adaptadas para projetos individuais, com sprints semanais, entregas iterativas e comunicação constante com o cliente. Cada fase é documentada e validada antes de avançar.",
        process: "2. Processo de Desenvolvimento",
        processText: "O desenvolvimento segue as etapas: Discovery (levantamento de requisitos), Design (arquitetura e protótipos), Development (codificação e testes), Deployment (publicação e monitoramento) e Maintenance (suporte contínuo).",
        tools: "3. Ferramentas & Stack",
        toolsText: "Trabalho com React, TypeScript, Node.js, Python, Docker, AWS, Azure e outras tecnologias modernas. A escolha da stack é sempre baseada nas necessidades específicas de cada projeto.",
        quality: "4. Garantia de Qualidade",
        qualityText: "Todo código passa por code review, testes automatizados (unitários e de integração), e análise estática. Mantenho padrões de clean code e documentação técnica atualizada.",
        communication: "5. Comunicação",
        communicationText: "Reuniões semanais de acompanhamento, relatórios de progresso, acesso a repositório em tempo real e canal direto para dúvidas. Transparência total em todas as etapas do projeto.",
      },
    },
  },

  en: {
    // Navbar
    nav: {
      inicio: "HOME",
      servicos: "SERVICES",
      processo: "PROCESS",
      arquitetura: "ARCHITECTURE",
      tech: "TECH",
      sobre: "ABOUT",
      contato: "CONTACT",
      connect: "<CONNECT/>",
    },

    // Hero
    hero: {
      eyebrow: "Software engineering & cloud",
      title1: "Custom software,",
      title2: "from idea to production.",
      subtitle:
        "Web applications and AWS infrastructure for businesses that depend on technology that works. You talk directly to the engineer — no middlemen.",
      stack: "React · TypeScript · Node.js · AWS · Docker · Terraform",
      founderCredit: "Founded and built by",
      cta: {
        startProject: "GET IN TOUCH",
        viewServices: "VIEW SERVICES",
      },
      scroll: "SCROLL",
    },

    // Services
    services: {
      badge: "SERVICE MODULES",
      title: "OPERATIONAL",
      titleHighlight: "SYSTEMS",
      subtitle:
        "Engineering solutions to build, scale, and protect your digital infrastructure.",
      status: "status",
      operational: "OPERATIONAL",
      items: [
        {
          title: "Web Engineering",
          subtitle: "FRONTEND / BACKEND",
          description:
            "High-performance web applications with React, TypeScript, and modern architectures.",
          modalContent: {
            intro: "Development of modern and scalable web applications using the best practices and technologies in the market.",
            sections: [
              { title: "Frontend Development", text: "Responsive and interactive interfaces with React, TypeScript and modern frameworks. Focus on performance, accessibility and user experience." },
              { title: "Backend Development", text: "Robust APIs with Node.js, Python and frameworks like Express, FastAPI and NestJS. RESTful and GraphQL architectures." },
              { title: "Full Stack Solutions", text: "Complete integration between frontend and backend, with continuous deployment and production monitoring." },
            ],
          },
        },
        {
          title: "Cloud Architecture",
          subtitle: "AWS / IAC",
          description:
            "Scalable and resilient cloud infrastructure with cost optimization.",
          modalContent: {
            intro: "Cloud-native architecture focused on scalability, security and cost optimization using AWS.",
            sections: [
              { title: "AWS Services", text: "EC2, ECS, S3, CloudFront, Lambda, RDS and other managed services to build robust infrastructures." },
              { title: "Infrastructure as Code", text: "Terraform and CloudFormation to provision and manage resources in an automated and versioned way." },
              { title: "Cost Optimization", text: "Cost analysis and optimization, resource rightsizing and reserved instances implementation." },
            ],
          },
        },
        {
          title: "DevOps & CI/CD",
          subtitle: "DOCKER / VERCEL / HEROKU",
          description:
            "Automated pipelines, containerization and deployment on modern platforms.",
          modalContent: {
            intro: "Automation of development, build, test and deployment processes for fast and reliable deliveries.",
            sections: [
              { title: "Containerization", text: "Docker to create consistent development and production environments, facilitating deployment and scalability." },
              { title: "Deploy Platforms", text: "Vercel, Heroku, Railway and Render for fast and managed deployment of web applications and APIs." },
              { title: "CI/CD Pipelines", text: "GitHub Actions and GitLab CI for test automation, continuous builds and deployments." },
            ],
          },
        },
        {
          title: "Data Engineering",
          subtitle: "SQL / NOSQL",
          description:
            "Data architecture, ETL pipelines, and real-time analytics solutions.",
          modalContent: {
            intro: "Scalable data solutions for storage, processing and analysis of large volumes of information.",
            sections: [
              { title: "Relational Databases", text: "PostgreSQL and MySQL for structured data, with query and index optimization." },
              { title: "NoSQL Databases", text: "MongoDB, Redis and DynamoDB for unstructured data and high-performance caching." },
              { title: "ETL & Analytics", text: "Data extraction, transformation and loading pipelines for real-time dashboards and reports." },
            ],
          },
        },
        {
          title: "Security Ops",
          subtitle: "GDPR / ISO",
          description:
            "Security audits, compliance, and critical infrastructure protection.",
          modalContent: {
            intro: "Implementation of security practices and compliance to protect critical data and systems.",
            sections: [
              { title: "Security Audits", text: "Vulnerability analysis, pen testing and security fix implementation." },
              { title: "Compliance", text: "LGPD, GDPR and ISO standards compliance to ensure regulatory conformity." },
              { title: "Infrastructure Security", text: "Firewalls, WAF, VPN and access policies for layered protection." },
            ],
          },
        },
        {
          title: "Digital Strategy",
          subtitle: "CONSULTING",
          description:
            "Digital transformation, legacy modernization, and process optimization.",
          modalContent: {
            intro: "Strategic consulting for digital transformation and legacy systems modernization.",
            sections: [
              { title: "Digital Transformation", text: "Process analysis and implementation of digital solutions to increase operational efficiency." },
              { title: "Legacy Modernization", text: "Migration and refactoring of legacy systems to modern and scalable architectures." },
              { title: "Process Optimization", text: "Workflow automation, systems integration and elimination of operational bottlenecks." },
            ],
          },
        },
      ],
      learnMore: "Learn more",
    },

    // Tech Stack
    tech: {
      badge: "TECH ARSENAL",
      title: "TECH",
      titleHighlight: "STACK",
      subtitle:
        "Engineering tools we master to build robust and scalable systems. Click to see the modules.",
      modules: "modules",
      modulesAvailable: "AVAILABLE MODULES",
      status: "STATUS",
      skillsLoaded: "skills loaded",
      terminalCommand: "nebula install --stack=full-service",
      categories: {
        frontend: "FRONTEND",
        language: "LANGUAGE",
        runtime: "RUNTIME",
        backend: "BACKEND",
        cloud: "CLOUD",
        container: "CONTAINER",
        database: "DATABASE",
        nosql: "NOSQL",
        iac: "IAC",
        framework: "FRAMEWORK",
        deploy: "DEPLOY",
      },
      skills: {
        // React
        reactHooks: "Hooks & Context API",
        reactHooksDesc: "Advanced state management",
        reactQuery: "React Query",
        reactQueryDesc: "Data caching and synchronization",
        componentArch: "Component Architecture",
        componentArchDesc: "Reusable and scalable components",
        perfOptimization: "Performance Optimization",
        perfOptimizationDesc: "Memoization, lazy loading, code splitting",
        // TypeScript
        typeSystem: "Type System",
        typeSystemDesc: "Advanced types and generics",
        decorators: "Decorators",
        decoratorsDesc: "Metaprogramming and DI",
        utilityTypes: "Utility Types",
        utilityTypesDesc: "Partial, Pick, Omit, Record",
        typeGuards: "Type Guards",
        typeGuardsDesc: "Runtime type validation",
        // Node.js
        expressFastify: "Express/Fastify",
        expressFastifyDesc: "REST and GraphQL APIs",
        streams: "Streams",
        streamsDesc: "Real-time data processing",
        workerThreads: "Worker Threads",
        workerThreadsDesc: "Parallelism and performance",
        npmYarn: "NPM/Yarn",
        npmYarnDesc: "Dependency management",
        // Python
        fastApiDjango: "FastAPI/Django",
        fastApiDjangoDesc: "Modern web frameworks",
        dataScience: "Data Science",
        dataScienceDesc: "Pandas, NumPy, Scikit-learn",
        automation: "Automation",
        automationDesc: "Scripts and process automation",
        testing: "Testing",
        testingDesc: "Pytest and coverage",
        // AWS
        ec2Ecs: "EC2 & ECS",
        ec2EcsDesc: "Compute and containers",
        s3Cloudfront: "S3 & CloudFront",
        s3CloudfrontDesc: "Storage and CDN",
        ecr: "ECR",
        ecrDesc: "Private container registry",
        organizations: "Organizations",
        organizationsDesc: "Multi-account management",
        iamSecurity: "IAM & Security",
        iamSecurityDesc: "Access control and policies",
        // Vercel
        vercelDeploy: "Automatic Deploy",
        vercelDeployDesc: "Continuous deployment from Git",
        vercelEdge: "Edge Functions",
        vercelEdgeDesc: "Serverless functions at the edge",
        vercelAnalytics: "Web Analytics",
        vercelAnalyticsDesc: "Performance metrics",
        vercelPreview: "Preview Deployments",
        vercelPreviewDesc: "Preview environments per branch",
        // Docker
        dockerfile: "Dockerfile",
        dockerfileDesc: "Optimized image builds",
        dockerCompose: "Docker Compose",
        dockerComposeDesc: "Multi-container applications",
        registry: "Registry",
        registryDesc: "Private image management",
        networking: "Networking",
        networkingDesc: "Container networks and communication",
        // PostgreSQL
        queryOptimization: "Query Optimization",
        queryOptimizationDesc: "EXPLAIN and indexes",
        partitioning: "Partitioning",
        partitioningDesc: "Partitioned tables",
        extensions: "Extensions",
        extensionsDesc: "PostGIS, pg_trgm, etc",
        replication: "Replication",
        replicationDesc: "Read replicas and HA",
        // MongoDB
        aggregation: "Aggregation Pipeline",
        aggregationDesc: "Data processing",
        indexing: "Indexing",
        indexingDesc: "Compound and text indexes",
        sharding: "Sharding",
        shardingDesc: "Horizontal scaling",
        atlas: "Atlas",
        atlasDesc: "Cloud management",
        // Terraform
        modules: "Modules",
        modulesDesc: "Reusable code",
        stateManagement: "State Management",
        stateManagementDesc: "Remote state and locking",
        multiCloud: "Multi-cloud",
        multiCloudDesc: "AWS, Azure, GCP",
        workspaces: "Workspaces",
        workspacesDesc: "Isolated environments",
        // Next.js
        ssrSsg: "SSR/SSG",
        ssrSsgDesc: "Rendering strategies",
        apiRoutes: "API Routes",
        apiRoutesDesc: "Integrated backend",
        appRouter: "App Router",
        appRouterDesc: "Server components",
        imageOptimization: "Image Optimization",
        imageOptimizationDesc: "Automatic lazy loading",
      },
    },

    // Stats / About
    stats: {
      badge: "ABOUT THE MISSION",
      title: "SOFTWARE",
      titleHighlight: "ENGINEERING",
      description1:
        "I'm a solo developer specialized in building high-performance software systems and cloud infrastructure. My mission is to transform complex ideas into clean, scalable code.",
      description2:
        "From startups to enterprise operations, I deliver solutions that work at the scale and speed your business demands.",
      items: [
        { value: "8+", label: "YEARS OF EXPERIENCE", icon: "⌨️" },
        { value: "1:1", label: "DIRECT ACCESS TO THE FOUNDER", icon: "🤝" },
        { value: "AWS", label: "CLOUD & INFRASTRUCTURE", icon: "☁️" },
        { value: "CI/CD", label: "VERSIONED DELIVERIES", icon: "🔁" },
      ],
      terminal: {
        command: "dev_info",
        type: "type",
        soloDeveloper: "solo developer",
        experience: "experience",
        experienceValue: "8+ years",
        stack: "stack",
        stackValue: "FULL_STACK",
        status: "status",
        statusValue: "AVAILABLE",
      },
      cards: [
        { title: "Agile Sprint", desc: "Iterative deliveries", icon: "⚡" },
        { title: "Code Review", desc: "Quality assured", icon: "🔍" },
        { title: "Full Stack", desc: "Technical docs", icon: "📚" },
        { title: "Auto Scale", desc: "Elastic architecture", icon: "📈" },
      ],
    },

    // Founder
    founder: {
      label: "WHO BUILDS IT",
      name: "Alberto",
      role: "Founder & Software Engineer · Nebula Systems",
      bio: "I'm a software engineer with 8+ years building web applications and cloud infrastructure. At Nebula Systems you work directly with me — no layers, no handoff to juniors. I handle the project end to end: from architecture to deployment on AWS and continuous evolution.",
      boutique: "Boutique, not a factory: direct access to the engineer who writes the code.",
      photoPlaceholder: "your photo here",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email",
      },
    },

    // Architecture
    architecture: {
      badge: "REFERENCE ARCHITECTURE",
      title: "HOW I",
      titleHighlight: "BUILD",
      subtitle: "Patterns I use in production — scalable, versioned and secure. Click to see each architecture in detail.",
      viewDetail: "view detail",
      items: [
        {
          title: "Web app in production",
          caption: "High availability with containers and cache",
          points: [
            "CloudFront + WAF at the edge",
            "ECS Fargate with auto-scaling",
            "RDS Multi-AZ + ElastiCache",
            "Private VPC, infra as code with Terraform",
          ],
        },
        {
          title: "CI/CD Pipeline",
          caption: "From commit to production, zero downtime",
          points: [
            "Automated tests on every Pull Request",
            "Build and push image to ECR",
            "Rolling deploy on ECS",
            "Automatic rollback on health-check failure",
          ],
        },
        {
          title: "Serverless Architecture",
          caption: "Auto-scaling, pay per use",
          points: [
            "API Gateway + Lambda",
            "DynamoDB on-demand",
            "Authentication with Cognito",
            "No servers to maintain",
          ],
        },
      ],
    },

    // Process
    process: {
      badge: "DEVELOPMENT FLOW",
      title: "OUR",
      titleHighlight: "PROCESS",
      subtitle: "Every project follows a structured flow to ensure quality, scalability, and risk reduction.",
      stepLabel: "STEP",
      steps: [
        {
          title: "Idea → Structure",
          items: [
            "Understanding the problem and business context",
            "Defining the solution and project scope",
            "Mapping requirements and objectives",
          ],
          note: null,
        },
        {
          title: "Design & Prototyping",
          items: [
            "Wireframes and visual mockups",
            "User flows and journeys",
            "Validation before writing code",
          ],
          note: "Interactive prototypes for visual approval",
        },
        {
          title: "Architecture",
          items: [
            "Technical definition and stack selection",
            "Scalability planning",
            "System and module organization",
          ],
          note: "Aligned with ISO/IEC 42010:2022",
        },
        {
          title: "Development",
          items: [
            "Implementation with best practices",
            "Code review and automated testing",
            "Version control and CI/CD",
          ],
          note: null,
        },
        {
          title: "Delivery & Evolution",
          items: [
            "Production environment deploy",
            "Monitoring and observability",
            "Continuous improvements and support",
          ],
          note: null,
        },
      ],
      quote: "Before writing code, we structure the solution visually and technically — reducing risks and rework.",
      videoPreview: "PROCESS PREVIEW",
      watchVideo: "Watch the demo video",
      videoComingSoon: "Demo video coming soon",
    },

    // Contact
    contact: {
      badge: "START CONNECTION",
      title: "READY TO",
      titleHighlight: "LAUNCH",
      subtitle:
        "Start a transmission and discover how I can engineer the perfect solution for your mission.",
      cta: "START TRANSMISSION",
      status: "CHANNEL OPEN // RESPONSE IN < 24H",
      info: [
        { title: "EMAIL", value: "albertojr11@hotmail.com" },
        { title: "WHATSAPP", value: "+55 (71) 9 9399-9204" },
        { title: "BASE", value: "Bahia, Brazil" },
      ],
    },

    // Footer
    footer: {
      privacy: "PRIVACY",
      terms: "TERMS",
      docs: "DOCS",
      copyright: "NEBULA SYSTEMS. ALL RIGHTS RESERVED.",
      status: "STATUS",
      operational: "OPERATIONAL",
      lastUpdated: "Last updated",
      privacyModal: {
        intro: "Nebula Systems, registered under CNPJ number 63.551.104/0001-04, respects user privacy and is committed to protecting personal data processed in its operations, in accordance with the Brazilian General Data Protection Law (Law No. 13,709/2018 – LGPD).",
        dataCollection: "1. Data Collection",
        dataCollectionText: "We collect only personal data voluntarily provided by the user, such as name and email address, through contact forms. Technical information, such as IP address, browser type, and accessed pages, may be automatically collected for statistical and security purposes.",
        useOfInfo: "2. Use of Information",
        useOfInfoText: "The personal data collected is used to respond to contact requests, provide information about services, improve user experience, and comply with legal and regulatory obligations. Data is processed only for as long as necessary to fulfill these purposes.",
        dataSharing: "3. Data Sharing",
        dataSharingText: "Nebula Systems does not sell personal data. Data sharing may occur only when required to comply with legal obligations, perform contracted services, or protect the company's rights.",
        security: "4. Security",
        securityText: "We adopt appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration, or improper disclosure, following information security best practices.",
        cookies: "5. Cookies",
        cookiesText: "The website may use cookies strictly necessary for its proper functioning and performance analysis. Users may configure their browser to refuse cookies, understanding that some features may be affected.",
      },
      termsModal: {
        intro: "These Terms of Use govern access to and use of the website operated by Nebula Systems, registered under CNPJ number 63.551.104/0001-04. By accessing this website, the user agrees to the terms and conditions described herein.",
        acceptance: "1. Acceptance of Terms",
        acceptanceText: "By accessing or using this website, the user confirms that they have read, understood, and fully agreed to these Terms of Use. If the user does not agree, they should refrain from using the website.",
        serviceUse: "2. Use of the Website",
        serviceUseText: "The content provided on this website is for informational and institutional purposes only. Users agree to use the website lawfully, ethically, and in compliance with applicable laws, refraining from any actions that may cause harm to the company or third parties.",
        intellectualProperty: "3. Intellectual Property",
        intellectualPropertyText: "All content on this website, including text, code, images, trademarks, and logos, is the property of Nebula Systems or its licensors and is protected by copyright and intellectual property laws. Reproduction, distribution, or modification without prior authorization is prohibited.",
        liability: "4. Limitation of Liability",
        liabilityText: "Nebula Systems shall not be liable for any direct or indirect damages arising from the use or inability to use the website, including technical failures, temporary unavailability, or third-party information.",
        modifications: "5. Changes to the Terms",
        modificationsText: "Nebula Systems reserves the right to modify these Terms of Use at any time by updating this content. Users are encouraged to review the terms periodically to stay informed of any changes.",
        applicableLaw: "6. Governing Law",
        applicableLawText: "These Terms of Use shall be governed by and construed in accordance with the laws of the Federative Republic of Brazil. Any disputes shall be resolved in the jurisdiction of the company's registered office, unless otherwise required by law.",
      },
      docsModal: {
        intro: "This section describes my work methodology and development process. Each project follows a structured flow to ensure quality and efficiency.",
        methodology: "1. Work Methodology",
        methodologyText: "I use agile methodologies adapted for individual projects, with weekly sprints, iterative deliveries, and constant client communication. Each phase is documented and validated before moving forward.",
        process: "2. Development Process",
        processText: "Development follows these stages: Discovery (requirements gathering), Design (architecture and prototypes), Development (coding and testing), Deployment (publishing and monitoring), and Maintenance (ongoing support).",
        tools: "3. Tools & Stack",
        toolsText: "I work with React, TypeScript, Node.js, Python, Docker, AWS, Azure, and other modern technologies. Stack choice is always based on the specific needs of each project.",
        quality: "4. Quality Assurance",
        qualityText: "All code goes through code review, automated testing (unit and integration), and static analysis. I maintain clean code standards and up-to-date technical documentation.",
        communication: "5. Communication",
        communicationText: "Weekly follow-up meetings, progress reports, real-time repository access, and a direct channel for questions. Full transparency at every stage of the project.",
      },
    },
  },
} as const;

export type Language = keyof typeof translations;
