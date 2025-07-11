import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import { AppMain, AppShell } from '@/App.style'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { OpenSourceProductsSection, OpenSourceSection } from '@/components/sections/OpenSourceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { getPortfolioData, getSupportedLocales, type PortfolioLocale } from '@data/portfolio'
import { GlobalStyle } from '@styles'
import { SECONDARY_COLORS, createTheme, type ThemeMode } from '@styles/theme'

const ACCENT_OPTIONS = SECONDARY_COLORS
const DEFAULT_ACCENT = ACCENT_OPTIONS[0]
const SUPPORTED_LOCALES = getSupportedLocales()

export const App = () => {
  const { t, i18n } = useTranslation()
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [accentColor, setAccentColor] = useState<string>(DEFAULT_ACCENT)
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppShell>
        <Header
          navigation={navigation}
          themeMode={themeMode}
          onThemeChange={setThemeMode}
          accentOptions={ACCENT_OPTIONS}
          accentColor={accentColor}
          onAccentChange={setAccentColor}
          locale={locale}
          locales={SUPPORTED_LOCALES}
          onLocaleChange={setLocale}
        />
        <AppMain>
          <HeroSection hero={hero} socialLinks={profile.links} />
          <AboutSection about={about} />
          <SkillsSection skills={skills} />
          <OpenSourceProductsSection products={openSourceProducts} />
          <OpenSourceSection openSource={openSource} />
          <ExperienceSection experience={experience} />
        </AppMain>
        <Footer profile={profile} meta={meta} />
      </AppShell>
    </ThemeProvider>
  )
}

export default App

