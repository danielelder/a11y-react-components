/**
 * Heading component
 *
 * Emotion (CSS-in-JS)
 * https://emotion.sh/docs/css-prop
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

export interface HeadingProps {
  level: string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

function Heading(props: HeadingProps) {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const headingLevel = validHeadingLevels.includes(props.level) ? props.level : 'h2';

  return jsx(
    headingLevel,
    { className: 'arc-heading',
      css: {
        boxSizing: 'border-box',
        lineHeight: '150%'
      },
      style: props.styles
    },
    props.children
  );
}

export default Heading;
