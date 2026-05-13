import { profile } from '../../data/profileData'
import { certifications, education } from '../../data/experienceData'
import ButtonLink from '../ui/ButtonLink'

function ResumeSection() {
  return (
    <section className='section section--cta' aria-labelledby='resume-heading'>
      <div className='container resume-card'>
        <div>
          <p className='eyebrow'>Resume / CV</p>
          <h2 id='resume-heading'>Resume, education, and certifications.</h2>
          <p>
            {education.degree}, {education.school}. Certifications include {certifications.join(', ')}.
          </p>
        </div>
        <ButtonLink href={profile.resumeRequestHref}>Request CV</ButtonLink>
      </div>
    </section>
  )
}

export default ResumeSection
