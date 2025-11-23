import styled from 'styled-components'
import { SurfaceButton } from '@components/shared/Button'
import { MenuSurface } from '@components/shared/Menu'

export const LanguageSelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row-reverse;
`

export const LanguageSelectToggle = styled(SurfaceButton).attrs({ $tone: 'surface' })<{ $open: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 2.4rem 0 1rem;
  height: 40px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  transition: background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1.05rem;
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
    background: ${({ theme }) => theme.colors.surfaceMuted};
    color: ${({ theme }) => theme.colors.textPrimary};
    box-shadow: ${({ theme }) => theme.shadows.ambient};
    transform: translateY(-1px);
  }

  ${({ $open }) =>
    $open &&
    `
      &::after {
        transform: translateY(-25%) rotate(180deg);
      }
    `}
`

export const LanguageSelectMenu = styled(MenuSurface)`
  gap: 0.45rem;
  left: 0;
  right: auto;
  min-width: 190px;

  @media (max-width: 834px) {
    min-width: 200px;
  }
`

export const LanguageSelectOption = styled(SurfaceButton).attrs({ as: 'button', $tone: 'ghost', $padding: '0.55rem 0.85rem' })<{
  $active: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  width: 100%;
  border: none;
  box-shadow: none;
  background: ${({ $active, theme }) => ($active ? theme.colors.accentSoft : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.textPrimary : theme.colors.textSecondary)};
  font-size: 0.82rem;
  font-weight: 600;
  text-align: left;
  transition: background 0.16s ease, color 0.16s ease, transform 0.16s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-1px);
  }
`

