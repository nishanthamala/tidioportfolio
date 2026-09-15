import React, { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal'

/*
  CONTACT — CHANGE CONTACT DETAILS & LINKS HERE
*/

const PHONE = '9361096733'
const EMAIL = 'tavonandtech@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/tavonandtech?igsi=dXk4cmdwd2JhdXNv'

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
  {
    name: 'service',
    label: 'Needed Service',
    type: 'select',
    required: true,
    options: ['Digital Marketing', 'Web Development', 'Both']
  }
]

const Contact = () => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const statusTimer = useRef(null)

  useEffect(() => () => clearTimeout(statusTimer.current), [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    FIELDS.forEach((f) => {
      const val = (values[f.name] || '').trim()
      if (f.required && !val) next[f.name] = 'Required'
      if (f.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        next[f.name] = 'Enter a valid email'
      }
    })
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }

    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      if (!res.ok) throw new Error('send failed')

      setStatus('success')
      setValues({})
      setErrors({})
      statusTimer.current = setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Contact</span>
          <h2 className="section__title">
            Let's Build Something <span className="text-gold">Great.</span>
          </h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <a className="contact__item glass" href={`tel:${PHONE}`}>
              <span className="contact__item-label">Phone</span>
              <span className="contact__item-value">{PHONE}</span>
            </a>
            <a className="contact__item glass" href={`mailto:${EMAIL}`}>
              <span className="contact__item-label">Email</span>
              <span className="contact__item-value">{EMAIL}</span>
            </a>
            <a
              className="contact__item glass"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__item-label">Instagram</span>
              <span className="contact__item-value">Instagram Profile</span>
            </a>
          </Reveal>

          <Reveal className="contact__form-wrap">
            <form className="glass contact__form" onSubmit={handleSubmit} noValidate autoComplete="off">
              {FIELDS.map((f) => (
                <div className="contact__field" key={f.name}>
                  <label htmlFor={f.name}>{f.label}</label>
                  {f.type === 'select' ? (
                    <select
                      id={f.name}
                      name={f.name}
                      value={values[f.name] || ''}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {f.options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={values[f.name] || ''}
                      onChange={handleChange}
                    />
                  )}
                  {errors[f.name] && <span className="contact__error">{errors[f.name]}</span>}
                </div>
              ))}
              <button type="submit" className="btn btn--gold contact__submit">
                Send Inquiry
              </button>

              {status === 'success' && (
                <p className="contact__success">
                  You will be contacted within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__error contact__form-msg">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
