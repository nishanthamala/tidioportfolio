import React from 'react'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Understand Your Requirements',
    text: 'We learn about your business, goals, target audience and what you need to achieve online.'
  },
  {
    number: '02',
    title: 'Research & Strategy',
    text: 'We research your market, competitors and opportunities to build a clear plan of action.'
  },
  {
    number: '03',
    title: 'Build / Execute',
    text: 'We build your website or launch your marketing campaigns with precision and attention to detail.'
  },
  {
    number: '04',
    title: 'Review & Refine',
    text: 'We review the work with you, gather feedback and make refinements until it meets your standards.'
  },
  {
    number: '05',
    title: 'Quick Delivery & Launch',
    text: 'We deliver a polished final product and launch it — so you can start seeing results fast.'
  }
]

const HowItWorks = () => {
  return (
    <section className="section how" id="how">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">How It Works</span>
          <h2 className="section__title">
            A Simple Process That <span className="text-gold">Delivers.</span>
          </h2>
        </Reveal>

        <div className="how__track">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 120} className="how__step">
              <div className="glass how__card">
                <span className="how__number">{step.number}</span>
                <h3 className="how__title">{step.title}</h3>
                <p className="how__text">{step.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="how__connector" aria-hidden="true">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
