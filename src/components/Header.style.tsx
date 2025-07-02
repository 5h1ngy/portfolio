import styled from 'styled-components'

export const HeaderRoot = styled.header<{ $compact: boolean }>`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
  background: ${({ $compact }) =>
    $compact
      ? 'rgba(4, 10, 24, 0.78)'
      : 'linear-gradient(180deg, rgba(4, 7, 19, 0.85) 0%, rgba(4, 7, 19, 0.68) 60%, transparent 100%)'};
  border-bottom: 1px solid ${({ $compact }) => ($compact ? 'rgba(92, 243, 233, 0.16)' : 'rgba(148, 163, 198, 0.12)')};
  transition: background 0.3s ease, border-bottom 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ $compact }) => ($compact ? '0 18px 40px rgba(4, 12, 28, 0.45)' : 'none')};
`

export const HeaderInner = styled.div<{ $compact: boolean }>`
  width: min(1100px, calc(100% - 2.5rem));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: ${({ $compact }) => ($compact ? '0.65rem 1.4rem' : '0.75rem 0')};
  transition: padding 0.3s ease, background 0.3s ease, border-radius 0.3s ease, border 0.3s ease,
    box-shadow 0.3s ease;
  background: ${({ $compact }) => ($compact ? 'rgba(6, 18, 40, 0.78)' : 'transparent')};
  border-radius: ${({ $compact }) => ($compact ? '999px' : '0')};
  border: ${({ $compact }) => ($compact ? '1px solid rgba(92, 243, 233, 0.22)' : '1px solid transparent')};
  box-shadow: ${({ $compact }) => ($compact ? '0 18px 48px rgba(6, 16, 42, 0.45)' : 'none')};

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
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
  color: var(--app-text-muted);
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: flex-end;

  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`

export const NavLink = styled.a`
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--app-text-muted);
  transition: color var(--app-transition), border-color var(--app-transition), background var(--app-transition);

  &:hover,
  &:focus-visible {
    color: var(--app-text-primary);
    border-color: rgba(92, 243, 233, 0.35);
    background: rgba(92, 243, 233, 0.12);
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
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(92, 243, 233, 0.35);
  background: rgba(8, 18, 36, 0.6);
  color: var(--app-text-primary);
  font-size: 0.95rem;
  cursor: pointer;
  transition: border-color var(--app-transition), transform var(--app-transition), background var(--app-transition);

  &:hover,
  &:focus-visible {
    border-color: rgba(92, 243, 233, 0.65);
    transform: translateY(-1px);
    background: rgba(8, 18, 36, 0.8);
  }
`

export const AccentPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AccentSwatch = styled.button<{ $active: boolean; $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  transition: transform var(--app-transition), box-shadow var(--app-transition), border-color var(--app-transition);
  background-color: ${({ $color }) => $color};

  &:hover,
  &:focus-visible {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);
  }

  ${({ $active }) =>
    $active
      ? `
      border-color: var(--app-text-primary);
      box-shadow: 0 0 0 3px rgba(92, 243, 233, 0.25);
    `
      : ''}
`
