import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import RoundedButton from './RoundedButton';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://c4.wallpaperflare.com/wallpaper/687/248/958/botw-mipha-the-champions-ballad-the-legend-of-zelda-wallpaper-preview.jpg');
  background-size: cover;
`;

export default {
  title: 'Component/Rounded Button',
  component: RoundedButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Default = (args: any) => (
  <Container>
    <RoundedButton {...args} />
  </Container>
);

Default.args = {
  text: 'Save Game',
};
