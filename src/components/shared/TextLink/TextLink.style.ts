import styled from 'styled-components'

export const TextLinkRoot = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 1px solid transparent;
  padding-bottom: 0.1rem;
  text-decoration: none;
  transition: color 0.18s ease, border-color 0.18s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
