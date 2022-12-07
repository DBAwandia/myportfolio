import React, { useState } from 'react'
import "./Projects.css"
function Projects() {
  const [open,setOpen] = useState(false)
  const image3="https://www.uxdesignagency.com/storage/app/media/contenteditor/ux-case-study-how-to-create-a-mobile-banking-super-app-s-5.jpg"
  return (
    <div className='projects' id='projects'>
     {open && <div className='show_image'>
         <div className='images_showcase'
          onClick={()=>{
            setOpen(false)
          }}
         >
          <img src='/images/bankingapp.png' alt='' />
        </div>
      </div>}
      <div className='projects_container'>
        <div className='project_header'>
          <p>My</p>
          <p>Project</p>
        </div>
        <p>Recent project which I have developed</p>
        <div className='project_showcase'>
          <div className='banking_project' onClick={()=>{
            setOpen(true)
          }}>
            <img src={image3} alt='' />
          </div>
          <div className='project_description'>
            <h1>Fullstack Mobile banking app</h1>
            <p>I created this app, it works like a banking app.
              Users can <i>Send</i> and <i>Receive</i>
              ?money by just one tap transaction.
              There is also a savings plan where user can set their goal and start savings for it.
              Deposits are many via Credit cards on deposit.
              Soon will introduce virtual cards 🎯
             </p>
             <a href="https://github.com/DBAwandia/FullStackMobileBankingproject.git">
              <button>
                View code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
