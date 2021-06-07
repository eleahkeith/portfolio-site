import React from 'react';
import { ReactComponent as IgSVG } from '../images/icons-mobile/logo-instagram-mobile.svg';
import { ReactComponent as EmailSVG } from '../images/icons-mobile/logo-email-mobile.svg';
import { ReactComponent as GithubSVG } from '../images/icons-mobile/logo-github-mobile.svg';
import { ReactComponent as LinkedinSVG } from '../images/icons-mobile/logo-linkedin-mobile.svg';

export const IconSetMobile = () => {
  return (
    <div className="icon-set-mobile">
      <a href="mailto:eleahkeith@gmail.com" target="_blank" rel="noreferrer">
        <EmailSVG className="soc-icons-mobile" />
      </a>
      <a href="https://github.com/eleahkeith" target="_blank" rel="noreferrer">
        <GithubSVG className="soc-icons-mobile" />
      </a>
      <a
        href="https://www.linkedin.com/in/leah-keith/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinSVG className="soc-icons-mobile" />
      </a>
      <a
        href="https://www.instagram.com/fakeleahkeith/"
        target="_blank"
        rel="noreferrer"
      >
        <IgSVG className="soc-icons-mobile" />
      </a>
    </div>
  );
};
