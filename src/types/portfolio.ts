export interface PortfolioNavigationItem {
  label: string
  targetId: string
}

export interface PortfolioActionLink {
  label: string
  href: string
  external?: boolean
  type?: 'github' | 'website' | 'docs' | 'video' | 'storybook' | 'email' | 'resume' | 'linkedin'
}

export interface PortfolioMeta {
  title: string
  description: string
  keywords: string[]
  author: string
}

export interface PortfolioProfileLink {
  label: string
  url: string
  type: 'github' | 'website' | 'email' | 'linkedin' | 'xing' | 'behance' | 'dribbble' | 'medium' | 'resume' | 'phone'
}

export interface PortfolioProfile {
  name: string
  headline: string
  location: string
  availability: string
  summary: string
  focusAreas: string[]
  pronouns?: string
  avatar?: string
  resumeUrl?: string
  links: PortfolioProfileLink[]
}

export interface PortfolioHeroStat {
  label: string
  value: string
  description?: string
}

export interface PortfolioHero {
  badge: string
  preTitle: string
  title: string
  subtitle: string
  description: string
  primaryAction: PortfolioActionLink
  secondaryAction: PortfolioActionLink
  quickFacts: string[]
  floatingLabels: string[]
  stats: PortfolioHeroStat[]
}

export interface PortfolioHighlight {
  title: string
  description: string
  icon: string
}

export interface PortfolioStat {
  label: string
  value: string
}

export interface PortfolioAbout {
  title: string
  caption: string
  introduction: string[]
  highlights: PortfolioHighlight[]
  stats: PortfolioStat[]
}

export interface PortfolioExperienceItem {
  company: string
  role: string
  location: string
  start: string
  end: string
  summary: string
  achievements: string[]
  tech: string[]
  links: PortfolioActionLink[]
}

export interface PortfolioExperience {
  title: string
  caption: string
  timeline: PortfolioExperienceItem[]
}

export interface PortfolioProjectLink {
  label: string
  url: string
  type: 'github' | 'website' | 'docs' | 'video' | 'storybook'
}

export interface PortfolioProject {
  name: string
  headline: string
  description: string
  period: string
  tech: string[]
  highlight: string
  links: PortfolioProjectLink[]
  cover?: string
  badge?: string
}

export interface PortfolioProjects {
  title: string
  caption: string
  featured: PortfolioProject[]
  others: PortfolioProject[]
}

export interface PortfolioContribution {
  name: string
  period: string
  description: string
  role: string
  skills: string[]
  links: PortfolioProjectLink[]
}

export interface PortfolioContributions {
  title: string
  caption: string
  items: PortfolioContribution[]
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
  toolbelt: string[]
  workflows: string[]
}

export interface PortfolioContactChannel {
  type: 'email' | 'phone' | 'website' | 'github' | 'linkedin' | 'portfolio' | 'whatsapp'
  label: string
  value: string
  href: string
}

export interface PortfolioContact {
  title: string
  caption: string
  message: string
  availability: string
  channels: PortfolioContactChannel[]
}

export interface PortfolioUIBackground {
  background?: string
  surface?: string
  surfaceMuted?: string
  surfaceElevated?: string
}

export interface PortfolioUIDecoration {
  id: string
  type: 'orb' | 'grid' | 'outline'
  size: number
  top: string
  left: string
  blur?: number
  opacity?: number
}

export interface PortfolioUIGradients {
  hero?: string
  section?: string
  accent?: string
}

export interface PortfolioUI {
  accentColor?: string
  background?: PortfolioUIBackground
  gradients?: PortfolioUIGradients
  navigation: PortfolioNavigationItem[]
  decorations: PortfolioUIDecoration[]
}

export interface PortfolioData {
  meta: PortfolioMeta
  ui: PortfolioUI
  profile: PortfolioProfile
  hero: PortfolioHero
  about: PortfolioAbout
  experience: PortfolioExperience
  projects: PortfolioProjects
  openSource: PortfolioProjects
  contributions: PortfolioContributions
  skills: PortfolioSkills
  contact: PortfolioContact
}
