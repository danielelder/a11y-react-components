/**
 * Global style stories
 *
 * Component Story Format (CSF)
 * https://storybook.js.org/docs/formats/component-story-format/
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

import { withA11y } from '@storybook/addon-a11y';
import React from 'react';
import Global from './Global';

export default {
  decorators: [withA11y],
  parameters: {
    jest: ['Global.test.tsx']
  },
  title: 'Layout/Global'
};

export const globalStyles = () => (
  <Global />
);
