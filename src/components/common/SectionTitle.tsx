type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
  wide?: boolean
}

function SectionTitle({ eyebrow, title, description, id, wide = false }: SectionTitleProps) {
  return (
    <div className={`section-heading${wide ? ' section-heading--wide' : ''}`}>
      <p className='eyebrow'>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export default SectionTitle
