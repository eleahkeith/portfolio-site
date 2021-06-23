import React from 'react';
import { IconSetMobile } from './icons-mobile';

const Contact = () => {
  return (
    <section className="component" id="contact">
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Let's Talk</h1>
      </div>
      <div className="body" id="contact-body">
        <h2>if you have...</h2>
        <ul className="contact">
          <li>questions</li>
          <li>feedback</li>
          <li>ideas</li>
          <li>music recommendations</li>
          <li>bad jokes</li>
        </ul>
        <span className="reach-out-mobile">
          ...please reach out via any of the below!
        </span>
        <span className="reach-out">
          ...please reach out via any of the options in the bottom right corner!
        </span>
        <div className="icons">
          <IconSetMobile />
        </div>
      </div>
    </section>
  );
};

export default Contact;
