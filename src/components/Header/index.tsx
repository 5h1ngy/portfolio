import { useEffect, useState } from 'react'
import type { PortfolioNavigationItem, PortfolioProfile } from '../../types/portfolio'
import {
  AccentPicker,
  AccentSwatch,
  Brand,
  BrandName,
  BrandRole,
  Controls,
  HeaderInner,
  HeaderRoot,
  Nav,
  NavLink,
  ThemeToggle,
  Toggles,
} from './style'

type ThemeMode = 'dark' | 'light'

interface HeaderProps {
  navigation: PortfolioNavigationItem[]
  profile: PortfolioProfile
  themeMode: ThemeMode
  onToggleTheme: () => void
  accentOptions: string[]
  accentColor: string
  onAccentChange: (color: string) => void
}

export const Header = ({
  navigation,
  profile,
  themeMode,
  onToggleTheme,
  accentOptions,
  accentColor,
  onAccentChange,
}: HeaderProps) => {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderRoot $compact={isCompact}>
      <HeaderInner $compact={isCompact}>
        <Brand>
          <BrandName>{profile.name}</BrandName>
          <BrandRole>{profile.headline}</BrandRole>
        </Brand>
        <Controls>
          <Nav aria-label="Sezioni portfolio">
            {navigation.map((item) => (
              <NavLink key={item.targetId} href={`#${item.targetId}`}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <Toggles>
            <ThemeToggle type="button" onClick={onToggleTheme} aria-label="Cambia tema">
              <span aria-hidden>{themeMode === 'dark' ? '🌙' : '☀️'}</span>
            </ThemeToggle>
            <AccentPicker role="group" aria-label="Accent color">
              {accentOptions.map((option) => (
                <AccentSwatch
                  key={option}
                  type="button"
                  $color={option}
                  $active={option === accentColor}
                  onClick={() => onAccentChange(option)}
                  aria-pressed={option === accentColor}
                  aria-label={`Accent color ${option}`}
                />
              ))}
            </AccentPicker>
          </Toggles>
        </Controls>
      </HeaderInner>
    </HeaderRoot>
  )
}
