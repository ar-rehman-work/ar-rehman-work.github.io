import type { SkillGroup } from '../../data/skillsData'
import TagList from '../ui/TagList'

type SkillCardProps = {
  skillGroup: SkillGroup
}

function SkillCard({ skillGroup }: SkillCardProps) {
  return (
    <article className="skill-card">
      <h3>{skillGroup.group}</h3>
      <TagList items={skillGroup.items} />
    </article>
  )
}

export default SkillCard
