import { addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
 
import { sortStories } from './utils/story-helpers';
import results from '../src/.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

// Add group and story names to the sort order to explicitly order them.
// Items that are not included in the list are shown below the sorted items.
const SORT_ORDER = {
  Introduction: [
    'Welcome',
    'Get Started',
    'Contributing',
    'Changelog'
  ],
  Typography: [
    'Heading',
    'SubHeading',
    'Text'],
  Layout: [],
  Forms: [],
  Components: []
};

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true
  }
});
