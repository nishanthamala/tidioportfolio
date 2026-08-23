import React from 'react'
import Reveal from './Reveal'

/*
============================================================================
  REVIEWS — ADD YOUR TESTIMONIALS HERE
============================================================================
  This section is intentionally EMPTY. No dummy reviews are included.

  To add a review, copy one object from the example below into the
  `reviews` array and fill in the fields:

  {
    name:   'Guest Name',        // required
    hotel:  'Hotel / Property',  // required
    role:   'Owner',             // optional (e.g. Owner, Manager)
    rating: 5,                   // 1–5 (optional, shows stars)
    text:   'Your testimonial text…' // required
  }

  When the array is empty, a clean empty-state message is shown.
  The layout and styling adapt automatically as you add entries.
============================================================================
*/

const reviews = [
  // Example (uncomment and edit, or add new objects):
  // {
  //   name: 'Guest Name',
  //   hotel: 'Hotel / Property',
  //   role: 'Owner',
  //   rating: 5,
  //   text: 'TEDIO transformed our photos into a stunning video…'
  // }
]

const Stars = ({ rating = 5 }) => (
  <div className="review__stars" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < rating ? 'is-on' : ''}>
        ★
      </span>
    ))}
  </div>
)

const Reviews = () => {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Reviews</span>
          <h2 className="section__title">
            What <span className="text-gold">Hoteliers Say.</span>
          </h2>
          <p className="section__lead">
            Real feedback from the properties we've helped look their best.
          </p>
        </Reveal>

        {reviews.length > 0 ? (
          <div className="reviews__grid">
            {reviews.map((r, i) => (
              <Reveal key={`${r.name}-${i}`} delay={i * 90} className="reviews__card-wrap">
                <article className="glass review__card">
                  <Stars rating={r.rating} />
                  <p className="review__text">{r.text}</p>
                  <div className="review__author">
                    <span className="review__avatar">
                      {r.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                    <div>
                      <span className="review__name">{r.name}</span>
                      <span className="review__hotel">
                        {r.hotel}
                        {r.role ? ` · ${r.role}` : ''}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="reviews__empty-wrap">
            <div className="glass reviews__empty">
              <span className="reviews__empty-icon">❝</span>
              <p className="reviews__empty-title">No reviews yet</p>
              <p className="reviews__empty-text">
                Your guest testimonials will appear here. Add your first review
                from the code to build trust with future guests.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default Reviews
