import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Alert from '@reach/alert';
import { ColorEnum } from '../Token/Token';
import { useTheme } from '../StyleWrapper';
import Text from '../Text/Text';

export interface ToastProps {
  text: string;
  imageSrc?: string;
  visible: boolean;
  visibleDuration?: number;
  onClose: () => void;
  imageAlt?: string;
  type: 'default' | 'error' | 'success' | 'warn';
}

const COLOR_TYPE: Record<ToastProps['type'], ColorEnum> = {
  default: 'uiTrueBlack',
  error: 'uiRed',
  success: 'uiGreen',
  warn: 'uiYellow',
};

const StyledAlert = styled(Alert)`
  position: fixed;
  right: 0;
  bottom: 2rem;
`;

const AlertInnerContainer = styled.div`
  position: relative;
`;

const AlertBackground = styled.div<{ background: string }>`
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 110%;
  background: ${props => `
    linear-gradient(
    75deg,
    ${props.background}00 0%,
    ${props.background}cf 39%,
    ${props.background}ee 85%)
  `};
`;

const AlertContent = styled.div`
  position: relative;
  z-index: 5;
  padding: 0.2rem 1rem 0;
  display: flex;
  flex-direction: row;
`;

const AlertImageContainer = styled.div`
  position: relative;
  width: 50px;
  margin-right: 0.5rem;
`;

const AlertImage = styled.img`
  position: absolute;
  top: -12.5px;
  left: 0;
  object-fit: contain;
  max-width: 50px;
  max-height: 50px;
`;

const variants = {
  visible: { opacity: 1, translateX: 0, filter: 'brightness(1)' },
  hidden: { opacity: 0, translateX: 25, filter: 'brightness(10)' },
  exit: { opacity: 0, translateX: 50, filter: 'brightness(1)' },
};

const Toast: React.FC<ToastProps> = props => {
  const {
    text,
    type = 'default',
    imageSrc,
    visible = false,
    visibleDuration = 3000,
    onClose,
    imageAlt,
  } = props;
  const theme = useTheme();
  const alertBackgroundType = COLOR_TYPE[type];
  const alertBackground = theme.color[alertBackgroundType];

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        onClose();
      }, visibleDuration);
    }
  }, [visible]);

  const alertText = (
    <Text color="uiTrueWhite" style={{ fontWeight: 700 }}>
      {text}
    </Text>
  );

  return (
    <StyledAlert>
      <motion.div
        transition={{ duration: 0.3 }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <AlertInnerContainer>
          <AlertBackground background={alertBackground} id="alertbackground" />
          <AlertContent>
            {imageSrc ? (
              <AlertImageContainer id="imageContainer">
                <AlertImage src={imageSrc} alt={imageAlt} />
              </AlertImageContainer>
            ) : null}
            {alertText}
          </AlertContent>
        </AlertInnerContainer>
      </motion.div>
    </StyledAlert>
  );
};

const ToastWrapper: React.FC<ToastProps> = props => {
  const { visible } = props;

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient
    ? ReactDOM.createPortal(
        <AnimatePresence>
          {visible ? <Toast {...props} /> : null}
        </AnimatePresence>,
        document.body
      )
    : null;
};

export default ToastWrapper;
