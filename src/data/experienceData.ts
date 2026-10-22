
export type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Baaytrix',
    location: 'Faisalabad, Pakistan (Remote)',
    period: 'May 2026 - Present',
    highlights: [
      'Developing and maintaining web applications across backend services, frontend features, and API integrations.',
      'Integrating AI and LLM APIs using prompt engineering and structured AI responses.',
      'Implementing retrieval-augmented generation (RAG) solutions using embeddings and vector search.',
      'Enhancing LMS platforms including Brain Box Academy and Code S Academy, supporting course delivery and user management workflows.',
      'Improving application reliability, performance, and maintainability through backend development and architectural improvements.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'StackUp Technologies',
    location: 'Lahore, Pakistan (On-site)',
    period: 'July 2025 - April 2026',
    highlights: [
      'Developed backend services for Hyly.ai, an AI-powered PropTech SaaS platform supporting 1M+ residential units and 8.7M+ renter engagements.',
      'Designed and optimized REST and GraphQL APIs, reducing API latency by approximately 30%.',
      'Optimized PostgreSQL and MongoDB queries and implemented Redis caching and asynchronous processing.',
      'Investigated production issues using New Relic and Grafana to improve system reliability.',
      'Collaborated with distributed engineering teams in a remote, asynchronous environment.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Rastah Labs',
    location: 'Lahore, Pakistan (On-site)',
    period: 'August 2023 - July 2025',
    highlights: [
      'Developed features for Nearcut, a booking and business management platform serving 6,500+ businesses.',
      'Contributed to Crawlbase, a web crawling platform providing access to 120+ previously inaccessible websites.',
      'Contributed to application features, workflows, and maintainable software architecture.',
      'Collaborated with team members through code reviews, debugging, and Agile development practices.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'GrubExpress',
    location: 'Faisalabad, Pakistan (Remote)',
    period: 'March 2021 - July 2023',
    highlights: [
      'Developed and maintained full-stack web applications for Junior Coderz, delivering product features and backend functionality.',
      'Built and integrated APIs connecting backend services with frontend applications and third-party platforms.',
      'Integrated the WhatsApp API to automate class scheduling and notifications.',
      'Designed reusable components and optimized database operations to improve application performance and maintainability.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Software Engineering',
  school: 'Punjab University College of Information Technology (PUCIT)',
  location: 'Lahore, Pakistan',
  graduation: '2023',
}

export const certifications = [
  'Microsoft Azure Data Scientist Associate (DP-100)',
  'Docker Certified Associate',
  'Python Certified Associate',
]
