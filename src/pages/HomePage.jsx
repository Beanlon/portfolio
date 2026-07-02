import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/hero/Hero'
import AboutMe from '../sections/about-me/AboutMe'
import AchievementsSection from '../sections/achievements/AchievementsSection'
import ProjectsSection from '../sections/projects/ProjectsSection'
import ContactMe from '../sections/contact/ContactMe'
import { achievements, featuredProjects, projects } from '../data/portfolio'

function scrollToSection(hash) {
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return
  }

  const id = hash.replace('#', '')
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      scrollToSection(location.hash)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <Hero />
        <AboutMe />
        <AchievementsSection
          title="Achievements & Certifications"
          description="Achievements and certifications I've earned throughout college — both academic and extracurricular."
          items={achievements}
        />
        <ProjectsSection
          title="Projects"
          description="A selection of projects spanning web apps, REST APIs, and full-stack work."
          featuredItems={featuredProjects}
          items={projects}
        />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}
