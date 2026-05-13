import type { Project } from '../../data/projectsData'
import BrowserPreview from '../ui/BrowserPreview'
import FeatureList from '../ui/FeatureList'
import TextLink from '../ui/TextLink'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className='project-card project-card--featured'>
      <div className='project-card__visual' aria-label={`${project.title} project preview`}>
        <BrowserPreview
          shortUrl={project.preview.shortUrl}
          description={project.preview.description}
          metrics={project.preview.metrics}
        />
      </div>

      <div className='project-card__content'>
        <p className='eyebrow'>{project.stack}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <FeatureList items={project.highlights} />
        <div className='project-card__actions'>
          {project.links.map((link) => (
            <TextLink href={link.href} key={link.label} target={link.external ? '_blank' : undefined} rel='noreferrer'>
              {link.label}
            </TextLink>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
