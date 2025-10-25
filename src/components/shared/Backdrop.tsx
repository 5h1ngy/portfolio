import styled, { css } from 'styled-components'

export interface BackdropProps {
  $visible?: boolean
  $tone?: 'light' | 'dark'
  $blur?: string
  $zIndex?: number
}

const toneMap = {
  light: css`
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(4, 8, 20, 0.88)' : 'rgba(20, 28, 48, 0.4)')};
  `,
  dark: css`
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(3, 6, 21, 0.62)' : 'rgba(12, 18, 32, 0.28)')};
  `,
}

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  inset: 0;
  padding: 0;
  margin: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.2s ease;
  z-index: ${({ $zIndex }) => $zIndex ?? 40};
  ${({ $tone }) => toneMap[$tone ?? 'light']};
  backdrop-filter: ${({ $blur }) => $blur ?? 'blur(10px)'};
`
