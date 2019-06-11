import React from 'react';
import classNames from 'classnames';

const Heading = ({ level, className, ...props }) =>
  React.createElement(`h${level}`, {
    className: classNames('font-heading', 'font-bold', className),
    ...props
  });

export const H1 = ({ className, ...props }) => (
  <Heading
    level={1}
    className={classNames('text-3xl lg:text-6xl', className)}
    {...props}
  />
);

export const H2 = ({ className, ...props }) => (
  <Heading
    level={2}
    className={classNames('text-lg lg:text-xl', className)}
    {...props}
  />
);

export const Highlight = ({ className, ...props }) => (
  <span className={classNames('font-bold', className)} {...props} />
);
