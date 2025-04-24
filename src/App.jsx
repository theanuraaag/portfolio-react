import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'

const App = () => {
  return (
    <div>
     
      <Hero/>
      <About/>
      <Projects/>
      <Skill/>
      {/* <Header/> */}
    </div>
  )
}

export default App