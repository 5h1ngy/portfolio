import { Section } from './Section'
import type { PortfolioContact } from '../types/portfolio'

interface ContactSectionProps {
  contact: PortfolioContact
}

const isExternal = (href: string) => /^https?:\/\//i.test(href)

export const ContactSection = ({ contact }: ContactSectionProps) => (
  <Section
    id="contact"
    accent="Contatti"
    title={contact.title}
    description={contact.caption}
  >
    <p>{contact.message}</p>
    <p className="card__subtitle">{contact.availability}</p>
    <table className="table">
      <tbody>
        {contact.channels.map((channel) => (
          <tr key={`${channel.type}-${channel.label}`}>
            <td className="table__label">{channel.label}</td>
            <td className="table__value">
              <a
                href={channel.href}
                target={isExternal(channel.href) ? '_blank' : undefined}
                rel={isExternal(channel.href) ? 'noreferrer' : undefined}
              >
                {channel.value || channel.href}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Section>
)
