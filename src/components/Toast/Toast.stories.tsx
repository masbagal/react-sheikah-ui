import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Toast from './Toast';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://c4.wallpaperflare.com/wallpaper/687/248/958/botw-mipha-the-champions-ballad-the-legend-of-zelda-wallpaper-preview.jpg');
  background-size: cover;
`;

export default {
  title: 'Component/Toast',
  component: Toast,
  argTypes: { onClose: { action: 'close' } },
} as Meta;

export const Default = (args: any) => {
  return (
    <Container>
      <Toast {...args} />
    </Container>
  );
};

Default.args = {
  text: 'Raw Chicken Drumstick',
  visible: true,
  imageSrc:
    'https://static.wikia.nocookie.net/zelda/images/0/0c/Breath_of_the_Wild_Meat_Raw_Bird_Drumstick_%28Icon%29.png',
  visibleDuration: 3000,
  imageAlt: 'Drumstick',
};
