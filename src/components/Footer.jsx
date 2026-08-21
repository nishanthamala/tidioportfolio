import React from 'react'
import Logo from './Logo'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p className="footer__desc">
            AI-powered cinematic videos for hotels and hospitality brands.
          </p>
        </div>

        <nav className="footer__nav">
          {FOOTER_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="footer__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a href="mailto:dfsd@gmail.com" aria-label="Email">
            Email
          </a>
          <a href="tel:0870989098" aria-label="Phone">
            Phone
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">© 2026 TEDIO. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
