import styled from 'styled-components'
import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioContact } from '../../types/portfolio'
import { getIconComponent } from '../../utils/iconMap'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 5vw, 3rem);
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  background: rgba(7, 11, 26, 0.78);
  border: 1px solid rgba(148, 163, 198, 0.16);
  backdrop-filter: blur(14px);
`

const Message = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(92, 243, 233, 0.08);
  border: 1px solid rgba(92, 243, 233, 0.22);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.85rem;
  width: fit-content;
`

const Channels = styled.div`
  display: grid;
  gap: 0.85rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ChannelCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  background: rgba(4, 7, 19, 0.8);
  border: 1px solid rgba(148, 163, 198, 0.14);
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: border 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accentOutline};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    small {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`

interface ContactSectionProps {
  contact: PortfolioContact
}

export const ContactSection = ({ contact }: ContactSectionProps) => (
  <Section id="contact">
    <SectionInner>
      <SectionHeader>
        <SectionKicker>Contatti</SectionKicker>
        <SectionTitle>{contact.title}</SectionTitle>
        <SectionCaption>{contact.caption}</SectionCaption>
      </SectionHeader>
      <ContactWrapper>
        <Message>{contact.message}</Message>
        <Availability>{contact.availability}</Availability>
        <Channels>
          {contact.channels.map((channel) => {
            const Icon = getIconComponent(channel.type)
            return (
              <ChannelCard key={channel.label} href={channel.href} target="_blank" rel="noreferrer">
                <Icon />
                <span>
                  {channel.label}
                  <small>{channel.value}</small>
                </span>
              </ChannelCard>
            )
          })}
        </Channels>
      </ContactWrapper>
    </SectionInner>
  </Section>
)
