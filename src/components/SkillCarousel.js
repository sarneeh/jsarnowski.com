import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import useComponentSize from '@rehooks/component-size';

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

export default ({ className }) => {
  const container = useRef(null);
  const { width } = useComponentSize(container);

  const [offset, setOffset] = useState(0);
  const [startTouchOffset, setStartTouchOffset] = useState();
  const [lastTouchOffset, setLastTouchOffset] = useState(0);

  const [isLocked, setIsLocked] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState({});

  useEffect(() => {
    const items = Array.of(...container.current.children).map(
      (child, index) => {
        return {
          index,
          from: child.offsetLeft,
          to: child.offsetLeft + width
        };
      }
    );
    setItems(items);
    setActiveItem(items[0]);
    setOffset(items[0].from);
  }, [width]);

  return (
    <div
      ref={container}
      className={classNames(
        'block',
        'md:hidden',
        'w-full',
        'whitespace-no-wrap',
        'h-24',
        className
      )}
      onTransitionEnd={() => {
        setIsLocked(false);
      }}
      onTouchStart={event => {
        setStartTouchOffset(event.changedTouches[0].pageX);
        setLastTouchOffset();
        setIsMoving(true);
      }}
      onTouchMove={event => {
        const currentOffset = event.changedTouches[0].pageX;
        const difference =
          currentOffset - (lastTouchOffset || startTouchOffset);

        setOffset(offset + difference);
        setLastTouchOffset(currentOffset);
      }}
      onTouchEnd={() => {
        setIsMoving(false);
        setIsLocked(true);

        const offsetAbs = offset > 0 ? -offset : Math.abs(offset);
        const offsetContainer = {
          from: offsetAbs,
          to: offsetAbs + width
        };

        let newActiveItem;
        if (offsetContainer.from < activeItem.from) {
          newActiveItem = items[activeItem.index - 1];
        } else if (offsetContainer.to > activeItem.to) {
          newActiveItem = items[activeItem.index + 1];
        }

        if (!newActiveItem) {
          const isFirstItemActive = activeItem.index === 0;
          const isLastItemActive = activeItem.index === items.length - 1;
          if (isFirstItemActive || isLastItemActive) {
            setOffset(-activeItem.from);
          }
        } else {
          setActiveItem(newActiveItem);
          setOffset(-newActiveItem.from);
        }
      }}
      style={{
        pointerEvents: isLocked ? 'none' : 'auto',
        transform: `translate3d(${offset}px, 0, 0)`,
        transition: isMoving ? null : `transform .25s ease`
      }}
    >
      {skillSvgs.map((svg, index) => (
        <img
          key={index}
          className="w-full h-full inline-block mr-8"
          src={svg}
        />
      ))}
    </div>
  );
};
