import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ContributionsSection } from './components/ContributionsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { portfolioData } from './data/portfolio'
import { AppMain, AppShell } from './App.style'
import { GlobalStyle } from './styles'
import { createTheme, type ThemeMode } from './styles/theme'

const ACCENT_OPTIONS = ['#5cf3e9', '#ff7de8', '#6dff89', '#7ca9ff']

export const App = () => {
  const { meta, ui, profile, hero, about, experience, projects, openSource, contributions, skills, contact } =
    portfolioData

  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [accentColor, setAccentColor] = useState<string>(ui.accentColor ?? ACCENT_OPTIONS[0])

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
          navigation={ui.navigation}
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
          <ProjectsSection id="projects" accent="Progetti" projects={projects} />
          <ProjectsSection id="open-source" accent="Open source" projects={openSource} />
          <SkillsSection skills={skills} />
          <ContributionsSection contributions={contributions} />
          <ContactSection contact={contact} />
        </AppMain>
        <Footer profile={profile} meta={meta} />
      </AppShell>
    </ThemeProvider>
  )
}

export default App
