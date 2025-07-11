import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  LanguageSelectMenu,
  LanguageSelectOption,
  LanguageSelectToggle,
  LanguageSelectWrapper,
} from '@/components/Header/components/LanguageSelect.style'
import type { PortfolioLocale } from '@data/portfolio'

interface HeaderLanguageSelectProps {
  locale: PortfolioLocale
  locales: PortfolioLocale[]
  onChange: (locale: PortfolioLocale) => void
}

export const HeaderLanguageSelect = ({ locale, locales, onChange }: HeaderLanguageSelectProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const currentLabel = useMemo(() => t(`header.language.options.${locale}`), [locale, t])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleToggle = useCallback(() => {
    setIsOpen((open) => !open)
  }, [])

  const handleSelect = useCallback(
    (code: PortfolioLocale) => {
      onChange(code)
      setIsOpen(false)
    },
    [onChange],
  )

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!wrapperRef.current || wrapperRef.current.contains(event.target as Node)) {
        return
      }
      setIsOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
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
    closeMenu()
  }, [locale, closeMenu])

  return (
    <LanguageSelectWrapper ref={wrapperRef}>
      <LanguageSelectToggle
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        $open={isOpen}
      >
        {currentLabel}
      </LanguageSelectToggle>

      <LanguageSelectMenu
        id={menuId}
        role="listbox"
        aria-activedescendant={`${menuId}-${locale}`}
        $open={isOpen}
        hidden={!isOpen}
      >
        {locales.map((code) => (
          <LanguageSelectOption
            key={code}
            id={`${menuId}-${code}`}
            type="button"
            role="option"
            aria-selected={locale === code}
            $active={locale === code}
            onClick={() => handleSelect(code)}
          >
            {t(`header.language.options.${code}`)}
          </LanguageSelectOption>
        ))}
      </LanguageSelectMenu>
    </LanguageSelectWrapper>
  )
}
