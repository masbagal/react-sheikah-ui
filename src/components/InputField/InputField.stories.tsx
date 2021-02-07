import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import InputField, { InputFieldProps } from './InputField';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  background: #434343;
`;

export default {
  title: 'Component/Input Field',
  component: InputField,
} as Meta;

export const Default = (args: InputFieldProps) => (
  <Container>
    <InputField {...args} />
  </Container>
);

Default.args = {
  type: 'text',
  label: 'Full Name',
  helperText: 'The name that will be used on your journey',
  errorText: 'There has been an error in this input',
  isError: false,
  placeholder: 'input your name here',
};
