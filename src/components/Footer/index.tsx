import type { FooterProps } from '@/components/Footer/types';
import { isExternal } from '@/components/Footer/helpers';
import {
  FooterBrand,
  FooterCopy,
  FooterInner,
  FooterLink,
  FooterLinks,
  FooterName,
  FooterRoot,
} from '@/components/Footer/style';

export const Footer = ({ profile, meta }: FooterProps) => (
  <FooterRoot>
    <FooterInner>
      <FooterBrand>
        <FooterName>{profile.name}</FooterName>
        <FooterCopy>© {new Date().getFullYear()} {meta.title}</FooterCopy>
      </FooterBrand>
      {profile.links.length > 0 && (
        <FooterLinks aria-label="Link profilo">
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
);
