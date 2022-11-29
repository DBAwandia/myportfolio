import React, { useState } from 'react'
import "./Projects.css"
function Projects() {
  const [open,setOpen] = useState(false)
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
          <h1 style={{color:"orangered"}}>My</h1>
          <h1>Projects</h1>
        </div>
        <p>All my projects in which I had worked and developed are shown below</p>
        <div className='project_showcase'>
          <div className='banking_project' onClick={()=>{
            setOpen(true)
          }}>
            <img src='/images/bankingapp.png' alt='' />
          </div>
          <div className='project_description'>
            <h1>Fullstack banking app</h1>
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
