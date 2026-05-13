type TagListProps = {
  items: string[]
}

function TagList({ items }: TagListProps) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default TagList
