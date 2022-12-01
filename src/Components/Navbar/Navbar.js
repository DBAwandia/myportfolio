import React, { useState } from 'react'
import "./Navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
import { AutoFixHighTwoTone, Dehaze, FormatAlignLeft, Laptop, Person, Public, Swipe } from '@mui/icons-material';

function Navbar() {
  const [active , setActive ] = useState("")
  
  return (
    <div className='navbar'>
      <div className='sidebar'>
          <FormatAlignLeft className="swipe"/>
      </div>
          <div className='sidebar_close'>
          
          </div>
          <div className='sidebar_icons'>
          <Link to="#skills" smooth>
            <div className='icon_skillz'>
              <Laptop className='laptop'/>
              <p className={active === "Skills"? "active_Link": "normal_link"}
                onClick={()=>{
                  setActive("Skills")
                }}
              >Skills</p>
            </div>
          </Link>
          <Link to="#projects" smooth>
            <div className='icon_skillz'>
              <AutoFixHighTwoTone className='projects'/>
            <p className={active ==="Projects"? "active_Link": "normal_link"}
              onClick={()=>{
                setActive("Projects")
              }}
            >Projects</p>
            </div>
          </Link>
          <Link to="#personal" smooth>
          <div className='icon_skillz'>
            <Person className='person' />
            <p className={active === "personal"? "active_Link": "normal_link"}
                onClick={()=>{
                  setActive("personal")
                }}
              >About me</p>
          </div>
          </Link>
          <Link to="#mysocials" smooth>
            <div className='icon_skillzz'>
              <Public className='public' />
              <p className={active ==="About"? "active_Link": "normal_link"}
                onClick={()=>{
                  setActive("About")
                }}
              >My socials</p>
            </div>
          </Link>
          </div>
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
