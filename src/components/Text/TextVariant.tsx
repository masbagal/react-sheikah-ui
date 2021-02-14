import styled from 'styled-components';
import { fontSize } from '../Token/Token';

const StyledText = styled.div<{
  color: string;
  borderColor: string;
  withDivider: boolean;
  block: boolean;
}>`
  font-family: Roboto, sans-serif;
  font-style: italic;
  color: ${props => props.color};
  border-bottom-style: solid;
  border-bottom-color: ${props => props.borderColor};
  border-bottom-width: ${props => (props.withDivider ? '1px' : '0')};
  display: ${props =>
    props.block || props.withDivider ? 'block' : 'inline-block'};
`;

export const Title1Text = styled(StyledText)`
  margin: 0;
  font-size: ${fontSize['title-large']};
  font-weight: 700;
  letter-spacing: 0.025em;
  margin-bottom: 0.5rem;
`;

export const Title2Text = styled(StyledText)`
  margin: 0;
  font-size: ${fontSize['title-medium']};
  font-weight: 700;
  letter-spacing: 0.025em;
  margin-bottom: 0.25rem;
`;

export const Title3Text = styled(StyledText)`
  margin: 0;
  font-size: ${fontSize['title-small']};
  font-weight: 700;
  letter-spacing: 0.025em;
  margin-bottom: 0.25rem;
`;

export const LargeText = styled(StyledText)`
  font-size: ${fontSize.large};
  font-weight: 400;
  line-height: 1.375;
`;

export const BaseText = styled(StyledText)`
  font-size: ${fontSize.base};
  font-weight: 400;
  line-height: 1.375;
`;

export const SmallText = styled(StyledText)`
  font-size: ${fontSize.small};
  font-weight: 300;
  line-height: 1.25;
`;

export const TinyText = styled(StyledText)`
  font-size: ${fontSize.tiny};
  font-weight: 300;
  line-height: 1.25;
`;
