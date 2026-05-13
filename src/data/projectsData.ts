export type Project = {
  title: string
  stack: string
  description: string
  highlights: string[]
  preview: {
    shortUrl: string
    description: string
    metrics: string[]
  }
  links: {
    label: string
    href: string
    external?: boolean
  }[]
}

export const featuredProject: Project = {
  title: 'URL Shortener Platform',
  stack: 'Ruby on Rails / React / PostgreSQL',
  description:
    'A full stack URL management app designed around clean REST API endpoints, authenticated user flows, and reliable link creation. It is built to show practical backend decision-making rather than just a simple redirect demo.',
  highlights: [
    'Secure authentication flow for managing user-owned shortened links.',
    'Custom aliases, expiration dates, search/filtering, and paginated link management.',
    'Base62 short-code generation with a clean REST API design for create, redirect, and analytics-ready workflows.',
    'Roadmap includes Redis caching to speed up high-volume redirect lookups.',
  ],
  preview: {
    shortUrl: 'short.ly/aB92x',
    description: 'Redirects to a long product, article, or campaign URL',
    metrics: ['Auth', 'Base62', 'Pagination'],
  },
  links: [
    {
      label: 'View code on GitHub',
      href: 'https://github.com/ar-rehman-work',
      external: true,
    },
    {
      label: 'Discuss this project',
      href: '#contact',
    },
  ],
}
