import { useEffect, useMemo, useRef, useState } from 'react';
import type { SVGProps } from 'react';

import type { HeaderProps } from '@components/Header/types';
import { useHeaderCompact } from '@components/Header/hooks';
import {
  AccentGrid,
  AccentSwatch,
  Controls,
  HeaderInner,
  HeaderRoot,
  HiddenLabel,
  MobileBackdrop,
  MobileToggle,
  Nav,
  NavLink,
  ThemeMenu,
  ThemeMenuButton,
  ThemeMenuContent,
  ThemeMenuLabel,
  ThemeMenuSummary,
  ThemeSwitch,
  ThemeSwitchIcon,
  ThemeSwitchThumb,
  ThemeTriggerIcon,
} from '@components/Header/style';

const ACCENT_LABELS: Record<string, string> = {
  '#5cf3e9': 'Aqua glow',
  '#ff7de8': 'Magenta pulse',
  '#6dff89': 'Lime spark',
  '#7ca9ff': 'Azure breeze',
};

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95 5.636 18.364M18.364 18.364 16.95 16.95M7.05 7.05 5.636 5.636" />
  </svg>
);

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
  </svg>
);

const PaletteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h1a4 4 0 0 0 0-8 5 5 0 0 0-5-7Z" />
    <circle cx="8.5" cy="10.5" r="0.75" />
    <circle cx="12" cy="7.5" r="0.75" />
    <circle cx="15.5" cy="10.5" r="0.75" />
  </svg>
);

export const Header = ({
  navigation,
  themeMode,
  onThemeChange,
  accentOptions,
  accentColor,
  onAccentChange,
}: HeaderProps) => {
  const isCompact = useHeaderCompact();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 720);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsNavOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen, isMobile]);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!themeMenuRef.current) {
        return;
      }

      if (!themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      setIsThemeMenuOpen(false);
    }
  }, [isNavOpen]);

  const accentLabel = (value: string, index: number) => ACCENT_LABELS[value] ?? `Accent color ${index + 1}`;

  const accentSummary = useMemo(() => {
    const index = accentOptions.indexOf(accentColor);
    const safeIndex = index >= 0 ? index : 0;
    return accentLabel(accentColor, safeIndex);
  }, [accentColor, accentOptions]);

  const menuLabel = isNavOpen ? 'Chiudi navigazione' : 'Apri navigazione';

  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  const handleThemeSelect = (mode: typeof themeMode) => {
    if (mode !== themeMode) {
      onThemeChange(mode);
    }
    setIsThemeMenuOpen(false);
  };

  return (
    <HeaderRoot $compact={isCompact}>
      <HeaderInner $compact={isCompact}>
        <Controls>
          <Nav id='primary-navigation' aria-label='Sezioni portfolio' $isOpen={isMobile ? isNavOpen : true}>
            {navigation.map((item) => (
              <NavLink key={item.targetId} href={`#${item.targetId}`} onClick={handleNavLinkClick}>
                {item.label}
              </NavLink>
            ))}
          </Nav>

          <MobileToggle
            type='button'
            onClick={() => {
              setIsNavOpen((open) => !open);
              setIsThemeMenuOpen(false);
            }}
            aria-expanded={isNavOpen}
            aria-controls='primary-navigation'
            $isActive={isNavOpen}
          >
            <HiddenLabel>{menuLabel}</HiddenLabel>
            <span aria-hidden>{isNavOpen ? 'Close' : 'Menu'}</span>
          </MobileToggle>

          <ThemeMenu ref={themeMenuRef}>
            <ThemeMenuButton
              type='button'
              onClick={() => setIsThemeMenuOpen((open) => !open)}
              aria-haspopup='true'
              aria-expanded={isThemeMenuOpen}
              aria-label={`Impostazioni tema: ${themeMode === 'dark' ? 'tema scuro' : 'tema chiaro'} - ${accentSummary}`}
            >
              <ThemeMenuSummary>
                <ThemeTriggerIcon>
                  <PaletteIcon />
                </ThemeTriggerIcon>
              </ThemeMenuSummary>
            </ThemeMenuButton>

            <ThemeMenuContent $open={isThemeMenuOpen}>
              <ThemeMenuLabel>Tema</ThemeMenuLabel>
              <ThemeSwitch
                type='button'
                $mode={themeMode}
                onClick={() => handleThemeSelect(themeMode === 'dark' ? 'light' : 'dark')}
                aria-label={`Passa al tema ${themeMode === 'dark' ? 'chiaro' : 'scuro'}`}
              >
                <ThemeSwitchThumb $mode={themeMode} aria-hidden='true' />
                <ThemeSwitchIcon $active={themeMode === 'light'}>
                  <SunIcon />
                </ThemeSwitchIcon>
                <ThemeSwitchIcon $active={themeMode === 'dark'}>
                  <MoonIcon />
                </ThemeSwitchIcon>
              </ThemeSwitch>

              <ThemeMenuLabel>Accent</ThemeMenuLabel>
              <AccentGrid role='group' aria-label='Colori accentati'>
                {accentOptions.map((option, index) => (
                  <AccentSwatch
                    key={option}
                    type='button'
                    $color={option}
                    $active={option === accentColor}
                    onClick={() => onAccentChange(option)}
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
        </Controls>
      </HeaderInner>

      <MobileBackdrop
        type='button'
        $visible={isMobile && isNavOpen}
        aria-hidden={!(isMobile && isNavOpen)}
        onClick={() => setIsNavOpen(false)}
      />
    </HeaderRoot>
  );
};
