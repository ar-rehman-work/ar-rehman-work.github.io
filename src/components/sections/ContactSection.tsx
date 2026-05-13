import ContactLinkList from '../common/ContactLinkList'
import { profile } from '../../data/profileData'
import { socialLinks } from '../../data/socialLinks'

function ContactSection() {
  return (
    <section id="contact" className="section section--muted">
      <div className="container split-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something useful.</h2>
        </div>
        <div className="contact-panel">
          <p>
            I am based in {profile.location} and open to senior full stack, backend, and API-focused software
            engineering opportunities. The fastest way to reach me is by email or LinkedIn.
          </p>
          <ContactLinkList links={socialLinks} />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
