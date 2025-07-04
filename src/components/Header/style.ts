import styled from 'styled-components'

export const HeaderRoot = styled.header<{ $compact: boolean }>`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  padding: ${({ $compact }) => ($compact ? '0.5rem 0 1rem' : '1.5rem 0 2.5rem')};
  pointer-events: none;
  backdrop-filter: ${({ $compact }) => ($compact ? 'none' : 'blur(20px)')};
  background: ${({ $compact }) =>
    $compact ? 'transparent' : 'linear-gradient(180deg, rgba(4, 7, 19, 0.85) 0%, rgba(4, 7, 19, 0.68) 60%, transparent 100%)'};
  border-bottom: ${({ $compact, theme }) => ($compact ? 'transparent' : theme.colors.border)};
  transition: background 0.3s ease, border-bottom 0.3s ease, padding 0.3s ease;
`

export const HeaderInner = styled.div<{ $compact: boolean }>`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: ${({ $compact }) => ($compact ? '0.65rem 1.4rem' : '0.9rem 0')};
  transition: padding 0.3s ease, background 0.3s ease, border-radius 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
  background: ${({ $compact, theme }) => ($compact ? theme.colors.surface : 'transparent')};
  border-radius: ${({ $compact }) => ($compact ? '999px' : '0')};
  border: ${({ $compact, theme }) => ($compact ? `1px solid ${theme.colors.accentOutline}` : '1px solid transparent')};
  box-shadow: ${({ $compact, theme }) => ($compact ? theme.shadows.ambient : 'none')};
  pointer-events: auto;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const BrandName = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`

export const BrandRole = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: flex-end;

  @media (max-width: 720px) {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 0;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1.2rem;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadows.ambient};
    width: min(280px, 90vw);
    z-index: 6;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-6px')});
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
`

export const NavLink = styled.a`
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 160ms ease, border-color 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accentOutline};
    background: ${({ theme }) => theme.colors.accentSoft};
  }
`

export const Toggles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`

export const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentSoft};
  }
`

export const AccentPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AccentSwatch = styled.button<{ $active: boolean; $color: string }>`
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  background-color: ${({ $color }) => $color};
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);
  }

  ${({ $active, theme }) =>
    $active &&
    `
      border-color: ${theme.colors.textPrimary};
      box-shadow: 0 0 0 3px ${theme.colors.accentSoft};
    `}
`

export const HiddenLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const MobileToggle = styled.button<{ $isActive: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.82rem;
  cursor: pointer;
  transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentSoft};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
      border-color: ${theme.colors.accent};
      background: ${theme.colors.accentSoft};
    `}

  @media (max-width: 720px) {
    display: inline-flex;
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
