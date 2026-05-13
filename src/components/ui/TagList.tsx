import type { CSSProperties } from 'react'
import type { SkillItem } from '../../data/skillsData'

type TagListProps = {
  items: SkillItem[]
}

function TagList({ items }: TagListProps) {
  return (
    <ul className='tag-list'>
      {items.map((item) => (
        <li key={item.name} style={{ '--tag-accent': item.accent } as CSSProperties}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default TagList
