import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Token/Token';
import Text from '../Text/Text';

export interface RoundedButtonProps {
  text: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
}

const OuterRoundedButton = styled.button`
  cursor: pointer;
  border: none;
  background: ${Colors.uiDarkPrimary}dd;
  border-radius: 9999px;
  position: relative;
  padding: 0.5rem 2.5rem;
  font-family: inherit;
  position: relative;
  &:focus {
    outline: none; // <Thing> when hovered
  }
`;

const InnerButtonBorder = styled.div<{ isFocused: boolean }>`
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  position: absolute;
  top: 2px;
  left: 2px;
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  border-color: ${props =>
    props.isFocused ? Colors.uiLight : Colors.uiDarkSecondary};
  box-shadow: ${props =>
    props.isFocused ? '0px 0px 10px 2px rgba(252, 254, 231, 0.9)' : 0};
`;

const RoundedButton: React.FC<RoundedButtonProps> = props => {
  const { text, className, onClick, style } = props;
  const [isFocused, toggleFocus] = useState(false);

  function handleEnterFocus() {
    toggleFocus(true);
  }

  function handleExitFocus() {
    toggleFocus(false);
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    onClick(e);
  }

  return (
    <OuterRoundedButton
      className={className}
      onClick={handleClick}
      onFocus={handleEnterFocus}
      onMouseEnter={handleEnterFocus}
      onBlur={handleExitFocus}
      onMouseLeave={handleExitFocus}
      style={style}
    >
      <Text variant="base">{text}</Text>
      <InnerButtonBorder isFocused={isFocused} />
    </OuterRoundedButton>
  );
};

export default RoundedButton;
