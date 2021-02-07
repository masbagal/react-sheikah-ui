import React from 'react';
import styled from 'styled-components';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { Colors } from '../Token/Token';
import Text from './Text';

const Container = styled.div`
  background: ${Colors.uiDarkPrimary};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.25rem;
`;

export default {
  title: 'Core/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Mighty Steamed Meat' },
  },
} as Meta;

export const AllVariants = () => (
  <>
    <div>title-1</div>
    <Container>
      <Text variant="title-1">Inventory</Text>
    </Container>
    <div>title-2</div>
    <Container>
      <Text variant="title-2">Mighty Steamed Meat</Text>
    </Container>
    <div>title-3</div>
    <Container>
      <Text variant="title-3">Hyrule Field</Text>
    </Container>
    <div>large</div>
    <Container>
      <Text variant="large">
        If you return my lost <Text color="uiCyan">Korok Seed</Text> to me, I
        can expand the size of your inventory.
      </Text>
    </Container>
    <div>base</div>
    <Container>
      <Text variant="base">
        If you return my lost <Text color="uiCyan">Korok Seed</Text> to me, I
        can expand the size of your inventory.
      </Text>
    </Container>
    <div>small</div>
    <Container>
      <Text variant="small">
        Grants a mid-level attack boost. This meat dish has been wrapped in
        fragrant leaves and steamed to preserve its moisture
      </Text>
    </Container>
    <div>tiny</div>
    <Container>
      <Text variant="tiny">Autosaved</Text>
    </Container>
  </>
);

export const Knobs = (args: any) => (
  <Container>
    <Text {...args} />
  </Container>
);

AllVariants.parameters = {
  backgrounds: { default: 'light' },
};
