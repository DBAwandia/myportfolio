import React from 'react'
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Body from "../Body/Body"
import Skills from './Skills/Skills'

function Home() {
  return (
    <div className='homes'>
      <div className='container'>
        <Navbar />
        <Body />
        <Skills/>
      </div>
    </div>
  )
}

export default Home
