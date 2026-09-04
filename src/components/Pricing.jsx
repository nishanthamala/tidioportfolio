import React from 'react'
import Reveal from './Reveal'

/*
============================================================================
  PRICING — CHANGE PRICES / PLANS HERE
============================================================================
  Edit the values below to update the pricing cards.
  - `price`: the amount shown (string, so you can include ₹ and commas)
  - `features`: the bullet list
  - `popular`: set true to highlight a plan as "recommended"
============================================================================
*/

const PLANS = [
  {
    name: 'PLAN 01',
    videos: '1 VIDEO',
    price: '₹399',
    features: ['1 Full Room Tour/overview'],
    cta: 'Choose Plan',
    popular: false
  },
  {
    name: 'PLAN 02',
    videos: '3 VIDEOS',
    price: '₹999',
    features: [
      '1 Full Room Tour',
      'Hotel Overview',
      'Services in Hotel'
    ],
    cta: 'Choose Plan',
    popular: true
  },
 
]

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
            Simple Plans. <span className="text-gold">Cinematic Results.</span>
          </h2>
          <p className="section__lead">
            Choose the number of videos you need. Every plan is built from your
            existing photos.
          </p>
        </Reveal>

        <div className="pricing__grid">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="pricing__card-wrap">
              <article
                className={`glass pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
              >
                {plan.popular && <span className="pricing__badge">Most Popular</span>}
                <span className="pricing__plan">{plan.name}</span>
                <span className="pricing__videos">{plan.videos}</span>
                <div className="pricing__price">{plan.price}</div>
                <ul className="pricing__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span className="pricing__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn--gold pricing__cta" onClick={scrollToContact}>
                  {plan.cta}
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
