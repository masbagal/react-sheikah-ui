import React from 'react';
import styled from 'styled-components';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import Text from './Text';
import { useTheme } from '../StyleWrapper';

const Container = styled.div<{ bg: string }>`
  background: ${props => props.bg};
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

export const AllVariants = () => {
  const theme = useTheme();
  return (
    <>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          title-1
        </Text>
        <Text variant="title-1">Inventory</Text>
      </Container>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          title-2
        </Text>
        <Text variant="title-2">Mighty Steamed Meat</Text>
      </Container>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          title-3
        </Text>
        <Text variant="title-3">Hyrule Field</Text>
      </Container>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          large
        </Text>
        <Text variant="large">
          If you return my lost <Text color="uiCyan">Korok Seed</Text> to me, I
          can expand the size of your inventory.
        </Text>
      </Container>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          base
        </Text>
        <Text variant="base">
          If you return my lost <Text color="uiCyan">Korok Seed</Text> to me, I
          can expand the size of your inventory.
        </Text>
      </Container>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          small
        </Text>
        <Text variant="small">
          Grants a mid-level attack boost. This meat dish has been wrapped in
          fragrant leaves and steamed to preserve its moisture
        </Text>
      </Container>
      <Container bg={theme.color.uiDarkPrimary}>
        <Text
          color="uiDarkSecondary"
          withDivider
          block
          style={{ marginBottom: '0.25rem' }}
        >
          tiny
        </Text>
        <Text variant="tiny">Autosaved</Text>
      </Container>
    </>
  );
};

export const Knobs = (args: any) => {
  const theme = useTheme();
  return (
    <Container bg={theme.color.uiDarkPrimary}>
      <Text {...args} />
    </Container>
  );
};

AllVariants.parameters = {
  backgrounds: { default: 'light' },
};
