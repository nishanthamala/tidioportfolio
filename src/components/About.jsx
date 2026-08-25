import React from 'react'
import Reveal from './Reveal'

/*
  About — tavonandtech as a Web Development + AI Video Production company.
  Both services are given equal visual weight in two columns.
*/

const WEB_DEV = [
  {
    title: 'Business & Brand Websites',
    text: 'Modern, fast websites that present your business professionally and turn visitors into customers.'
  },
  {
    title: 'Hotel, Resort & Property Sites',
    text: 'Purpose-built sites for hotels, resorts and real estate with galleries, availability and enquiry forms.'
  },
  {
    title: 'Responsive & Custom Systems',
    text: 'Mobile-first, responsive builds with custom enquiry and contact systems tailored to your workflow.'
  }
]

const VIDEO = [
  {
    title: 'Cinematic Room & Property Videos',
    text: 'Turn photos into cinematic room and property walkthrough videos that feel like a premium film.'
  },
  {
    title: 'Promotional & Social Videos',
    text: 'Short, scroll-stopping videos for Instagram, WhatsApp and paid social.'
  },
  {
    title: 'AI Ads & Showcase Films',
    text: 'AI-generated advertisements and product or service showcase films.'
  }
]

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">About tavonandtech</span>
          <h2 className="section__title">
            Web Development <span className="text-gold">+</span> AI Video Production.
          </h2>
          <p className="section__lead">
            tavonandtech combines modern web development with AI-powered cinematic video
            production to help businesses build their digital presence and present their
            brand professionally. We work with hotels, resorts, real estate and property
            businesses, restaurants, startups, small and medium businesses, personal
            brands and more.
          </p>
        </Reveal>

        <div className="about__cols">
          <div className="about__col">
            <h3 className="about__col-title">Web Development</h3>
            <div className="about__col-list">
              {WEB_DEV.map((f, i) => (
                <Reveal key={f.title} delay={i * 80} className="about__card-wrap">
                  <article className="glass about__card">
                    <span className="about__index">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="about__card-title">{f.title}</h3>
                    <p className="about__card-text">{f.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about__col">
            <h3 className="about__col-title">AI Video Production</h3>
            <div className="about__col-list">
              {VIDEO.map((f, i) => (
                <Reveal key={f.title} delay={i * 80} className="about__card-wrap">
                  <article className="glass about__card">
                    <span className="about__index">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="about__card-title">{f.title}</h3>
                    <p className="about__card-text">{f.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
