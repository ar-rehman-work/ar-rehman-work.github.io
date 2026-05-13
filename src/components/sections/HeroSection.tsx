import ButtonLink from '../ui/ButtonLink'
import { heroFocusItems, profile } from '../../data/profileData'

function HeroSection() {
  return (
    <section id='top' className='hero section'>
      <div className='container hero__grid'>
        <div className='hero__content'>
          <h1 className='hero__role'>
            <span>Senior Software Engineer</span>
            <span>Full Stack Developer</span>
          </h1>
            <p className='hero__headline'>{profile.headline}</p>
            <p className='hero__lead'>{profile.summary}</p>
            <div className='hero-focus' aria-label='Current focus areas'>
              <p className='hero-focus__label'>Current focus</p>
              <ul>
                {heroFocusItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='hero__actions' aria-label='Primary calls to action'>
              <ButtonLink href='#projects'>Featured project</ButtonLink>
              <ButtonLink href='#contact' variant='secondary'>
                Contact me
              </ButtonLink>
            </div>
        </div>

        <div className='hero__photo-wrap'>
          <img className='hero__photo' src={profile.photo} alt={`${profile.name}, senior software engineer`} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
