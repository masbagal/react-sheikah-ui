import React from 'react';
import { StyleWrapper } from '../src/components/StyleWrapper';
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  Story => (
    <StyleWrapper theme="dark">
      <Story />
    </StyleWrapper>
  ),
];
