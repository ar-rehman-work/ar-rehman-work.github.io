export type SkillGroup = {
  group: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    group: 'Full Stack Development',
    items: ['Ruby on Rails', 'Python', 'Django', 'Node.js', 'React'],
  },
  {
    group: 'APIs & Architecture',
    items: ['RESTful APIs', 'GraphQL', 'Authentication', 'Scalable Architecture', 'Modular Backend Design'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Data Modeling', 'Query Optimization'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Git/GitHub', 'Docker', 'CI/CD', 'AWS', 'Azure'],
  },
  {
    group: 'Engineering Practices',
    items: ['Performance Optimization', 'Agile Development', 'Cross-team Collaboration', 'Remote Async Work'],
  },
]
