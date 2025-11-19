import './Footer.css'
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: <SiLinkedin />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <SiGithub />
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <SiGmail />
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3 className="footer-name">GUNASEELAN</h3>
          <p className="footer-tagline">
            Building digital experiences with passion & precision 🚀
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Certificate">Certificate</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="social-link"
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} <span className="footer-name">Gunaseelan</span>. All rights reserved.</p>
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ⬆
        </button>
      </div>
    </footer>
  )
}

export default Footer
