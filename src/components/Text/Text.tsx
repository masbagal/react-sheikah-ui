import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../Token/Token';

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
  color?: keyof typeof Colors;
  children: React.ReactChild | React.ReactNode;
  withDivider?: boolean;
  className?: string;
}

function getRenderedTextCompontentFromVariant(variant: TextProps['variant']) {
  switch (variant) {
    case 'title-1':
      return styled.h1`
        margin: 0;
        font-size: ${FontSize['3xl']};
        font-weight: 700;
        letter-spacing: 0.025em;
        margin-bottom: 0.5rem;
      `;
    case 'title-2':
      return styled.h2`
        margin: 0;
        font-size: ${FontSize['2xl']};
        font-weight: 700;
        letter-spacing: 0.025em;
        margin-bottom: 0.25rem;
      `;
    case 'title-3':
      return styled.h3`
        margin: 0;
        font-size: ${FontSize['xl']};
        font-weight: 700;
        letter-spacing: 0.025em;
        margin-bottom: 0.25rem;
      `;
    case 'large':
      return styled.div`
        font-size: ${FontSize['lg']};
        font-weight: 400;
        line-height: 1.375;
      `;
    case 'base':
      return styled.div`
        font-size: ${FontSize['base']};
        font-weight: 400;
        line-height: 1.375;
      `;
    case 'small':
      return styled.div`
        font-size: ${FontSize['sm']};
        font-weight: 300;
        line-height: 1.25;
      `;
    case 'tiny':
      return styled.div`
        font-size: ${FontSize['xs']};
        font-weight: 300;
        line-height: 1.25;
      `;
    default:
      return styled.div`
        font-size: ${FontSize['base']};
        font-weight: 400;
        line-height: 1.375;
      `;
  }
}

function getRenderedText(TextVariant: any) {
  const RenderedText = styled(TextVariant)<{
    color: TextProps['color'];
    withDivider: boolean;
  }>`
    color: ${props => Colors[props.color as string]};
    border-bottom-style: solid;
    border-bottom-color: ${Colors.uiDarkSecondary};
    border-bottom-width: ${props => (props.withDivider ? '1px' : '0')};
  `;

  return RenderedText;
}

const Text: React.FC<TextProps> = props => {
  const { variant, color, withDivider } = props;
  const SelectedTextVariant = getRenderedTextCompontentFromVariant(variant);
  const RenderedText = getRenderedText(SelectedTextVariant);

  return (
    <RenderedText color={color} withDivider={withDivider}>
      {props.children}
    </RenderedText>
  );
};

Text.defaultProps = {
  variant: 'base',
  color: 'uiLight',
};

export default Text;
