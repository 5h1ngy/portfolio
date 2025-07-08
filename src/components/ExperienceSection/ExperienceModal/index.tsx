import { useEffect, type MouseEvent } from 'react';

import {
  ModalCard,
  ModalClose,
  ModalCloseSlot,
  ModalCompany,
  ModalHeader,
  ModalHighlights,
  ModalLink,
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

const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M6.757 5.343a1 1 0 0 0-1.414 1.414L10.586 12l-5.243 5.243a1 1 0 0 0 1.414 1.414L12 13.414l5.243 5.243a1 1 0 0 0 1.414-1.414L13.414 12l5.243-5.243a1 1 0 1 0-1.414-1.414L12 10.586 6.757 5.343Z" />
  </svg>
);

interface ExperienceModalProps {
  role: PortfolioExperienceRole | null;
  onClose: () => void;
}

export const ExperienceModal = ({ role, onClose }: ExperienceModalProps) => {
  useEffect(() => {
    if (!role) {
      return;
    }

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      body.style.overflow = previousOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [role, onClose]);

  if (!role) {
    return null;
  }

  const external = Boolean(role.link && (role.link.external || isExternalLink(role.link.href)));

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay role="dialog" aria-modal="true" onClick={handleOverlayClick}>
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <ModalScroll>
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

          <ModalTitle>{role.role}</ModalTitle>
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
        </ModalScroll>
      </ModalCard>
    </ModalOverlay>
  );
};