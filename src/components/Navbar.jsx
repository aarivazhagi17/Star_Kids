import React, { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../Logo/Star.jpg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="Navbar">
      <div className="nav-container">

        {/* Logo */}
        <span className="logo">
          <img className="nav-image" src={Star} alt="" />
          Star Kids
        </span>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* Home Dropdown */}
          <li className="dropdown">

            {/* Home click = Home page */}
            <div className="nav-row">
              <Link to="/">Home</Link>

              {/* Arrow click = dropdown */}
              <span
                className="arrow"
                onClick={() => toggleDropdown("home")}
              >
                ▾
              </span>
            </div>

            {dropdown === "home" && (
              <ul className="submenu">
                <li><Link to="/center">Center</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            )}
          </li>


          <li className="dropdown">


            <div className="nav-row">
              <Link to="/programs">Programs</Link>

              <span
                className="arrow"
                onClick={() => toggleDropdown("programs")}
              >
                ▾
              </span>
            </div>

            {dropdown === "programs" && (
              <ul className="submenu">
                <li><Link to="/academic">Academic</Link></li>
              </ul>
            )}
          </li>


          <li>
            <Link to="/games">Games</Link>
          </li>


          <li>
            <Link to="/carerrs">Carerrs</Link>
          </li>


          <li>
            <Link to="/blog">Blog</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;