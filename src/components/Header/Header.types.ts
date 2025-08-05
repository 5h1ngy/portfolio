import type { PortfolioLocale } from '@data/portfolio'
import type { ThemeMode } from '@styles/theme'

export interface HeaderNavigationItem {
  label: string
  targetId: string
}

export interface HeaderProps {
  navigation: HeaderNavigationItem[]
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
  accentOptions: string[]
  accentColor: string
  onAccentChange: (color: string) => void
  locale: PortfolioLocale
  locales: PortfolioLocale[]
  onLocaleChange: (locale: PortfolioLocale) => void
  profileName: string
}
