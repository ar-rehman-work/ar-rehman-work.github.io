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
    href: `tel:${profile.phone.replaceAll(' ', '')}`,
    text: profile.phone,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ar-rehman-work',
    text: 'github.com/ar-rehman-work',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedIn,
    text: 'linkedin.com/in/ar-rehman-work',
    external: true,
  },
]
