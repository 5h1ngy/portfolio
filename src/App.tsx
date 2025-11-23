import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { AppMain, AppShell } from '@/App.style'
import { useAppViewModel } from '@/App.hooks'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ScreenLoader } from '@/components/ScreenLoader'
import { OpenSourceProductsSection, OpenSourceSection } from '@/components/sections/OpenSourceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { useHeroAssetsPreloader } from '@/hooks/useHeroAssetsPreloader'
import { GlobalStyle } from '@styles'

const resolveMinLoaderDuration = () => {
  const candidate = Number.parseInt(import.meta.env.VITE_MIN_LOADER_DURATION_MS ?? '', 10)
  if (!Number.isNaN(candidate) && candidate >= 0) {
    return candidate
  }
  return 1200
}

export const App = () => {
  const {
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
    accentOptions,
    accentColor,
    setAccentColor,
    locale,
    locales,
    setLocale,
  } = useAppViewModel()
  const { isReady: assetsReady, progress } = useHeroAssetsPreloader(hero)
  const [bootReady, setBootReady] = useState(false)
  const [minDurationElapsed, setMinDurationElapsed] = useState(false)
  const minLoaderDuration = useMemo(resolveMinLoaderDuration, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setMinDurationElapsed(true), minLoaderDuration)
    return () => window.clearTimeout(timer)
  }, [minLoaderDuration])

  useEffect(() => {
    if (assetsReady && minDurationElapsed) {
      setBootReady(true)
    }
  }, [assetsReady, minDurationElapsed])
  const showLoader = !bootReady

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScreenLoader progress={progress} accentColor={accentColor} isVisible={showLoader} />
      {bootReady && (
        <AppShell>
          <Header
            navigation={navigation}
            themeMode={themeMode}
            onThemeChange={setThemeMode}
            accentOptions={accentOptions}
            accentColor={accentColor}
            onAccentChange={setAccentColor}
            locale={locale}
            locales={locales}
            onLocaleChange={setLocale}
            profileName={profile.name}
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
      )}
    </ThemeProvider>
  )
}

export default App

