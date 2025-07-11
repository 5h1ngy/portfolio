import styled from 'styled-components'

export const ActionLinkRoot = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.52rem 1.15rem;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  font-size: 0.86rem;
  transition: transform 0.18s ease, color 0.18s ease, border-color 0.18s ease;

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
