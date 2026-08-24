import React, { useState } from 'react'
import Reveal from './Reveal'

/*
============================================================================
  PORTFOLIO — EDIT YOUR VIDEOS HERE
============================================================================
  This is the ONLY place you need to touch to manage portfolio videos.

  HOW TO ADD / REPLACE A VIDEO:
  1. Drop your .mp4 file into:   public/videos/
  2. (Optional) Add a poster image into: public/images/
  3. Change the `src`, `title` and `poster` below.

  Example entry:
  {
    src: '/videos/VID_20260824_165353.mp4', // path inside public/
    poster: '/images/luxury-hotel-room-interior.jpeg', // optional thumbnail
    title: 'Room Tour'
  }

  Notes:
  - Videos are muted + looped by default (no autoplay sound).
  - Hovering the slider pauses the right-to-left motion.
  - Clicking a card opens it in a fullscreen lightbox.
  - Add or remove entries freely; the slider adapts automatically.
============================================================================
*/

const portfolioVideos = [
  // Add more entries by copying the line below and editing the fields.
  { src: '/videos/VID_20260824_165353.mp4', poster: '/images/luxury-hotel-room-interior.jpeg', title: 'Room Tour' }
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
          preload="none"
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
  const [active, setActive] = useState(null)

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Portfolio</span>
          <h2 className="section__title">
            See What Your <span className="text-gold">Photos Could Become.</span>
          </h2>
          <p className="section__lead">
            Hover to pause the reel. Click any video to watch it fullscreen.
          </p>
        </Reveal>
      </div>

      <div className="portfolio__slider" id="portfolio-slider">
        <div className={`portfolio__track ${portfolioVideos.length > 1 ? '' : 'portfolio__track--static'}`}>
          {/* Duplicate the list only when there are multiple videos, so the
              seamless right-to-left loop has no visible gap. With a single
              video we show it once (no duplicate). */}
          {(portfolioVideos.length > 1
            ? [...portfolioVideos, ...portfolioVideos]
            : portfolioVideos
          ).map((item, i) => (
            <PortfolioCard key={`${item.title}-${i}`} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            ✕
          </button>
          <div className="lightbox__body glass" onClick={(e) => e.stopPropagation()}>
            <video
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="lightbox__title">{active.title}</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
