import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { useTheme } from '../StyleWrapper';
import InputField, { InputFieldProps } from './InputField';

const Container = styled.div<{ background: string }>`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  background: ${props => props.background};
`;

export default {
  title: 'Component/Input Field',
  component: InputField,
} as Meta;

export const Default = (args: InputFieldProps) => {
  const theme = useTheme();
  return (
    <Container background={theme.color.uiDarkPrimary}>
      <InputField {...args} />
    </Container>
  );
};

Default.args = {
  type: 'text',
  label: 'Full Name',
  helperText: 'The name that will be used on your journey',
  errorText: 'There has been an error in this input',
  isError: false,
  placeholder: 'input your name here',
};
