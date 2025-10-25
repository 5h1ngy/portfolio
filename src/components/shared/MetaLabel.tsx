import styled, { css } from 'styled-components'

type MetaVariant = 'eyebrow' | 'badge' | 'counter'
type MetaTone = 'default' | 'muted' | 'accent'

export interface MetaLabelProps {
  $variant?: MetaVariant
  $tone?: MetaTone
  $padding?: string
}

const toneStyles = {
  default: css`
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  muted: css`
    color: ${({ theme }) => theme.colors.textMuted};
  `,
  accent: css`
    color: ${({ theme }) => theme.colors.accent};
  `,
}

const variantStyles = {
  eyebrow: css`
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
  `,
  badge: css<MetaLabelProps>`
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
    background: ${({ theme }) => theme.colors.surfaceMuted};
    padding: ${({ $padding }) => $padding ?? '0.38rem 0.85rem'};
  `,
  counter: css`
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 600;
  `,
}

export const MetaLabel = styled.span<MetaLabelProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  ${({ $tone }) => toneStyles[$tone ?? 'default']};
  ${({ $variant }) => variantStyles[$variant ?? 'eyebrow']};
`
