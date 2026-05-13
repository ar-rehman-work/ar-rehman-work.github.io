import type { CSSProperties } from 'react'
import type { SkillGroup } from '../../data/skillsData'
import TagList from '../ui/TagList'

type SkillCardProps = {
  skillGroup: SkillGroup
}

function SkillCard({ skillGroup }: SkillCardProps) {
  const cardStyle = {
    '--skill-accent': skillGroup.accent,
  } as CSSProperties

  return (
    <article className='skill-card' style={cardStyle}>
      <h3>{skillGroup.group}</h3>
      <TagList items={skillGroup.items} />
    </article>
  )
}

export default SkillCard
