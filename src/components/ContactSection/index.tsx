import type { ContactSectionProps } from '@components/ContactSection/types';
import { Section } from '@components/Section';
import { isExternal } from '@components/ContactSection/helpers';
import { Availability, ContactLink, ContactRow, ContactTable, LabelCell, Message, ValueCell } from '@components/ContactSection/style';

export const ContactSection = ({ contact }: ContactSectionProps) => (
  <Section
    id="contact"
    accent="Contatti"
    title={contact.title}
    description={contact.caption}
  >
    <Message>{contact.message}</Message>
    <Availability>{contact.availability}</Availability>
    <ContactTable>
      <tbody>
        {contact.channels.map((channel) => (
          <ContactRow key={`${channel.type}-${channel.label}`}>
            <LabelCell>{channel.label}</LabelCell>
            <ValueCell>
              <ContactLink
                href={channel.href}
                target={isExternal(channel.href) ? '_blank' : undefined}
                rel={isExternal(channel.href) ? 'noreferrer' : undefined}
              >
                {channel.value || channel.href}
              </ContactLink>
            </ValueCell>
          </ContactRow>
        ))}
      </tbody>
    </ContactTable>
  </Section>
);

