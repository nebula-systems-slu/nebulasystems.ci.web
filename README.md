# Nebula Systems

Site institucional da **Nebula Systems** — desenvolvimento de software e cloud computing.

🌐 Produção: [nebulasystems.com.br](https://www.nebulasystems.com.br)

## Tecnologias

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** + alguns componentes **shadcn/ui** (Radix)
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
├── components/     # componentes React (+ ui/ — só os 6 em uso)
├── pages/          # páginas
├── router/         # configuração de rotas
├── i18n/           # traduções PT-BR / EN
├── hooks/          # custom hooks
├── lib/            # utilitários
└── assets/         # imagens (WebP) e diagrams/ (SVG das arquiteturas)
```

## Deploy & versionamento

Hospedado na **AWS** desde 19/10/2026 — S3 privado servido por
CloudFront. A infraestrutura vive no repositório `nebulasystems.ci.iac`.

O deploy acontece no job `deploy-aws` do `ci.yml`, só em push na `main` e
só depois do job de qualidade passar:

1. build do Vite
2. `aws s3 sync` do `dist/` para o bucket
3. invalidação do cache do CloudFront

A autenticação é por **OIDC**, assumindo uma role restrita à branch
`main` deste repositório — não há access key guardada em secret. Uma
pull request não consegue publicar.

**Ordem e cache não são arbitrários.** Os arquivos de `assets/` têm hash
no nome e sobem primeiro, marcados como imutáveis por um ano. O
`index.html` sobe por último e sem cache, porque é ele que aponta para os
assets novos. Os demais arquivos levam um dia, já que invalidação do
CloudFront limpa a borda mas nunca o cache do navegador de quem já
visitou.

Configuração em *Settings → Secrets and variables → Actions*: o secret
`AWS_DEPLOY_ROLE` e as variables `AWS_REGION`, `AWS_SITE_BUCKET` e
`AWS_CLOUDFRONT_ID`.

### Versionamento

Via **semantic-release**: cada push com
[Conventional Commits](https://www.conventionalcommits.org/) gera uma
release/tag (`vX.Y.Z`). A versão aparece no rodapé — injetada no build
pelo `vite.config.ts` (`__APP_VERSION__`) a partir do `package.json` +
hash curto do commit.

> Mensagem fora da convenção não gera release — falha em silêncio. Há um
> check no CI validando o título da PR por esse motivo.

## Contato

- E-mail: albertojr11@hotmail.com
- WhatsApp: +55 (71) 9 9399-9204
- Site: [nebulasystems.com.br](https://www.nebulasystems.com.br)
