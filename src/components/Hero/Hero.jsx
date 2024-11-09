import React from 'react'
import './Hero.css'


const hero = () => {
  return (
    <div className='hero-container'>

     <div className="text">
        <h1 className='headline'> new journal </h1>
        <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis at excepturi aliquid consequatur, porro doloremque debitis tempore nulla sed explicabo, nam, illum itaque. Incidunt aut quas distinctio illo. A, numquam!</p>
      </div>

      <div className="hero-img">
        <img src="https://assets.propmark.com.br/uploads/2023/05/BIG_dia4_0907-220.jpg" alt="" />
      </div>
      
    </div>
  )
}

export default hero