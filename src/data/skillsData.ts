
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
    group: 'Full-Stack Development',
    accent: '#ef4444',
    items: [
      { name: 'Ruby on Rails', accent: '#cc342d' },
      { name: 'Python', accent: '#facc15' },
      { name: 'Django', accent: '#16a34a' },
      { name: 'FastAPI', accent: '#2dd4bf' },
      { name: 'Node.js', accent: '#65a30d' },
      { name: 'Express.js', accent: '#a3a3a3' },
      { name: 'React', accent: '#38bdf8' },
      { name: 'Next.js', accent: '#e5e7eb' },
      { name: 'JavaScript', accent: '#facc15' },
      { name: 'TypeScript', accent: '#3b82f6' },
    ],
  },
  {
    group: 'AI & LLM Integration',
    accent: '#a78bfa',
    items: [
      { name: 'LLM API Integration', accent: '#a78bfa' },
      { name: 'Prompt Engineering', accent: '#c084fc' },
      { name: 'Retrieval-Augmented Generation (RAG)', accent: '#22d3ee' },
      { name: 'Embeddings', accent: '#818cf8' },
      { name: 'Vector Search', accent: '#2dd4bf' },
      { name: 'Structured AI Responses', accent: '#f472b6' },
    ],
  },
  {
    group: 'APIs & Architecture',
    accent: '#22d3ee',
    items: [
      { name: 'RESTful APIs', accent: '#22d3ee' },
      { name: 'GraphQL', accent: '#e879f9' },
      { name: 'Authentication & Authorization', accent: '#fb7185' },
      { name: 'Object-Oriented Programming', accent: '#818cf8' },
      { name: 'SOLID Principles', accent: '#2dd4bf' },
      { name: 'Modular Monoliths', accent: '#34d399' },
      { name: 'Scalable System Design', accent: '#60a5fa' },
      { name: 'Asynchronous Processing', accent: '#f59e0b' },
      { name: 'Caching', accent: '#f97316' },
    ],
  },
  {
    group: 'Databases & Performance',
    accent: '#34d399',
    items: [
      { name: 'PostgreSQL', accent: '#60a5fa' },
      { name: 'MongoDB', accent: '#22c55e' },
      { name: 'MySQL', accent: '#f59e0b' },
      { name: 'Redis', accent: '#ef4444' },
      { name: 'Data Modeling', accent: '#a78bfa' },
      { name: 'Query Optimization', accent: '#34d399' },
      { name: 'Performance Optimization', accent: '#f59e0b' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    accent: '#60a5fa',
    items: [
      { name: 'AWS', accent: '#f59e0b' },
      { name: 'Microsoft Azure', accent: '#3b82f6' },
      { name: 'Google Cloud', accent: '#4285f4' },
      { name: 'Docker', accent: '#38bdf8' },
      { name: 'CI/CD', accent: '#c084fc' },
      { name: 'Linux & Bash', accent: '#a3a3a3' },
      { name: 'Git & GitHub', accent: '#f97316' },
    ],
  },
  {
    group: 'Testing & Engineering Practices',
    accent: '#f59e0b',
    items: [
      { name: 'RSpec', accent: '#cc342d' },
      { name: 'Pytest', accent: '#3572a5' },
      { name: 'Production Troubleshooting', accent: '#fb7185' },
      { name: 'Agile Development', accent: '#06b6d4' },
      { name: 'Cross-Team Collaboration', accent: '#84cc16' },
      { name: 'Remote & Async Collaboration', accent: '#f472b6' },
      { name: 'Clean, Maintainable Code', accent: '#2dd4bf' },
    ],
  },
]
