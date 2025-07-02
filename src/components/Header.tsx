import { useEffect, useState } from 'react'
import type { PortfolioNavigationItem, PortfolioProfile } from '../types/portfolio'

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
    <header className={`app-header${isCompact ? ' app-header--compact' : ''}`}>
      <div className="app-header__inner">
        <div className="app-header__brand">
          <span className="app-header__name">{profile.name}</span>
          <span className="app-header__role">{profile.headline}</span>
        </div>
        <div className="app-header__controls">
          <nav className="app-nav" aria-label="Sezioni portfolio">
            {navigation.map((item) => (
              <a key={item.targetId} className="app-nav__link" href={`#${item.targetId}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="app-header__toggles">
            <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Cambia tema">
              <span aria-hidden>{themeMode === 'dark' ? '🌙' : '☀️'}</span>
            </button>
            <div className="accent-picker" role="group" aria-label="Accent color">
              {accentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`accent-picker__swatch${option === accentColor ? ' accent-picker__swatch--active' : ''}`}
                  style={{ backgroundColor: option }}
                  onClick={() => onAccentChange(option)}
                  aria-pressed={option === accentColor}
                  aria-label={`Accent color ${option}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
