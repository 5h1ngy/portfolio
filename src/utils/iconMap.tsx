import { type ComponentType } from 'react'
import {
  LuBoxes,
  LuCpu,
  LuExternalLink,
  LuFileDown,
  LuGauge,
  LuGithub,
  LuGlobe,
  LuLightbulb,
  LuLinkedin,
  LuMail,
  LuMessageCircle,
  LuPhone,
  LuRocket,
} from 'react-icons/lu'

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  github: LuGithub,
  website: LuGlobe,
  portfolio: LuGlobe,
  linkedin: LuLinkedin,
  email: LuMail,
  resume: LuFileDown,
  phone: LuPhone,
  whatsapp: LuMessageCircle,
}

const highlightIconMap: Record<string, ComponentType<{ size?: number }>> = {
  'ai-systems': LuCpu,
  'design-systems': LuBoxes,
  automation: LuGauge,
  experimentation: LuRocket,
}

export const getIconComponent = (type: string) => iconMap[type] ?? LuExternalLink

export const getHighlightIcon = (type: string) => highlightIconMap[type] ?? LuLightbulb
