import _ from "lodash";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { jsonX } from 'vite-plugin-jsonx';

import dynamicImport from 'vite-plugin-dynamic-import'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { normalizePath } from 'vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: path.resolve(__dirname, 'app'),
  base: "./",
  publicDir: path.resolve(__dirname, 'app', 'public'),
  plugins: [
    react(),
    jsonX(),
    dynamicImport(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      }
    },
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, 'app', 'public')),
          dest: path.resolve(__dirname, 'dist'),
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@app/assets': path.resolve(__dirname, 'app', 'src', 'assets'),
      '@app/components': path.resolve(__dirname, 'app', 'src', 'components'),
      '@app/containers': path.resolve(__dirname, 'app', 'src', 'containers'),
      '@app/hocs': path.resolve(__dirname, 'app', 'src', 'hocs'),
      '@app/pages': path.resolve(__dirname, 'app', 'src', 'pages'),
      '@app/services': path.resolve(__dirname, 'app', 'src', 'services'),
      '@app/store': path.resolve(__dirname, 'app', 'src', 'store'),
      '@app/theme': path.resolve(__dirname, 'app', 'src', 'theme'),
    },
  },
  build: {

    outDir: path.resolve(__dirname, 'dist'),
    copyPublicDir: false,
    emptyOutDir: false,
    sourcemap: false,

    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: `main.js`,
        chunkFileNames: `[hash].js`,
        assetFileNames: `[hash].[ext]`
      },
    },
  }
})
