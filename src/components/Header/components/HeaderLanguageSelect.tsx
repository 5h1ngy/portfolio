import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSelect, LanguageSelectLabel, LanguageSelectWrapper } from '@/components/Header/style'
import type { PortfolioLocale } from '@data/portfolio'

interface HeaderLanguageSelectProps {
  locale: PortfolioLocale
  locales: PortfolioLocale[]
  onChange: (locale: PortfolioLocale) => void
}

export const HeaderLanguageSelect = ({ locale, locales, onChange }: HeaderLanguageSelectProps) => {
  const { t } = useTranslation()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as PortfolioLocale)
  }

  return (
    <LanguageSelectWrapper>
      <LanguageSelectLabel>{t('header.language.label')}</LanguageSelectLabel>
      <LanguageSelect value={locale} onChange={handleChange} aria-label={t('header.language.label')}>
        {locales.map((code) => (
          <option key={code} value={code}>
            {t(`header.language.options.${code}`)}
          </option>
        ))}
      </LanguageSelect>
    </LanguageSelectWrapper>
  )
}
