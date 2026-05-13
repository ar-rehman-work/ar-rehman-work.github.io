type FeatureListProps = {
  items: string[]
}

function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default FeatureList
