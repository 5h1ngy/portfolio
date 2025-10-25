import { ThemeProvider } from 'styled-components'

import { AppMain, AppShell } from '@/App.style'
import { useAppViewModel } from '@/App.hooks'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { OpenSourceProductsSection, OpenSourceSection } from '@/components/sections/OpenSourceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { GlobalStyle } from '@styles'

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
    </ThemeProvider>
  )
}

export default App

