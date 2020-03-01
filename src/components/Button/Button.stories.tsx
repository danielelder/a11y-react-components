/**
 * Button component stories
 *
 * Component Story Format (CSF)
 * https://storybook.js.org/docs/formats/component-story-format/
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

import { withA11y } from '@storybook/addon-a11y';
import React from 'react';

import Button from './Button';
import docs from './Button.docs.mdx';

export default {
  decorators: [withA11y],
  parameters: {
    docs: { page: docs },
    jest: ['Button.test.tsx']
  },
  title: 'Components/Button'
};

export const withLabel = () => (
  <Button label='Click me' />
);

export const asToggle = () => (
  <Button label='Toggle me' type='toggle' />
);
