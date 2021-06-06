/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="component-title">
        <h1>Who I Am</h1>
      </div>
      <div className="component-body">
        <div className="about-text">
          <div className="about-section" id="s1">
            <h2 className="about-subhead">Welcome!</h2>
            <p>
              My name is Leah and I'm a front-end software engineer. I am
              passionate about creating responsive, accessible websites for all
              types of devices. I primarily use React & TypeScript + HTML5/CSS3,
              but I love learning new languages and frameworks and I'm
              constantly growing my knowledge base.
            </p>
          </div>
          <div className="about-section" id="s2">
            <h2 className="about-subhead">Career</h2>
            <p>
              My software development career began in early 2020 when I attended
              a web development bootcamp at <a href="#">23 Code Street</a> based
              in London. My pre-dev career history includes project manager,
              group account manager at a large insurance company, and a friendly
              retail manager.
            </p>
          </div>
          <div className="about-section" id="s3">
            <h2 className="about-subhead">Philosophy</h2>
            <p>
              Because I've spent so many years working with people and clients,
              I take a people-first approach to development. Tech exists to
              improve the lives of its stakeholders, so the client or user
              should be at the center of everything we do.
            </p>
          </div>
          <div className="about-section" id="s4">
            <h2 className="about-subhead">Me IRL</h2>
            <p>
              Outside of development, I'm an avid knitter, gamer, and baker. I
              am from the US originally, but I now live in the UK with my dog
              Luke and my husband Sam, both of whom I'm completely obsessed
              with.
            </p>
          </div>
        </div>
        <div className="swipe">
          « <span className="swipe-txt">swipe for more</span> »
        </div>

        <div className="faux-button mobile-photo-link">
          Want to see photos of my dog?
        </div>
        <div className="photo-carousel">
          <div className="carousel tier1">
            <div className="carousel-dummy"></div>
            <div className="carousel-dummy"></div>
          </div>
          <div className="carousel tier2">
            <div className="carousel-dummy"></div>
            <div className="carousel-dummy"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
