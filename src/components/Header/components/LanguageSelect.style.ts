import styled from 'styled-components'

export const LanguageSelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row-reverse;

  @media (max-width: 834px) {
    width: 100%;
  }
`

export const LanguageSelectToggle = styled.button<{ $open: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 2.65rem 0 1.15rem;
  height: 44px;
  border-radius: 16px;
  border: 0px solid ;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.18s ease, background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease,
    transform 0.18s ease;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1.2rem;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.textMuted};
    transform: translateY(-25%);
    transition: border-top-color 0.18s ease, transform 0.18s ease;
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.textMuted};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
    box-shadow: ${({ theme }) => theme.shadows.ambient};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: none;
  }

  ${({ $open }) =>
    $open &&
    `
      &::after {
        transform: translateY(-25%) rotate(180deg);
      }
    `}
`

export const LanguageSelectMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 0;
  display: grid;
  gap: 0.45rem;
  min-width: 190px;
  width: max-content;
  padding: 0.65rem;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 12;

  @media (max-width: 834px) {
    min-width: 200px;
  }
`

export const LanguageSelectOption = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  width: 100%;
  padding: 0.55rem 0.85rem;
  border-radius: 12px;
  border: none;
  background: ${({ $active, theme }) => ($active ? theme.colors.accentSoft : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.textPrimary : theme.colors.textSecondary)};
  font-size: 0.82rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background 0.16s ease, color 0.16s ease, transform 0.16s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: none;
  }
`
