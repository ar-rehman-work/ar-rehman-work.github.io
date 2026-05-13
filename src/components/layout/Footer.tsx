import { profile } from '../../data/profileData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <p>
          © 2026 {profile.name}. Built with React, TypeScript, Vite, and SCSS.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
