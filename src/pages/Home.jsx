import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      
      <div className="content-grid">
        <div className="left-column">
          <About />
          <Skills />
        </div>
        
        <div className="right-column">
          <Experience />
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

