import React, { useEffect, useRef, useState } from 'react'
import "./Skills.css"
import 'animate.css';
function Skills() {
  const skillsData = [
    {
      id: 1,
      image: "/images/javascript.png",
      title: "Javascript",
      description: "I use this programming language for making websites frontend and backend functionalities ."
    },
    {
      id: 2,
      image: "/images/react.png",
      title: "React JS || React Native",
      description: "I use this tools for making webapps."
    },
    {
      id: 3,
      image: "/images/html.png",
      title: "HTML",
      description: "I use this language for creating Websites."
    },
    {
      id: 4,
      image: "/images/css.png",
      title: "CSS",
      description: "I use this language for styling and designing Websites."
    },
    {
      id: 5,
      image: "/images/mongos.png",
      title: "MongoDB",
      description: "I am very experienced in MongoDB as database."
    }
]

  return (
    <div className='skills' id='skills'>
       <div className='skills_container'>
       <div className='skills_header'>
          <h1>My</h1><span>Skills</span>
        </div>
                <div className="skills_desc">
                  <p>Tools and programming languages that I use for development and making projects</p>
                 </div>

        <div className='skills_languages'>
        {skillsData.map((item) =>{
          return <div className='skillz_container' key={item.id}>
              <div className='item_container'>
                          <div className='item_image'>
                            <img src={item.image} alt="" />
                          </div>
                          <div className='item_title'>
                            <h1>{item.title}</h1>
                          </div>
                          <div className='item_desc'>
                            <p>{item.description}</p>
                          </div>
                        </div>
          </div>
          })}
        </div>

      </div> 
   
    </div>
    

  )
}

export default Skills
