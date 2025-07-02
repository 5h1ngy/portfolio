export interface AppTheme {
  colors: {
    background: string
    surface: string
    surfaceMuted: string
    surfaceElevated: string
    textPrimary: string
    textSecondary: string
    textMuted: string
    accent: string
    accentSoft: string
    accentOutline: string
    border: string
    success: string
    warning: string
  }
  gradients: {
    hero: string
    section: string
    accent: string
  }
  layout: {
    maxWidth: string
    gutter: string
    radius: string
    radiusLg: string
  }
  shadows: {
    ambient: string
    accent: string
  }
  typography: {
    fonts: {
      heading: string
      body: string
      mono: string
    }
    sizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      display: string
      hero: string
    }
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

const hexToRgb = (hex: string) => {
  const normalized = hex.replace('#', '')

  if (![3, 6].includes(normalized.length)) {
    return null
  }

  const value = normalized.length === 3 ? normalized.split('').map((char) => char.repeat(2)).join('') : normalized

  const bigint = Number.parseInt(value, 16)

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  }
}

const withAlpha = (color: string, alpha: number) => {
  if (color.startsWith('#')) {
    const rgb = hexToRgb(color)
    if (!rgb) {
      return color
    }
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
  }

  if (color.startsWith('rgb')) {
    return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`)
  }

  return color
}

export const baseTheme: AppTheme = {
  colors: {
    background: '#040713',
    surface: '#0a0f24',
    surfaceMuted: '#111834',
    surfaceElevated: '#161f3f',
    textPrimary: '#E6F1FF',
    textSecondary: '#A0ACC5',
    textMuted: '#7482A6',
    accent: '#5cf3e9',
    accentSoft: 'rgba(92, 243, 233, 0.16)',
    accentOutline: 'rgba(92, 243, 233, 0.4)',
    border: 'rgba(135, 146, 177, 0.22)',
    success: '#4ade80',
    warning: '#facc15',
  },
  gradients: {
    hero: 'radial-gradient(circle at 20% 20%, rgba(140, 109, 255, 0.18) 0%, transparent 45%), radial-gradient(circle at 80% 0%, rgba(92, 243, 233, 0.22) 0%, transparent 46%)',
    section: 'radial-gradient(circle at 0% 0%, rgba(92, 243, 233, 0.14) 0%, transparent 55%), radial-gradient(circle at 100% 100%, rgba(141, 124, 255, 0.2) 0%, transparent 55%)',
    accent: 'linear-gradient(135deg, #5cf3e9 0%, #8d7cff 52%, #5cf3e9 100%)',
  },
  layout: {
    maxWidth: '1200px',
    gutter: '1.75rem',
    radius: '18px',
    radiusLg: '28px',
  },
  shadows: {
    ambient: '0 18px 60px rgba(4, 9, 25, 0.6)',
    accent: '0 0 48px rgba(92, 243, 233, 0.35)',
  },
  typography: {
    fonts: {
      heading: '"Space Grotesk", sans-serif',
      body: '"Inter", sans-serif',
      mono: '"Fira Code", monospace',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.65rem',
      display: 'clamp(2.75rem, 6vw, 5rem)',
      hero: 'clamp(1.1rem, 2vw, 1.45rem)',
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

interface ThemeOverrides {
  accentColor?: string
  background?: {
    background?: string
    surface?: string
    surfaceMuted?: string
    surfaceElevated?: string
  }
  gradients?: Partial<AppTheme['gradients']>
}

export const mergeThemes = (theme: AppTheme, overrides?: ThemeOverrides): AppTheme => {
  if (!overrides) {
    return theme
  }

  const accent = overrides.accentColor ?? theme.colors.accent
  const background = overrides.background ?? {}

  return {
    ...theme,
    colors: {
      ...theme.colors,
      background: background.background ?? theme.colors.background,
      surface: background.surface ?? theme.colors.surface,
      surfaceMuted: background.surfaceMuted ?? theme.colors.surfaceMuted,
      surfaceElevated: background.surfaceElevated ?? theme.colors.surfaceElevated,
      accent,
      accentSoft: withAlpha(accent, 0.16),
      accentOutline: withAlpha(accent, 0.35),
    },
    gradients: {
      ...theme.gradients,
      ...overrides.gradients,
      accent: overrides.gradients?.accent ?? theme.gradients.accent,
    },
  }
}
