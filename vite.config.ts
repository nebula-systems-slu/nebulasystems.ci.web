import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(path.resolve(__dirname, "package.json"), "utf-8"));

function sh(cmd: string): string | null {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim() || null;
  } catch {
    return null;
  }
}

// Versão exibida no rodapé.
// Usa a versão do package.json (fonte confiável no build do Vercel, pois é
// versionada no repo) + o hash curto do commit como metadado de build — assim
// muda a cada push e identifica exatamente qual build está no ar. Ex.: "2.0.0+ab12cd3".
// O package.json é mantido em sincronia com as releases do semantic-release.
function resolveVersion(): string {
  const sha =
    sh("git rev-parse --short HEAD") ?? process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7);
  return sha ? `${pkg.version}+${sha}` : pkg.version;
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(resolveVersion()),
  },
}));
