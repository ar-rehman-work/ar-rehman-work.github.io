import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ResumeSection from '../components/sections/ResumeSection'
import SkillsSection from '../components/sections/SkillsSection'

function HomePage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
