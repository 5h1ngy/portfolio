import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { HeaderLanguageSelect } from './components/LanguageSelect'
import { HeaderMobileToggle } from './components/MobileToggle'
import { HeaderNavigation } from './components/Navigation'
import { HeaderThemeMenu } from './components/ThemeMenu'
import { useActiveSection } from './Header.hooks'
import { BrandLink, BrandLogo, Controls, HeaderInner, HeaderRoot, MobileBackdrop } from './Header.style'
import type { HeaderProps } from './Header.types'

const ACCENT_LABELS: Record<string, string> = {
  '#00c8ff': 'Sky pulse',
  '#ff4bd5': 'Bloom pulse',
  '#24f49b': 'Mint charge',
  '#ffb422': 'Amber spark',
}

export const Header = ({
  navigation,
  themeMode,
  onThemeChange,
  accentOptions,
  accentColor,
  onAccentChange,
  locale,
  locales,
  onLocaleChange,
  profileName,
}: HeaderProps) => {
  const { t } = useTranslation()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const themeMenuRef = useRef<HTMLDivElement>(null)

  const sectionIds = useMemo(() => navigation.map((item) => item.targetId), [navigation])
  const activeSectionId = useActiveSection(sectionIds)

  useEffect(() => {
    const updateViewport = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 834)
      }
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
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

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!themeMenuRef.current || themeMenuRef.current.contains(event.target as Node)) {
        return
      }

      setIsThemeMenuOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsThemeMenuOpen(false)
        setIsNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickAway)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    setIsNavOpen(false)
    setIsThemeMenuOpen(false)
  }, [locale])

  useEffect(() => {
    if (isNavOpen) {
      setIsThemeMenuOpen(false)
    }
  }, [isNavOpen])

  const accentLabel = useCallback(
    (value: string, index: number) =>
      ACCENT_LABELS[value] ?? t('header.theme.fallbackAccent', { index: index + 1 }),
    [t],
  )

  const accentSummary = useMemo(() => {
    const index = accentOptions.indexOf(accentColor)
    const safeIndex = index >= 0 ? index : 0
    return accentLabel(accentColor, safeIndex)
  }, [accentColor, accentOptions, accentLabel])

  const nextMode = themeMode === 'dark' ? 'light' : 'dark'
  const menuButtonAria = t('header.theme.buttonAria', {
    mode: t(`header.theme.mode.${themeMode}`),
    accent: accentSummary,
  })
  const themeToggleLabel = t('header.theme.switchAria', {
    target: t(`header.theme.target.${nextMode}`),
  })

  const handleThemeSelect = useCallback(
    (mode: typeof themeMode) => {
      if (mode !== themeMode) {
        onThemeChange(mode)
      }
      setIsThemeMenuOpen(false)
    },
    [onThemeChange, themeMode],
  )

  const handleNavItemSelect = useCallback(() => {
    setIsNavOpen(false)
  }, [])

  const handleMobileToggle = useCallback(() => {
    setIsNavOpen((open) => !open)
    setIsThemeMenuOpen(false)
  }, [])

  const handleThemeMenuToggle = useCallback(() => {
    setIsThemeMenuOpen((open) => !open)
  }, [])

  return (
    <HeaderRoot>
      <HeaderInner>
        {!isMobile && (
          <BrandLink href="#hero" aria-label={t('header.brand.home')}>
            <BrandLogo src="/logo.png" alt={`${profileName} logo`} width={30} height={30} />
          </BrandLink>
        )}

        <HeaderNavigation
          navigation={navigation}
          isMobile={isMobile}
          isOpen={isNavOpen}
          onItemSelect={handleNavItemSelect}
          ariaLabel={t('header.menu.navigation')}
          activeId={activeSectionId}
        />

        <Controls>
          <HeaderLanguageSelect locale={locale} locales={locales} onChange={onLocaleChange} />
          <HeaderThemeMenu
            menuRef={themeMenuRef}
            isOpen={isThemeMenuOpen}
            onToggle={handleThemeMenuToggle}
            themeMode={themeMode}
            onThemeSelect={handleThemeSelect}
            accentOptions={accentOptions}
            accentColor={accentColor}
            onAccentSelect={onAccentChange}
            accentLabel={accentLabel}
            labels={{
              themeSection: t('header.theme.section'),
              accentSection: t('header.theme.accent'),
              accentGroup: t('header.theme.accentGroup'),
              toggleAria: themeToggleLabel,
              menuButtonAria,
            }}
          />
          <HeaderMobileToggle
            isOpen={isNavOpen}
            onToggle={handleMobileToggle}
            hiddenLabel={t(isNavOpen ? 'header.menu.close' : 'header.menu.open')}
            closedLabel={t('header.menu.openLabel')}
            openLabel={t('header.menu.closeLabel')}
          />
        </Controls>
      </HeaderInner>

      <MobileBackdrop
        type="button"
        $visible={isMobile && isNavOpen}
        aria-hidden={!(isMobile && isNavOpen)}
        onClick={handleNavItemSelect}
      />
    </HeaderRoot>
  )
}
