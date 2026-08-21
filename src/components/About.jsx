import React from 'react'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: '📷',
    title: 'No New Photoshoot Required',
    text: 'We work from the photographs you already have. Skip the cost and logistics of a physical shoot.'
  },
  {
    icon: '🎞️',
    title: 'Cinematic Motion',
    text: 'Still images are brought to life with tasteful, film-grade camera movement and pacing.'
  },
  {
    icon: '🎬',
    title: 'Professional Editing',
    text: 'Transitions, music, color grading and branding handled by our creative team.'
  },
  {
    icon: '📱',
    title: 'Social-Media-Ready',
    text: 'Delivered in the formats you need for Instagram, WhatsApp, websites and ads.'
  },
  {
    icon: '⚡',
    title: 'Faster Production',
    text: 'Get polished promotional videos in days, not weeks, without a crew on site.'
  },
  {
    icon: '💎',
    title: 'Affordable',
    text: 'A fraction of the cost of traditional video production, with a premium result.'
  }
]

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">About TEDIO</span>
          <h2 className="section__title">
            Your Photos. <span className="text-gold">Our AI.</span> A Cinematic Experience.
          </h2>
          <p className="section__lead">
            TEDIO takes existing hotel photographs and transforms them into engaging
            cinematic promotional videos — without requiring a new physical video shoot.
            The result looks like a premium film, made from the images you already own.
          </p>
        </Reveal>

        <div className="about__grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="about__card-wrap">
              <article className="glass about__card">
                <span className="about__icon">{f.icon}</span>
                <h3 className="about__card-title">{f.title}</h3>
                <p className="about__card-text">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
