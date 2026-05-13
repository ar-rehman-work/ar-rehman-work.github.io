import { aboutContent } from '../../data/profileData'

function AboutSection() {
  return (
    <section id="about" className="section section--muted">
      <div className="container split-layout">
        <div>
          <p className="eyebrow">About</p>
          <h2>{aboutContent.title}</h2>
        </div>
        <div className="content-stack">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
