import React from 'react'
import Reveal from './Reveal'

/*
  About — tavonandtech as a Digital Marketing + Web Development company.
*/

const SERVICES = [
  {
    title: 'Digital Marketing',
    text: 'Strategic campaigns across Google and Meta that drive real traffic, leads and revenue for your business.'
  },
  {
    title: 'Web Development',
    text: 'Professional, fast and responsive websites built to showcase your brand and convert visitors into customers.'
  },
  {
    title: 'Reels & Creative Content',
    text: 'Engaging reels and posters tailored for social platforms to amplify your brand presence and reach.'
  }
]

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">About tavonandtech</span>
          <h2 className="section__title">
            Digital Marketing <span className="text-gold">+</span> Web Development.
          </h2>
          <p className="section__lead">
            tavonandtech helps businesses grow through digital marketing and professional
            web development. We work with hotels, resorts, real estate and property
            businesses, restaurants, startups, small and medium businesses, personal
            brands and more.
          </p>
        </Reveal>

        <div className="about__cols">
          <div className="about__col">
            <h3 className="about__col-title">What We Do</h3>
            <div className="about__col-list">
              {SERVICES.map((f, i) => (
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
