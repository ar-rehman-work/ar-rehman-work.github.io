import { useState, useRef, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import './Navbar.scss'

interface NavLink {
  label: string
  href: string
  tooltip?: string
  target?: '_blank' | '_self'
  rel?: string
  external?: boolean
  icon?: React.ReactNode
  disabled?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero', tooltip: 'Go to home section' },
  { label: 'About', href: '#about', tooltip: 'Learn more about me' },
  { label: 'Work', href: '#work', tooltip: 'Skills, projects & experience' },
  { label: 'Contact', href: '#contact', tooltip: 'Get in touch' }
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark'
  )

  const navRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (): void => {
    setOpen(prev => !prev)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <nav className='navbar'>
      <div className='navbar__container' ref={navRef}>
        <div className='navbar__logo'>Abdul Rehman</div>

        <ul className={`navbar__links ${open ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href} className='navbar__item'>
              <a href={link.href} className='navbar__link'>
                {link.label}
                {link.tooltip && (
                  <span className='navbar__tooltip'>
                    {link.tooltip}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className='navbar__theme'
          onClick={toggleTheme}
          aria-label='Toggle theme'
        >
          {theme === 'light' ? (
            <Moon size={18} />
          ) : (
            <Sun size={18} />
          )}
        </button>

        <button
          className='navbar__toggle'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar