import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";

// =============================================================================
// Manus Debug Collector (pode remover depois se quiser)
// =============================================================================

const PROJECT_ROOT = process.cwd();
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            if (!fs.existsSync(LOG_DIR)) {
              fs.mkdirSync(LOG_DIR, { recursive: true });
            }

            fs.appendFileSync(
              path.join(LOG_DIR, "logs.txt"),
              JSON.stringify(payload) + "\n"
            );

            res.end(JSON.stringify({ success: true }));
          } catch {
            res.end(JSON.stringify({ success: false }));
          }
        });
      });
    },
  };
}

// =============================================================================
// CONFIG PRINCIPAL
// =============================================================================

export default defineConfig({
  plugins: [
    react(),
    vitePluginManusDebugCollector(), // pode remover se quiser
  ],

  root: path.resolve(PROJECT_ROOT, "client"),

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client/src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
    },
  },

  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});
