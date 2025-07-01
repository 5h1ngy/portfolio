import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { mergeThemes, type AppTheme } from '../styles/theme'
import type { PortfolioData, PortfolioNavigationItem } from '../types/portfolio'

interface PortfolioContextValue {
  data: PortfolioData | null
  isLoading: boolean
  error: string | null
  navigation: PortfolioNavigationItem[]
  accentColor: string
}

const DEFAULT_ACCENT = '#5cf3e9'

const PortfolioContext = createContext<PortfolioContextValue | undefined>(undefined)

const CONTENT_ENDPOINT = '/content/portfolio.json'

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadContent = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(CONTENT_ENDPOINT, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Impossibile caricare ${CONTENT_ENDPOINT} (status ${response.status})`)
      }

      const payload = (await response.json()) as PortfolioData
      setData(payload)
    } catch (contentError) {
      setError(contentError instanceof Error ? contentError.message : String(contentError))
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadContent()
  }, [loadContent])

  const accentColor = data?.ui?.accentColor ?? DEFAULT_ACCENT
  const navigation = data?.ui?.navigation ?? []

  const value = useMemo<PortfolioContextValue>(
    () => ({
      data,
      isLoading,
      error,
      navigation,
      accentColor,
    }),
    [accentColor, data, error, isLoading, navigation],
  )

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)

  if (!context) {
    throw new Error('usePortfolio puo essere utilizzato solo all interno di PortfolioProvider')
  }

  return context
}

export const usePortfolioTheme = (baseTheme: AppTheme) => {
  const { data, accentColor } = usePortfolio()

  return useMemo(
    () =>
      mergeThemes(baseTheme, {
        accentColor,
        background: data?.ui?.background,
        gradients: data?.ui?.gradients,
      }),
    [accentColor, baseTheme, data?.ui?.background, data?.ui?.gradients],
  )
}

