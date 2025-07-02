import styled from 'styled-components'

export const HeroSectionWrapper = styled.section.attrs({ className: 'section' })`
  position: relative;
  padding: clamp(3rem, 8vw, 5rem) 0 clamp(2rem, 4vw, 3rem);

  &::before {
    content: '';
    position: absolute;
    inset: -8%;
    background: var(--app-gradient-overlay);
    filter: blur(90px);
    opacity: 0.55;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

export const HeroLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 38vw);
  gap: clamp(2.5rem, 8vw, 6rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    text-align: center;
  }
`

export const HeroLead = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 520px;
  align-content: start;

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`

export const HeroEyebrow = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(92, 243, 233, 0.85);
  font-weight: 600;
`

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.6rem, 7vw, 4rem);
  line-height: 1.05;
  color: var(--app-text-primary);
`

export const HeroSubtitle = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(230, 241, 255, 0.8);
`

export const HeroDescription = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: var(--app-text-secondary);
`

export const HeroLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.88rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

export const HeroLinksLabel = styled.span`
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(92, 243, 233, 0.8);
  font-weight: 600;
`

export const HeroLinksList = styled.div`
  display: flex;
  gap: 0.65rem;
`

export const HeroLink = styled.a`
  color: var(--app-text-primary);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.15rem;
  transition: border-color var(--app-transition), color var(--app-transition);

  &:hover,
  &:focus-visible {
    border-color: var(--app-accent);
    color: var(--app-accent);
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`
