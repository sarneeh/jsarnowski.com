import React from 'react';
import classNames from 'classnames';

import iconGithub from '../icons/social-github.svg';
import iconDev from '../icons/social-dev.svg';
import iconBehance from '../icons/social-behance.svg';
import iconLinkedIn from '../icons/social-linkedin.svg';

// TODO: fill out hrefs
const socials = [
  { href: 'https://github.com/sarneeh', icon: iconGithub },
  { href: 'https://dev.to/sarneeh', icon: iconDev },
  { href: 'https://behance.net/sarneeh', icon: iconBehance },
  { href: 'https://linkedin.com/in/jakub-sarnowski', icon: iconLinkedIn }
];

export default ({ className }) => (
  <div className={classNames('flex', 'flex-wrap', 'justify-around', className)}>
    {socials.map((social, index) => (
      <a
        key={index}
        href={social.href}
        className={classNames(
          'flex',
          'justify-center',
          'w-1/2',
          'md:w-1/4',
          'px-2',
          'sm:px-0',
          'mb-4',
          'anim-scale'
        )}
      >
        <img src={social.icon} />
      </a>
    ))}
  </div>
);
