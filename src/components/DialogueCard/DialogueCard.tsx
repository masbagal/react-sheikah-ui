import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { Colors } from '../Token/Token';

export interface DialogueCardProps {
  children: React.ReactNode;
  className?: string;
  legend?: string;
}

const DialogContainer = styled.div`
  border-radius: 9999px;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: ${Colors.uiDarkPrimary}c8;
  position: relative;
  backdrop-filter: blur(4px);
  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const LegendContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: -0.5rem;
  left: 2.5rem;
  color: ${Colors.uiLight};
  font-weight: 500;
  @media (min-width: 768px) {
    left: 4em;
  }
`;

const DialogueCard: React.FC<DialogueCardProps> = props => {
  const { legend } = props;
  return (
    <DialogContainer>
      {legend && (
        <LegendContainer>
          <Text variant="base">{legend}</Text>
        </LegendContainer>
      )}
      {props.children}
    </DialogContainer>
  );
};

export default DialogueCard;
