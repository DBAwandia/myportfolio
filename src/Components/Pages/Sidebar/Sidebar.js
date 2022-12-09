import React, { useState } from 'react'
import "./Sidebar.css"
import { AutoFixHighTwoTone, FormatAlignLeft, Laptop, Person, Public } from '@mui/icons-material';
import { HashLink as Link } from 'react-router-hash-link';

function Sidebar({setOpen}) {
  const [active , setActive ] = useState("")

  return (
    <div className='Sidebar'>
      <div className='sidebar_closez' onClick={()=>{
          setOpen(false)
      }}>
      </div>
      <div className='sidebar_icons'>
          <Link to="#skills" smooth>
            <div className='icon_skillz'>
              <Laptop className='laptop'/>
              <p className={active === "Skills"? "active_Link": "normal_link"}
                onClick={()=>{
                  setActive("Skills")
                  setOpen(false)
                }}
              >Skills</p>
            </div>
          </Link>
          <Link to="#Projects" smooth>
            <div className='icon_skillz'>
              <AutoFixHighTwoTone className='projects'/>
            <p className={active ==="Projects"? "active_Link": "normal_link"}
              onClick={()=>{
                setActive("Projects")
                setOpen(false)
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
                  setOpen(false)
                }}
              >About me</p>
          </div>
          </Link>
          <Link to="#mysocials" smooth>
            <div className='icon_skillz'>
              <Public className='public' />
              <p className={active ==="About"? "active_Link": "normal_link"}
                onClick={()=>{
                  setActive("About")
                  setOpen(false)
                }}
              >My socials</p>
            </div>
          </Link>
          </div>
    </div>
  )
}

export default Sidebar
