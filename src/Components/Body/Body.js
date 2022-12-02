import React, { useState } from 'react'
import "./Body.css"
import { Twitter,GitHub } from "@mui/icons-material"
import { HashLink as Link } from 'react-router-hash-link';
import Sidebar from '../Pages/Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

function Body() {
  const [open ,setOpen] = useState(false)
  const image= "https://scontent.fnbo11-1.fna.fbcdn.net/v/t39.30808-6/274078321_690317365324786_1120065145098823046_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xs9C3n-hvMoAX9DdV0E&_nc_ht=scontent.fnbo11-1.fna&oh=00_AfD8MloglvVsAW7HkjZjYew4JvzId9t4qQ_ms6IhBqe3Tg&oe=638F4D69"
  return (
    <div className={open?"bodys":"body"} id='tops' >
        <Navbar setOpen={setOpen} />
        {open&&<div className='open_sidebar'>
            <Sidebar setOpen={setOpen}/>
        </div>}
        <div className='body_container'>
            <div className='left_body_container'>
                <div className='left_items'>
                    <h1>Hi, I Am</h1>
                    <h2>Kennedy Wandia</h2>
                    <h3 style={{color:"teal"}}>Full stack developer</h3>
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
            <div className='right_body_container'>
                <div className='right_items'>
                <div className='image_blob2'>
                        <img src='/images/krisiz.jpg' alt='' />
                    </div>
                    <div className='image_blob3'>
                        <img src={image} alt='' />
                    </div>
                    <div className='icons_profile'>
                        <a href='https://twitter.com/keniko1297'>
                            <div className='twitter_icon'>
                                <Twitter className="twitter" />
                            </div>
                        </a>
                        <a href="https://github.com/DBAwandia">
                            <div className='github_icon'>
                                <GitHub className="github" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
