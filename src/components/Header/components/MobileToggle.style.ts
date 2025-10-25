import styled from 'styled-components'
import { PillButton } from '@components/shared/Button'

export const MobileToggle = styled(PillButton).attrs({ $tone: 'muted', $dense: true })<{ $isActive: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-color: ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentSoft};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
      border-color: ${theme.colors.accent};
      background: ${theme.colors.accentSoft};
    `}

  @media (max-width: 834px) {
    display: inline-flex;
    position: relative;
    z-index: 80;
    align-self: flex-end;
    margin-right: auto;
    padding: 0.45rem 0.8rem;
  }
`
