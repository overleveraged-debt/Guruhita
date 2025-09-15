import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActionButtons from './components/FloatingActionButtons'

function App() {
  return (
    <div className="text-brand-text">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <Services />
        <WhyChooseUs />
        <About />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}

export default App
