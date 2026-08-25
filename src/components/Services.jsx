import React, { useRef } from 'react'
import Reveal from './Reveal'

/*
  Service cards with subtle 3D tilt on hover (inline SVG icons, no deps).
  Two equal categories: Web Development + AI Video Production.
*/

const ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M9 21v-6h6v6M7 11h2M15 11h2M7 14h2M15 14h2" />
    </svg>
  ),
  property: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10l8-6 8 6M6 9v12h12V9" />
      <path d="M10 21v-6h4v6" />
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  ),
  landing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z" />
      <path d="M12 12l3 3" />
    </svg>
  ),
  restaurant: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10M17 3c-2 0-3 2-3 5s1 4 3 4v9" />
    </svg>
  ),
  responsive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="12" height="8" rx="1" />
      <rect x="16" y="12" width="5" height="8" rx="1" />
      <path d="M7 13h1M18 5h1" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 8l9 6 9-6" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3z" />
    </svg>
  ),
  walkthrough: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c4-2 6-6 8-10M12 10c4 4 8 4 8 10" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  ),
  film: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M3 15h18M8 5v4M12 5v4M16 5v4M8 15v4M12 15v4M16 15v4" />
    </svg>
  ),
  ad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9v6h4l5 4V5z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="9" r="3" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M2 20c0-4 3-6 5-6s5 2 5 6M14 20c0-3 2-5 4-5s4 2 4 5" />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V7z" />
      <path d="M12 9v6" />
    </svg>
  )
}

const SERVICE_GROUPS = [
  {
    title: 'Web Development',
    items: [
      { icon: 'code', title: 'Business Websites', text: 'Modern, conversion-focused websites that present your brand professionally.' },
      { icon: 'building', title: 'Hotel & Resort Websites', text: 'Tailored sites for hotels and resorts with galleries, availability and booking intent.' },
      { icon: 'property', title: 'Property Websites', text: 'Real estate and property sites with walkthroughs, enquiries and lead capture.' },
      { icon: 'portfolio', title: 'Portfolio Websites', text: 'Clean portfolio sites for personal brands, creatives and professionals.' },
      { icon: 'landing', title: 'Landing Pages', text: 'High-converting landing pages for campaigns, launches and promotions.' },
      { icon: 'restaurant', title: 'Restaurant Websites', text: 'Appetising sites for restaurants with menus, hours and reservations.' },
      { icon: 'responsive', title: 'Responsive Websites', text: 'Mobile-first, fast and accessible across every device.' },
      { icon: 'contact', title: 'Custom Enquiry/Contact Systems', text: 'Bespoke enquiry and contact systems wired to your workflow.' }
    ]
  },
  {
    title: 'AI Video Production',
    items: [
      { icon: 'video', title: 'Hotel Room Videos', text: 'Cinematic room videos generated from your existing photographs.' },
      { icon: 'walkthrough', title: 'Property Walkthroughs', text: 'Smooth AI-powered walkthroughs for properties and venues.' },
      { icon: 'film', title: 'Cinematic Promotional Videos', text: 'Premium promotional films that present your brand on every channel.' },
      { icon: 'ad', title: 'AI-Generated Advertisements', text: 'Scroll-stopping AI ad films for social and paid campaigns.' },
      { icon: 'social', title: 'Social Media Promotional Videos', text: 'Short videos built for Instagram, WhatsApp and more.' },
      { icon: 'product', title: 'Product/Service Showcase Videos', text: 'Showcase videos that highlight your products and services.' }
    ]
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
            Two Services. <span className="text-gold">One Studio.</span>
          </h2>
          <p className="section__lead">
            tavonandtech delivers both modern web development and AI-powered cinematic
            video production — with equal care for each.
          </p>
        </Reveal>

        {SERVICE_GROUPS.map((group) => (
          <div className="service-group" key={group.title}>
            <Reveal>
              <h3 className="service-group__title">{group.title}</h3>
            </Reveal>
            <div className="services__grid">
              {group.items.map((s, i) => (
                <ServiceCard key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
