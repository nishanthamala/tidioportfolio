import React from 'react'
import Reveal from './Reveal'

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Portfolio</span>
          <h2 className="section__title">
            Our <span className="text-gold">Work.</span>
          </h2>
          <p className="section__lead">
            Selected projects coming soon.
          </p>
        </Reveal>

        <div className="portfolio__empty glass">
          <p className="portfolio__empty-text">
            New projects will be showcased here shortly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
