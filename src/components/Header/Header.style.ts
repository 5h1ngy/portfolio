import styled from 'styled-components'

export const HeaderRoot = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  padding: 0.85rem 0;
  pointer-events: none;
  background: transparent;
  border-bottom: none;
`

export const HeaderInner = styled.div`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.55rem 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  pointer-events: auto;
  transition: padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 834px) {
    width: calc(100% - 1.6rem);
    padding: 0.7rem 0.9rem;
    flex-wrap: wrap;
    border-radius: 18px;
  }
`

export const BrandLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 16px;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.surfaceMuted};
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }

  @media (max-width: 834px) {
    display: none;
  }
`

export const BrandLogo = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.25));
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.65rem;
  flex-wrap: nowrap;

  @media (max-width: 834px) {
    width: 100%;
    justify-content: flex-end;
    gap: 0.55rem;
    flex-wrap: wrap;
  }
`

export const MobileBackdrop = styled.button<{ $visible: boolean }>`
  display: none;

  @media (max-width: 834px) {
    display: ${({ $visible }) => ($visible ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(3, 6, 21, 0.62)' : 'rgba(12, 18, 32, 0.28)'};
    border: none;
    padding: 0;
    margin: 0;
    z-index: 5;
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  }
`
