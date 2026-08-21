import React, { useRef } from 'react'
import Reveal from './Reveal'

/*
  Service cards with subtle 3D tilt on hover (inline SVG icons, no deps).
*/

const ICONS = {
  tour: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21V8l9-5 9 5v13" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" strokeLinejoin="round" />
    </svg>
  ),
  overview: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  ),
  booking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 4h14v16l-7-4-7 4z" strokeLinejoin="round" />
    </svg>
  ),
  safety: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
    </svg>
  )
}

const SERVICES = [
  {
    icon: 'tour',
    title: 'Full Room Tour',
    text: 'Transform room photographs into a cinematic room walkthrough guests can feel.'
  },
  {
    icon: 'overview',
    title: 'Hotel Overview',
    text: 'Showcase the complete hotel experience — lobby, amenities, atmosphere and brand.'
  },
  {
    icon: 'booking',
    title: 'Booking Benefits',
    text: 'Highlight exactly why guests should choose your hotel over the alternatives.'
  },
  {
    icon: 'safety',
    title: 'Safety & Protection',
    text: 'Showcase hotel safety, security and protection features with calm, confident visuals.'
  },
  {
    icon: 'other',
    title: 'Other Services',
    text: 'Create promotional videos for additional hotel facilities, events and services.'
  }
]

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Reveal delay={index * 90} className="services__card-wrap">
      <article
        ref={ref}
        className="glass service-card"
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        <span className="service-card__icon">{ICONS[service.icon]}</span>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__text">{service.text}</p>
        <span className="service-card__glow" aria-hidden="true" />
      </article>
    </Reveal>
  )
}

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Services</span>
          <h2 className="section__title">
            Cinematic Videos for <span className="text-gold">Every Corner</span> of Your Hotel
          </h2>
          <p className="section__lead">
            A focused set of video packages built to make your property look its best
            across every channel.
          </p>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
