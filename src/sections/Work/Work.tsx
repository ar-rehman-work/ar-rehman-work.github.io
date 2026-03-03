import { useState } from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'

const Work = () => {
  const [active, setActive] = useState<'skills' | 'projects' | 'experience'>('skills')

  return (
    <section id='work' className='work'>
      <h2>My Work</h2>

      <div className='work__tabs'>
        <button className={active === 'skills' ? 'active' : ''} onClick={() => setActive('skills')}>Skills</button>
        <button className={active === 'projects' ? 'active' : ''} onClick={() => setActive('projects')}>Projects</button>
        <button className={active === 'experience' ? 'active' : ''} onClick={() => setActive('experience')}>Experience</button>
      </div>

      <div className='work__content'>
        {active === 'skills' && <Skills />}
        {active === 'projects' && <Projects />}
        {active === 'experience' && <Experience />}
      </div>
    </section>
  )
}

export default Work