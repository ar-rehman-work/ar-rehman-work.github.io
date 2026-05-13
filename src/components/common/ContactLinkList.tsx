import type { SocialLink } from '../../data/socialLinks'

type ContactLinkListProps = {
  links: SocialLink[]
}

function ContactLinkList({ links }: ContactLinkListProps) {
  return (
    <ul className="contact-list" aria-label="Contact links">
      {links.map((link) => (
        <li key={link.label}>
          <span>{link.label}</span>
          <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ContactLinkList
