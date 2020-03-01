/**
 * Accordion component stories
 *
 * Component Story Format (CSF)
 * https://storybook.js.org/docs/formats/component-story-format/
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

import { withA11y } from '@storybook/addon-a11y';
import React from 'react';
import Accordion from './Accordion';

export default {
  decorators: [withA11y],
  parameters: {
    jest: ['Accordion.test.tsx']
  },
  title: 'Components/Accordion'
};

export const collasped = () => (
  <Accordion heading='More information'>
      <p>Some hidden content</p>
  </Accordion>
);

export const expanded = () => (
  <Accordion heading='More information' isToggled>
      <p>Some hidden content</p>
  </Accordion>
);

const style = { background: 'black' } as React.CSSProperties;

export const customStyle = () => (
  <Accordion heading='More information' styles={style}>
      <p>Some hidden content</p>
  </Accordion>
);
