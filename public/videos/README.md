# Vídeos das etapas do "Nosso Processo"

Coloque aqui os 5 vídeos gerados (Gemini/Veo) para cada etapa do processo.

## Convenção de nomes (sugerida)
| Etapa | Arquivo sugerido |
|-------|------------------|
| 01 · Ideia → Estrutura     | `process-01.mp4` |
| 02 · Design e Prototipação | `process-02.mp4` |
| 03 · Arquitetura           | `process-03.mp4` |
| 04 · Desenvolvimento       | `process-04.mp4` |
| 05 · Entrega e Evolução    | `process-05.mp4` |

## Como ativar cada vídeo
Abra `src/components/Process.tsx` e preencha o array `stepVideos` com o caminho
(a partir de `public/`), por exemplo:

```ts
const stepVideos: (string | null)[] = [
  "/videos/process-01.mp4",
  "/videos/process-02.mp4",
  "/videos/process-03.mp4",
  "/videos/process-04.mp4",
  "/videos/process-05.mp4",
];
```

Enquanto um item estiver `null`, o card daquela etapa mostra o placeholder
"vídeo em breve". Assim dá pra publicar mesmo com só alguns vídeos prontos.

## Recomendações
- Formato: **MP4 (H.264)**, 16:9 (1920×1080), **sem áudio**, 5–8s, em loop.
- Mantenha cada arquivo abaixo de ~3–5 MB (comprima se necessário) para não pesar.
- O player já sobe com `autoplay muted loop playsinline controls`.
