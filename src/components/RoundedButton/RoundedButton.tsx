import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../StyleWrapper';
import Text from '../Text/Text';

export interface RoundedButtonProps {
  text: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
  disabled?: boolean;
}

const OuterRoundedButton = styled.button<{
  background: string;
  disabled?: boolean;
}>`
  cursor: pointer;
  border: none;
  background: ${props => props.background}dd;
  border-radius: 9999px;
  position: relative;
  padding: 0.5rem 2.5rem;
  font-family: inherit;
  position: relative;
  filter: ${props => (props.disabled ? 'brightness(0.5)' : undefined)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'initial')};
  &:focus {
    outline: none;
  }
`;

const InnerButtonBorder = styled.div<{
  isFocused: boolean;
  borderColor: string;
}>`
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  position: absolute;
  top: 2px;
  left: 2px;
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  border-color: ${props => props.borderColor};
  box-shadow: ${props =>
    props.isFocused ? '0px 0px 15px 2px rgba(252, 254, 231, 0.9)' : 0};
`;

const RoundedButton: React.FC<RoundedButtonProps> = props => {
  const { text, className, onClick, style, disabled } = props;
  const theme = useTheme();
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

  const borderGlow =
    theme.currentTheme === 'dark'
      ? theme.color.uiLightPrimary
      : theme.color.uiYellow;
  const borderColor = isFocused ? borderGlow : theme.color.uiDarkSecondary;

  return (
    <OuterRoundedButton
      disabled={disabled}
      background={theme.color.uiDarkPrimary}
      className={className}
      onClick={handleClick}
      onFocus={handleEnterFocus}
      onMouseEnter={handleEnterFocus}
      onBlur={handleExitFocus}
      onMouseLeave={handleExitFocus}
      style={style}
    >
      <Text variant="base">{text}</Text>
      <InnerButtonBorder isFocused={isFocused} borderColor={borderColor} />
    </OuterRoundedButton>
  );
};

export default RoundedButton;
