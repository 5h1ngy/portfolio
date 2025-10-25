import styled, { css } from 'styled-components'

export type CardVariant = 'surface' | 'muted' | 'gradient'

export const Card = styled.article<{ $variant?: CardVariant; $padding?: string; $radius?: string; $interactive?: boolean }>`
  position: relative;
  display: grid;
  gap: var(--card-gap, 0.75rem);
  padding: ${({ $padding }) => $padding ?? '1.4rem'};
  border-radius: ${({ $radius }) => $radius ?? '22px'};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'gradient'
        ? 'transparent'
        : $variant === 'muted'
          ? theme.colors.accentOutlineMuted
          : theme.colors.accentOutlineMuted};
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'gradient':
        return `linear-gradient(135deg, ${theme.colors.surfaceElevated} 0%, ${theme.colors.surfaceMuted} 40%, ${theme.colors.accentSoft} 120%)`
      case 'muted':
        return theme.colors.surfaceMuted
      default:
        return theme.colors.surfaceElevated
    }
  }};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: ${({ theme, $variant }) => ($variant === 'gradient' ? theme.shadows.accent : theme.shadows.ambient)};
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  ${({ $interactive, theme }) =>
    $interactive &&
    css`
      &:hover,
      &:focus-within {
        transform: translateY(-6px);
        border-color: ${theme.colors.accent};
        box-shadow: ${theme.shadows.accent};
      }
    `}
`
