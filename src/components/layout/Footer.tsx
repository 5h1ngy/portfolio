import styled from 'styled-components'
import { usePortfolio } from '../../context/PortfolioContext'
import { getIconComponent } from '../../utils/iconMap'

const FooterShell = styled.footer`
  position: relative;
  padding: 4rem ${({ theme }) => theme.layout.gutter} 3rem;
  background: linear-gradient(180deg, rgba(15, 22, 45, 0.4) 0%, rgba(4, 7, 19, 0.95) 100%);
  border-top: 1px solid rgba(148, 163, 198, 0.12);
`

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
`

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: ${({ theme }) => theme.typography.fonts.heading};
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  small {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: background 0.3s ease, color 0.3s ease;
  border: 1px solid rgba(148, 163, 198, 0.12);

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accentOutline};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`

export const Footer = () => {
  const { data } = usePortfolio()

  if (!data) {
    return null
  }

  return (
    <FooterShell id="footer">
      <FooterInner>
        <FooterTop>
          <FooterBrand>
            <span>{data.profile.name}</span>
            <small>{`${data.profile.location} - ${data.profile.availability}`}</small>
          </FooterBrand>
          <LinkList>
            {data.profile.links.map((link) => {
              const Icon = getIconComponent(link.type)
              return (
                <LinkItem key={link.label} href={link.url} target="_blank" rel="noreferrer">
                  <Icon />
                  {link.label}
                </LinkItem>
              )
            })}
          </LinkList>
        </FooterTop>
        <FooterBottom>
          <span>{data.meta.title}</span>
          <span>{`(c) ${new Date().getFullYear()} - Crafted with React, TypeScript & styled-components.`}</span>
        </FooterBottom>
      </FooterInner>
    </FooterShell>
  )
}
