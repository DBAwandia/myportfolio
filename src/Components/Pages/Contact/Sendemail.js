import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./Sendemail.css"
import axios from "axios"
import { axiosInstance } from '../../Baseurl/Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sendemail() {
  const [email, setEmail] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")
  const [data,setData] = useState("")
  const [enable,setEnable] = useState(false)
  const [showEmailError,setShowEmailError] = useState(false)
  const [showUsernameError,setShowUsernameError] = useState(false)
  const [showSuccess,setShowSuccess] = useState(false)
  const [loading,setLoading] = useState(false)




  const obj = " https://hutils.loxal.net/whois"
  useEffect(()=>{
    const fetchData = async(obj)=>{
      const response = await axios.get(obj)
      setData(response.data.countryIso)
    }
    fetchData(obj)
  },[obj])

  let timer;
  let success;
  useEffect(()=>{
    if( message.length < 1 || username.length < 2){
      setEnable(true)
    }else if (email.length === ""){
      timer = setInterval(()=>{
        setShowEmailError(true)
      },2000)
      clearInterval(timer)
    }else if(showSuccess){
      success = setInterval(()=>{
        setShowSuccess(true)
      },3000)
      clearInterval(success)
      setShowSuccess(false)
    }
    else{
      clearInterval(timer)
      setShowEmailError(false)
      setShowSuccess(false)
      setEnable(false)
    }
  },[email,username,message,enable])
  const customId = "custom-id-yes";
  const handleClick = async()=>{
    setLoading(true)
    try{
      
      await axiosInstance.post("/Send/sendmail",{email: email, phonenumber: phonenumber, message: message, username: username})
      setShowSuccess(true)
      toast.success("Successfully sent!",{
        toastId: customId,
        delay: 1000
      })
      setLoading(false)
    }catch(err){
      toast.warn("Please contact using Twiiter ,Whatsapp!",{
        toastId: customId
      })
      setLoading(false)
      setLoading(false)
    }
  }
  return (
    <div className='send_email'>
      <ToastContainer 
      autoClose={8000}
      draggable
       />
        <div className='send_emailcontainer'>
            <h1>Get in touch</h1>
            {showEmailError && <p>Email is required</p>}
            {showSuccess && <p style={{color:"white"}}>Response sent successfully</p>}
            <input required type="email" className="email_input"  onChange={(e)=>setEmail(e.target.value)} placeholder="Your email address" />
            <div className='name_phone'>
            <PhoneInput
              defaultCountry={data}
              international
              initialValueFormat="national"
              placeholder="Enter phone number"
              value={phonenumber}
              onChange={setPhonenumber} 
              // className="phonenumber"
            />
                <input required type="text" placeholder="Enter your name"  onChange={(e)=>setUsername(e.target.value)} className="phonenumber" />
            </div>
            <div className='text_area'>
                <textarea placeholder='Message' onChange={(e)=>setMessage(e.target.value)} required/>
            </div>
            <button onClick={handleClick} disabled={enable} className={ enable? "disable_mail_button": "send_mail_button"}>{loading? "Sending . . .": "Send"}</button>
        </div>
    </div>
  )
}

export default Sendemail
