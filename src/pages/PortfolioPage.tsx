import { Fragment } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { AboutSection } from '../sections/About/AboutSection'
import { ExperienceSection } from '../sections/Experience/ExperienceSection'
import { HeroSection } from '../sections/Hero/HeroSection'
import { ProjectsSection } from '../sections/Projects/ProjectsSection'

export const PortfolioPage = () => {
  const { data } = usePortfolio()

  if (!data) {
    return null
  }

  return (
    <Fragment>
      <HeroSection hero={data.hero} profile={data.profile} />
      <AboutSection about={data.about} />
      <ExperienceSection experience={data.experience} />
      <ProjectsSection projects={data.projects} openSource={data.openSource} />
    </Fragment>
  )
}
