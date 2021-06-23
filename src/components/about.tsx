/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/App.css';
import BirthdayLuke from '../images/birthday-luke.png';
import SamLuke from '../images/sam-luke.jpeg';
import PuppyLuke from '../images/puppy-luke.png';
import PeakLuke from '../images/peak-luke.png';

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPhotoModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="component" id="about">
      <div>
        <h1>Who I Am</h1>
      </div>
      <div className="body" id="about-body">
        <div id="text">
          <section id="s1">
            <h3>Welcome!</h3>
            <p>
              My name is Leah and I'm a front-end software engineer. I am
              passionate about creating responsive, accessible websites for all
              types of devices. I primarily use React & TypeScript + HTML5/CSS3,
              but I love learning new languages and frameworks and I'm
              constantly growing my knowledge base.
            </p>
          </section>
          <section id="s2">
            <h3>Career</h3>
            <p>
              My software development career began in early 2020 when I attended
              a web development bootcamp at <a href="#">23 Code Street</a> based
              in London. My pre-dev career history includes project manager,
              group account manager at a large insurance company, and a friendly
              retail manager.
            </p>
          </section>
          <section id="s3">
            <h3>Philosophy</h3>
            <p>
              Because I've spent so many years working with people and clients,
              I take a people-first approach to development. Tech exists to
              improve the lives of its stakeholders, so the client or user
              should be at the center of everything we do.
            </p>
          </section>
          <section id="s4">
            <h3>Me IRL</h3>
            <p>
              Outside of development, I'm an avid knitter, gamer, and baker. I
              am from the US originally, but I now live in the UK with my dog
              Luke and my husband Sam, both of whom I'm completely obsessed
              with.
            </p>
          </section>
        </div>
        <div className="swipe">
          « <span className="swipe-txt">swipe for more</span> »
        </div>

        <div
          onClick={() => openPhotoModal()}
          className="faux-button mobile-photo-link"
        >
          Want to see photos of my dog?
        </div>
        <div className="photo-carousel">
          <div className="carousel tier1">
            <div className="img-cont">
              <img
                className="pc-photo"
                src={PeakLuke}
                alt="Luke and I shaking hands in the Peak District"
              />
            </div>
            <div className="img-cont">
              <img
                className="pc-photo"
                src={BirthdayLuke}
                alt="Luke on his fourth birthday wearing a feather boa and a red sparkly hat"
              />
            </div>
          </div>
          <div className="carousel tier2">
            <div className="img-cont">
              <img
                className="pc-photo"
                src={PuppyLuke}
                alt="Luke as a puppy about to attack the camera"
              />
            </div>

            <div className="img-cont">
              <img
                className="pc-photo"
                src={SamLuke}
                alt="Luke and Sam relaxing in an Airbnb in Wales"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal className="Modal" overlayClassName="Overlay" isOpen={isOpen}>
        <div className="photo-modal">
          <div className="photo-cont">
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
            <div className="photo"></div>
          </div>
          <span className="photo-modal-text">Ask and you shall receive!</span>
        </div>
      </Modal>
    </section>
  );
};

export default About;
