import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { AboutSection } from '@components/AboutSection'
import { ExperienceSection } from '@components/ExperienceSection'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { HeroSection } from '@components/HeroSection'
import { OpenSourceSection } from '@components/OpenSourceSection'
import { SkillsSection } from '@components/SkillsSection'
import { portfolioData } from '@data/portfolio'
import { AppMain, AppShell } from '@/App.style'
import { GlobalStyle } from '@styles'
import { createTheme, type ThemeMode } from '@styles/theme'

const ACCENT_OPTIONS = ['#5cf3e9', '#ff7de8', '#6dff89', '#7ca9ff']
const DEFAULT_NAVIGATION = [
  { label: 'Start', targetId: 'hero' },
  { label: 'Profilo', targetId: 'about' },
  { label: 'Esperienza', targetId: 'experience' },
  { label: 'Competenze', targetId: 'skills' },
  { label: 'Open source', targetId: 'open-source' },
]
const DEFAULT_ACCENT = ACCENT_OPTIONS[0]

export const App = () => {
  const { meta, profile, hero, about, experience, skills, openSource } = portfolioData

  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [accentColor, setAccentColor] = useState<string>(DEFAULT_ACCENT)

  const theme = useMemo(() => createTheme(themeMode, accentColor), [themeMode, accentColor])

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
          navigation={DEFAULT_NAVIGATION}
          profile={profile}
          themeMode={themeMode}
          onToggleTheme={() => setThemeMode((mode) => (mode === 'dark' ? 'light' : 'dark'))}
          accentOptions={ACCENT_OPTIONS}
          accentColor={accentColor}
          onAccentChange={setAccentColor}
        />
        <AppMain>
          <HeroSection hero={hero} socialLinks={profile.links} />
          <AboutSection about={about} />
          <ExperienceSection experience={experience} />
          <SkillsSection skills={skills} />
          <OpenSourceSection openSource={openSource} />
        </AppMain>
        <Footer profile={profile} meta={meta} />
      </AppShell>
    </ThemeProvider>
  )
}

export default App
