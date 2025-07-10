import { useTranslation } from 'react-i18next'

import { isExternal } from '@/components/Footer/helpers'
import type { FooterProps } from '@/components/Footer/types'
import {
  FooterBrand,
  FooterCopy,
  FooterInner,
  FooterLink,
  FooterLinks,
  FooterName,
  FooterRoot,
} from '@/components/Footer/style'

export const Footer = ({ profile, meta }: FooterProps) => {
  const { t } = useTranslation()

  return (
    <FooterRoot>
      <FooterInner>
        <FooterBrand>
          <FooterName>{profile.name}</FooterName>
          <FooterCopy>
            {'\u00A9'} {new Date().getFullYear()} {meta.title}
          </FooterCopy>
        </FooterBrand>
        {profile.links.length > 0 && (
          <FooterLinks aria-label={t('footer.profileLinks')}>
            {profile.links.map((link) => (
              <FooterLink
                key={`${link.type}-${link.label}`}
                href={link.url}
                target={isExternal(link.url) ? '_blank' : undefined}
                rel={isExternal(link.url) ? 'noreferrer' : undefined}
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterLinks>
        )}
      </FooterInner>
    </FooterRoot>
  )
}
