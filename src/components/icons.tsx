import React from 'react';
import { ReactComponent as IgSVG } from '../images/icons-tablet-desktop/logo-instagram.svg';
import { ReactComponent as EmailSVG } from '../images/icons-tablet-desktop/logo-email.svg';
import { ReactComponent as GithubSVG } from '../images/icons-tablet-desktop/logo-github.svg';
import { ReactComponent as LinkedinSVG } from '../images/icons-tablet-desktop/logo-linkedin.svg';

export const IconSet = () => {
  return (
    <div className="icon-set">
      <a href="mailto:eleahkeith@gmail.com" target="_blank" rel="noreferrer">
        <EmailSVG className="soc-icons" />
      </a>
      <a href="https://github.com/eleahkeith" target="_blank" rel="noreferrer">
        <GithubSVG className="soc-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/leah-keith/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinSVG className="soc-icons" />
      </a>
      <a
        href="https://www.instagram.com/fakeleahkeith/"
        target="_blank"
        rel="noreferrer"
      >
        <IgSVG className="soc-icons" />
      </a>
    </div>
  );
};
