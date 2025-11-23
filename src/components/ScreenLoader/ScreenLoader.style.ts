import styled, { keyframes } from 'styled-components'

const orbitSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
  0% {
    transform: scale(0.85);
    opacity: 0.6;
  }
  70% {
    transform: scale(1.25);
    opacity: 0;
  }
  100% {
    transform: scale(1.25);
    opacity: 0;
  }
`

export const LoaderOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => `${theme.gradients.overlay}, ${theme.colors.background}`};
  backdrop-filter: blur(28px);
  z-index: 999;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: opacity 0.45s ease, visibility 0.45s ease;
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`

export const LoaderContent = styled.div`
  display: grid;
  gap: 1.75rem;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 36px;
  min-width: min(360px, 90vw);
`

export const LoaderCore = styled.div`
  position: relative;
  width: clamp(150px, 28vw, 220px);
  aspect-ratio: 1;
  margin: 0 auto;
`

export const LoaderHalo = styled.span<{ $accent: string }>`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: ${({ $accent }) => $accent};
  filter: blur(48px);
  opacity: 0.45;
`

export const LoaderPulse = styled.span<{ $accent: string }>`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 2px solid ${({ $accent }) => $accent};
  animation: ${pulse} 2.4s ease-out infinite;
`

export const LoaderOrb = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 12%;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 2px solid ${({ theme }) => theme.colors.accentOutline};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.accent};

  &::after {
    content: '';
    width: 40%;
    height: 40%;
    border-radius: 999px;
    background: ${({ $accent }) => $accent};
    box-shadow: 0 0 24px ${({ $accent }) => $accent};
  }
`

export const LoaderOrbit = styled.span<{ $accent: string }>`
  position: absolute;
  inset: -6%;
  border-radius: 999px;
  border: 1px dashed ${({ theme }) => theme.colors.accentOutline};
  animation: ${orbitSpin} 12s linear infinite;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background: ${({ $accent }) => $accent};
    transform: translate(-50%, -50%);
    box-shadow: 0 0 18px ${({ $accent }) => $accent};
  }

  &::after {
    left: 5%;
  }

  &::before {
    right: -2%;
  }
`

export const LoaderMeta = styled.div`
  display: grid;
  gap: 0.65rem;
  text-align: center;
`

export const LoaderLabel = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const LoaderProgress = styled.div`
  position: relative;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
`

export const LoaderProgressFill = styled.span<{ $accent: string }>`
  position: absolute;
  inset: 0;
  width: 0%;
  border-radius: inherit;
  background: ${({ $accent }) => $accent};
  box-shadow: 0 0 14px ${({ $accent }) => $accent};
  transition: width 0.35s ease;
`

export const LoaderPercent = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`

