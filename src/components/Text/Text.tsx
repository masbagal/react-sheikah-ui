import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { ColorEnum } from '../Token/Token';
import { useTheme } from '../StyleWrapper';

export interface TextProps {
  variant?:
    | 'title-1'
    | 'title-2'
    | 'title-3'
    | 'large'
    | 'base'
    | 'small'
    | 'tiny';
  /**
   * The colors of the text
   */
  color?: ColorEnum;
  children: React.ReactChild | React.ReactNode;
  withDivider?: boolean;
  block?: boolean;
  style?: CSSProperties;
}

function getRenderedTextCompontentFromVariant(variant: TextProps['variant']) {
  const theme = useTheme();
  switch (variant) {
    case 'title-1':
      return styled.h1`
        margin: 0;
        font-size: ${theme.fontSize['title-large']};
        font-weight: 700;
        letter-spacing: 0.025em;
        margin-bottom: 0.5rem;
      `;
    case 'title-2':
      return styled.h2`
        margin: 0;
        font-size: ${theme.fontSize['title-medium']};
        font-weight: 700;
        letter-spacing: 0.025em;
        margin-bottom: 0.25rem;
      `;
    case 'title-3':
      return styled.h3`
        margin: 0;
        font-size: ${theme.fontSize['title-small']};
        font-weight: 700;
        letter-spacing: 0.025em;
        margin-bottom: 0.25rem;
      `;
    case 'large':
      return styled.div`
        font-size: ${theme.fontSize.large};
        font-weight: 400;
        line-height: 1.375;
      `;
    case 'base':
      return styled.div`
        font-size: ${theme.fontSize.base};
        font-weight: 400;
        line-height: 1.375;
      `;
    case 'small':
      return styled.div`
        font-size: ${theme.fontSize.small};
        font-weight: 300;
        line-height: 1.25;
      `;
    case 'tiny':
      return styled.div`
        font-size: ${theme.fontSize.tiny};
        font-weight: 300;
        line-height: 1.25;
      `;
    default:
      return styled.div`
        font-size: ${theme.fontSize.base};
        font-weight: 400;
        line-height: 1.375;
      `;
  }
}

function getRenderedText(TextVariant: any) {
  const theme = useTheme();
  const RenderedText = styled(TextVariant)<{
    color: TextProps['color'];
    withDivider: boolean;
    block: boolean;
  }>`
    font-family: Roboto, sans-serif;
    color: ${props => props.color};
    border-bottom-style: solid;
    border-bottom-color: ${theme.color.uiDarkSecondary};
    border-bottom-width: ${props => (props.withDivider ? '1px' : '0')};
    display: ${props => (props.block ? 'block' : 'inline-block')};
  `;

  return RenderedText;
}

const Text: React.FC<TextProps> = props => {
  const {
    variant = 'base',
    color = 'uiLightPrimary',
    withDivider,
    style,
    block = false,
  } = props;
  const theme = useTheme();
  const appliedColor = theme.color[color];

  const SelectedTextVariant = getRenderedTextCompontentFromVariant(variant);
  const RenderedText = getRenderedText(SelectedTextVariant);

  return (
    <RenderedText
      color={appliedColor}
      withDivider={withDivider}
      style={style}
      block={block}
    >
      {props.children}
    </RenderedText>
  );
};

export default Text;
