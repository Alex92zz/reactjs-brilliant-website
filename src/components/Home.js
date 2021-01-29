import React from 'react'

import Navbar from './Navbar/Navbar'
import HomeSlider from './HomeSlider/HomeSlider'
import About from './About/About'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import Blog from './Blog/Blog'
import Pricing from './Pricing/Pricing'
import Footer from './Footer'
function Home() {
  return (
    <>
    <Navbar />
      <main className="js-animsition-overlay" data-animsition-overlay="true">
        <HomeSlider />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Pricing />
      </main>
      <Footer />

    </>
  )
}

export default Home
