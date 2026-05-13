import SectionTitle from '../common/SectionTitle'
import TimelineItem from '../common/TimelineItem'
import { experience } from '../../data/experienceData'

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle eyebrow="Experience" title="Focused on backend engineering and full stack delivery." />
        <div className="timeline" aria-label="Experience highlights">
          {experience.map((item) => (
            <TimelineItem item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
