import { useEffect, useMemo, useState } from 'react'

import type { HeaderProps } from '@components/Header/types'
import { useHeaderCompact } from '@components/Header/hooks'
import {
  AccentPicker,
  AccentSwatch,
  Brand,
  BrandName,
  BrandRole,
  Controls,
  HeaderInner,
  HeaderRoot,
  HiddenLabel,
  MobileBackdrop,
  MobileToggle,
  Nav,
  NavLink,
  ThemeToggle,
  Toggles,
} from '@components/Header/style'

const ACCENT_LABELS: Record<string, string> = {
  '#5cf3e9': 'Aqua glow',
  '#ff7de8': 'Magenta pulse',
  '#6dff89': 'Lime spark',
  '#7ca9ff': 'Azure breeze',
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
  const isCompact = useHeaderCompact()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 720)
      }
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsNavOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = isNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isNavOpen, isMobile])

  const themeLabel = useMemo(
    () => (themeMode === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro'),
    [themeMode],
  )
  const themeIcon = themeMode === 'dark' ? '🌙' : '☀️'
  const menuLabel = isNavOpen ? 'Chiudi navigazione' : 'Apri navigazione'
  const accentLabel = (value: string, index: number) => ACCENT_LABELS[value] ?? `Accent color ${index + 1}`

  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsNavOpen(false)
    }
  }

  return (
    <HeaderRoot $compact={isCompact}>
      <HeaderInner $compact={isCompact}>
        <Brand>
          <BrandName>{profile.name}</BrandName>
          <BrandRole>{profile.headline}</BrandRole>
        </Brand>
        <Controls>
          <Toggles>
            <ThemeToggle
              type="button"
              onClick={() => {
                onToggleTheme()
                if (isMobile) {
                  setIsNavOpen(false)
                }
              }}
              aria-label={themeLabel}
              title={themeLabel}
            >
              <span aria-hidden>{themeIcon}</span>
              <HiddenLabel>{themeLabel}</HiddenLabel>
            </ThemeToggle>
            <AccentPicker role="group" aria-label="Accent color">
              {accentOptions.map((option, index) => (
                <AccentSwatch
                  key={option}
                  type="button"
                  $color={option}
                  $active={option === accentColor}
                  onClick={() => {
                    onAccentChange(option)
                    if (isMobile) {
                      setIsNavOpen(false)
                    }
                  }}
                  aria-pressed={option === accentColor}
                  aria-label={accentLabel(option, index)}
                  title={accentLabel(option, index)}
                >
                  <HiddenLabel>{accentLabel(option, index)}</HiddenLabel>
                </AccentSwatch>
              ))}
            </AccentPicker>
          </Toggles>
          <MobileToggle
            type="button"
            onClick={() => setIsNavOpen((open) => !open)}
            aria-expanded={isNavOpen}
            aria-controls="primary-navigation"
            $isActive={isNavOpen}
          >
            <HiddenLabel>{menuLabel}</HiddenLabel>
            <span aria-hidden>{isNavOpen ? 'Close' : 'Menu'}</span>
          </MobileToggle>
          <Nav id="primary-navigation" aria-label="Sezioni portfolio" $isOpen={isMobile ? isNavOpen : true}>
            {navigation.map((item) => (
              <NavLink key={item.targetId} href={`#${item.targetId}`} onClick={handleNavLinkClick}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
        </Controls>
      </HeaderInner>
      <MobileBackdrop
        type="button"
        $visible={isMobile && isNavOpen}
        aria-hidden={!(isMobile && isNavOpen)}
        onClick={() => setIsNavOpen(false)}
      />
    </HeaderRoot>
  )
}
