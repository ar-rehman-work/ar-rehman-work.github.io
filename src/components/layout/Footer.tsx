import { profile } from '../../data/profileData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <p>
          © 2026 {profile.name} - { profile.role }
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
