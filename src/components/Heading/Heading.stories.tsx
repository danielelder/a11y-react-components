/**
 * Heading component stories
 *
 * Component Story Format (CSF)
 * https://storybook.js.org/docs/formats/component-story-format/
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

import { withA11y } from '@storybook/addon-a11y';
import React from 'react';
import Heading from './Heading';

export default {
  decorators: [withA11y],
  parameters: {
    jest: ['Heading.test.tsx']
  },
  title: 'Typography/Heading'
};

export const level1 = () => (
  <Heading level='h1'>Heading level 1</Heading>
);

export const level2 = () => (
  <Heading level='h2'>Heading level 2</Heading>
);

export const level3 = () => (
  <Heading level='h3'>Heading level 3</Heading>
);

export const level4 = () => (
  <Heading level='h4'>Heading level 4</Heading>
);

export const level5 = () => (
  <Heading level='h5'>Heading level 5</Heading>
);

export const level6 = () => (
  <Heading level='h6'>Heading level 6</Heading>
);
