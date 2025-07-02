import type { PortfolioMeta, PortfolioProfile } from '../types/portfolio'

interface FooterProps {
  profile: PortfolioProfile
  meta: PortfolioMeta
}

const isExternal = (url: string) => /^https?:\/\//i.test(url)

export const Footer = ({ profile, meta }: FooterProps) => (
  <footer className="app-footer">
    <div className="app-footer__inner">
      <div>
        <strong>{profile.name}</strong>
        <div className="app-footer__meta">
          {profile.location} · {profile.availability}
        </div>
      </div>
      <div className="app-footer__links">
        {profile.links.map((link) => (
          <a
            key={`${link.type}-${link.label}`}
            className="pill"
            href={link.url}
            target={isExternal(link.url) ? '_blank' : undefined}
            rel={isExternal(link.url) ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="app-footer__meta">
        © {new Date().getFullYear()} · {meta.title}
      </div>
    </div>
  </footer>
)
