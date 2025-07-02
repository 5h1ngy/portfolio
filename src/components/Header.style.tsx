import styled from "styled-components";

export const HeaderRoot = styled.header<{ $compact: boolean }>`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
  background: ${({ $compact, theme }) =>
    $compact
      ? theme.colors.surface
      : 'linear-gradient(180deg, rgba(4, 7, 19, 0.85) 0%, rgba(4, 7, 19, 0.68) 60%, transparent 100%)'};
  border-bottom: 1px solid
    ${({ $compact, theme }) => ($compact ? theme.colors.accentOutline : theme.colors.border)};
  transition: background 0.3s ease, border-bottom 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ $compact, theme }) => ($compact ? theme.shadows.ambient : 'none')};
`;

export const HeaderInner = styled.div<{ $compact: boolean }>`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: ${({ $compact }) => ($compact ? '0.65rem 1.4rem' : '0.75rem 0')};
  transition: padding 0.3s ease, background 0.3s ease, border-radius 0.3s ease, border 0.3s ease,
    box-shadow 0.3s ease;
  background: ${({ $compact, theme }) => ($compact ? theme.colors.surfaceMuted : 'transparent')};
  border-radius: ${({ $compact }) => ($compact ? '999px' : '0')};
  border: ${({ $compact, theme }) => ($compact ? `1px solid ${theme.colors.accentOutline}` : '1px solid transparent')};
  box-shadow: ${({ $compact, theme }) => ($compact ? theme.shadows.ambient : 'none')};

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const BrandName = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const BrandRole = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: flex-end;

  @media (max-width: 720px) {
    justify-content: flex-start;
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
`;

export const Toggles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

export const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.95rem;
  cursor: pointer;
  transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentSoft};
  }
`;

export const AccentPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AccentSwatch = styled.button<{ $active: boolean; $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  background-color: ${({ $color }) => $color};

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
