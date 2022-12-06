import React from 'react'
import  "./Contact.css"
import {Email, ExpandLess, Telegram, Twitter, WhatsApp} from "@mui/icons-material"
import { HashLink as Link } from 'react-router-hash-link';
import Sendemail from './Sendemail';

function Contact() {
  return (
    <div className='contact' id='mysocials'>
        <div className='top'>
            <Link to="#tops">
            <ExpandLess className='expand'/>
            </Link>
        </div>
        
        <div className='contact_image'>
            <div className='banner'>
                <img src='/images/contact.png' alt='' />
            </div>
            <div className='banner_email'>
                <Sendemail/>
            </div>
        </div>
        <div className='contact_icons'>
            <a href='https://t.me/xcrxwadda'>
                <div className='socialz'>
                    <Telegram className='telegram'/>
                    <p>Telegram</p>
                </div>
            </a>
            <a href='https://twitter.com/keniko1297'>
                <div className='socialz'>
                    <Twitter className='twitterz'/>
                    <p>Twitter</p>
                </div>
            </a>
            <a href='https://api.whatsapp.com/send?phone=254794770857&text=Thanks%20for%20messaging,%20how%20do%20i%20help%20you?'>
                <div className='socialz'>
                    <WhatsApp className='whatsapp'/>
                    <p>Whats app</p>
                </div>
            </a>
            <a href='mailto:fluidbrakes@gmail.com'>
                <div className='socialz'>
                    <Email className='email'/>
                    <p>Email</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Contact
