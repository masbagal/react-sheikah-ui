import React, { CSSProperties } from 'react';
import { ColorEnum } from '../Token/Token';
import { useTheme } from '../StyleWrapper';
import * as TextVariant from './TextVariant';

type Variant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'large'
  | 'base'
  | 'small'
  | 'tiny';
export interface TextProps {
  variant?: Variant;
  as?: React.ElementType;
  /**
   * The colors of the text
   */
  color?: ColorEnum;
  children: React.ReactChild | React.ReactNode;
  withDivider?: boolean;
  block?: boolean;
  style?: CSSProperties;
}

const VARIANT_MAPPING = {
  'title-1': TextVariant.Title1Text,
  'title-2': TextVariant.Title2Text,
  'title-3': TextVariant.Title3Text,
  large: TextVariant.LargeText,
  base: TextVariant.BaseText,
  small: TextVariant.SmallText,
  tiny: TextVariant.TinyText,
};

const Text: React.FC<TextProps> = props => {
  const {
    variant = 'base',
    color = 'uiLightPrimary',
    withDivider = false,
    style,
    as,
    block = false,
  } = props;
  const theme = useTheme();
  const appliedColor = theme.color[color];

  const RenderedText = VARIANT_MAPPING[variant];

  return (
    <RenderedText
      as={as}
      color={appliedColor}
      withDivider={withDivider}
      borderColor={theme.color.uiDarkSecondary}
      style={style}
      block={block}
    >
      {props.children}
    </RenderedText>
  );
};

export default Text;
