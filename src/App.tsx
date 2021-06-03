import React, { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';

const HomePage = () => {
  const [navActive, setNavActive] = useState<boolean>(false);

  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div className="toolbar">
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
          className={`nav-overlay ${
            navActive ? 'nav-overlay-active' : 'nav-overlay-hidden'
          }`}
        ></div>
        <div
          className={`nav-container ${navActive ? 'nav-active' : 'nav-hidden'}`}
        >
          <nav className="nav-menu">
            <a className="nav-option" href="#">
              Skills
            </a>
            <a className="nav-option" href="#">
              Work
            </a>
            <a className="nav-option" href="#">
              About
            </a>
            <a className="nav-option" href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HomePage;
