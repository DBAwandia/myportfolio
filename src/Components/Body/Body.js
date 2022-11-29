import React from 'react'
import "./Body.css"
import { Twitter,GitHub } from "@mui/icons-material"
import { HashLink as Link } from 'react-router-hash-link';

function Body() {
  return (
    <div className='body' >
        <div className='body_container'>
            <div className='left_body_container'>
                <div className='left_items'>
                    <h1>Hi, I Am</h1>
                    <h2>Kennedy Wandia</h2>
                    <h2 style={{color:"teal"}}>Full stack developer</h2>
                    <p> Many desktop publishing packages
                         and web page editors now use Lorem
                          Ipsum as their default model text, 
                          and a search for 'lorem ipsum' will 
                          uncover many web sites still in their
                           infancy. Various versions have evolved
                            over the years, sometimes by accident,
                             sometimes on purpose 
                             (injected humour and the like).
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
                        <img src='/images/cartoon.jpg' alt='' />
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
