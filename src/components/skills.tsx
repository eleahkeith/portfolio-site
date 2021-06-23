import React from 'react';
import CV from '../images/leah-cv.pdf';

const Skills = () => {
  const explainer = '(what is this?)';
  return (
    <>
      <section className="component" id="skills">
        <div>
          <h1>What I Do Well</h1>
        </div>
        <div className="body" id="skills-body">
          <div className="list-cont">
            <h2>Tech Skills</h2>
            <ul className="skills">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript / ES6</li>
              <li>HTML5 / CSS3</li>
              <li>REST API Interaction</li>
              <li>Software Development Life Cycle</li>
              <li>Git & GitHub</li>
              <li>Netlify Deployments</li>
            </ul>
          </div>
          <div className="list-cont" id="bonus">
            <h2>Bonus Skills</h2>
            <ul className="skills">
              <li>Agile</li>
              <li>Project Management</li>
              <li>
                Lean Six Sigma{' '}
                <span
                  className="explainer"
                  data-text="'Lean Six Sigma is a combination of two popular Process Improvement methods (Lean and Six Sigma) that pave the way for operational excellence. 
                  These time-tested approaches provide organizations with a clear path to achieving their missions as fast and efficiently as possible.' - goleansixsigma.com"
                >
                  {explainer}
                </span>
              </li>
              <li>Account Management</li>
              <li>IT Project Management</li>
              <li>Collaboration & Team Building</li>
            </ul>
          </div>
          <div className="list-cont" id="certs">
            <h2>Education & Certifications</h2>
            <ul className="skills">
              <li>Web Development Certificate (23 Code Street, 2020)</li>
              <li>Lean Six Sigma Green Belt Certification (USF, 2020)</li>
              <li>Certified Associate in Project Management (PMI, 2019)</li>
              <li>BA English with honours (UNCG, 2010)</li>
            </ul>
          </div>
          <a href={CV} target="_blank" className="resume" rel="noreferrer">
            want my CV?
          </a>
        </div>
      </section>
    </>
  );
};

export default Skills;
