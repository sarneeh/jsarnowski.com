import React from 'react';
import classNames from 'classnames';

import iconNode from '../icons/skill-nodejs.svg';
import iconJs from '../icons/skill-js.svg';
import iconReact from '../icons/skill-react.svg';
import iconRedux from '../icons/skill-redux.svg';
import iconHtml5 from '../icons/skill-html5.svg';
import iconCss3 from '../icons/skill-css3.svg';
import iconMongo from '../icons/skill-mongo.svg';
import iconPsql from '../icons/skill-psql.svg';

const skillSvgs = [
  iconNode,
  iconJs,
  iconReact,
  iconRedux,
  iconHtml5,
  iconCss3,
  iconMongo,
  iconPsql
];

export default ({ className }) => (
  <div
    className={classNames(
      'hidden',
      'md:flex',
      'md:flex-row',
      'md:flex-wrap',
      className
    )}
  >
    {skillSvgs.map((svg, index) => (
      <div
        className={classNames('flex', 'justify-center', 'w-1/4', {
          'pb-5': index <= 3
        })}
      >
        <img className="w-10 h-10" src={svg} />
      </div>
    ))}
  </div>
);
