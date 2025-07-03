import type { FooterProps } from '@components/Footer/types';
import { isExternal } from '@components/Footer/helpers';
import { FooterInner, FooterLinks, FooterMeta, FooterPill, FooterRoot } from '@components/Footer/style';

export const Footer = ({ profile, meta }: FooterProps) => (
  <FooterRoot>
    <FooterInner>
      <div>
        <strong>{profile.name}</strong>
        <FooterMeta>
          {profile.location} · {profile.availability}
        </FooterMeta>
      </div>
      <FooterLinks>
        {profile.links.map((link) => (
          <FooterPill
            key={`${link.type}-${link.label}`}
            href={link.url}
            target={isExternal(link.url) ? '_blank' : undefined}
            rel={isExternal(link.url) ? 'noreferrer' : undefined}
          >
            {link.label}
          </FooterPill>
        ))}
      </FooterLinks>
      <FooterMeta>© {new Date().getFullYear()} · {meta.title}</FooterMeta>
    </FooterInner>
  </FooterRoot>
);

