import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
      <Features />
      <Workflow />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
