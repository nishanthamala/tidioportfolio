import React from 'react'

/*
  TEDIO brand mark.
  ---------------------------------------------------------------
  This component is used everywhere the logo appears:
  Navbar, Preloader, Footer.
  To rebrand, change the text "TEDIO" below and the gradient
  colors in src/styles/index.css (look for .brand-logo / --gold).
*/

const Logo = ({ variant = 'full', className = '' }) => {
  if (variant === 'mark') {
    return (
      <span className={`brand-mark ${className}`} aria-label="TEDIO">
        <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold-bright)" />
              <stop offset="100%" stopColor="var(--gold-deep)" />
            </linearGradient>
          </defs>
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="13"
            fill="rgba(255,255,255,0.03)"
            stroke="var(--gold)"
            strokeOpacity="0.4"
          />
          <text
            x="24"
            y="34"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="26"
            fontWeight="700"
            fill="url(#lg)"
          >
            T
          </text>
        </svg>
      </span>
    )
  }

  return (
    <span className={`brand-logo ${className}`} aria-label="TEDIO">
      <span className="brand-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="34" height="34">
          <defs>
            <linearGradient id="lgf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold-bright)" />
              <stop offset="100%" stopColor="var(--gold-deep)" />
            </linearGradient>
          </defs>
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="13"
            fill="rgba(255,255,255,0.03)"
            stroke="var(--gold)"
            strokeOpacity="0.4"
          />
          <text
            x="24"
            y="34"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="26"
            fontWeight="700"
            fill="url(#lgf)"
          >
            T
          </text>
        </svg>
      </span>
      <span className="brand-logo__text">
        TE<span className="brand-logo__accent">DIO</span>
      </span>
    </span>
  )
}

export default Logo
