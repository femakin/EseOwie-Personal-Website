import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import ESEOWIE from "../../assets/svg/ESEOWIE.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className="navigation">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <img src={ESEOWIE} alt="Logo" />
        </Link>
        <div onClick={handleClick} className="nav-icon">
          {open ? <FiX /> : <FiMenu />}
        </div>
        <ul className={open ? "nav-links active" : "nav-links"}>
          {/* <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Homepage
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/career" className="nav-link" onClick={closeMenu}>
              Political Career
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-link" onClick={closeMenu}>
              Professional Career
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/academics" className="nav-link" onClick={closeMenu}>
              Academics Pedigree
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/social" className="nav-link" onClick={closeMenu}>
              Social Enterprise
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/publications" className="nav-link" onClick={closeMenu}>
              Publications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
