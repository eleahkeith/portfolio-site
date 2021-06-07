import React from 'react';
import { IconSet } from './icons';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="component-title">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Let's Talk</h1>
      </div>
      <div className="component-body">
        <IconSet />
      </div>
    </div>
  );
};

export default Contact;
