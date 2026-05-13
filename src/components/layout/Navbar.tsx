import { navLinks, profile } from '../../data/profileData'

function Navbar() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          {profile.name}
        </a>
        <div className="nav__links" aria-label="Portfolio sections">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
