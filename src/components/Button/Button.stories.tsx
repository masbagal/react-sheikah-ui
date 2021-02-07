import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://c4.wallpaperflare.com/wallpaper/687/248/958/botw-mipha-the-champions-ballad-the-legend-of-zelda-wallpaper-preview.jpg');
  background-size: cover;
`;

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Default = (args: any) => (
  <Container>
    <Button {...args} />
  </Container>
);

Default.args = {
  text: 'Save Game',
};
