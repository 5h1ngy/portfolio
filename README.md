# 🚀 React + TypeScript + Vite

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/vite-4.x-646CFF.svg?logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-8.x-4B32C3.svg?logo=eslint)

A modern web application built with React, TypeScript, and Vite. Perfect for creating type-safe, component-based web applications with high performance and exceptional developer experience.

**Topics:** `react` `typescript` `vite` `web-app` `spa` `offline-first` `local-storage` `component-based` `type-safety`

## 📋 Table of Contents
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Recommended IDE Setup](#-recommended-ide-setup)
- [Project Setup](#-project-setup)
- [Package Managers](#-package-managers)
- [ESLint Configuration](#-eslint-configuration)
- [Resources](#-resources)

## ✨ Features

- ⚛️ React framework for UI components
- 🔒 Type safety with TypeScript
- 📊 Support for dashboard and statistical visualizations
- 🗓️ Ability to implement timeline and calendar views
- 💾 Data storage in localStorage (100% offline)
- 📤 Import/export and backup functionality
- 🔄 Hot Module Replacement (HMR) during development
- ⚡ Ultra-fast build with Vite bundler
- 🎨 Component-based architecture
- 📱 Responsive design for all devices
- 🧩 Modular code structure
- 🔍 TypeScript linting with ESLint
- 🎨 Code formatting with Prettier
- 🧪 Testing with Vitest and React Testing Library
- 🖌️ Support for transient props pattern in styled components

## 🗂️ Project Structure

```
bl-vitejs-typescript-react/
├── public/             # Static assets
├── dist/               # Build output directory
├── src/
│   ├── assets/         # Project assets (images, fonts, etc.)
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   └── layout/     # Layout components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── context/        # React context providers
│   ├── App.tsx         # Root React component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .eslintrc.cjs       # ESLint configuration
├── tsconfig.json       # TypeScript configuration
├── tsconfig.node.json  # TypeScript configuration for Node
├── vite.config.ts      # Vite configuration
├── package.json        # Project dependencies and scripts
└── index.html          # HTML template
```

## 🛠️ Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 🚀 Project Setup

### 📥 Install

```bash
$ pnpm install
```

### 🔧 Development

```bash
$ pnpm dev
```

### 📦 Build

```bash
$ pnpm build
```

### 🧪 Test

```bash
$ pnpm test
```

## 📦 Package Managers

This project supports multiple package managers. Here's how to use each one:

### NPM

NPM is the default package manager for Node.js.

**Install NPM:**
```bash
# Included with Node.js installation
```

**Setup project with NPM:**
```bash
# Install dependencies
$ npm install

# Run development server
$ npm run dev

# Build application
$ npm run build

# Run tests
$ npm run test
```

**Key features:**
- 📚 Vast package ecosystem
- 🔒 Hierarchical node_modules structure
- 📋 Package.json for dependency management

### Yarn

Yarn is a fast, reliable, and secure alternative to NPM.

**Install Yarn:**
```bash
# Install using NPM
$ npm install -g yarn
```

**Setup project with Yarn:**
```bash
# Install dependencies
$ yarn

# Run development server
$ yarn dev

# Build application
$ yarn build

# Run tests
$ yarn test
```

**Key features:**
- ⚡ Faster installation speeds
- 📦 Offline caching
- 🔒 Better security with checksums
- 📋 yarn.lock for deterministic installations

### PNPM

PNPM is a disk-space efficient package manager.

**Install PNPM:**
```bash
# Install using NPM
$ npm install -g pnpm
```

**Setup project with PNPM:**
```bash
# Install dependencies
$ pnpm install

# Run development server
$ pnpm dev

# Build application
$ pnpm build

# Run tests
$ pnpm test
```

**Key features:**
- 💾 Disk space savings through symlinks
- 🚀 Fast installation speeds
- 🔄 Content-addressable storage
- 📋 pnpm-lock.yaml for dependency lock

### Comparison

| Feature               | NPM     | Yarn    | PNPM    |
|-----------------------|---------|---------|---------|
| Disk usage            | High    | High    | Low     |
| Installation speed    | Slow    | Fast    | Fastest |
| Parallel installations| Limited | Yes     | Yes     |
| Workspace support     | Limited | Good    | Best    |
| Offline mode          | Limited | Good    | Good    |
| Security              | Good    | Better  | Better  |

## 🛡️ ESLint Configuration

This project uses ESLint to ensure code quality. The configuration is located in `.eslintrc.cjs`.

### Basic Configuration

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

### For Production Applications

For production applications, you may want to add additional rules:

```js
// Additional rules for production
rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
}
```

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [NPM Documentation](https://docs.npmjs.com/)
- [Yarn Documentation](https://yarnpkg.com/getting-started)
- [PNPM Documentation](https://pnpm.io/motivation)
