import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
    background-color: ${({ theme }) => theme.colors.background};
    --accent-color: ${({ theme }) => theme.colors.accent};
    --accent-soft: ${({ theme }) => theme.colors.accentSoft};
    --accent-outline: ${({ theme }) => theme.colors.accentOutline};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => theme.gradients.hero};
    background-attachment: fixed;
    background-size: cover;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.fonts.body};
    font-size: ${({ theme }) => theme.typography.sizes.md};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(4, 7, 19, 0.85) 0%, rgba(4, 7, 19, 0.6) 40%, rgba(4, 7, 19, 0.9) 100%);
    z-index: -1;
  }

  #root {
    isolation: isolate;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.fonts.heading};
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  code, pre {
    font-family: ${({ theme }) => theme.typography.fonts.mono};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accentSoft};
    border-radius: 999px;
    border: 2px solid ${({ theme }) => theme.colors.surface};
  }

  img, svg {
    display: block;
    max-width: 100%;
  }
`
