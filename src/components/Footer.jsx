import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <h4 className="footer-logo">GlamStudio</h4>
            <p className="footer-tagline text-sm">
              Thoughtfully designed manicures
              <br />
              for people who see beauty in the details.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h5 className="footer-title">Explore</h5>
            <ul className="footer-links">
              <li><a href="#work">Nail Art</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h5 className="footer-title">Visit</h5>
            <address className="footer-address">
              <p>Zirakpur, Punjab</p>
              <p className="footer-contact-item">
                <a href="mailto:GlamStudioArt@gmail.com">GlamStudioArt@gmail.com</a>
              </p>
              <p>Mon–Sun: 9am–9pm</p>
              <p className="footer-contact-item">+91 8360398882</p>
            </address>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h5 className="footer-title">Follow</h5>
            <ul className="footer-social">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-xs">
            © {currentYear} GlamStudio. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="text-xs">Privacy Policy</a>
            <span className="footer-divider">·</span>
            <a href="#" className="text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
