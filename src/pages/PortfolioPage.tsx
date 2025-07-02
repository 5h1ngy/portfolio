import { Fragment } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { AboutSection } from '../sections/About/AboutSection'
import { ContactSection } from '../sections/Contact/ContactSection'
import { ContributionsSection } from '../sections/Contributions/ContributionsSection'
import { ExperienceSection } from '../sections/Experience/ExperienceSection'
import { HeroSection } from '../sections/Hero/HeroSection'
import { OpenSourceSection } from '../sections/Projects/OpenSourceSection'
import { ProjectsSection } from '../sections/Projects/ProjectsSection'
import { SkillsSection } from '../sections/Skills/SkillsSection'

export const PortfolioPage = () => {
  const { data } = usePortfolio()

  if (!data) {
    return null
  }

  return (
    <Fragment>
      <HeroSection hero={data.hero} profile={data.profile} />
      <AboutSection about={data.about} />
      <OpenSourceSection openSource={data.openSource} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <ProjectsSection projects={data.projects} />
      <ContributionsSection contributions={data.contributions} />
      <ContactSection contact={data.contact} />
    </Fragment>
  )
}
