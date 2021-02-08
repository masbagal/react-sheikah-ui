import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Text from '../Text/Text';
import { useTheme } from '../StyleWrapper';

const ColorSwatchOuter = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const ColorPreview = styled.div<{ color: string }>`
  border-radius: 3rem;
  width: 2rem;
  height: 2rem;
  background: ${props => props.color};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #fff;
  box-shadow: 2px 2px 10px#4c4c4c33;
`;

function ColorSwatch(props: { color: string; colorHex: string }) {
  return (
    <ColorSwatchOuter>
      <ColorPreview color={props.colorHex} />
      <Text variant="tiny">{props.color}</Text>
    </ColorSwatchOuter>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  background: #eaeaea;
`;

export default {
  title: 'Core/Token',
  argTypes: {},
} as Meta;

export const UIColors = () => {
  const theme = useTheme();
  return (
    <Container>
      <ColorSwatch
        color="uiLightPrimary"
        colorHex={theme.color.uiLightPrimary}
      />
      <ColorSwatch
        color="uiLightSecondary"
        colorHex={theme.color.uiLightSecondary}
      />
      <ColorSwatch color="uiDarkPrimary" colorHex={theme.color.uiDarkPrimary} />
      <ColorSwatch
        color="uiDarkSecondary"
        colorHex={theme.color.uiDarkSecondary}
      />
      <ColorSwatch color="uiBlue" colorHex={theme.color.uiBlue} />
      <ColorSwatch color="uiCyan" colorHex={theme.color.uiCyan} />
      <ColorSwatch color="uiGreen" colorHex={theme.color.uiGreen} />
      <ColorSwatch color="uiRed" colorHex={theme.color.uiRed} />
      <ColorSwatch color="uiYellow" colorHex={theme.color.uiYellow} />
    </Container>
  );
};

UIColors.parameters = {
  background: 'light',
};
