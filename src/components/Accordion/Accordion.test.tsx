/**
 * Accordion component tests
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
import Accordion from './Accordion';

test('Renders Accordion component with content hidden', () => {
  // Render accordion
  const accordionHeading = 'More information';
  const { getByText } = render(
    <Accordion heading={accordionHeading}>
      <p>Some hidden content</p>
    </Accordion>
    );

  // Test accordion exists
  const buttonElement = getByText(accordionHeading);
  expect(buttonElement).toBeInTheDocument();
});
