/**
 * Button component tests
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
import Button from './Button';

test('Renders Button component on page', () => {
  // Render button
  const buttonLabel = 'Click me';
  const { getByText } = render(<Button label={buttonLabel} />);

  // Test button exists
  const buttonElement = getByText(buttonLabel);
  expect(buttonElement).toBeInTheDocument();
});
