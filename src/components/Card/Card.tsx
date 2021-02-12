import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { useTheme } from '../StyleWrapper';

export interface CardProps {
  edges?: 'hard' | 'soft';
  withBorder?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

const EDGE_MAPPING: { [key: string]: string } = {
  hard: `0px`,
  soft: `0.25rem`,
};

const OuterCard = styled.div<{
  background: string;
  edges: CardProps['edges'];
  withBorder: boolean;
}>`
  background-color: ${props => props.background}c8;
  backdrop-filter: blur(2px);
  position: relative;
  border-radius: ${props => EDGE_MAPPING[props.edges as string]};
  padding: ${props => (props.withBorder ? '0.25rem' : 0)};
`;

const InnerBorder = styled.div<{ borderColor: string; withBorder: boolean }>`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-width: ${props => (props.withBorder ? '1px' : 0)};
  position: absolute;
  top: 2px;
  left: 2px;
`;

const Card: React.FC<CardProps> = props => {
  const { edges, withBorder = false, style, className } = props;
  const theme = useTheme();

  return (
    <OuterCard
      edges={edges}
      style={style}
      background={theme.color.uiDarkPrimary}
      className={className}
      withBorder={withBorder}
    >
      <InnerBorder
        withBorder={withBorder}
        borderColor={theme.color.uiDarkSecondary}
      />
      {props.children}
    </OuterCard>
  );
};

Card.defaultProps = {
  withBorder: false,
  edges: 'hard',
};

export default Card;
