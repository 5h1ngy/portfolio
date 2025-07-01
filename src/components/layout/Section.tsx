import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  padding: clamp(4rem, 8vw, 7rem) ${({ theme }) => theme.layout.gutter};
`

export const SectionInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: clamp(2.5rem, 6vw, 4rem);
`

export const SectionKicker = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;
  }
`

export const SectionTitle = styled.h2`
  font-size: clamp(2.25rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const SectionCaption = styled.p`
  max-width: 720px;
  color: ${({ theme }) => theme.colors.textSecondary};
`
