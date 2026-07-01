import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:app-styles.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStackSection from './components/TechStackSection'
import ContactsSection from './components/ContactsSection'
import EducationSection from './components/EducationSection'
import AchievementsSection from './components/AchievementsSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import { achievements, featuredProjects, projects } from './data/portfolio'

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    document.title = 'Student Portfolio'
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="page-bg min-h-screen font-[family-name:var(--font-sans)] text-slate-800 transition-colors duration-300 dark:text-slate-100">
      <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main className="pt-20 sm:pt-24">
        <Hero />
        <TechStackSection />
        <ContactsSection />
        <EducationSection />
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
      </main>
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
