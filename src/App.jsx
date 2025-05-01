import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     
      <Hero/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
      <Footer/>
      {/* <Header/> */}
    </div>
  )
}

export default App