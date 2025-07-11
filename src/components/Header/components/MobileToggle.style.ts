import styled from 'styled-components'

export const MobileToggle = styled.button<{ $isActive: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.82rem;
  cursor: pointer;
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
    z-index: 16;
  }
`

