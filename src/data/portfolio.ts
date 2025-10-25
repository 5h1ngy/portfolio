import portfolioEn from '@data/portfolio.en.json'
import portfolioIt from '@data/portfolio.it.json'
import type { PortfolioData } from '@data/portfolio.types'

export type PortfolioLocale = 'it' | 'en'

const PORTFOLIO_DATA: Record<PortfolioLocale, PortfolioData> = {
  it: portfolioIt as PortfolioData,
  en: portfolioEn as PortfolioData,
}

export const getPortfolioData = (locale: PortfolioLocale) => PORTFOLIO_DATA[locale]

export const getSupportedLocales = () => Object.keys(PORTFOLIO_DATA) as PortfolioLocale[]

export type { PortfolioData }
