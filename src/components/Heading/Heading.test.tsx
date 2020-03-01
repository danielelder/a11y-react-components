/**
 * Heading component tests
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
import Heading from './Heading';

test('Renders heading level 1 <h1>', () => {
  // Render Heading
  const headingLevel = 'h1';
  const { getByText } = render(
    <Heading level={headingLevel}>{headingLevel}</Heading>
    );

  // Test Heading exists
  const headingElement = getByText(headingLevel);
  expect(headingElement).toBeInTheDocument();
});

test('Renders heading level 2 <h2>', () => {
  // Render Heading
  const headingLevel = 'h2';
  const { getByText } = render(
    <Heading level={headingLevel}>{headingLevel}</Heading>
    );

  // Test Heading exists
  const headingElement = getByText(headingLevel);
  expect(headingElement).toBeInTheDocument();
});

test('Renders heading level 3 <h3>', () => {
  // Render Heading
  const headingLevel = 'h3';
  const { getByText } = render(
    <Heading level={headingLevel}>{headingLevel}</Heading>
    );

  // Test Heading exists
  const headingElement = getByText(headingLevel);
  expect(headingElement).toBeInTheDocument();
});

test('Renders heading level 4 <h4>', () => {
  // Render Heading
  const headingLevel = 'h4';
  const { getByText } = render(
    <Heading level={headingLevel}>{headingLevel}</Heading>
    );

  // Test Heading exists
  const headingElement = getByText(headingLevel);
  expect(headingElement).toBeInTheDocument();
});

test('Renders heading level 5 <h5>', () => {
  // Render Heading
  const headingLevel = 'h5';
  const { getByText } = render(
    <Heading level={headingLevel}>{headingLevel}</Heading>
    );

  // Test Heading exists
  const headingElement = getByText(headingLevel);
  expect(headingElement).toBeInTheDocument();
});

test('Renders heading level 6 <h6>', () => {
  // Render Heading
  const headingLevel = 'h6';
  const { getByText } = render(
    <Heading level={headingLevel}>{headingLevel}</Heading>
    );

  // Test Heading exists
  const headingElement = getByText(headingLevel);
  expect(headingElement).toBeInTheDocument();
});
