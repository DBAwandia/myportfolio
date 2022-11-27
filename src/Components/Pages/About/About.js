import { GitHub, Twitter } from '@mui/icons-material'
import React from 'react'
import "./About.css"
function About() {

  const img="https://camo.githubusercontent.com/7126894c136cfcea2ead9679838b0ca5b8bf50f64c0b76dc0e69e75d9fc57314/68747470733a2f2f7237713677397a362e726f636b657463646e2e6d652f6361726565722f77702d636f6e74656e742f75706c6f6164732f323032302f30332f68656c6c6f2e676966"
  return (
    <div className='about'>
      <div className='about_container'>
        <div className='gif_img'>
          <img src={img} alt="" />
        </div>
        <div className='about_description'>
          <div className='about_header'>
            <h1>About</h1>
            <span>.me</span>
          </div>
          <div className='my_statement'>
            <h2>Hi , am Wandia</h2>
            <p>
            Hi, Everyone I am a Computer Science student currently I am studying at University of Eldoret.
            I am a passionate Full stack Web Developer .
            I am always ready to have new experiences and learn new technologies and implement them in my life.
            I learn new things and help people by creating impact through my developing skills and by solving their problem.
            I love coding and specially web development.
            </p>
            <div className='social'>
             <Twitter className="twitter" />
             <GitHub className="github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
