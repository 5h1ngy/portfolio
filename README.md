# **FE-React-Portfolio**

<p align="center">
  <img src="./assets/logo.png" alt="logo" width="512">
</p>

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](#)
![Node.js](https://img.shields.io/badge/node-%3E%3D20.18.0-green)
![Yarn](https://img.shields.io/badge/yarn-%3E%3D4.5.1-green)

A modern portfolio application built using **React**, **TypeScript**, and **Chakra-UI**, showcasing modular design, theming capabilities, and reusable components. Designed for scalability and optimal developer experience.

<p align="center">
   <div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
      <img src="./assets/preview_desktop.png" alt="Preview Desktop Light" style="height: 150px; object-fit: contain;">
      <img src="./assets/preview_mobile.png" alt="Preview Mobile Light" style="height: 150px; object-fit: contain;">
      <img src="./assets/preview_desktop_dark.png" alt="Preview Desktop Dark" style="height: 150px; object-fit: contain;">
      <img src="./assets/preview_mobile_dark.png" alt="Preview Mobile Dark" style="height: 150px; object-fit: contain;">
   </div>
</p>

## **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Dependencies](#key-dependencies)
- [Testing](#testing)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## **Introduction**

**FE-React-Portfolio** is a modular, themeable portfolio application designed to showcase projects, skills, and professional information. It leverages modern frontend technologies and integrates well with tools like Storybook and GSAP for interactive storytelling and animations.

## **Features**

- ✅ Responsive design with light/dark themes
- ✅ Interactive project showcase with animations (powered by GSAP)
- ✅ Modular component-based structure for reusability
- ✅ Built-in Markdown rendering for project descriptions
- ✅ Storybook integration for component testing and preview
- ✅ Type-safe development using **TypeScript**
- ✅ State management with **Redux Toolkit**

## **Requirements**

Ensure the following are installed on your system:

- **Node.js**: `>= 20.18.0`
- **Yarn**: `>= 4.5.1`

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/5h1ngy/fe-react-portfolio.git
   cd fe-react-portfolio
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start:dev
   ```

For a production build:
```bash
yarn build:prod
```

## **Usage**

### Core Features:
- **Project Showcase**: Interactive cards displaying project details, links, and thumbnails.
- **Markdown Support**: Render project descriptions dynamically using Markdown.
- **Dark Mode**: Built-in light/dark theming support using Chakra-UI.
- **Animations**: Smooth animations for transitions and interactive elements.

## **Project Structure**

```plaintext
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable components
├── hooks/           # Custom React hooks
├── pages/           # Page-level components
├── store/           # Redux state slices
├── styles/          # Global styles and themes
├── utils/           # Helper functions and utilities
├── App.tsx          # Main app entry point
└── main.tsx         # Application bootstrap file
```

## **Key Dependencies**

- **React**: UI framework for building user interfaces
- **TypeScript**: Ensures type safety across the project
- **Chakra-UI**: Modular and accessible component library
- **Redux Toolkit**: State management solution
- **Storybook**: Component testing and interactive development
- **GSAP**: For advanced animations and transitions

## **Testing**

Run tests with:

```bash
yarn test
```

For component testing, launch Storybook:

```bash
yarn start:storybook
```

## **License**

This project is licensed under the [MIT License](./LICENSE).

## **Contact**

- **Author**: [5h1ngy](https://github.com/5h1ngy)  
- **Repository**: [GitHub](https://github.com/5h1ngy/fe-react-portfolio)  