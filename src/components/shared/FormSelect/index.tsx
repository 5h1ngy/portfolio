import styled from 'styled-components'

export const FormSelectWrapper = styled.label`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};

  &::after {
    content: '';
    position: absolute;
    right: 0.85rem;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.textMuted};
    pointer-events: none;
    transform: translateY(-10%);
    transition: border-top-color 0.18s ease;
  }

  &:focus-within::after {
    border-top-color: ${({ theme }) => theme.colors.accent};
  }
`

export const FormSelectLabel = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

export const FormSelect = styled.select`
  appearance: none;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.45rem 2.2rem 0.45rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.ambient};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  option {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.surface};
  }
`
