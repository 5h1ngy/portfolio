import styled, { css } from 'styled-components'

export type SurfaceTone = 'surface' | 'muted' | 'accent' | 'ghost'

export const ButtonRoot = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease,
    transform 0.18s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    pointer-events: none;
  }
`

const toneStyles = (tone: SurfaceTone = 'surface') => {
  switch (tone) {
    case 'muted':
      return css`
        background: ${({ theme }) => theme.colors.surfaceMuted};
        color: ${({ theme }) => theme.colors.textSecondary};
        border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
        box-shadow: ${({ theme }) => theme.shadows.ambient};
      `
    case 'accent':
      return css`
        background: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.accent};
        box-shadow: ${({ theme }) => theme.shadows.accent};
      `
    case 'ghost':
      return css`
        background: transparent;
        color: ${({ theme }) => theme.colors.textSecondary};
        border: 1px solid transparent;
      `
    case 'surface':
    default:
      return css`
        background: ${({ theme }) => theme.colors.surface};
        color: ${({ theme }) => theme.colors.textSecondary};
        border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
        box-shadow: ${({ theme }) => theme.shadows.ambient};
      `
  }
}

export interface SurfaceButtonProps {
  $tone?: SurfaceTone
  $active?: boolean
  $padding?: string
  $radius?: string
  $weight?: number
  $uppercase?: boolean
}

export const SurfaceButton = styled(ButtonRoot)<SurfaceButtonProps>`
  ${() => toneStyles()};
  ${({ $tone }) => toneStyles($tone)};
  padding: ${({ $padding }) => $padding ?? '0.5rem 1rem'};
  border-radius: ${({ $radius }) => $radius ?? '14px'};
  font-size: 0.85rem;
  font-weight: ${({ $weight }) => $weight ?? 600};
  gap: 0.5rem;
  text-transform: ${({ $uppercase }) => ($uppercase ? 'uppercase' : 'none')};
  letter-spacing: ${({ $uppercase }) => ($uppercase ? '0.08em' : 'normal')};

  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.accent};
      background: ${theme.colors.accentSoft};
      color: ${theme.colors.textPrimary};
      box-shadow: ${theme.shadows.accent};
    `}

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentOutline};
    outline-offset: 2px;
  }
`

const ICON_SIZES: Record<'sm' | 'md' | 'lg', string> = {
  sm: '32px',
  md: '40px',
  lg: '48px',
}

export interface IconButtonProps extends SurfaceButtonProps {
  $size?: 'sm' | 'md' | 'lg'
  $shape?: 'circle' | 'rounded'
}

export const IconButton = styled(SurfaceButton)<IconButtonProps>`
  ${({ $size }) => css`
    width: ${ICON_SIZES[$size ?? 'md']};
    height: ${ICON_SIZES[$size ?? 'md']};
    padding: 0;
  `}
  border-radius: ${({ $shape }) => ($shape === 'rounded' ? '14px' : '999px')};
  flex-shrink: 0;
  line-height: 0;

  svg {
    width: 55%;
    height: 55%;
    display: block;
  }
`

export interface PillButtonProps extends SurfaceButtonProps {
  $dense?: boolean
}

export const PillButton = styled(SurfaceButton)<PillButtonProps>`
  padding: ${({ $dense }) => ($dense ? '0.4rem 0.8rem' : '0.5rem 1.15rem')};
  border-radius: 999px;
  gap: 0.45rem;
  font-size: ${({ $dense }) => ($dense ? '0.8rem' : '0.86rem')};
`
