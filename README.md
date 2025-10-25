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

## **Table of Contents 🧭**
- [URLs 🌐](#urls-)
- [Introduction 🤔](#introduction-)
- [Features ✨](#features-)
- [Requirements 🏁](#requirements-)
- [Build Process 🏭](#build-process-)
- [Usage 💻](#usage-)
- [Project Structure 🏗](#project-structure-)
- [Key Dependencies 🔑](#key-dependencies-)
- [Testing 🧪](#testing-)
- [License 📜](#license-)
- [Contributing 🤝](#contributing-)
- [Contact 📫](#contact-)

## **URLs 🌐**

| Key  | Value                                                          |
|------|----------------------------------------------------------------|
| Site | [https://5h1ngy.github.io/fe-react-portfolio/home](#)         |

## **Introduction 🤔**

**FE-React-Portfolio** is a modular, themeable portfolio application designed to showcase projects, skills, and professional information. It leverages modern frontend technologies and integrates seamlessly with libraries such as **GSAP** for animations and **Redux Toolkit** for state management.

## **Features ✨**
- **Responsive design** with light/dark themes.  
- **Interactive project showcase** with animations (powered by GSAP).  
- **Modular component-based** structure for reusability.  
- **Built-in Markdown rendering** for project descriptions.
- **Type-safe** development using **TypeScript**.  
- **State management** with **Redux Toolkit**.  

## **Requirements 🏁**
- **Node.js**: `>= 20.18.0`  
- **Yarn**: `>= 4.5.1`  

## **Build Process 🏭**
- **Production build**:
  ```bash
  yarn build:prod
  ```
- **Production preview**:
  ```bash
  yarn preview:prod
  ```

## **Usage 💻**

- **Project Showcase**: Interactive cards displaying project details, links, and thumbnails.  
- **Markdown Support**: Render project descriptions dynamically using Markdown.  
- **Dark Mode**: Built-in light/dark theme toggling via Chakra UI.  
- **Animations**: Smooth page transitions and interactive elements with GSAP.  

> **Note**: Since this is a frontend application, please see your preferred deployment guide or host to run the compiled project in a production environment.

## **Project Structure 🏗**

```plaintext
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable components
├── hocs/            # Higher-order components
├── pages/           # Page-level components (Home, About, etc.)
├── services/        # API calls, data fetching, etc.
├── store/           # Redux state slices and async thunks
├── styles/          # Global styles or theming config
├── utils/           # Helper functions and utilities
├── App.tsx          # Main app entry point
└── main.tsx         # Application bootstrap file
```

## **Key Dependencies 🔑**
- **React** (v19.x)
- **TypeScript** (v5.x)
- **Chakra-UI** (v3.x)
- **Redux Toolkit** (v2.x)
- **GSAP** (v3.x)

## **Testing 🧪**

Run your **unit tests** with:

```bash
yarn test
```

## **License 📜**
This project is licensed under the [MIT License](./LICENSE).

## **Contributing 🤝**
1. **Fork** the repository or open a new branch in your local clone.
2. Make your changes in the dedicated folder or file.
3. Open a **pull request** describing your changes.

## **Contact 📫**
- **Author**: [5h1ngy](https://github.com/5h1ngy)  
- **Repository**: [GitHub](https://github.com/5h1ngy/fe-react-portfolio)