import React, { useState } from 'react'
import "./Navbar.css"
// import {useNavigate} from "react-router-dom"
function Navbar() {
  // const navigate = useNavigate()
  const [active , setActive ] = useState("")
  
  return (
    <div className='navbar'>
      <div className='nav_container'>
        <div className='logo'>
          Home
        </div>
        <div className='items'>
          <p className={active ==="About"? "active_Link": "normal_link"}
            onClick={()=>{
              setActive("About")
            }}
          >AboutMe</p>
          <p className={active === "Skills"? "active_Link": "normal_link"}
            onClick={()=>{
              setActive("Skills")
            }}
          >Skills</p>
          <p className={active ==="Projects"? "active_Link": "normal_link"}
            onClick={()=>{
              setActive("Projects")
            }}
          >Projects</p>
          <button className='contact_me_button'>Contact me</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
