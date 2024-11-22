import React from 'react'
import './Footer.css'
import tiktok from '../../images/icons8-tiktok-50.png'
import instagram from '../../images/icons8-instagram-50.png'
import linkedin from '../../images/icons8-linkedin-50.png'
import facebook from '../../images/icons8-facebook-50.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="infos">
        <ul className='contacts'><h2>Contact us:</h2>
          <li>Phone Number: <a href="">0555442266</a></li>
          <li>Email: <a href="">houseofideas@gmail.com</a></li>
          <li>location: <a href="">université d'Alger 3, Dely Brahim</a></li>
        </ul>
        <ul className='medias'><h2>Our Medias:</h2>
          <li><img src={tiktok} href=""/></li>
          <li><img src={instagram} href=""/></li>
          <li><img src={linkedin} alt="" /></li>
          <li><img src={facebook} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer