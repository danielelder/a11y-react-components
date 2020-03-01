/**
 * Global default styles
 *
 * Emotion (CSS-in-JS)
 * https://emotion.sh/docs/css-prop
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

import { css, Global } from '@emotion/core';
import React from 'react';

export default () => {
  return (
    <Global
      styles={css`
        body {
          background: #fff;
          box-sizing: border-box;
          color: #000;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};
