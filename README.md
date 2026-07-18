# Nebula Systems

Site institucional da **Nebula Systems** — desenvolvimento de software e cloud computing.

🌐 Produção: [nebulasystems.com.br](https://www.nebulasystems.com.br)

## Tecnologias

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix)
- **i18n** próprio (PT-BR / EN) com detecção de idioma e persistência
- **lucide-react** (ícones)
- Animações em CSS/Tailwind (sem bibliotecas de animação)

## Seções

- **Hero** — carrossel de imagens com carregamento progressivo
- **Serviços** — cards com modais de detalhe
- **Processo** — timeline das 5 etapas, cada uma com vídeo demonstrativo
- **Arquitetura** — diagramas de referência AWS (bilíngues) com modal de zoom
- **Stack** — tecnologias dominadas
- **Sobre / Fundador** — apresentação e contato direto
- **Contato** — e-mail, WhatsApp e localização

## Desenvolvimento

```bash
npm install     # instalar dependências
npm run dev     # servidor de desenvolvimento (porta 8080)
npm run build   # build de produção
npm run preview # pré-visualizar o build
```

## Estrutura

```
public/
├── videos/         # vídeos das etapas do processo (process-01..05.mp4)
└── og-image.png    # imagem de compartilhamento (Open Graph)
src/
├── components/     # componentes React (+ ui/ do shadcn)
├── pages/          # páginas
├── router/         # configuração de rotas
├── i18n/           # traduções PT-BR / EN
├── hooks/          # custom hooks
├── lib/            # utilitários
└── assets/         # imagens (WebP) e diagrams/ (SVG das arquiteturas)
```

## Deploy & versionamento

- Hospedado no **Vercel** — deploy automático a cada push na branch `main`.
- Versionamento via **semantic-release** (GitHub Actions): cada push com
  [Conventional Commits](https://www.conventionalcommits.org/) gera uma
  release/tag (`vX.Y.Z`).
- A versão é exibida no rodapé — injetada no build pelo `vite.config.ts`
  (`__APP_VERSION__`) a partir da versão do `package.json` + hash curto do commit.

## Contato

- E-mail: albertojr11@hotmail.com
- WhatsApp: +55 (71) 9 9399-9204
- Site: [nebulasystems.com.br](https://www.nebulasystems.com.br)
