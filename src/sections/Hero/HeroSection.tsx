import styled, { keyframes } from 'styled-components'
import { SectionInner } from '../../components/layout/Section'
import type { PortfolioHero, PortfolioProfile } from '../../types/portfolio'

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
`

const HeroWrapper = styled.section`
  position: relative;
  padding: clamp(5rem, 10vw, 9rem) ${({ theme }) => theme.layout.gutter} clamp(6rem, 10vw, 9rem);
  overflow: hidden;
`

const HeroInner = styled(SectionInner)`
  display: grid;
  gap: clamp(2.5rem, 4vw, 3.5rem);
  align-items: start;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 3fr 2fr;
    align-items: center;
  }
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  background: rgba(92, 243, 233, 0.12);
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid rgba(92, 243, 233, 0.25);
`

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.display};
  line-height: 1.05;
`

const HeroSubtitle = styled.h2`
  font-size: clamp(1.25rem, 2.5vw, 2rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`

const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 640px;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const PrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: ${({ theme }) => theme.gradients.accent};
  color: #040713;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(93, 243, 232, 0.35);
  }
`

const SecondaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.45rem;
  border-radius: 999px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: rgba(6, 12, 26, 0.75);
  transition: transform 0.3s ease, border 0.3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const QuickFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

const Fact = styled.span<{ $delay: number }>`
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(140, 109, 255, 0.14);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.85rem;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`

const StatsPanel = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.4rem;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  background: rgba(10, 16, 36, 0.85);
  border: 1px solid rgba(148, 163, 198, 0.12);
  backdrop-filter: blur(16px);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const StatCard = styled.div`
  padding: 1rem 1.1rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  background: rgba(92, 243, 233, 0.08);
  border: 1px solid rgba(92, 243, 233, 0.16);
`

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.typography.fonts.heading};
  font-size: clamp(1.45rem, 2.5vw, 1.95rem);
  color: ${({ theme }) => theme.colors.textPrimary};
`

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SecondaryPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const Availability = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.15rem 1.3rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  border: 1px dashed rgba(92, 243, 233, 0.35);
  background: rgba(4, 7, 19, 0.65);

  span:first-child {
    font-family: ${({ theme }) => theme.typography.fonts.mono};
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

interface HeroSectionProps {
  hero: PortfolioHero
  profile: PortfolioProfile
}

export const HeroSection = ({ hero, profile }: HeroSectionProps) => (
  <HeroWrapper id="hero">
    <HeroInner>
      <div>
        <Badge>{hero.badge}</Badge>
        <HeroTitle>{hero.title}</HeroTitle>
        <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
        <HeroDescription>{hero.description}</HeroDescription>
        <Actions>
          <PrimaryAction
            href={hero.primaryAction.href}
            target={hero.primaryAction.external ? '_blank' : undefined}
            rel={hero.primaryAction.external ? 'noreferrer' : undefined}
          >
            {hero.primaryAction.label}
          </PrimaryAction>
          <SecondaryAction
            href={hero.secondaryAction.href}
            target={hero.secondaryAction.external ? '_blank' : undefined}
            rel={hero.secondaryAction.external ? 'noreferrer' : undefined}
          >
            {hero.secondaryAction.label}
          </SecondaryAction>
        </Actions>
        <QuickFacts>
          {hero.quickFacts.map((fact, index) => (
            <Fact key={fact} $delay={index * 0.25}>
              {fact}
            </Fact>
          ))}
        </QuickFacts>
      </div>
      <SecondaryPanel>
        <Availability>
          <span>Disponibilita</span>
          <span>{profile.availability}</span>
        </Availability>
        <StatsPanel>
          {hero.stats.map((stat) => (
            <StatCard key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsPanel>
      </SecondaryPanel>
    </HeroInner>
  </HeroWrapper>
)
