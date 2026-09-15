import React, { useRef } from 'react'
import Reveal from './Reveal'

const ICONS = {
  reel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3z" />
    </svg>
  ),
  poster: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9v6h4l5 4V5z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

const SERVICES = [
  { icon: 'reel', title: 'Reel Creation', text: 'Eye-catching short-form reels crafted to engage your audience and boost your brand on social platforms.' },
  { icon: 'poster', title: 'Poster Creation', text: 'Professional posters and graphics designed to communicate your message clearly and attract attention.' },
  { icon: 'google', title: 'Google Ads Management', text: 'Data-driven Google Ads campaigns that target the right audience and maximise your return on investment.' },
  { icon: 'meta', title: 'Meta Ads Management', text: 'Strategic Facebook and Instagram ad campaigns that generate leads and grow your customer base.' },
  { icon: 'code', title: 'Web Development', text: 'Modern, responsive websites built with clean code, fast performance and a focus on conversions.' },
  { icon: 'research', title: 'Research & Development', text: 'In-depth market and audience research to shape strategies, campaigns and products that actually work.' }
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
    <Reveal delay={index * 70} className="services__card-wrap">
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
            Digital Growth. <span className="text-gold">One Studio.</span>
          </h2>
          <p className="section__lead">
            From digital marketing to professional web development, we deliver
            everything your business needs to grow online.
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
