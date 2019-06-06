import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <div
    className={classNames(
      'container',
      'mx-auto',
      'my-4',
      'lg:my-16',
      'px-4',
      'sm:px-6',
      'lg:px-16',
      className
    )}
    {...props}
  />
);
