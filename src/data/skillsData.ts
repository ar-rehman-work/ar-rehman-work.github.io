export type SkillItem = {
  name: string
  accent: string
}

export type SkillGroup = {
  group: string
  accent: string
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    group: 'Full Stack Development',
    accent: '#ef4444',
    items: [
      { name: 'Ruby on Rails', accent: '#cc342d' },
      { name: 'Python', accent: '#facc15' },
      { name: 'Django', accent: '#16a34a' },
      { name: 'Node.js', accent: '#65a30d' },
      { name: 'React', accent: '#38bdf8' },
    ],
  },
  {
    group: 'APIs & Architecture',
    accent: '#22d3ee',
    items: [
      { name: 'RESTful APIs', accent: '#22d3ee' },
      { name: 'GraphQL', accent: '#e879f9' },
      { name: 'Authentication', accent: '#fb7185' },
      { name: 'Scalable Architecture', accent: '#818cf8' },
      { name: 'Modular Backend Design', accent: '#2dd4bf' },
    ],
  },
  {
    group: 'Databases',
    accent: '#34d399',
    items: [
      { name: 'PostgreSQL', accent: '#60a5fa' },
      { name: 'MySQL', accent: '#f59e0b' },
      { name: 'MongoDB', accent: '#22c55e' },
      { name: 'Data Modeling', accent: '#a78bfa' },
      { name: 'Query Optimization', accent: '#34d399' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    accent: '#60a5fa',
    items: [
      { name: 'Git/GitHub', accent: '#f97316' },
      { name: 'Docker', accent: '#38bdf8' },
      { name: 'CI/CD', accent: '#c084fc' },
      { name: 'AWS', accent: '#f59e0b' },
      { name: 'Azure', accent: '#3b82f6' },
    ],
  },
  {
    group: 'Engineering Practices',
    accent: '#f59e0b',
    items: [
      { name: 'Performance Optimization', accent: '#f59e0b' },
      { name: 'Agile Development', accent: '#06b6d4' },
      { name: 'Cross Team Collaboration', accent: '#84cc16' },
      { name: 'Remote Async Work', accent: '#f472b6' },
    ],
  },
]
