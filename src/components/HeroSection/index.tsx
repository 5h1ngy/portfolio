import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import { HeroOrbit } from '@components/HeroOrbit'
import { isExternal } from '@components/HeroSection/helpers'
import type { HeroSectionProps } from '@components/HeroSection/types'
import {
  HeroActions,
  HeroDescription,
  HeroEyebrow,
  HeroLayout,
  HeroLead,
  HeroLinks,
  HeroLinksLabel,
  HeroLinksList,
  HeroLink,
  HeroSectionWrapper,
  HeroSubtitle,
  HeroTitle,
  PrimaryButton,
  SecondaryButton,
} from '@components/HeroSection/style'

gsap.registerPlugin(TextPlugin)

const TYPING_BASE_SPEED = 0.08
const TYPING_MIN_DURATION = 1.2

export const HeroSection = ({ hero, socialLinks }: HeroSectionProps) => {
  const primaryLinks = useMemo(
    () => socialLinks.filter((link) => link.type === 'linkedin' || link.type === 'github').slice(0, 2),
    [socialLinks],
  )

  const typingSequence = useMemo(
    () => (hero.typingTitles && hero.typingTitles.length > 0 ? hero.typingTitles : [hero.title]),
    [hero.typingTitles, hero.title],
  )

  const sequenceKey = useMemo(() => typingSequence.join('|'), [typingSequence])
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) {
      return
    }

    const node = titleRef.current
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.9, defaults: { ease: 'none' } })

    tl.set(node, { text: '' })

    typingSequence.forEach((word) => {
      const duration = Math.max(word.length * TYPING_BASE_SPEED, TYPING_MIN_DURATION)

      tl.to(node, { duration, text: word })
        .to(node, { duration: 0.6, text: word })
        .to(node, { duration: Math.min(duration * 0.45, 1.1), text: '' })
    })

    return () => {
      tl.kill()
    }
  }, [sequenceKey, typingSequence])

  return (
    <HeroSectionWrapper id="hero">
      <HeroLayout>
        <HeroLead>
          {hero.eyebrow && <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>}
          <HeroTitle ref={titleRef} aria-live="polite">
            {typingSequence[0]}
          </HeroTitle>
          {hero.subtitle && <HeroSubtitle>{hero.subtitle}</HeroSubtitle>}
          <HeroDescription>{hero.description}</HeroDescription>
          {primaryLinks.length > 0 && (
            <HeroLinks>
              <HeroLinksLabel>Connect</HeroLinksLabel>
              <HeroLinksList>
                {primaryLinks.map((link) => (
                  <HeroLink key={link.label} href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                  </HeroLink>
                ))}
              </HeroLinksList>
            </HeroLinks>
          )}
          <HeroActions>
            <PrimaryButton
              href={hero.primaryAction.href}
              target={isExternal(hero.primaryAction.href, hero.primaryAction.external) ? '_blank' : undefined}
              rel={isExternal(hero.primaryAction.href, hero.primaryAction.external) ? 'noreferrer' : undefined}
            >
              {hero.primaryAction.label}
            </PrimaryButton>
            {hero.secondaryAction?.href && (
              <SecondaryButton
                href={hero.secondaryAction.href}
                target={isExternal(hero.secondaryAction.href, hero.secondaryAction.external) ? '_blank' : undefined}
                rel={isExternal(hero.secondaryAction.href, hero.secondaryAction.external) ? 'noreferrer' : undefined}
              >
                {hero.secondaryAction.label}
              </SecondaryButton>
            )}
          </HeroActions>
        </HeroLead>
        <HeroOrbit orbit={hero.orbit} />
      </HeroLayout>
    </HeroSectionWrapper>
  )
}
