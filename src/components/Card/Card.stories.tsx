import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Card from './Card';
import Text from '../Text/Text';

const Container = styled.div`
  background-image: url('https://c4.wallpaperflare.com/wallpaper/687/248/958/botw-mipha-the-champions-ballad-the-legend-of-zelda-wallpaper-preview.jpg');
  background-size: 'cover';
  margin-bottom: 2rem;
  padding: 4rem;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'Component/Card',
  component: Card,
  argTypes: {},
} as Meta;

export const Default = (args: any) => (
  <Card {...args}>
    <Text>Content of the card</Text>
  </Card>
);

export const SimpleCard = () => (
  <Container>
    <Card
      style={{ width: '300px', padding: '1.25rem' }}
      edges="hard"
      withBorder
    >
      <Text block variant="title-3" withDivider>
        Arrow x5
      </Text>
      <Text variant="small">A bundle of five common arrows.</Text>
      <Text variant="small">
        The shafts of these arrows were carved from the wood of a sturdy tree.
      </Text>
    </Card>
  </Container>
);

export const WithImage = () => (
  <Container>
    <Card
      style={{
        width: '80%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
      }}
      edges="soft"
    >
      <img
        src="https://static.wikia.nocookie.net/zelda/images/b/b3/Breath_of_the_Wild_Food_Dish_%28Skewers%29_Mushroom_Skewers_%28Icon%29.png"
        alt="Mushroom"
        width={100}
      />
      <div style={{ marginLeft: '1rem' }}>
        <Text block variant="title-2" withDivider>
          Energizing Mushroom
        </Text>
        <Text variant="small">
          Instantly restores some of your Stamina. This simple mushroom-packed
          skewer has its colorful presentation to thank for its appeal
        </Text>
      </div>
    </Card>
  </Container>
);
