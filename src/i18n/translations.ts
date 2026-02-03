export const translations = {
  "pt-BR": {
    // Navbar
    nav: {
      inicio: "INÍCIO",
      servicos: "SERVIÇOS",
      tech: "TECH",
      sobre: "SOBRE",
      contato: "CONTATO",
      connect: "<CONNECT/>",
    },

    // Hero
    hero: {
      systemInit: "INICIANDO SISTEMA",
      missionActive: "MISSÃO ATIVA",
      title1: "DESENVOLVIMENTO",
      title2: "<SOFTWARE/>",
      subtitle:
        "Engenharia de software e infraestrutura cloud para missões críticas. Construímos a base digital do seu negócio.",
      criticalMissions: "missões críticas",
      stats: {
        years: "ANOS",
        projects: "PROJETOS",
        stack: "STACK",
      },
      cta: {
        startProject: "INICIAR PROJETO",
        viewServices: "VER SERVIÇOS",
      },
      pills: {
        cloud: "CLOUD",
        devops: "DEVOPS",
        deploy: "DEPLOY",
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
        // Azure
        azureFunctions: "Azure Functions",
        azureFunctionsDesc: "Serverless compute",
        appService: "App Service",
        appServiceDesc: "Web apps e APIs",
        blobStorage: "Blob Storage",
        blobStorageDesc: "Object storage escalável",
        azureDevOps: "Azure DevOps",
        azureDevOpsDesc: "CI/CD pipelines",
        cosmosDb: "Cosmos DB",
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
      badge: "SOBRE A EMPRESA",
      title: "ENGENHARIA DE",
      titleHighlight: "SOFTWARE",
      description1:
        "A empresa atua no desenvolvimento de sistemas de software e arquiteturas cloud de alta performance, com foco em código limpo, escalável e infraestrutura bem projetada.",
      description2:
        "Os projetos são conduzidos com atuação direta do engenheiro responsável, atendendo desde startups até ambientes corporativos e operações enterprise.",
      items: [
        //{ value: "50+", label: "PROJETOS ENTREGUES", icon: "🚀" },
        { value: "8+", label: "ANOS CODANDO", icon: "⌨️" },
        { value: "99.9%", label: "SLA GARANTIDO", icon: "📊" },
        { value: "24/7", label: "DEDICAÇÃO", icon: "🛡" },
      ],
      terminal: {
        command: "dev_info",
        type: "type",
        soloDeveloper: "engenheiro de software",
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

    // Contact
    contact: {
      badge: "INICIAR CONEXÃO",
      title: "PRONTO PARA",
      titleHighlight: "DECOLAR",
      subtitle:
        "Inicie uma transmissão e descubra como posso construir a solução perfeita para seu negócio.",
      cta: "INICIAR TRANSMISSÃO",
      status: "CANAL ABERTO // RESPOSTA EM < 24H",
      info: [
        { title: "EMAIL", value: "albertojr11@hotmail.com" },
        { title: "COMM LINK", value: "+55 (71) 9 9399-9204" },
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
  
  useOfService: "2. Uso do Site",
  useOfServiceText: "O conteúdo disponibilizado neste site tem caráter informativo e institucional. O usuário compromete-se a utilizar o site de forma lícita, ética e em conformidade com a legislação vigente, não praticando atos que possam causar danos à empresa ou a terceiros.",
  
  intellectualProperty: "3. Propriedade Intelectual",
  intellectualPropertyText: "Todos os conteúdos deste site, incluindo textos, códigos, imagens, marcas e logotipos, são de propriedade da Nebula Systems ou de seus licenciadores, sendo protegidos pelas leis de direitos autorais e propriedade intelectual. É vedada a reprodução, distribuição ou modificação sem autorização prévia.",
  
  limitationOfLiability: "4. Limitação de Responsabilidade",
  limitationOfLiabilityText: "A Nebula Systems não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site, bem como por eventuais falhas técnicas, indisponibilidades temporárias ou informações de terceiros.",
  
  modifications: "5. Modificações dos Termos",
  modificationsText: "A Nebula Systems reserva-se o direito de alterar estes Termos de Uso a qualquer momento, mediante atualização deste conteúdo. Recomenda-se a revisão periódica para ciência de eventuais alterações.",
  
  applicableLaw: "6. Lei Aplicável",
  applicableLawText: "Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Eventuais controvérsias serão dirimidas no foro do domicílio da empresa, salvo disposição legal em contrário.",
      },
      docsModal: {
  intro: "Esta seção descreve a metodologia de trabalho e o processo de desenvolvimento adotados pela Nebula Systems. Cada projeto segue um fluxo estruturado, com foco em qualidade técnica, previsibilidade e eficiência operacional.",
  
  methodology: "1. Metodologia de Trabalho",
  methodologyText: "Os projetos são conduzidos com metodologias ágeis adaptadas à complexidade e ao escopo de cada iniciativa, utilizando ciclos iterativos, entregas frequentes e comunicação contínua com o cliente. Cada etapa é documentada e validada antes do avanço para a próxima fase.",
  
  developmentProcess: "2. Processo de Desenvolvimento",
  developmentProcessText: "O processo de desenvolvimento é estruturado nas seguintes etapas: Discovery (levantamento e entendimento dos requisitos), Design (definição da arquitetura e soluções técnicas), Development (implementação e testes), Deployment (publicação, monitoramento e ajustes) e Maintenance (suporte contínuo e evolução do sistema).",
  
  toolsStack: "3. Ferramentas e Stack Tecnológica",
  toolsStackText: "Utilizamos tecnologias modernas e amplamente adotadas pelo mercado, como React, TypeScript, Node.js, Python, Docker e provedores de cloud como AWS. A definição da stack é sempre orientada pelas necessidades técnicas, requisitos de negócio e objetivos de longo prazo de cada projeto.",
  
  qualityAssurance: "4. Garantia de Qualidade",
  qualityAssuranceText: "Todo o código desenvolvido passa por práticas de garantia de qualidade, incluindo revisões técnicas, testes automatizados (unitários e de integração) e análise estática. São adotados padrões de clean code, versionamento adequado e documentação técnica atualizada.",
  
  communication: "5. Comunicação e Acompanhamento",
  communicationText: "A comunicação com o cliente ocorre de forma estruturada, com reuniões periódicas de acompanhamento, relatórios de progresso e acesso aos repositórios do projeto. A transparência técnica é mantida em todas as etapas do desenvolvimento.",
},
    },
  },

  en: {
    // Navbar
    nav: {
      inicio: "HOME",
      servicos: "SERVICES",
      tech: "TECH",
      sobre: "ABOUT",
      contato: "CONTACT",
      connect: "<CONNECT/>",
    },

    // Hero
    hero: {
      systemInit: "INITIALIZING SYSTEM",
      missionActive: "MISSION ACTIVE",
      title1: "SOFTWARE",
      title2: "<DEVELOPMENT/>",
      subtitle:
        "Software engineering and cloud infrastructure for critical missions. We build your business's digital foundation.",
      criticalMissions: "critical missions",
      stats: {
        years: "YEARS",
        projects: "PROJECTS",
        stack: "STACK",
      },
      cta: {
        startProject: "START PROJECT",
        viewServices: "VIEW SERVICES",
      },
      pills: {
        cloud: "CLOUD",
        devops: "DEVOPS",
        deploy: "DEPLOY",
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
        // Azure
        azureFunctions: "Azure Functions",
        azureFunctionsDesc: "Serverless compute",
        appService: "App Service",
        appServiceDesc: "Web apps and APIs",
        blobStorage: "Blob Storage",
        blobStorageDesc: "Scalable object storage",
        azureDevOps: "Azure DevOps",
        azureDevOpsDesc: "CI/CD pipelines",
        cosmosDb: "Cosmos DB",
        cosmosDbDesc: "Global NoSQL database",
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
      badge: "ABOUT THE COMPANY",
      title: "SOFTWARE",
      titleHighlight: "ENGINEERING",
      description1:
        "The company operates in the development of software systems and high-performance cloud architectures, with a strong focus on clean, scalable code and well-designed infrastructure.",
      description2:
        "Projects are carried out with direct involvement of the responsible software engineer, serving clients ranging from startups to corporate environments and enterprise-level operations.",
      items: [
        //{ value: "50+", label: "PROJECTS DELIVERED", icon: "🚀" },
        { value: "8+", label: "YEARS CODING", icon: "⌨️" },
        { value: "99.9%", label: "SLA GUARANTEED", icon: "📊" },
        { value: "24/7", label: "DEDICATION", icon: "🛡" },
      ],
      terminal: {
        command: "dev_info",
        type: "type",
        soloDeveloper: "software engineer",
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
        { title: "COMM LINK", value: "+55 (71) 9 9399-9204" },
        { title: "BASE", value: "Bahia, Brasil" },
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
  dataSharingText: "Nebula Systems does not sell personal data. Data sharing may occur only when required to comply with legal obligations, perform contracted services, or protect the company’s rights.",
  
  security: "4. Security",
  securityText: "We adopt appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration, or improper disclosure, following information security best practices.",
  
  cookies: "5. Cookies",
  cookiesText: "The website may use cookies strictly necessary for its proper functioning and performance analysis. Users may configure their browser to refuse cookies, understanding that some features may be affected.",
      },
      termsModal: {
        intro: "These Terms of Use govern access to and use of the website operated by Nebula Systems, registered under CNPJ number 63.551.104/0001-04. By accessing this website, the user agrees to the terms and conditions described herein.",
  
  acceptance: "1. Acceptance of the Terms",
  acceptanceText: "By accessing or using this website, the user confirms that they have read, understood, and fully agreed to these Terms of Use. If the user does not agree, they should refrain from using the website.",
  
  useOfService: "2. Use of the Website",
  useOfServiceText: "The content provided on this website is for informational and institutional purposes only. Users agree to use the website lawfully, ethically, and in compliance with applicable laws, refraining from any actions that may cause harm to the company or third parties.",
  
  intellectualProperty: "3. Intellectual Property",
  intellectualPropertyText: "All content on this website, including text, code, images, trademarks, and logos, is the property of Nebula Systems or its licensors and is protected by copyright and intellectual property laws. Reproduction, distribution, or modification without prior authorization is prohibited.",
  
  limitationOfLiability: "4. Limitation of Liability",
  limitationOfLiabilityText: "Nebula Systems shall not be liable for any direct or indirect damages arising from the use or inability to use the website, including technical failures, temporary unavailability, or third-party information.",
  
  modifications: "5. Changes to the Terms",
  modificationsText: "Nebula Systems reserves the right to modify these Terms of Use at any time by updating this content. Users are encouraged to review the terms periodically to stay informed of any changes.",
  
  applicableLaw: "6. Governing Law",
  applicableLawText: "These Terms of Use shall be governed by and construed in accordance with the laws of the Federative Republic of Brazil. Any disputes shall be resolved in the jurisdiction of the company’s registered office, unless otherwise required by law.",
      },
      docsModal: {
  intro: "This section outlines the work methodology and development process adopted by Nebula Systems. Each project follows a structured workflow focused on technical quality, predictability, and operational efficiency.",
  
  methodology: "1. Work Methodology",
  methodologyText: "Projects are conducted using agile methodologies adapted to the scope and complexity of each initiative, with iterative cycles, frequent deliveries, and continuous communication with the client. Each phase is documented and validated before proceeding to the next stage.",
  
  developmentProcess: "2. Development Process",
  developmentProcessText: "The development process is structured into the following stages: Discovery (requirements analysis and understanding), Design (architecture definition and technical solutions), Development (implementation and testing), Deployment (release, monitoring, and adjustments), and Maintenance (continuous support and system evolution).",
  
  toolsStack: "3. Tools and Technology Stack",
  toolsStackText: "We use modern, industry-standard technologies such as React, TypeScript, Node.js, Python, Docker, and cloud providers including AWS. The technology stack is always selected based on technical requirements, business needs, and long-term project goals.",
  
  qualityAssurance: "4. Quality Assurance",
  qualityAssuranceText: "All developed code undergoes quality assurance practices, including technical reviews, automated testing (unit and integration tests), and static analysis. Clean code standards, proper version control, and up-to-date technical documentation are consistently applied.",
  
  communication: "5. Communication and Reporting",
  communicationText: "Client communication is handled in a structured manner, with regular status meetings, progress reports, and access to project repositories. Technical transparency is maintained throughout all stages of the development lifecycle.",
},

    },
  },
} as const;

export type Language = keyof typeof translations;
