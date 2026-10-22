
import { profile } from './profileData'

export type SocialLink = {
  label: string
  href: string
  text: string
  external?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    text: profile.email,
  },
  {
    label: 'Phone',
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    text: profile.phone,
  },
  {
    label: 'GitHub',
    href: profile.github,
    text: 'github.com/ar-rehman-work',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedIn,
    text: 'linkedin.com/in/ar-rehman-work',
    external: true,
  },
  {
    label: 'Behance',
    href: profile.behance,
    text: 'behance.net/abdul_rehman_swe',
    external: true,
  },
]
