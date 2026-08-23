import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import BeforeAfter from './components/BeforeAfter'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Reviews />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
