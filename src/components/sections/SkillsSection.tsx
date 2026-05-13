import SkillCard from '../common/SkillCard'
import SectionTitle from '../common/SectionTitle'
import { skills } from '../../data/skillsData'

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle eyebrow="Skills" title="Technologies I use to build web applications." />
        <div className="skills-grid" aria-label="Technical skills grouped by area">
          {skills.map((skillGroup) => (
            <SkillCard skillGroup={skillGroup} key={skillGroup.group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
