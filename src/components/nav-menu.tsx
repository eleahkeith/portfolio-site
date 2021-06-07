import React, { useState } from 'react';
import HeaderLogo from '../images/header-logo.png';
import { IconSetMobile } from './icons-mobile';

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
          <a href="#home">
            <img
              className="header-logo"
              src={HeaderLogo}
              onClick={() => {
                console.log(window.pageYOffset);
              }}
              alt="pink circle with white initials 'LK'"
            />
          </a>
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
              href="#about"
            >
              About
            </a>
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#skills"
            >
              Skills
            </a>
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#work"
            >
              Work
            </a>
            <a
              className="nav-option"
              onClick={() => setNavActive(false)}
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="icon-set-mobile">
            <IconSetMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
