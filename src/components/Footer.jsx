import React from 'react'
import Logo from './Logo'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
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
            Web development and AI-powered cinematic videos for hotels, resorts,
            real estate, restaurants and growing businesses.
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
          <a href="mailto:tediosupport24@gmail.com" aria-label="Email">
            Email
          </a>
          <a href="tel:9361096733" aria-label="Phone">
            Phone
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">© 2026 tavonandtech. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
