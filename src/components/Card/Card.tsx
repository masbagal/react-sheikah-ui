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
  backdrop-filter: blur(2px);
  position: relative;
  border-radius: ${props => EDGE_MAPPING[props.edges as string]};
`;

const InnerBorder = styled.div<{ withBorder: boolean }>`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-style: solid;
  border-color: ${Colors.uiDarkSecondary};
  border-width: ${props => (props.withBorder ? '1px' : 0)};
  position: absolute;
  top: 2px;
  left: 2px;
`;

const Card: React.FC<CardProps> = props => {
  const { edges, withBorder = false, style } = props;
  return (
    <OuterCard edges={edges} style={style}>
      <InnerBorder withBorder={withBorder} />
      {props.children}
    </OuterCard>
  );
};

Card.defaultProps = {
  withBorder: false,
  edges: 'hard',
};

export default Card;
