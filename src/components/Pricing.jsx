import React from 'react'
import Reveal from './Reveal'

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

const Pricing = () => {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Pricing</span>
          <h2 className="section__title">
            Custom <span className="text-gold">Pricing.</span>
          </h2>
          <p className="section__lead">
            Pricing is created affordably for each business according to their
            preferences and requirements.
          </p>
        </Reveal>

        <Reveal>
          <div className="pricing__custom glass">
            <p className="pricing__custom-text">
              Every business is unique. We build custom packages tailored to your
              goals, scope and budget — no rigid plans, no unnecessary extras.
            </p>
            <button className="btn btn--gold" onClick={scrollToContact}>
              Discuss Your Requirements
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Pricing
