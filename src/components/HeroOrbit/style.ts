import styled, { keyframes } from 'styled-components'

export const OrbitWrapper = styled.div`
  position: relative;
  width: clamp(280px, 40vw, 440px);
  aspect-ratio: 1;
  margin: 0 auto;

  @media (max-width: 960px) {
    order: -1;
  }
`

export const OrbitRings = styled.div`
  position: absolute;
  inset: 0;
`

export const OrbitRing = styled.span<{ $size: number }>`
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  border: 1px dashed ${({ theme }) => theme.colors.accentOutline};
  opacity: 0.65;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
`

export const OrbitCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(120px, 18vw, 180px);
  height: clamp(120px, 18vw, 180px);
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border: 2px solid ${({ theme }) => theme.colors.accentOutline};
  box-shadow: ${({ theme }) => theme.shadows.accent}, inset 0 0 40px ${({ theme }) => theme.colors.accentSoft};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`

const orbitSpin = keyframes`
  0% {
    transform: rotate(0deg) translateX(var(--orbit-distance)) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(var(--orbit-distance)) rotate(-360deg);
  }
`

export const OrbitItem = styled.div<{
  $radius: number
  $size: number
  $duration: number
  $delay: number
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  margin: ${({ $size }) => `-${$size / 2}px`};
  --orbit-distance: ${({ $radius }) => `${$radius}px`};
  animation: ${orbitSpin} ${({ $duration }) => `${$duration}s`} linear infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  transform-origin: center;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
`

export const OrbitIcon = styled.span`
  display: inline-flex;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  align-items: center;
  justify-content: center;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
