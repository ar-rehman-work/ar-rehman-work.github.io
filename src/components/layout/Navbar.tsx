import { useState } from 'react'
import { navLinks, profile } from '../../data/profileData'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className='site-header' aria-label='Primary navigation'>
      <nav className='nav container'>
        <a
          className='brand'
          href='#top'
          aria-label={`${profile.name} home`}
          onClick={closeMenu}
        >
          {profile.name}
        </a>

        <button
          className='nav__toggle'
          type='button'
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls='primary-navigation'
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id='primary-navigation'
          className={`nav__links${isMenuOpen ? ' nav__links--open' : ''}`}
          aria-label='Portfolio sections'
        >
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
