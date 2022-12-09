import React, { useState } from 'react'
import "./Navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
import {  FormatAlignLeft } from '@mui/icons-material';

function Navbar({setOpen}) {
  const [active , setActive ] = useState("")
  
  return (
    <div className='navbar'>
      <div className='nav_container'>
        <div className='logo'>
          Home
        </div>
        <div className='items'>
        
          <Link to="#skills" smooth>
            <p className={active === "Skills"? "active_Link": "normal_link"}
              onClick={()=>{
                setActive("Skills")
              }}
            >Skills</p>
          </Link>
          <Link to="#projects" smooth>
            <p className={active ==="Projects"? "active_Link": "normal_link"}
              onClick={()=>{
                setActive("Projects")
              }}
            >Projects</p>
          </Link>
          <Link to="#personal" smooth>
            <p className={active === "personal"? "active_Link": "normal_link"}
              onClick={()=>{
                setActive("personal")
              }}
            >About</p>
          </Link>
          <Link to="#mysocials" smooth>
            <p className={active ==="About"? "active_Link": "normal_link"}
              onClick={()=>{
                setActive("About")
              }}
            >My socials</p>
          </Link>
          <button className='contact_me_button'>Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
