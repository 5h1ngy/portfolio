import { HiddenLabel } from '@/components/Header/components/HiddenLabel.style';
import { MobileToggle } from '@/components/Header/components/MobileToggle.style';

interface HeaderMobileToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  hiddenLabel: string;
  closedLabel: string;
  openLabel: string;
}

export const HeaderMobileToggle = ({ isOpen, onToggle, hiddenLabel, closedLabel, openLabel }: HeaderMobileToggleProps) => (
  <MobileToggle
    type="button"
    onClick={onToggle}
    aria-expanded={isOpen}
    aria-controls="primary-navigation"
    $isActive={isOpen}
  >
    <HiddenLabel>{hiddenLabel}</HiddenLabel>
    <span aria-hidden>{isOpen ? openLabel : closedLabel}</span>
  </MobileToggle>
);
