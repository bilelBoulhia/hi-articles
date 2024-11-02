import React from 'react';
import './Header.css';
import {FaSearch} from 'react-icons/fa'
import Logo from '../../images/Logo.svg'
import { Dropdown, DropdownButton } from "react-bootstrap";


const Header = () => {
  return (
    <div className="container">
      
     <div className="nav-right">
       <div className="img">
         <img className='logo' src={Logo} />
       </div>
      
      <div className="links">
        <li className='website'><a href="https://houseofideas.club" target="_blank">Main Website</a></li>
     </div>

     <DropdownButton
      id="dropdown-custom-button"
      title="Other Topics"
      className="custom-btn"
      variant="secondary" 
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </DropdownButton>
      </div>
      
      <div className="search">
       <FaSearch id='search-icon'/>
       <input placeholder='search...' type="text" />
      </div>

      
   
    </div>
  );
};

export default Header;
