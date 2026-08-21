import React from 'react'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Send Your Photos',
    text: 'The hotel sends existing room and interior photographs — the ones already on hand.'
  },
  {
    number: '02',
    title: 'We Create',
    text: 'TEDIO transforms the photos into cinematic, AI-powered visuals with refined motion.'
  },
  {
    number: '03',
    title: 'We Edit',
    text: 'We add transitions, text, music, branding and professional editing to every video.'
  },
  {
    number: '04',
    title: 'You Promote',
    text: 'Receive ready-to-use videos for Instagram, WhatsApp, websites and advertisements.'
  }
]

const HowItWorks = () => {
  return (
    <section className="section how" id="how">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">How It Works</span>
          <h2 className="section__title">
            From a Folder of Photos to a <span className="text-gold">Finished Film.</span>
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
