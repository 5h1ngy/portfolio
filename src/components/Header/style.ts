import styled from 'styled-components';

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
    $compact ? 'transparent' : 'linear-gradient(180deg, rgba(4, 7, 19, 0.85) 0%, rgba(4, 7, 19, 0.68) 60%, transparent 100%)'};
  border-bottom: ${({ $compact, theme }) => ($compact ? 'transparent' : theme.colors.border)};
  transition: background 0.3s ease, border-bottom 0.3s ease, padding 0.3s ease;
`;

export const HeaderInner = styled.div<{ $compact: boolean }>`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: ${({ $compact }) => ($compact ? '0.45rem 1rem' : '0.6rem 0')};
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
    padding: ${({ $compact }) => ($compact ? '0.4rem 0.6rem' : '0.6rem 0')};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  position: relative;
  width: 100%;

  @media (max-width: 720px) {
    justify-content: space-between;
    padding: 0 0.25rem;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  margin-right: auto;

  @media (max-width: 720px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    padding: 6rem 2.5rem;
    background: ${({ theme }) => `linear-gradient(180deg, ${theme.colors.background}ee 0%, ${theme.colors.background}f6 60%, ${theme.colors.background}dd 100%)`};
    box-shadow: ${({ theme }) => theme.shadows.ambient};
    margin-right: 0;
    z-index: 15;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    transition: transform 0.25s ease, opacity 0.18s ease;
  }
`;

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

  @media (max-width: 720px) {
    padding: 0.8rem 1.6rem;
    font-size: 1.2rem;
    letter-spacing: 0.12em;
  }
`;

export const ThemeMenu = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  @media (max-width: 720px) {
    margin-left: auto;
  }
`;

export const ThemeMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentSoft};
  }
`;

export const ThemeMenuSummary = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const ThemeTriggerIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }
`;

export const ThemeMenuContent = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  display: grid;
  justify-items: end;
  gap: 0.9rem;
  padding: 1.2rem 1.35rem;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  width: min(260px, 75vw);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 8;
`;

export const ThemeMenuLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: right;
`;

export const ThemeSwitch = styled.button<{ $mode: 'light' | 'dark' }>`
  position: relative;
  width: 70px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ThemeSwitchThumb = styled.span<{ $mode: 'light' | 'dark' }>`
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 4px;
  width: 26px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.accent};
  transform: translateX(${({ $mode }) => ($mode === 'dark' ? '32px' : '0')});
  transition: transform 0.2s ease;
`;

export const ThemeSwitchIcon = styled.span<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${({ theme, $active }) => ($active ? theme.colors.textPrimary : theme.colors.textMuted)};
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  transition: opacity 0.2s ease, color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const AccentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export const AccentSwatch = styled.button<{ $active: boolean; $color: string }>`
  width: 26px;
  height: 26px;
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
`;

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
`;

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
    position: relative;
    z-index: 16;
  }
`;

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
`;

