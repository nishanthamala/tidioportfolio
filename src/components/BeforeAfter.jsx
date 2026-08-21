import React, { useRef, useState } from 'react'
import Reveal from './Reveal'

/*
  Before / After comparison.
  "Before" = a still hotel photo (placeholder gradient + poster).
  "After"  = the TEDIO cinematic video.
  Drag the handle to reveal the transformation.
*/

const BeforeAfter = () => {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updateFromEvent = (clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  const onDown = (e) => {
    dragging.current = true
    updateFromEvent(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    updateFromEvent(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onUp = () => {
    dragging.current = false
  }

  return (
    <section className="section before" id="before">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Before / After</span>
          <h2 className="section__title">
            A Still Photo <span className="text-gold">Becomes a Film.</span>
          </h2>
          <p className="section__lead">
            Drag the handle to see the difference between a raw hotel photo and the
            finished TEDIO cinematic video.
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={containerRef}
            className="ba glass"
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
          >
            {/* AFTER (video) sits underneath, revealed by the clip on top */}
            <div className="ba__after">
              <video
                src="/videos/hotel-overview.mp4"
                poster="/images/hotel-overview.jpg"
                muted
                loop
                autoPlay
                playsInline
                preload="none"
              />
              <span className="ba__label ba__label--after">TEDIO Cinematic Video</span>
            </div>

            {/* BEFORE (photo) clipped to the slider position */}
            <div className="ba__before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <div className="ba__photo" />
              <span className="ba__label ba__label--before">Hotel Photo</span>
            </div>

            <div className="ba__handle" style={{ left: `${pos}%` }}>
              <span className="ba__handle-line" />
              <span className="ba__handle-knob">⟷</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default BeforeAfter
