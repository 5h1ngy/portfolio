import styled, { keyframes } from "styled-components";

const caretBlink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  50.01%, 100% {
    opacity: 0;
  }
`;

export const HeroSectionWrapper = styled.section`
  position: relative;
  padding: clamp(3rem, 8vw, 5rem) 0 clamp(2rem, 4vw, 3rem);

  &::before {
    content: '';
    position: absolute;
    inset: -8%;
    background: ${({ theme }) => theme.gradients.overlay};
    filter: blur(90px);
    opacity: 0.55;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

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
`;

export const HeroLead = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 520px;
  align-content: start;

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const HeroEyebrow = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.6rem, 7vw, 4rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;
  display: inline-block;
  min-height: 1.2em;
  padding-right: 0.5rem;
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeroDescription = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeroLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.88rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const HeroLinksLabel = styled.span`
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

export const HeroLinksList = styled.div`
  display: flex;
  gap: 0.65rem;
`;

export const HeroLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.15rem;
  transition: border-color 160ms ease, color 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 999px;
  padding: 0.65rem 1.35rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-transform: none;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, rgba(141, 124, 255, 0.93));
  color: #041320;
  box-shadow: ${({ theme }) => theme.shadows.accent};

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 22px rgba(92, 243, 233, 0.16);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HeroTitleGhost = styled.span`
  display: block;
  visibility: hidden;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
`;

export const HeroTitleText = styled.span`
  position: absolute;
  inset: 0 auto auto 0;
  display: inline-block;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 12%;
    right: -0.35rem;
    width: 2px;
    height: 76%;
    background: ${({ theme }) => theme.colors.accent};
    animation: ${caretBlink} 1s steps(2, start) infinite;
  }
`;
