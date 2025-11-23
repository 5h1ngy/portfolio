export interface PortfolioActionLink {
  label: string
  href: string
  external?: boolean
  type?: 'github' | 'website' | 'linkedin' | 'docs' | 'storybook'
}

export interface PortfolioMeta {
  title: string
  description: string
  keywords: string[]
}

export interface PortfolioProfileLink {
  label: string
  url: string
  type: 'github' | 'linkedin' | 'website'
}

export interface PortfolioProfile {
  name: string
  tagline: string
  links: PortfolioProfileLink[]
}

export interface HeroOrbitIcon {
  label: string
  icon: string
  size: number
  offset?: number
  speed?: number
  delay?: number
}

export interface HeroOrbitRing {
  radius: number
  speed: number
  icons: HeroOrbitIcon[]
}

export interface HeroOrbit {
  center: string
  rings: HeroOrbitRing[]
}

export interface PortfolioHero {
  eyebrow?: string
  title: string
  typingTitles?: string[]
  subtitle: string
  description: string
  primaryAction: PortfolioActionLink
  secondaryAction?: PortfolioActionLink
  orbit: HeroOrbit
}

export interface PortfolioAboutFocus {
  title: string
  description: string
}

export interface PortfolioAboutFact {
  label: string
  value: string
}

export interface PortfolioAbout {
  title: string
  caption: string
  summary: string[]
  focus: PortfolioAboutFocus[]
  quickFacts: PortfolioAboutFact[]
}

export interface PortfolioExperienceRole {
  company: string
  role: string
  period: string
  summary: string
  highlights: string[]
  tags: string[]
  link?: PortfolioActionLink
}

export interface PortfolioExperience {
  title: string
  caption: string
  roles: PortfolioExperienceRole[]
}

export interface PortfolioSkillCategory {
  title: string
  summary: string
  items: string[]
}

export interface PortfolioSkills {
  title: string
  caption: string
  categories: PortfolioSkillCategory[]
}

export interface PortfolioOpenSourceProject {
  name: string
  description: string
  period: string
  tags: string[]
  category?: string
  link?: PortfolioActionLink
  links?: PortfolioActionLink[]
}

export interface PortfolioOpenSource {
  title: string
  caption: string
  projects: PortfolioOpenSourceProject[]
}

export interface PortfolioData {
  meta: PortfolioMeta
  profile: PortfolioProfile
  hero: PortfolioHero
  about: PortfolioAbout
  experience: PortfolioExperience
  skills: PortfolioSkills
  openSource: PortfolioOpenSource
  openSourceProducts: PortfolioOpenSource
}
