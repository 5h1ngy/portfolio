import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { usePortfolio } from '../../context/PortfolioContext'

const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(4, 7, 19, 0.75);
  border-bottom: 1px solid rgba(148, 163, 198, 0.12);
`

const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem ${({ theme }) => theme.layout.gutter};
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem ${({ theme }) => theme.layout.gutter};
    flex-wrap: wrap;
  }
`

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.fonts.heading};
  font-size: 1rem;
  letter-spacing: 0.02em;
`

const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: ${({ theme }) => theme.gradients.accent};
  color: #040713;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.accent};
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fonts.body};
  font-size: 0.95rem;
  padding: 0.35rem 0;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 -0.6rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }
`

const HeaderCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.gradients.accent};
  color: #040713;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: ${({ theme }) => theme.shadows.accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(93, 243, 232, 0.35);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`

export const Header = () => {
  const { data, navigation } = usePortfolio()

  const handleScroll = useCallback((targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  if (!data) {
    return null
  }

  const brandInitials = data.profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <HeaderShell>
      <HeaderInner>
        <Brand to="/">
          <BrandMark>{brandInitials}</BrandMark>
          <span>{data.profile.headline}</span>
        </Brand>

        <Navigation>
          {navigation.map((item) => (
            <NavButton key={item.targetId} type="button" onClick={() => handleScroll(item.targetId)}>
              {item.label}
            </NavButton>
          ))}
          {data.profile.resumeUrl ? (
            <HeaderCta href={data.profile.resumeUrl} target="_blank" rel="noreferrer">
              Scarica CV
            </HeaderCta>
          ) : (
            <HeaderCta href="#contact">Contattami</HeaderCta>
          )}
        </Navigation>
      </HeaderInner>
    </HeaderShell>
  )
}
