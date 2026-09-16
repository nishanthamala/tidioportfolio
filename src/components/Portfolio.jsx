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

        <div className="portfolio__showcase">
          <div className="portfolio__item glass">
            <div className="portfolio__item-image">
              <img src="/images/om-muruga-construction.png" alt="Om Muruga Construction project by tavonandtech" />
              <img src="/images/ecrinn.png" alt="ECR INN  project by tavonandtech" />

            </div>
            <div className="portfolio__item-meta">
              <span className="portfolio__item-title">Good work by tavonandtech -- by Om Muruga Construction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
