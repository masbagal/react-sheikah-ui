import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { Colors } from '../Token/Token';

export interface CardProps {
  edges?: 'hard' | 'soft';
  withBorder?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
}

const EDGE_MAPPING: { [key: string]: string } = {
  hard: `0px`,
  soft: `0.25rem`,
};

const OuterCard = styled.div<{ edges: CardProps['edges'] }>`
  background-color: ${Colors.uiDarkPrimary}c8;
  display: flex;
  position: relative;
  backdrop-filter: blur(2px);
  border-radius: ${props => EDGE_MAPPING[props.edges as string]};
`;

const InnerCard = styled.div<{ withBorder: boolean }>`
  width: 100%;
  border-style: solid;
  margin: 2px;
  border-color: ${Colors.uiDarkSecondary};
  border-width: ${props => (props.withBorder ? '1px' : 0)};
`;

const Card: React.FC<CardProps> = props => {
  const { edges, withBorder = false, style } = props;
  return (
    <OuterCard edges={edges} style={style}>
      <InnerCard withBorder={withBorder}>{props.children}</InnerCard>
    </OuterCard>
  );
};

Card.defaultProps = {
  withBorder: false,
  edges: 'hard',
};

export default Card;
