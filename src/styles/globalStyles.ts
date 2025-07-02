import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  color-scheme: dark;
  --app-background: #040713;
  --app-surface: #0b122b;
  --app-surface-muted: #111a36;
  --app-surface-elevated: #192754;
  --app-text-primary: #e6f1ff;
  --app-text-secondary: #a0acc5;
  --app-text-muted: #7482a6;
  --app-accent: #5cf3e9;
  --app-border: rgba(148, 163, 198, 0.16);
  --app-shadow: 0 18px 40px rgba(4, 9, 25, 0.38);
  --app-radius-md: 16px;
  --app-radius-lg: 24px;
  --app-transition: 160ms ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--app-background);
  color: var(--app-text-primary);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:focus-visible {
  color: var(--app-accent);
}

img {
  max-width: 100%;
  display: block;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--app-gradient-background);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.app-main {
  flex: 1;
  width: min(980px, calc(100% - 2.5rem));
  margin: 0 auto;
  padding: 5rem 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 3rem 0;
  scroll-margin-top: 6rem;
}

.section:not(:first-of-type) {
  border-top: 1px solid rgba(148, 163, 198, 0.16);
}

.section:first-of-type {
  padding-top: 1.5rem;
}

.section:last-of-type {
  padding-bottom: 0;
}

.section--subtle {
  padding-block: 2.5rem;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-accent {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--app-accent);
  font-weight: 600;
}

.section-title {
  font-size: clamp(1.45rem, 3vw, 2rem);
  margin: 0;
}

.section-description {
  margin: 0;
  color: var(--app-text-secondary);
}

.section-content {
  display: grid;
  gap: 1.75rem;
}

.card-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 640px) {
  .card-grid--two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border-radius: 999px;
  border: 1px solid rgba(92, 243, 233, 0.2);
  padding: 0.35rem 0.9rem;
  font-size: 0.82rem;
  color: var(--app-text-secondary);
  background: rgba(12, 22, 48, 0.45);
  backdrop-filter: blur(18px);
}

.pill--glow {
  border-color: rgba(92, 243, 233, 0.55);
  background: rgba(92, 243, 233, 0.16);
  color: rgba(92, 243, 233, 0.95);
  box-shadow: 0 8px 24px rgba(92, 243, 233, 0.22);
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.stat-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.stat-card {
  flex: 1 1 140px;
  border-radius: var(--app-radius-md);
  border: 1px solid rgba(92, 243, 233, 0.18);
  background: rgba(12, 20, 46, 0.5);
  backdrop-filter: blur(18px);
  padding: 0.95rem 1.2rem;
}

.stat-card span {
  display: block;
}

.stat-card__value {
  font-size: 1.25rem;
  font-weight: 600;
}

.stat-card__label {
  font-size: 0.85rem;
  color: var(--app-text-muted);
}


.timeline-card__header {
  display: grid;
  gap: 0.85rem;
}

.timeline-card__header-top {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.timeline-card__heading {
  display: grid;
  gap: 0.4rem;
}

.timeline-card__period {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--app-accent);
}

.timeline-card__title {
  margin: 0;
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  letter-spacing: 0.01em;
}

.timeline-card__subtitle {
  margin: 0;
  color: var(--app-text-muted);
  font-size: 0.95rem;
}

.timeline-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(11, 26, 46, 0.75);
  border: 1px solid rgba(92, 243, 233, 0.25);
}

.badge--location {
  color: var(--app-text-primary);
}

.badge--scope {
  color: rgba(92, 243, 233, 0.9);
}

.badge--impact {
  color: rgba(141, 124, 255, 0.9);
}

.badge--ghost {
  background: rgba(8, 20, 42, 0.55);
  border-color: rgba(92, 243, 233, 0.18);
  color: var(--app-text-secondary);
}

.timeline-card__toggle {
  appearance: none;
  border: 1px solid rgba(92, 243, 233, 0.28);
  border-radius: 999px;
  background: rgba(5, 18, 36, 0.65);
  color: var(--app-text-secondary);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.45rem 1.1rem;
  cursor: pointer;
  transition: background var(--app-transition), color var(--app-transition), border-color var(--app-transition);
  margin-left: auto;
}

.timeline-card__toggle:hover,
.timeline-card__toggle:focus-visible {
  color: var(--app-text-primary);
  border-color: rgba(92, 243, 233, 0.6);
  background: rgba(6, 24, 48, 0.85);
}

.timeline-card__summary {
  display: grid;
  gap: 0.75rem;
}

.timeline-card__summary-text {
  margin: 0;
  color: var(--app-text-secondary);
  font-size: 0.95rem;
  line-height: 1.55;
}

.timeline-card__summary-text--expanded {
  max-width: 60ch;
}

.timeline-card__highlights {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
  color: var(--app-text-secondary);
}

.timeline-card__highlights li {
  line-height: 1.5;
}

.timeline-card__content {
  display: none;
}

.timeline-card__content--visible {
  display: grid;
  gap: 1.5rem;
  animation: timeline-expand 260ms ease;
}

.timeline-card__grid {
  display: grid;
  gap: 1.25rem;
}

.timeline-card__grid > div {
  display: grid;
  gap: 0.75rem;
}

.timeline-card__grid h4 {
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(92, 243, 233, 0.85);
}

.timeline-card__links {
  display: grid;
  gap: 0.75rem;
}

.timeline-card__links h4 {
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(141, 124, 255, 0.85);
}

