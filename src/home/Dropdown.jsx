import React, { useState } from "react";
import MenuIcon from "../assets/menu.svg";
import Clicked from "../assets/clicked.svg";
import "./Dropdown.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <a onClick={toggleMenu} className="dropdown-toggle">
        <img src={MenuIcon} className="menu-icon" />
      </a>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <p>MENU</p>
          </li>
          <li>
            <a href="#">Baroque</a>
          </li>
          <li>
            <a href="#">Artists</a>
          </li>
          <li>
            <a href="#">Paintings</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
