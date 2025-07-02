import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    transition: background 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    font: inherit;
    color: inherit;
  }
`;
