import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Colors } from './Token';
import Text from '../Text/Text';

const ColorSwatchOuter = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  width: 25%;
`;

const ColorPreview = styled.div<{ color: string }>`
  border-radius: 3rem;
  width: 4rem;
  height: 4rem;
  background: ${props => props.color};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

function ColorSwatch(props: { color: keyof typeof Colors }) {
  const colorHex = Colors[props.color];
  return (
    <ColorSwatchOuter>
      <ColorPreview color={colorHex} />
      <Text variant="tiny" color="uiDarkPrimary" className="font-bold">
        {props.color}
      </Text>
    </ColorSwatchOuter>
  );
}

export default {
  title: 'Core/Token',
  argTypes: {},
} as Meta;

export const UIColors = () => (
  <div className="flex flex-wrap p-4 bg-gray-100">
    <ColorSwatch color="uiDarkPrimary" />
    <ColorSwatch color="uiDarkSecondary" />
    <ColorSwatch color="uiLight" />
    <ColorSwatch color="uiBlue" />
    <ColorSwatch color="uiCyan" />
    <ColorSwatch color="uiGreen" />
    <ColorSwatch color="uiRed" />
    <ColorSwatch color="uiYellow" />
  </div>
);

UIColors.parameters = {
  background: 'light',
};
