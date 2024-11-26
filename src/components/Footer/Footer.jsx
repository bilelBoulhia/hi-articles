import React from 'react';
import './Footer.css';
import tiktok from '../../images/icons8-tiktok-50.png';
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
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={tiktok} alt="TikTok" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
