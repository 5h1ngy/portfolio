import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { PortfolioProvider, usePortfolioTheme } from './context/PortfolioContext.tsx'
import { GlobalStyle } from './styles/global.ts'
import { baseTheme } from './styles/theme.ts'

const ThemedApp = () => {
  const theme = usePortfolioTheme(baseTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioProvider>
      <ThemedApp />
    </PortfolioProvider>
  </StrictMode>,
)
