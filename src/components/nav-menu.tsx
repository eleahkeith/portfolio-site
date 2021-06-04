import React, { useState } from 'react';
import HeaderLogo from '../images/header-logo.png';

const NavMenu = () => {
  const [navActive, setNavActive] = useState<boolean>(false);

  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div
        className={`nav-overlay ${
          navActive ? 'nav-overlay-active' : 'nav-overlay-hidden'
        }`}
      ></div>
      <div className="toolbar">
        <div className="banner-container">
          <img
            className="header-logo"
            src={HeaderLogo}
            onClick={() => {
              console.log(window.pageYOffset);
            }}
            alt="pink circle with white initials 'LK'"
          />
        </div>
        <div className="burger-icon" onClick={() => navToggle()}>
          <div
            className={`line1 ${navActive ? 'line1-active' : 'line1-inactive'}`}
          ></div>
          <div
            className={`line2 ${navActive ? 'line2-active' : 'line2-inactive'}`}
          ></div>
          <div
            className={`line1 ${navActive ? 'line3-active' : 'line3-inactive'}`}
          ></div>
        </div>
        <div
          className={`nav-container ${navActive ? 'nav-active' : 'nav-hidden'}`}
        >
          <nav className="nav-menu">
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#"
            >
              Skills
            </a>
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#"
            >
              Work
            </a>
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#"
            >
              About
            </a>
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
