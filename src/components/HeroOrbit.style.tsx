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
  border: 1px dashed rgba(255, 255, 255, 0.16);
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
  background: rgba(8, 18, 38, 0.72);
  border: 2px solid rgba(92, 243, 233, 0.45);
  box-shadow: 0 30px 60px rgba(4, 12, 30, 0.45), inset 0 0 40px rgba(92, 243, 233, 0.18);
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
  background: rgba(8, 18, 38, 0.72);
  border: 1px solid rgba(92, 243, 233, 0.22);
  align-items: center;
  justify-content: center;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
