import React, { useState } from "react";
import MenuIcon from "../assets/menu.svg";
import Clicked from "../assets/clicked.svg";
import "./Dropdown.css";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isActive ? "dropdown active" : "dropdown"}>
      <button
        onClick={() => {
          toggleClass();
          toggleMenu();
        }}
      >
        <span className="menu-icon"> </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#introduction">Baroque</a>
          </li>
          <li>
            <a href="#artists">Artists</a>
          </li>
          <li>
            <a href="#paintings">Paintings</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
