import React from 'react'
import "./Personal.css"
function Personal() {

let educations = "https://media.tenor.com/qJ5evVs-_uUAAAAC/coding.gif"
  return (
    <div className='personal' id='personal'>
      <div className='personal_education'>
            <div className='education_header'>
            My
              background
            </div>
        <div className='education_gif'>
            <img src={educations} alt="" />
        </div>
        <div className='education_desc'>
            
            <p>Hi, Everyone I am <b style={{color:"gray"}}>Computer science</b>  student, currently I am studying in University of Eldoret,Kenya .
                I am a passionate Full stack Web Developer. 
                I am always ready to have new experiences and learn new technologies and implement them in my life.
                I learn new things and help people by creating impact through my developing skills and by solving their problem.
                I love coding and specially web development.
                I am also happy to serve my clients to the best i can, you are welcome.
            </p>
            <span>2+ years of experience</span>
        </div>
      </div>
    </div>
  )
}

export default Personal
