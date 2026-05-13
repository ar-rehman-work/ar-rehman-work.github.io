import { profile } from '../../data/profileData'

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='container footer__inner'>
        <p>
          Copyright 2026 {profile.name} | {profile.role}
        </p>
      </div>
    </footer>
  )
}

export default Footer
