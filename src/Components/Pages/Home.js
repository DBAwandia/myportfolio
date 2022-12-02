import React from 'react'
import "./Home.css"
import Body from "../Body/Body"
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Personal from './Personal/Personal'

function Home() {
  return (
    <div className='homes'  >
      <div className='container' id='top'>
        <Body />
        <Skills/>
        <Projects />
        <Personal />
        <Contact />
      </div>
    </div>
  )
}

export default Home
