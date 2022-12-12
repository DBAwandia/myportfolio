import React from 'react'
import "./Projects.css"
function Projects() {
  const image ="https://assets-news.housing.com/news/wp-content/uploads/2022/06/22233859/IndusInd-Bank-FEATURE-compressed.jpg"
  return (
    <div className='projects' id='Projects'>
      <div className="project_container">
        
          <h1>Banking project</h1>
          <div className='display_flexi'>
              <div className='image'>
                <img src={image} alt="" />
              </div>
              <div className='project_header'>
                <div className='bank_desc'>
                  <p>I created this app, it works like a banking app.
                    Users can <b>Send</b> and <b>Receive</b>
                    money by just one tap transaction.
                    There is also a savings plan where user can set their goal and start savings for it.
                    Deposits are many via Credit cards on deposit.
                    Soon will introduce virtual cards 🎯
                  </p>
                  <button>View code</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Projects
