import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>

        <div className='footer__item'>
          <div className='footer__brand'>
            <h3>Abdul Rehman</h3>
            <p>Frontend Developer building modern web experiences.</p>
          </div>
        </div>

        <div className='footer__item'>
          <div className='footer__links'>
            <h4>Quick Links</h4>
            <ul>
              <li><a href='#about'>About</a></li>
              <li><a href='#work'>Work</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className='footer__item'>
          <div className='footer__social'>
            <h4>Connect</h4>
            <div className='footer__icons'>
              <a href='#'><Github size={18} /></a>
              <a href='#'><Linkedin size={18} /></a>
              <a href='#'><Mail size={18} /></a>
            </div>
          </div>
        </div>

      </div>

      <div className='footer__bottom'>
        <p>© {new Date().getFullYear()} Abdul Rehman. All rights reserved.</p>

        <a href='#hero' className='footer__top'>
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  )
}

export default Footer