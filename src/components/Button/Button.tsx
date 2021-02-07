import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Colors } from '../Token/Token';
import Text from '../Text/Text';

export interface ButtonProps {
  text: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * ===================================
 * Styled Component
 * ===================================
 * */
const OuterButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  border: none;
  box-sizing: content-box;
  padding: 1px;
  background: ${Colors.uiDarkPrimary}dd;
  border-radius: 0.125rem;
  position: relative;
  &:focus {
    outline: none; // <Thing> when hovered
  }
`;

// const OuterButton = tw.button`box-content focus:outline-none p-hairline bg-uiDarkPrimary bg-opacity-90 rounded-sm text-uiLight relative`;

/**
 * ===================================
 * Styles
 * ===================================
 * */

const InnerButton = styled.div<{ isFocused: boolean }>`
  box-sizing: content-box;
  padding: 0.5rem 2.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${props =>
    props.isFocused ? Colors.uiLight : Colors.uiDarkSecondary};
  box-shadow: ${props =>
    props.isFocused ? '0px 0px 10px 2px rgba(252, 254, 231, 0.9)' : 'none'};
`;

const AnimatedArrowContainer = styled(motion.div)<{ isFocused: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  visibility: ${props => (props.isFocused ? 'visible' : 'hidden')};
`;

const Arrow = styled.div`
  height: 0;
  width: 0;
  border-color: ${Colors.uiLight};
  border-width: 4px;
  border-style: solid;
  position: absolute;
`;

const ArrowTopLeft = styled(Arrow)`
  border-right-color: transparent;
  border-bottom-color: transparent;
  top: 0;
  left: 0;
`;

const ArrowTopRight = styled(Arrow)`
  border-left-color: transparent;
  border-bottom-color: transparent;
  top: 0;
  right: 0;
`;

const ArrowBottomLeft = styled(Arrow)`
  border-right-color: transparent;
  border-top-color: transparent;
  bottom: 0;
  left: 0;
`;

const ArrowBottomRight = styled(Arrow)`
  border-left-color: transparent;
  border-top-color: transparent;
  bottom: 0;
  right: 0;
`;

const Button: React.FC<ButtonProps> = props => {
  const { text, className, onClick } = props;
  const [isFocused, toggleFocus] = useState(false);
  const controls = useAnimation();

  function handleEnterFocus() {
    toggleFocus(true);
    controls.start({
      scale: 1.08,
      transition: { duration: 0.2, repeatType: 'reverse', repeat: Infinity },
    });
  }

  function handleExitFocus() {
    toggleFocus(false);
    controls.start({
      scale: 1,
      transition: { duration: 0.2 },
    });
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    onClick(e);
  }

  return (
    <OuterButton
      className={className}
      onClick={handleClick}
      onFocus={handleEnterFocus}
      onMouseEnter={handleEnterFocus}
      onBlur={handleExitFocus}
      onMouseLeave={handleExitFocus}
    >
      <InnerButton isFocused={isFocused}>
        <Text>{text}</Text>
        <AnimatedArrowContainer animate={controls} isFocused={isFocused}>
          <ArrowTopLeft />
          <ArrowTopRight />
          <ArrowBottomLeft />
          <ArrowBottomRight />
        </AnimatedArrowContainer>
      </InnerButton>
    </OuterButton>
  );
};

export default Button;
