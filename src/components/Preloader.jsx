import React, { useEffect, useState } from 'react'
import Logo from './Logo'

/*
  Premium preloader.
  Shows the tavonandtech logo with a progress bar and a soft glow,
  then fades smoothly into the site. Disappears automatically
  once the page has loaded (or after the simulated progress completes).
*/

const Preloader = () => {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => setHidden(true), 350)
      }
      setProgress(Math.min(current, 100))
    }, 180)

    const onLoad = () => {
      // accelerate completion when assets are ready
      if (document.readyState === 'complete') {
        current = 100
        setProgress(100)
        clearInterval(interval)
        setTimeout(() => setHidden(true), 350)
      }
    }
    window.addEventListener('load', onLoad)

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  useEffect(() => {
    if (hidden) {
      const t = setTimeout(() => setRemoved(true), 900)
      return () => clearTimeout(t)
    }
  }, [hidden])

  if (removed) return null

  return (
    <div className={`preloader ${hidden ? 'preloader--hidden' : ''}`} aria-hidden={hidden}>
      <div className="preloader__glow" />
      <div className="preloader__inner">
        <Logo variant="mark" className="preloader__logo" />
        <div className="preloader__name">tavonandtech</div>
        <div className="preloader__bar">
          <span className="preloader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader__percent">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}

export default Preloader
