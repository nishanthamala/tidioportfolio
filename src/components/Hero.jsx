import React from 'react'

/*
  Hero section.
  Left: headline + CTAs.
  Right: a cinematic "screen" with animated lighting, floating glass
  elements and a subtle particle field (pure CSS, no assets required).
*/

const Hero = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Web Development + AI Video Production</span>
          <h1 className="hero__title">
            Build Your Brand. <span className="text-gold">Film Your Story.</span>
          </h1>
          <p className="hero__subtitle">
            We build modern digital experiences and create cinematic AI-powered
            videos that help businesses showcase their brand, property, products and
            services.
          </p>
          <div className="hero__actions">
            <button className="btn btn--gold" onClick={() => scrollTo('#portfolio')}>
              View Our Work
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('#contact')}>
              Get Started
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>Web + Video</strong>
              <span>Two core services</span>
            </div>
            <div className="hero__stat">
              <strong>48 Hours</strong>
              <span>AI Video Production</span>
            </div>
            <div className="hero__stat">
              <strong>Maximum 2 Weeks</strong>
              <span>Web Development</span>
            </div>
            <div className="hero__stat">
              <strong>4K</strong>
              <span>Cinematic quality</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__screen glass">
            <div className="hero__screen-fill" />
            <div className="hero__screen-shine" />
            <span className="hero__screen-tag">Cinematic Preview</span>
            <button
              className="hero__play"
              aria-label="Play preview"
              onClick={() => scrollTo('#portfolio')}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="hero__float hero__float--1 glass">✦ Motion</div>
          <div className="hero__float hero__float--2 glass">4K Grading</div>
          <div className="hero__float hero__float--3 glass">✺ Lighting</div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}

export default Hero