@keyframes timeline-expand {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  border-radius: var(--app-radius-md);
  border: 1px solid rgba(92, 243, 233, 0.18);
  background: rgba(13, 28, 58, 0.45);
  backdrop-filter: blur(18px);
  padding: 1.1rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card__title {
  margin: 0;
  font-size: 1.05rem;
}

.card__subtitle {
  margin: 0;
  color: var(--app-text-muted);
  font-size: 0.85rem;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.link {
  color: var(--app-accent);
  font-weight: 500;
  font-size: 0.88rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table tr + tr td {
  border-top: 1px solid rgba(148, 163, 198, 0.16);
}

.table td {
  padding: 0.75rem 0;
  vertical-align: top;
}

.table__label {
  color: var(--app-text-muted);
  width: 160px;
  font-size: 0.9rem;
}

.table__value {
  font-size: 1rem;
}

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(92, 243, 233, 0.4);
  padding: 0.65rem 1.35rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  background: rgba(6, 18, 38, 0.6);
  color: var(--app-text-primary);
  transition: background var(--app-transition), border-color var(--app-transition), transform var(--app-transition),
    box-shadow var(--app-transition);
  box-shadow: 0 0 0 0 rgba(92, 243, 233, 0.35);
}

.button--primary {
  background: linear-gradient(135deg, rgba(92, 243, 233, 0.96), rgba(141, 124, 255, 0.93));
  color: #041320;
  border-color: rgba(92, 243, 233, 0.8);
  box-shadow: 0 22px 40px rgba(92, 243, 233, 0.35);
}

.button--secondary {
  background: rgba(92, 243, 233, 0.14);
  border-color: rgba(92, 243, 233, 0.4);
  color: rgba(92, 243, 233, 0.95);
  box-shadow: 0 0 22px rgba(92, 243, 233, 0.16);
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
  border-color: rgba(92, 243, 233, 0.85);
  box-shadow: 0 16px 40px rgba(92, 243, 233, 0.28);
}

.app-footer {
  padding: 3rem 0 2.5rem;
  border-top: 1px solid rgba(148, 163, 198, 0.16);
  background: radial-gradient(circle at 35% -20%, rgba(92, 243, 233, 0.1) 0%, transparent 45%),
    linear-gradient(180deg, rgba(4, 7, 19, 0.2), rgba(4, 7, 19, 0.85));
}

.app-footer__inner {
  width: min(980px, calc(100% - 2.5rem));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.app-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.app-footer__meta {
  font-size: 0.82rem;
  color: var(--app-text-muted);
}

@media (max-width: 720px) {
  .app-main {
    width: calc(100% - 1.5rem);
    padding-top: 4rem;
  }

  .timeline {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.75rem;
    padding-inline: 0.5rem;
  }

  .timeline::before {
    inset-inline-start: 1rem;
  }

  .timeline-card,
  .timeline-card--left,
  .timeline-card--right {
    grid-column: 1 / -1;
    justify-self: stretch;
  }

  .timeline-card__marker {
    left: -2.6rem;
    right: auto;
  }

  .timeline-card__body {
    width: 100%;
    margin: 0;
  }

  .timeline-card__body--expanded {
    width: 100%;
    padding-inline: 1.5rem;
  }

  .timeline-card--left {
    margin: 50;
  }

  .timeline-card--right  {
    margin: 50;
  }

  .timeline-card__body {
    margin: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3.5rem 5rem;
  align-items: start;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  inset-block: 0;
  inset-inline-start: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: linear-gradient(180deg, rgba(92, 243, 233, 0.16), rgba(92, 243, 233, 0.04));
}

.timeline-card {
  position: relative;
  display: flex;
  width: 100%;
}

.timeline-card--left {
  grid-column: 1 / 2;
  justify-self: end;
  display: flex;
  justify-content: flex-end;
}

.timeline-card--right {
  grid-column: 2 / 3;
  justify-self: start;
  display: flex;
  justify-content: flex-start;
}

.timeline-card__marker {
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  background: rgba(4, 18, 36, 0.9);
  border: 1px solid rgba(92, 243, 233, 0.65);
  color: var(--app-text-primary);
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0 12px 28px rgba(6, 26, 44, 0.45);
  white-space: nowrap;
}

.timeline-card--left .timeline-card__marker {
  right: -3.2rem;
}

.timeline-card--right .timeline-card__marker {
  left: -3.2rem;
}

.timeline-card__body {
  position: relative;
  width: min(320px, 100%);
  border-radius: var(--app-radius-lg);
  border: 1px solid rgba(92, 243, 233, 0.14);
  background: rgba(8, 18, 38, 0.72);
  backdrop-filter: blur(18px);
  padding: 1.1rem 1.4rem;
  display: grid;
  gap: 1.1rem;
  box-shadow: 0 18px 42px rgba(4, 14, 34, 0.32);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 200ms ease, background 200ms ease;
}

.timeline-card__body:hover {
  transform: translateY(-2px);
  border-color: rgba(92, 243, 233, 0.28);
}

.timeline-card--left .timeline-card__body {
  margin-right: -1.25rem;
}

.timeline-card--right .timeline-card__body {
  margin-left: 1.75rem;
}

.timeline-card__body--expanded {
  width: min(460px, calc(100% + 40px));
  border-color: rgba(92, 243, 233, 0.5);
  background: rgba(4, 16, 36, 0.86);
  box-shadow: 0 32px 72px rgba(6, 22, 48, 0.55);
  padding: 1.6rem 1.9rem;
}

`;
