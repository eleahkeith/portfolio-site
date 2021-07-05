import React from 'react';
import LeahPhoto from '../images/leah-photo.jpg';

const Home = () => {
  return (
    <section className="component" id="home">
      <div id="text">
        <div className="greeting">Hello! My name is</div>
        <div className="name">Leah Keith</div>
        <div className="intro-one-liner">
          and I make stuff for the <span className="underline-text">web</span>
        </div>
        <div className="mobile-photo-container"></div>
        <p className="intro">
          I’m a freelance front-end software engineer based in the UK. I’m
          passionate about creating accessible, responsive sites for mobile,
          desktop, and beyond.{' '}
        </p>
      </div>
      <div className="desktop-photo-container">
        <div className="photo-dummy">
          <img src={LeahPhoto} id="desktop-photo" alt="me smiling" />
        </div>
      </div>
      <div className="button-cont">
        <a className="faux-button" href="#work">
          See My Work
        </a>
        <a
          className="faux-button"
          href="mailto:eleahkeith@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Home;
