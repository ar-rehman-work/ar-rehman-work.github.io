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
    company: 'StackUp Technologies',
    location: 'Lahore, Pakistan',
    period: 'July 2025 - Present',
    highlights: [
      'Developing and maintaining full-stack SaaS features for a multifamily property management platform serving 1M+ users and 200+ property corporations.',
      'Designing and optimizing APIs and backend services for SaaS architecture, reducing API latency by roughly 30% and improving system efficiency by roughly 20%.',
      'Collaborating with cross-functional teams in a remote, asynchronous environment across time zones.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Rastah Labs',
    location: 'Lahore, Pakistan',
    period: 'Feb 2023 - July 2025',
    highlights: [
      'Developed and maintained a booking and operations platform used by 6,500+ barbers, improving scheduling workflows and user experience.',
      'Contributed to a web crawling system that enabled access to 120+ previously uncrawlable websites, supporting data-driven business value of roughly $2M.',
      'Maintained an LMS supporting course delivery, student management, and administrative workflows.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Software Engineering',
  school: 'Punjab University College of Information Technology (PUCIT)',
  location: 'Lahore, Pakistan',
  graduation: 'Graduated: 2023',
}

export const certifications = [
  'Microsoft Azure DP-100',
  'Docker Certified Associate',
  'Python Certified Associate',
]
