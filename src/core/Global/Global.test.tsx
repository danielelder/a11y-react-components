/**
 * Global Style tests
 *
 * React Testing Library
 * https://testing-library.com/docs/react-testing-library/api
 *
 * @version 0.0.1
 * @Author [Dan Elder](https://github.com/danielelder)
 */

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Global from './Global';

test('Adds global styles to <head>', () => {
  // Render Styles
  const stylesTag = '<style>';
  const { getByText } = render(
    <Global />
    );

  // Test global styles exist
  const styleTags = document.head.getElementsByTagName('style');
  expect(styleTags[0].innerHTML).toContain('background:#fff');
});
