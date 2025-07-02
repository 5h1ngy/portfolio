import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'

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
import { GlobalStyle } from './styles/globalStyles'

type ThemeMode = 'dark' | 'light'

const THEME_PRESETS: Record<
  ThemeMode,
  {
    background: string
    surface: string
    surfaceMuted: string
    surfaceElevated: string
    textPrimary: string
    textSecondary: string
    textMuted: string
    border: string
    gradient: string
    overlay: string
  }
> = {
  dark: {
    background: '#040713',
    surface: 'rgba(10, 18, 34, 0.78)',
    surfaceMuted: 'rgba(12, 20, 40, 0.72)',
    surfaceElevated: 'rgba(16, 26, 52, 0.82)',
    textPrimary: '#E6F1FF',
    textSecondary: '#A0ACC5',
    textMuted: '#7482A6',
    border: 'rgba(92, 243, 233, 0.16)',
    gradient:
      'radial-gradient(circle at 15% 15%, rgba(124, 144, 255, 0.18) 0%, transparent 45%), radial-gradient(circle at 80% 10%, rgba(236, 72, 153, 0.12) 0%, transparent 55%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.28) 0%, transparent 60%), #030711',
    overlay:
      'radial-gradient(circle at 20% 30%, rgba(92, 243, 233, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.14) 0%, transparent 55%)',
  },
  light: {
    background: '#f7f7fb',
    surface: 'rgba(255, 255, 255, 0.88)',
    surfaceMuted: 'rgba(245, 246, 255, 0.82)',
    surfaceElevated: 'rgba(255, 255, 255, 0.94)',
    textPrimary: '#1c2440',
    textSecondary: '#4f5d7d',
    textMuted: '#7a88a8',
    border: 'rgba(28, 36, 64, 0.12)',
    gradient:
      'radial-gradient(circle at 15% 20%, rgba(255, 176, 218, 0.4) 0%, transparent 45%), radial-gradient(circle at 75% 30%, rgba(167, 210, 255, 0.45) 0%, transparent 52%), radial-gradient(circle at 30% 80%, rgba(196, 255, 214, 0.5) 0%, transparent 60%), #f9f9ff',
    overlay:
      'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.45) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(255, 255, 255, 0.35) 0%, transparent 50%)',
  },
}

const ACCENT_OPTIONS = ['#5cf3e9', '#ff7de8', '#6dff89', '#7ca9ff']

export const App = () => {
  const { meta, ui, profile, hero, about, experience, projects, openSource, contributions, skills, contact } =
    portfolioData

  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [accentColor, setAccentColor] = useState<string>(ui.accentColor ?? ACCENT_OPTIONS[0])

  const palette = useMemo(() => THEME_PRESETS[themeMode], [themeMode])

  const themeStyles = useMemo(
    () =>
      ({
        '--app-background': palette.background,
        '--app-surface': palette.surface,
        '--app-surface-muted': palette.surfaceMuted,
        '--app-surface-elevated': palette.surfaceElevated,
        '--app-text-primary': palette.textPrimary,
        '--app-text-secondary': palette.textSecondary,
        '--app-text-muted': palette.textMuted,
        '--app-border': palette.border,
        '--app-accent': accentColor,
        '--app-gradient-background': palette.gradient,
        '--app-gradient-overlay': palette.overlay,
        '--app-overlay-blend': themeMode === 'dark' ? 'screen' : 'multiply',
      }) as CSSProperties,
    [
      accentColor,
      palette.background,
      palette.border,
      palette.gradient,
      palette.overlay,
      palette.surface,
      palette.surfaceElevated,
      palette.surfaceMuted,
      palette.textMuted,
      palette.textPrimary,
      palette.textSecondary,
      themeMode,
    ],
  )

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
    <>
      <GlobalStyle />
      <div className="app-shell" style={themeStyles}>
        <Header
        navigation={ui.navigation}
        profile={profile}
        themeMode={themeMode}
        onToggleTheme={() => setThemeMode((mode) => (mode === 'dark' ? 'light' : 'dark'))}
        accentOptions={ACCENT_OPTIONS}
        accentColor={accentColor}
        onAccentChange={setAccentColor}
      />
      <main className="app-main">
        <HeroSection hero={hero} socialLinks={profile.links} />
        <AboutSection about={about} />
        <ExperienceSection experience={experience} />
        <ProjectsSection id="projects" accent="Progetti" projects={projects} />
        <ProjectsSection id="open-source" accent="Open source" projects={openSource} />
        <SkillsSection skills={skills} />
        <ContributionsSection contributions={contributions} />
        <ContactSection contact={contact} />
      </main>
        <Footer profile={profile} meta={meta} />
      </div>
    </>
  )
}

export default App
