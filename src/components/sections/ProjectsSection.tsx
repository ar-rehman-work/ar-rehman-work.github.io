import ProjectCard from '../common/ProjectCard'
import SectionTitle from '../common/SectionTitle'
import { featuredProject } from '../../data/projectsData'

function ProjectsSection() {
  return (
    <section id="projects" className="section section--muted">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Project"
          title="URL Shortener with authentication, custom aliases, expiration, and API-first design."
          description="A production-minded project that demonstrates backend engineering fundamentals, database-backed CRUD, user workflows, and practical frontend management screens."
          wide
        />
        <ProjectCard project={featuredProject} />
      </div>
    </section>
  )
}

export default ProjectsSection
