import type { ExperienceItem } from '../../data/experienceData'

type TimelineItemProps = {
  item: ExperienceItem
}

function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className='timeline-item'>
      <h3>{item.title}</h3>
      <p className='timeline-item__meta'>
        {item.company} | {item.location} | {item.period}
      </p>
      <ul className='feature-list feature-list--compact'>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}

export default TimelineItem
