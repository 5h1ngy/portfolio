import type { HeaderProps } from './types'
import { useHeaderCompact } from './hooks'
import {
  AccentPicker,
  AccentSwatch,
  Brand,
  BrandName,
  BrandRole,
  Controls,
  HeaderInner,
  HeaderRoot,
  Nav,
  NavLink,
  ThemeToggle,
  Toggles,
} from './style'

export const Header = ({
  navigation,
  profile,
  themeMode,
  onToggleTheme,
  accentOptions,
  accentColor,
  onAccentChange,
}: HeaderProps) => {
  const isCompact = useHeaderCompact()

  return (
    <HeaderRoot $compact={isCompact}>
      <HeaderInner $compact={isCompact}>
        <Brand>
          <BrandName>{profile.name}</BrandName>
          <BrandRole>{profile.headline}</BrandRole>
        </Brand>
        <Controls>
          <Nav aria-label="Sezioni portfolio">
            {navigation.map((item) => (
              <NavLink key={item.targetId} href={`#${item.targetId}`}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <Toggles>
            <ThemeToggle type="button" onClick={onToggleTheme} aria-label="Cambia tema">
              <span aria-hidden>{themeMode === 'dark' ? '🌙' : '☀️'}</span>
            </ThemeToggle>
            <AccentPicker role="group" aria-label="Accent color">
              {accentOptions.map((option) => (
                <AccentSwatch
                  key={option}
                  type="button"
                  $color={option}
                  $active={option === accentColor}
                  onClick={() => onAccentChange(option)}
                  aria-pressed={option === accentColor}
                  aria-label={`Accent color ${option}`}
                />
              ))}
            </AccentPicker>
          </Toggles>
        </Controls>
      </HeaderInner>
    </HeaderRoot>
  )
}
