import type { RefObject } from 'react';

import {
  AccentGrid,
  AccentSwatch,
  ThemeMenu,
  ThemeMenuButton,
  ThemeMenuContent,
  ThemeMenuLabel,
  ThemeMenuSummary,
  ThemeSwitch,
  ThemeSwitchIcon,
  ThemeSwitchThumb,
  ThemeTriggerIcon,
} from '@/components/Header/components/HeaderThemeMenu.style';
import { HiddenLabel } from '@/components/Header/components/HeaderShared.style';
import type { ThemeMode } from '@styles/theme';
import { MoonIcon, PaletteIcon, SunIcon } from '@styles/icons';

interface HeaderThemeMenuLabels {
  themeSection: string;
  accentSection: string;
  accentGroup: string;
  toggleAria: string;
  menuButtonAria: string;
}

interface HeaderThemeMenuProps {
  menuRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  onToggle: () => void;
  themeMode: ThemeMode;
  onThemeSelect: (mode: ThemeMode) => void;
  accentOptions: string[];
  accentColor: string;
  onAccentSelect: (color: string) => void;
  accentLabel: (value: string, index: number) => string;
  labels: HeaderThemeMenuLabels;
}

export const HeaderThemeMenu = ({
  menuRef,
  isOpen,
  onToggle,
  themeMode,
  onThemeSelect,
  accentOptions,
  accentColor,
  onAccentSelect,
  accentLabel,
  labels,
}: HeaderThemeMenuProps) => (
  <ThemeMenu ref={menuRef}>
    <ThemeMenuButton type="button" onClick={onToggle} aria-haspopup="true" aria-expanded={isOpen} aria-label={labels.menuButtonAria}>
      <ThemeMenuSummary>
        <ThemeTriggerIcon>
          <PaletteIcon />
        </ThemeTriggerIcon>
      </ThemeMenuSummary>
    </ThemeMenuButton>

    <ThemeMenuContent $open={isOpen}>
      <ThemeMenuLabel>{labels.themeSection}</ThemeMenuLabel>
      <ThemeSwitch
        type="button"
        $mode={themeMode}
        onClick={() => onThemeSelect(themeMode === 'dark' ? 'light' : 'dark')}
        aria-label={labels.toggleAria}
      >
        <ThemeSwitchThumb $mode={themeMode} aria-hidden="true" />
        <ThemeSwitchIcon $active={themeMode === 'light'}>
          <SunIcon />
        </ThemeSwitchIcon>
        <ThemeSwitchIcon $active={themeMode === 'dark'}>
          <MoonIcon />
        </ThemeSwitchIcon>
      </ThemeSwitch>

      <ThemeMenuLabel>{labels.accentSection}</ThemeMenuLabel>
      <AccentGrid role="group" aria-label={labels.accentGroup}>
        {accentOptions.map((option, index) => (
          <AccentSwatch
            key={option}
            type="button"
            $color={option}
            $active={option === accentColor}
            onClick={() => onAccentSelect(option)}
            aria-pressed={option === accentColor}
            aria-label={accentLabel(option, index)}
            title={accentLabel(option, index)}
          >
            <HiddenLabel>{accentLabel(option, index)}</HiddenLabel>
          </AccentSwatch>
        ))}
      </AccentGrid>
    </ThemeMenuContent>
  </ThemeMenu>
);
