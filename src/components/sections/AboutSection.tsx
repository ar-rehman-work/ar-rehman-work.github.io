import SectionTitle from '../common/SectionTitle'
import { aboutContent } from '../../data/profileData'

function AboutSection() {
  return (
    <section id='about' className='section section--muted'>
      <div className='container'>
        <SectionTitle eyebrow='About' title={aboutContent.title} />
        <div className='content-stack'>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
