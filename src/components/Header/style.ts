import styled from 'styled-components'

export const HeaderRoot = styled.header<{ $compact: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  padding: ${({ $compact }) => ($compact ? '0.3rem 0 0.6rem' : '0.7rem 0 1rem')};
  pointer-events: none;
  backdrop-filter: ${({ $compact }) => ($compact ? 'none' : 'blur(20px)')};
  background: ${({ $compact }) =>
    $compact
      ? 'transparent'
      : 'linear-gradient(180deg, rgba(4, 7, 19, 0.85) 0%, rgba(4, 7, 19, 0.68) 60%, transparent 100%)'};
  border-bottom: ${({ $compact, theme }) => ($compact ? 'transparent' : theme.colors.border)};
  transition: background 0.3s ease, border-bottom 0.3s ease, padding 0.3s ease;
`

export const HeaderInner = styled.div<{ $compact: boolean }>`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.85rem;
  padding: ${({ $compact }) => ($compact ? '0.45rem 1rem' : '0.6rem 0')};
  transition: padding 0.3s ease, background 0.3s ease, border-radius 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
  background: ${({ $compact, theme }) => ($compact ? theme.colors.surface : 'transparent')};
  backdrop-filter: ${({ $compact }) => ($compact ? 'blur(20px)' : 'none')};
  border-radius: ${({ $compact }) => ($compact ? '999px' : '0')};
  border: ${({ $compact, theme }) => ($compact ? `1px solid ${theme.colors.accentOutline}` : '1px solid transparent')};
  box-shadow: ${({ $compact, theme }) => ($compact ? theme.shadows.ambient : 'none')};
  pointer-events: auto;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: ${({ $compact }) => ($compact ? '0.4rem 0.6rem' : '0.6rem 0')};
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  position: relative;
  width: 100%;

  @media (max-width: 720px) {
    justify-content: space-between;
    padding: 0 0.35rem;
  }
`

export const MobileBackdrop = styled.button<{ $visible: boolean }>`
  display: none;

  @media (max-width: 720px) {
    display: ${({ $visible }) => ($visible ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(4, 10, 24, 0.45);
    border: none;
    padding: 0;
    margin: 0;
    z-index: 5;
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  }
`
