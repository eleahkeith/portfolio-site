import React from 'react';
import { ReactComponent as IgSVG } from '../images/icons-mobile/logo-instagram-mobile.svg';
import { ReactComponent as EmailSVG } from '../images/icons-mobile/logo-email-mobile.svg';
import { ReactComponent as GithubSVG } from '../images/icons-mobile/logo-github-mobile.svg';
import { ReactComponent as LinkedinSVG } from '../images/icons-mobile/logo-linkedin-mobile.svg';

export const IconSetMobile = () => {
  return (
    <div className="set-mobile">
      <EmailSVG className="soc-icons-mobile" />
      <GithubSVG className="soc-icons-mobile" />
      <LinkedinSVG className="soc-icons-mobile" />
      <IgSVG className="soc-icons-mobile" />
    </div>
  );
};
