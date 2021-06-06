import React from 'react';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-text">
        <div className="greeting">Hello! My name is</div>
        <div className="name">Leah Keith</div>
        <div className="intro-one-liner">
          and I make stuff for the{' '}
          <span className="underline-text">internet</span>
        </div>
        <div className="mobile-photo-container"></div>
        <div className="intro-p">
          I’m a freelance front-end software engineer based in the UK. I’m
          passionate about creating accessible, responsive sites for mobile,
          desktop, and beyond.{' '}
        </div>
      </div>
      <div className="desktop-photo-container">
        <div className="photo-dummy"></div>
      </div>
      <div className="home-button-cont">
        <a className="faux-button btn-home-page" href="#work">
          See My Work
        </a>
        <a
          className="faux-button btn-home-page"
          href="mailto:eleahkeith@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Home;
