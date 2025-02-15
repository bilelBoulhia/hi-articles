import React from 'react';
import './Footer.css';
import {FaTiktok } from 'react-icons/fa';
import instagram from '../../images/icons8-instagram-50.png';
import linkedin from '../../images/icons8-linkedin-50.png';
import facebook from '../../images/icons8-facebook-50.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="infos">
        <div className="contacts">
          <h2>Contact Us:</h2>
          <ul>
            <li>
              Phone Number: <a href="tel:0555442266">0555442266</a>
            </li>
            <li>
              Email: <a href="mailto:houseofideas@gmail.com">houseofideas@gmail.com</a>
            </li>
            <li>
              Location: <a href="#">Université d'Alger 3, Dely Brahim</a>
            </li>
          </ul>
        </div>

        {/* Medias Section */}
        <div className="medias">
          <h2>Our Medias:</h2>
          <div className="media-icons">
            <a href="https://tiktok.com">
              <FaTiktok color='white' size={35}/>
            </a>
            <a href="https://instagram.com">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
