import React, { useState } from 'react'
import Reveal from './Reveal'

/*
============================================================================
  PORTFOLIO — EDIT YOUR VIDEOS HERE
============================================================================
  Category 1 (AI Video Production) is the original video reel. The slider,
  its media and the `portfolioVideos` array below are unchanged in path/URL.

  HOW TO ADD / REPLACE A VIDEO:
  1. Drop your .mp4 file into:   public/videos/
  2. (Optional) Add a poster image into: public/images/
  3. Change the `src`, `title` and `poster` below.

  Notes:
  - Videos are muted + looped by default (no autoplay sound).
  - Hovering the slider pauses the right-to-left motion.
  - Clicking a card opens it in a fullscreen lightbox.
============================================================================
*/

const portfolioVideos = [
  { src: '/videos/VID_20260824_165353.mp4', poster: '/images/luxury-hotel-room-interior.jpeg', title: 'Room Tour' }
]

/*
  Category 2 (Web Development) — demo project cards.
  These are clearly marked examples, NOT real client work.
  Replace `title` values with your own projects when available.
*/
const webProjects = [
  { title: 'Business Website', tag: 'Demo' },
  { title: 'Hotel Website', tag: 'Demo' },
  { title: 'Restaurant Website', tag: 'Demo' },
  { title: 'Property Website', tag: 'Demo' }
]

const PortfolioCard = ({ item, onOpen }) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = React.useRef(null)

  const togglePlay = (e) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(true))
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="portfolio__card glass" onClick={() => onOpen(item)}>
      <div className="portfolio__media">
        <video
          ref={videoRef}
          className="portfolio__video"
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="metadata"
          loading="lazy"
        />
        <div className="portfolio__overlay">
          <button
            className="portfolio__play"
            aria-label={playing ? 'Pause video' : 'Play video'}
            onClick={togglePlay}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="portfolio__meta">
        <span className="portfolio__title">{item.title}</span>
        <span className="portfolio__expand" aria-hidden="true">⤢</span>
      </div>
    </div>
  )
}

const Portfolio = () => {
  const [tab, setTab] = useState('video')
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Portfolio</span>
          <h2 className="section__title">
            Web &amp; Video <span className="text-gold">Projects.</span>
          </h2>
          <p className="section__lead">
            Selected website projects and cinematic videos.
          </p>
        </Reveal>

        <div className="portfolio__tabs">
          <button
            className={`portfolio__tab ${tab === 'video' ? 'is-active' : ''}`}
            onClick={() => setTab('video')}
          >
            AI Video Production
          </button>
          <button
            className={`portfolio__tab ${tab === 'web' ? 'is-active' : ''}`}
            onClick={() => setTab('web')}
          >
            Web Development
          </button>
        </div>
      </div>

      {tab === 'video' && (
        <div className="portfolio__slider" id="portfolio-slider">
          <div className="portfolio__track">
            {portfolioVideos.map((item, i) => (
              <PortfolioCard key={`${item.title}-${i}`} item={item} onOpen={setLightbox} />
            ))}
          </div>
        </div>
      )}

      {tab === 'web' && (
        <div className="container">
          <div className="web-projects__grid">
            {webProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="web-projects__card-wrap">
                <article className="glass web-project">
                  <div className="web-project__mock" aria-hidden="true">
                    <span className="web-project__dots">
                      <i /><i /><i />
                    </span>
                    <span className="web-project__screen">W</span>
                  </div>
                  <div className="web-project__meta">
                    <span className="web-project__title">{p.title}</span>
                    <span className="web-project__badge">{p.tag} project</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="web-projects__note">
            Demo projects shown as examples — real client work can be added anytime.
          </p>
        </div>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setLightbox(null)}>
            ✕
          </button>
          <div className="lightbox__body glass" onClick={(e) => e.stopPropagation()}>
            <video
              src={lightbox.src}
              poster={lightbox.poster}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="lightbox__title">{lightbox.title}</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
