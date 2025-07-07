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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  padding: clamp(3rem, 8vw, 5rem) 0 clamp(2rem, 4vw, 3rem);

  &::before {
    content: "";
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

  @media (max-width: 960px) {
    min-height: auto;
    justify-content: flex-start;
  }
`;

export const HeroLayout = styled.div`
  position: relative;
  width: min(1120px, 92vw);
  margin-top: -35vh;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 20vw);
  gap: clamp(4.25rem, 12vw, 9.5rem);
  align-items: center;

  @media (max-width: 960px) {
    margin: 0 auto;
    grid-template-columns: minmax(0, 1fr);
    text-align: center;
    gap: clamp(6rem, 18vw, 9rem);
  }
`;

export const HeroLead = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 520px;
  align-content: start;

  @media (max-width: 960px) {
    margin: 0 auto;
    justify-items: center;
    text-align: center;
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

export const HeroIconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-top: 1.25rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const HeroIconButton = styled.a`
  width: 54px;
  height: 54px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  position: relative;
  transition: transform 0.18s ease, border-color 0.18s ease,
    box-shadow 0.18s ease, color 0.18s ease;

  svg {
    width: 26px;
    height: 26px;
    display: block;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px) scale(1.03);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }
`;

export const HeroIconLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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
    content: "";
    position: absolute;
    top: 12%;
    right: -0.35rem;
    width: 2px;
    height: 76%;
    background: ${({ theme }) => theme.colors.accent};
    animation: ${caretBlink} 1s steps(2, start) infinite;
  }
`;
