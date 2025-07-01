# 🚀 React + TypeScript + Vite

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/vite-4.x-646CFF.svg?logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-8.x-4B32C3.svg?logo=eslint)

Un avanzato boilerplate per applicazioni web React con TypeScript e bundler Vite. Combina la potenza di TypeScript per la tipizzazione statica con l'efficienza di React e la velocità di Vite, supportando funzionalità offline complete.

## 📋 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Setup & Development](#-setup--development)
- [Package Managers](#-package-managers)
- [Expanding ESLint](#-expanding-eslint-configuration)
- [Resources](#-resources)

## ✨ Features

- ⚛️ React per lo sviluppo di interfacce utente moderne
- 🔒 TypeScript per codice tipizzato e sicuro
- 🔄 Hot Module Replacement (HMR) per sviluppo rapido
- ⚡ Vite per un bundling ultra-veloce
- 💾 Supporto completo per funzionalità offline (localStorage)
- 📤 Funzionalità di import/export e backup
- 📊 Supporto per dashboard e visualizzazioni statistiche
- 🗓️ Possibilità di implementare timeline e viste calendario
- 🔍 Configurazione ESLint avanzata con type-checking
- 🎨 Setup per transient props pattern in componenti styled
- 🌐 Web application ottimizzata per la distribuzione

## 🗂️ Project Structure

```
bl-vitejs-typescript-react/
├── public/             # Risorse statiche
├── src/
│   ├── assets/         # Immagini, font e risorse varie
│   ├── components/     # Componenti React riutilizzabili
│   │   ├── ui/         # Componenti UI di base
│   │   └── layout/     # Componenti di layout
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Componenti pagina
│   ├── utils/          # Funzioni di utilità
│   ├── types/          # Definizione di tipi TypeScript
│   ├── App.tsx         # Componente principale dell'app
│   ├── index.css       # Stili globali
│   └── main.tsx        # Entry point dell'applicazione
├── .eslintrc.cjs       # Configurazione ESLint
├── tsconfig.json       # Configurazione TypeScript
├── tsconfig.node.json  # Configurazione TypeScript per Node
├── index.html          # Template HTML
├── package.json        # Dipendenze e script
└── vite.config.ts      # Configurazione Vite
```

## 🚀 Setup & Development

### 📥 Installazione

```bash
# Utilizzando NPM
$ npm install

# Utilizzando Yarn
$ yarn

# Utilizzando PNPM
$ pnpm install
```

### 🔧 Sviluppo

```bash
# Utilizzando NPM
$ npm run dev

# Utilizzando Yarn
$ yarn dev

# Utilizzando PNPM
$ pnpm dev
```

### 📦 Build

```bash
# Utilizzando NPM
$ npm run build

# Utilizzando Yarn
$ yarn build

# Utilizzando PNPM
$ pnpm build
```

### 🔍 Preview

```bash
# Utilizzando NPM
$ npm run preview

# Utilizzando Yarn
$ yarn preview

# Utilizzando PNPM
$ pnpm preview
```

## 📦 Package Managers

Questo progetto supporta diversi package manager. Ecco le caratteristiche di ciascuno:

### NPM

NPM è il package manager predefinito per Node.js.

**Installazione NPM:**
```bash
# Incluso con l'installazione di Node.js
```

**Caratteristiche principali:**
- 📚 Vasto ecosistema di pacchetti
- 🔒 Struttura gerarchica di node_modules
- 📋 Package.json per la gestione delle dipendenze

### Yarn

Yarn è un'alternativa rapida, affidabile e sicura a NPM.

**Installazione Yarn:**
```bash
# Installazione tramite NPM
$ npm install -g yarn
```

**Caratteristiche principali:**
- ⚡ Velocità di installazione superiore
- 📦 Caching offline
- 🔒 Maggiore sicurezza con checksum
- 📋 yarn.lock per installazioni deterministiche

### PNPM

PNPM è un package manager efficiente in termini di spazio su disco.

**Installazione PNPM:**
```bash
# Installazione tramite NPM
$ npm install -g pnpm
```

**Caratteristiche principali:**
- 💾 Risparmio di spazio su disco tramite symlink
- 🚀 Velocità di installazione elevata
- 🔄 Storage con indirizzamento basato sul contenuto
- 📋 pnpm-lock.yaml per blocco delle dipendenze

### Confronto

| Funzionalità          | NPM     | Yarn    | PNPM    |
|-----------------------|---------|---------|---------|
| Utilizzo disco        | Alto    | Alto    | Basso   |
| Velocità installazione| Lenta   | Veloce  | Velocissima |
| Installazioni parallele| Limitato| Sì      | Sì      |
| Supporto workspaces   | Limitato| Buono   | Ottimo  |
| Modalità offline      | Limitato| Buono   | Buono   |
| Sicurezza             | Buona   | Migliore| Migliore|

## 🔧 Expanding ESLint Configuration

Se stai sviluppando un'applicazione per la produzione, ti consigliamo di aggiornare la configurazione per abilitare le regole di lint consapevoli del tipo:

```js
export default tseslint.config({
  extends: [
    // Rimuovi ...tseslint.configs.recommended e sostituisci con questo
    ...tseslint.configs.recommendedTypeChecked,
    // In alternativa, usa questo per regole più severe
    ...tseslint.configs.strictTypeChecked,
    // Opzionalmente, aggiungi questo per regole stilistiche
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // altre opzioni...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Puoi anche installare [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) e [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) per regole di lint specifiche per React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Aggiungi i plugin react-x e react-dom
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // altre regole...
    // Abilita le regole TypeScript consigliate
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/)
- [NPM Documentation](https://docs.npmjs.com/)
- [Yarn Documentation](https://yarnpkg.com/getting-started)
- [PNPM Documentation](https://pnpm.io/motivation)

## 🔌 Plugin ufficiali Vite

Attualmente, sono disponibili due plugin ufficiali:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilizza [Babel](https://babeljs.io/) per Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilizza [SWC](https://swc.rs/) per Fast Refresh
