
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
    accentOutlineMuted: string
    border: string
  }
  gradients: {
    background: string
    overlay: string
    fog: string
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

type Palette = {
  background: string
  surface: string
  surfaceMuted: string
  surfaceElevated: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  border: string
  gradient: string
  overlay: string
  fog: string
  ambientShadow: string
}

export const SECONDARY_COLORS = ['#58cfff', '#ff8ae2', '#7ff4c3', '#ffd66b']

const darkPalette: Palette = {
  background: '#030616',
  surface: 'rgba(12, 20, 38, 0.9)',
  surfaceMuted: 'rgba(8, 14, 28, 0.82)',
  surfaceElevated: 'rgba(16, 28, 52, 0.94)',
  textPrimary: '#edf4ff',
  textSecondary: '#aab6d9',
  textMuted: '#7e8bae',
  border: 'rgba(96, 241, 255, 0.18)',
  gradient:
    'radial-gradient(circle at 16% 16%, rgba(98, 255, 246, 0.18) 0%, transparent 44%), radial-gradient(circle at 78% 20%, rgba(255, 125, 248, 0.12) 0%, transparent 52%), radial-gradient(circle at 40% 82%, rgba(124, 218, 255, 0.18) 0%, transparent 60%), #020413',
  overlay:
    'radial-gradient(circle at 20% 30%, rgba(96, 255, 245, 0.2) 0%, transparent 48%), radial-gradient(circle at 82% 62%, rgba(255, 148, 255, 0.16) 0%, transparent 58%)',
  fog:
    'radial-gradient(circle at 18% 22%, rgba(88, 207, 255, 0.18) 0%, transparent 48%), radial-gradient(circle at 72% 18%, rgba(255, 138, 226, 0.16) 0%, transparent 52%), radial-gradient(circle at 32% 78%, rgba(127, 244, 195, 0.18) 0%, transparent 60%)',
  ambientShadow: '0 26px 48px rgba(4, 10, 28, 0.55)',
}

const lightPalette: Palette = {
  background: '#f7f9ff',
  surface: 'rgba(255, 255, 255, 0.95)',
  surfaceMuted: 'rgba(248, 249, 255, 0.88)',
  surfaceElevated: 'rgba(255, 255, 255, 0.98)',
  textPrimary: '#0f1c3a',
  textSecondary: '#42506f',
  textMuted: '#8994b1',
  border: 'rgba(20, 32, 60, 0.12)',
  gradient:
    'radial-gradient(circle at 18% 15%, rgba(168, 255, 250, 0.32) 0%, transparent 42%), radial-gradient(circle at 78% 20%, rgba(255, 168, 244, 0.26) 0%, transparent 50%), radial-gradient(circle at 32% 82%, rgba(184, 255, 185, 0.28) 0%, transparent 60%), #f7f9ff',
  overlay:
    'radial-gradient(circle at 22% 30%, rgba(255, 255, 255, 0.7) 0%, transparent 58%), radial-gradient(circle at 76% 66%, rgba(255, 255, 255, 0.38) 0%, transparent 54%)',
  fog:
    'radial-gradient(circle at 24% 22%, rgba(120, 230, 255, 0.22) 0%, transparent 56%), radial-gradient(circle at 78% 18%, rgba(255, 164, 244, 0.18) 0%, transparent 54%), radial-gradient(circle at 36% 76%, rgba(176, 255, 207, 0.2) 0%, transparent 60%)',
  ambientShadow: '0 18px 32px rgba(24, 32, 60, 0.16)',
}

const palettes: Record<ThemeMode, Palette> = {
  dark: darkPalette,
  light: lightPalette,
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
  const base = palettes[mode]
  const accentSoftOpacity = mode === 'dark' ? 0.28 : 0.2
  const accentOutlineOpacity = mode === 'dark' ? 0.5 : 0.28
  const accentShadowOpacity = mode === 'dark' ? 0.48 : 0.24

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
      accentSoft: withAlpha(accent, accentSoftOpacity),
      accentOutline: withAlpha(accent, accentOutlineOpacity),
      accentOutlineMuted: withAlpha(accent, accentOutlineOpacity * 0.35),
    },
    gradients: {
      background: base.gradient,
      overlay: base.overlay,
      fog: base.fog,
    },
    layout: {
      maxWidth: '880px',
      gutter: '2.5rem',
    },
    shadows: {
      ambient: base.ambientShadow,
      accent: `0 24px 42px ${withAlpha(accent, accentShadowOpacity)}`,
    },
  }
}
