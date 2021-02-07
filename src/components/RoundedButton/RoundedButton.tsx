import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Token/Token';
import Text from '../Text/Text';

export interface RoundedButtonProps {
  text: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const OuterRoundedButton = styled.button`
  cursor: pointer;
  padding: 1px;
  border: none;
  box-sizing: content-box;
  background: ${Colors.uiDarkPrimary}dd;
  border-radius: 9999px;
  position: relative;
  font-family: inherit;
  &:focus {
    outline: none; // <Thing> when hovered
  }
`;

const InnerRoundedButton = styled.div<{ isFocused: boolean }>`
  border-radius: 9999px;
  box-sizing: content-box;
  padding: 0.5rem 2.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.isFocused ? Colors.uiLight : Colors.uiDarkSecondary};
  box-shadow: ${props =>
    props.isFocused ? '0px 0px 10px 2px rgba(252, 254, 231, 0.9)' : 0};
`;

const RoundedButton: React.FC<RoundedButtonProps> = props => {
  const { text, className, onClick } = props;
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
    >
      <InnerRoundedButton isFocused={isFocused}>
        <Text variant="base">{text}</Text>
      </InnerRoundedButton>
    </OuterRoundedButton>
  );
};

export default RoundedButton;
