import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getPortfolioData, getSupportedLocales, type PortfolioLocale } from '@data/portfolio'
import { SECONDARY_COLORS, createTheme, type ThemeMode } from '@styles/theme'

const ACCENT_OPTIONS = SECONDARY_COLORS
const DEFAULT_ACCENT = ACCENT_OPTIONS[ACCENT_OPTIONS.length - 1]
const THEME_STORAGE_KEY = 'app-theme-preferences'
const SUPPORTED_LOCALES = getSupportedLocales()

export const useAppViewModel = () => {
  const { t, i18n } = useTranslation()
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      if (!stored) {
        return 'dark'
      }
      const parsed = JSON.parse(stored) as { mode?: ThemeMode }
      return parsed.mode === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  const [accentColor, setAccentColor] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_ACCENT
    }
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
      if (!stored) {
        return DEFAULT_ACCENT
      }
      const parsed = JSON.parse(stored) as { accent?: string }
      return parsed.accent && ACCENT_OPTIONS.includes(parsed.accent) ? parsed.accent : DEFAULT_ACCENT
    } catch {
      return DEFAULT_ACCENT
    }
  })

  const [locale, setLocale] = useState<PortfolioLocale>('it')

  const portfolio = useMemo(() => getPortfolioData(locale), [locale])
  const { meta, profile, hero, about, experience, skills, openSource, openSourceProducts } = portfolio

  const theme = useMemo(() => createTheme(themeMode, accentColor), [themeMode, accentColor])

  const navigation = useMemo(
    () => [
      { label: t('navigation.about'), targetId: 'about' },
      { label: t('navigation.skills'), targetId: 'skills' },
      { label: t('navigation.products'), targetId: 'open-source-products' },
      { label: t('navigation.openSource'), targetId: 'open-source' },
      { label: t('navigation.experience'), targetId: 'experience' },
    ],
    [t],
  )

  useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale)
    }
  }, [i18n, locale])

  useEffect(() => {
    document.title = meta.title

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      description.content = meta.description
    }

    const keywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]')
    if (keywords) {
      keywords.content = meta.keywords.join(', ')
    }
  }, [meta.description, meta.keywords, meta.title])

  useEffect(() => {
    document.documentElement.style.colorScheme = themeMode
  }, [themeMode])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const payload = JSON.stringify({ mode: themeMode, accent: accentColor })
    window.localStorage.setItem(THEME_STORAGE_KEY, payload)
  }, [themeMode, accentColor])

  return {
    theme,
    meta,
    profile,
    hero,
    about,
    experience,
    skills,
    openSource,
    openSourceProducts,
    navigation,
    themeMode,
    setThemeMode,
    accentOptions: ACCENT_OPTIONS,
    accentColor,
    setAccentColor,
    locale,
    locales: SUPPORTED_LOCALES,
    setLocale,
  }
}
