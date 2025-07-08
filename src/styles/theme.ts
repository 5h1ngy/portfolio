
export type ThemeMode = 'dark' | 'light'

export interface AppTheme {
  mode: ThemeMode
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
  }
  gradients: {
    background: string
    overlay: string
  }
  layout: {
    maxWidth: string
    gutter: string
  }
  shadows: {
    ambient: string
    accent: string
  }
}

const darkPalette = {
  background: '#040713',
  surface: 'rgba(10, 18, 34, 0.78)',
  surfaceMuted: 'rgba(12, 20, 40, 0.72)',
  surfaceElevated: 'rgba(16, 26, 52, 0.82)',
  textPrimary: '#E6F1FF',
  textSecondary: '#A0ACC5',
  textMuted: '#7482A6',
  border: 'rgba(92, 243, 233, 0.16)',
  gradient:
    'radial-gradient(circle at 15% 15%, rgba(124, 144, 255, 0.18) 0%, transparent 45%), radial-gradient(circle at 80% 10%, rgba(236, 72, 153, 0.12) 0%, transparent 55%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.28) 0%, transparent 60%), #030711',
  overlay:
    'radial-gradient(circle at 20% 30%, rgba(92, 243, 233, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.14) 0%, transparent 55%)',
}

const lightPalette = {
  background: '#f7f7fb',
  surface: 'rgba(255, 255, 255, 0.88)',
  surfaceMuted: 'rgba(245, 246, 255, 0.82)',
  surfaceElevated: 'rgba(255, 255, 255, 0.94)',
  textPrimary: '#1c2440',
  textSecondary: '#4f5d7d',
  textMuted: '#7a88a8',
  border: 'rgba(28, 36, 64, 0.12)',
  gradient:
    'radial-gradient(circle at 15% 20%, rgba(255, 176, 218, 0.4) 0%, transparent 45%), radial-gradient(circle at 75% 30%, rgba(167, 210, 255, 0.35) 0%, transparent 52%), radial-gradient(circle at 30% 80%, rgba(196, 255, 214, 0.4) 0%, transparent 60%), #f9f9ff',
  overlay:
    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.55) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(255, 255, 255, 0.35) 0%, transparent 50%)',
}

const withAlpha = (hex: string, alpha: number) => {
  const normalized = hex.replace('#', '')
  const value = normalized.length === 3 ? normalized.split('').map((c) => c + c).join('') : normalized
  const bigint = Number.parseInt(value, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const createTheme = (mode: ThemeMode, accent: string): AppTheme => {
  const base = mode === 'dark' ? darkPalette : lightPalette

  return {
    mode,
    colors: {
      background: base.background,
      surface: base.surface,
      surfaceMuted: base.surfaceMuted,
      surfaceElevated: base.surfaceElevated,
      textPrimary: base.textPrimary,
      textSecondary: base.textSecondary,
      textMuted: base.textMuted,
    border: base.border,
    accent,
    accentSoft: withAlpha(accent, 0.22),
    accentOutline: withAlpha(accent, 0.45),
  },
    gradients: {
      background: base.gradient,
      overlay: base.overlay,
    },
    layout: {
      maxWidth: '60vw',
      gutter: '2.5rem',
    },
    shadows: {
      ambient: '0 18px 40px rgba(4, 9, 25, 0.38)',
      accent: `0 22px 40px ${accent}55`,
    },
  }
}