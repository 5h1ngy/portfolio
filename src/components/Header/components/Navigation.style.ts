import styled from 'styled-components'

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: center;

  @media (max-width: 834px) {
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
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.ambient};
    margin-right: 0;
    z-index: 60;
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    transition: transform 0.25s ease, opacity 0.18s ease;
  }
`

export const NavLink = styled.a<{ $active: boolean }>`
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;

  ${({ $active, theme }) =>
    $active &&
    `
      color: ${theme.colors.textPrimary};
      border-color: ${theme.colors.accentOutline};
      background: ${theme.colors.accentSoft};
      box-shadow: ${theme.shadows.ambient};
    `}

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accentOutline};
    background: ${({ theme }) => theme.colors.accentSoft};
  }

  @media (max-width: 834px) {
    padding: 0.8rem 1.6rem;
    font-size: 1.2rem;
    letter-spacing: 0.12em;
  }
`
