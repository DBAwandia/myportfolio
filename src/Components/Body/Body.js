import React, { useState } from 'react'
import "./Body.css"
import { Twitter,GitHub } from "@mui/icons-material"
import { HashLink as Link } from 'react-router-hash-link';
import Sidebar from '../Pages/Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

function Body() {
  const [open ,setOpen] = useState(false)
  const image= "/images/whatsapp.jpeg"
  const image1 ="https://st.depositphotos.com/1915171/5109/v/950/depositphotos_51091665-stock-illustration-coder-sign-icon-programmer-symbol.jpg"

  return (
    <div className={open?"bodys":"body"} id='tops' >
        <div className='navbar_body'>
            <Navbar setOpen={setOpen} />
        </div>
        {/* {open&&<div className='open_sidebar'>
            <Sidebar setOpen={setOpen}/>
        </div>} */}
        <div className='body_container'>
                <div className='image_blob3'>
                    <img src={image} alt='' />
                </div>
                <div className='image_blob4'>
                    <img src={image1} alt='' />
                </div>
            <div className='left_body_container'>
                <div className='left_items'>
                   <div className='align_header'>
                    <h1>Hi, I Am</h1>
                    <h2>Kennedy Wandia</h2>
                   </div>
                    <div className='i-title'>
                        <div className='animate'>
                            <h3 style={{color:"orange"}}>Blogger</h3>
                            <h3 style={{color:"orange"}}>Full stack developer</h3>
                            <h3 style={{color:"orange"}}>UI/UX developer</h3>
                        </div>
                    </div>
                    <p>  
                            I am a passionate Full stack Web Developer .
                            I am always ready to have new experiences and learn new technologies and implement them in real life.
                            I learn new things and help people by creating impact through my developing skills and by solving their problem.
                            I love coding and specially web development.
                    </p>
                    <Link to="#mysocials">
                        <button  className='hire_me_button'>Hire me</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
