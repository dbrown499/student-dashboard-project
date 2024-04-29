import React from 'react'
import './ShowMore.css'
// import PersonCard from './PersonCard'

const ShowMore = (prop) => {
  return (
    
    <div className='add-info'>
        <div className='info-sec'>Codewars
        <p id='codewars'><span id='codewar-list'>Current Total:</span></p>
        <p id='codewars'><span id='codewar-list'>Last Week:</span></p>
        <p id='codewars'><span id='codewar-list'>Goal:</span></p>
        <p id='codewars'><span id='codewar-list'> Percent of Goal Acheived:</span></p>
        </div>
        <div className='info-sec'>Scores
        <p id='scores'><span id='scores-list'>Assignments:</span></p>
        <p id='scores'><span id='scores-list'>Projects:</span></p>
        <p id='scores'><span id='scores-list'>Assestments:</span></p>
        
        </div>
        <div className='info-sec'>Certificates
        <p id='certificates'><span id='certificates-list'>Resume:</span></p>
        <p id='certificates'><span id='certificates-list'>LinkedIn:</span></p>
        <p id='certificates'><span id='certificates-list'>Mock Interview:</span></p>
        <p id='certificates'><span id='certificates-list'> GitHub:</span></p>
        </div>
    </div>
  )
}

export default ShowMore