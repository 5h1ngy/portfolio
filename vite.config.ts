import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  dotenv.config({ path: `.env.${mode}` });

  // In questo caso, se il token è impostato nell'ambiente (ad es. da GitHub Actions)
  // verrà preso da process.env
  const VITE_GITHUB_BEARER = process.env.VITE_GITHUB_BEARER || "";
  console.log('env', `.env.${mode}`);

  // Definizione del proxy basato su variabile di ambiente
  const proxy = process.env.VITE_USE_MOCK === "false"
    ? {
      "/api": {
        target: process.env.VITE_API,
        changeOrigin: true,
        secure: false,
      },
    }
    : undefined; // Usa undefined invece di null per compatibilità con Vite

  return {
    base: process.env.VITE_BASENAME,
    plugins: [
      react(),
      tsconfigPaths(),
      {
        name: "markdown-loader",
        transform(code, id) {
          if (id.slice(-3) === ".md") {
            return `export default ${JSON.stringify(code)};`;
          }
        },
      }
    ],
    // Inietta la variabile in fase di build in modo che import.meta.env abbia il token
    define: {
      'import.meta.env.VITE_GITHUB_BEARER': JSON.stringify(VITE_GITHUB_BEARER),
    },
    server: {
      host: "0.0.0.0",
      watch: {
        usePolling: true,
        interval: 1000,
      },
      proxy, // Aggiunge dinamicamente il proxy se definito
    },
  };
});
