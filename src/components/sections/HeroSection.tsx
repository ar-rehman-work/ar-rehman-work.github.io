import ButtonLink from '../ui/ButtonLink'
import { heroFocusItems, profile } from '../../data/profileData'

function HeroSection() {
  return (
    <section id="top" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.headline}</h1>
          <p className="hero__lead">{profile.summary}</p>
          <div className="hero__actions" aria-label="Primary calls to action">
            <ButtonLink href="#projects">View featured project</ButtonLink>
            <ButtonLink href={profile.resumeRequestHref} variant="secondary">
              Request CV
            </ButtonLink>
          </div>
        </div>

        <aside className="hero-card" aria-label="Technical focus summary">
          <p className="hero-card__label">Current focus</p>
          <ul>
            {heroFocusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default HeroSection
