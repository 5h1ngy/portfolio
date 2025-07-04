import type { PortfolioProfile } from '@data/portfolio.types';
import type { ThemeMode } from '@styles/theme';

export interface HeaderNavigationItem {
  label: string;
  targetId: string;
}

export interface HeaderProps {
  navigation: HeaderNavigationItem[];
  profile: PortfolioProfile;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  accentOptions: string[];
  accentColor: string;
  onAccentChange: (color: string) => void;
}
