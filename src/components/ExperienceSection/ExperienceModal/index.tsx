import {
  ModalCard,
  ModalClose,
  ModalCloseSlot,
  ModalCompany,
  ModalHeader,
  ModalHighlights,
  ModalLink,
  ModalBody,
  ModalOverlay,
  ModalPeriod,
  ModalScroll,
  ModalSummary,
  ModalTag,
  ModalTags,
  ModalTitle,
  ModalTopBar,
} from '@components/ExperienceSection/ExperienceModal/style';
import type { PortfolioExperienceRole } from '@data/portfolio.types';
import { useExperienceModal } from '@components/ExperienceSection/ExperienceModal/hooks';
import { isExternalLink } from '@components/ExperienceSection/ExperienceModal/helpers';
import { CloseIcon } from '@components/ExperienceSection/ExperienceModal/icons';

interface ExperienceModalProps {
  role: PortfolioExperienceRole | null;
  onClose: () => void;
}

export const ExperienceModal = ({ role, onClose }: ExperienceModalProps) => {
  const { titleId, handleOverlayClick } = useExperienceModal({ role, onClose });

  if (!role) {
    return null;
  }

  const external = Boolean(role.link && (role.link.external || isExternalLink(role.link.href)));

  return (
    <ModalOverlay role="dialog" aria-modal="true" aria-labelledby={titleId} onClick={handleOverlayClick}>
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <ModalScroll>
          <ModalBody>
            <ModalTopBar>
              <ModalHeader>
                <ModalPeriod>{role.period}</ModalPeriod>
                {role.company && <ModalCompany>{role.company}</ModalCompany>}
              </ModalHeader>
              <ModalCloseSlot>
                <ModalClose type="button" onClick={onClose} aria-label="Chiudi dettaglio esperienza">
                  <CloseIcon />
                </ModalClose>
              </ModalCloseSlot>
            </ModalTopBar>

            <ModalTitle id={titleId}>{role.role}</ModalTitle>
            <ModalSummary>{role.summary}</ModalSummary>
            {role.highlights.length > 0 && (
              <ModalHighlights>
                {role.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ModalHighlights>
            )}
            {role.tags.length > 0 && (
              <ModalTags>
                {role.tags.map((tag) => (
                  <ModalTag key={tag}>{tag}</ModalTag>
                ))}
              </ModalTags>
            )}
            {role.link && (
              <ModalLink href={role.link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                {role.link.label}
              </ModalLink>
            )}
          </ModalBody>
        </ModalScroll>
      </ModalCard>
    </ModalOverlay>
  );
};
