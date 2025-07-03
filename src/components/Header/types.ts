import type { ThemeMode } from '@styles/theme';
import type { PortfolioNavigationItem, PortfolioProfile } from '@data/portfolio.types';

export interface HeaderProps {
  navigation: PortfolioNavigationItem[];
  profile: PortfolioProfile;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  accentOptions: string[];
  accentColor: string;
  onAccentChange: (color: string) => void;
}

