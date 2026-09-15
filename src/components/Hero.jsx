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
          <span className="hero__eyebrow">Digital Marketing + Web Development</span>
          <h1 className="hero__title">
            We Build Brands That <span className="text-gold">Grow.</span>
          </h1>
          <p className="hero__subtitle">
            We help businesses grow through strategic digital marketing and professional
            web development — delivering clean, high-performing digital experiences.
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
              <strong>Digital Marketing</strong>
              <span>Grow your audience</span>
            </div>
            <div className="hero__stat">
              <strong>Web Development</strong>
              <span>Professional websites</span>
            </div>
            <div className="hero__stat">
              <strong>Quick Delivery</strong>
              <span>Fast turnaround</span>
            </div>
            <div className="hero__stat">
              <strong>Dedicated</strong>
              <span>Focused support</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__screen glass">
            <div className="hero__screen-fill" />
            <div className="hero__screen-shine" />
            <span className="hero__screen-tag">Digital Studio</span>
          </div>

          <div className="hero__float hero__float--1 glass">✦ Strategy</div>
          <div className="hero__float hero__float--2 glass">Performance</div>
          <div className="hero__float hero__float--3 glass">✺ Design</div>
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
