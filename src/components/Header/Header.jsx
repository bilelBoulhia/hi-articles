import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="logo"
            src="https://i.ibb.co/YLhbmxZ/hiicon.png"
            alt="img"
          />
        </div>
        <div>
          <a href="https://houseofideas.club">Main Website</a>
        </div>
        <div className="dropdown">
          <input type="checkbox" id="dropdown" />

          <label className="dropdown__face" htmlFor="dropdown">
            <div className="dropdown__text">Topics</div>

            <div className="dropdown__arrow"></div>
          </label>

          <ul className="dropdown__items">
            <li>Drama</li>
            <li>Economics</li>
            <li>Trading</li>
            <li>Death</li>
            <li>imperium</li>
          </ul>
        </div>
      </div>

      <div className="nav-right">
        <div className="search">
          <FaSearch id="search-icon" />
          <input placeholder="search..." type="text" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
