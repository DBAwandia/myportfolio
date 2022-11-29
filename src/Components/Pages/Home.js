import React from 'react'
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Body from "../Body/Body"
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function Home() {
  return (
    <div className='homes' >
      <div className='container'id='top'>
        <Navbar />
        <Body />
        <Skills/>
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default Home
