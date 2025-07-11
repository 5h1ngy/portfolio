import styled from 'styled-components'

export const TagPillRoot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.34rem 0.9rem;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  line-height: 1.2;
  white-space: nowrap;
`


