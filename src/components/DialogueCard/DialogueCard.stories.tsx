import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import DialogueCard, { DialogueCardProps } from './DialogueCard';
import Text from '../Text/Text';

const Container = styled.div`
  background-image: url('https://images.nintendolife.com/5bdd822280cac/revali-1.original.jpg');
  background-size: cover;
  background-position: top center;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-bottom: 4rem;
  align-items: flex-end;
  justify-content: center;
`;

export default {
  title: 'Component/Dialogue Card',
  component: DialogueCard,
  argTypes: {},
} as Meta;

export const Default = (args: DialogueCardProps) => (
  <DialogueCard className="m-4" legend={args.legend}>
    <Text variant="large">Impressive, I know.</Text>
    <Text variant="large">Very few can achieve a mastery of the sky.</Text>
  </DialogueCard>
);

export const Example = () => (
  <>
    <Container>
      <DialogueCard className="m-4" legend="Revali">
        <Text variant="large">Impressive, I know.</Text>
        <Text variant="large">Very few can achieve a mastery of the sky.</Text>
      </DialogueCard>
    </Container>
  </>
);
