import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { useTheme } from '../StyleWrapper';
import DropdownField, { DropdownFieldProps } from './DropdownField';

const Container = styled.div<{ background: string }>`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  background: ${props => props.background};
`;

export default {
  title: 'Component/Dropdown Field',
  component: DropdownField,
} as Meta;

export const Default = (args: DropdownFieldProps) => {
  const theme = useTheme();
  const containerBg = theme.currentTheme === 'dark' ? '#434343' : '#eaeaea';
  return (
    <Container background={containerBg}>
      <DropdownField {...args} />
    </Container>
  );
};

Default.args = {
  type: 'text',
  label: 'Weapon of Choice',
  options: [
    {
      label: 'Mighty Lynel Spear',
      value: 'Mighty Lynel Spear',
    },
    {
      label: 'Royal Broadsword',
      value: 'Royal Broadsword',
    },
    {
      label: 'Korok Leaf',
      value: 'Korok Leaf',
    },
    {
      label: 'Lightscale Trident',
      value: 'Lightscale Trident',
    },
  ],
  helperText: 'Your weapon that will be used in the next battle',
  errorText: 'There has been an error in this input',
  isError: false,
  disabled: false,
};
