import React, { CSSProperties, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { useTheme } from '../StyleWrapper';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  helperText?: string;
  errorText?: string;
  containerStyle?: CSSProperties;
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
}

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
`;

const Input = styled.input<{
  background: string;
  textColor: string;
  activeBorderColor: string;
  borderColor: string;
}>`
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  padding: 0.75rem 0.5rem;
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  background: ${props => props.background}a9;
  color: ${props => props.textColor};

  &:focus {
    outline: none;
    border-bottom-color: ${props => props.activeBorderColor};
  }

  border-bottom-color: ${props => props.borderColor};
`;

const HelperContainer = styled.div`
  margin-top: 0.075rem;
`;

const InputField: React.FC<InputFieldProps> = props => {
  const {
    label,
    helperText,
    isError,
    errorText,
    type,
    containerStyle,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <FieldContainer style={containerStyle}>
      <Label>
        <Text variant="small" style={{ fontWeight: 'bold' }}>
          {label}
        </Text>
      </Label>
      <Input
        background={theme.color.uiDarkPrimary}
        textColor={theme.color.uiLightPrimary}
        activeBorderColor={theme.color.uiBlue}
        borderColor={isError ? theme.color.uiRed : theme.color.uiDarkSecondary}
        type={type}
        {...rest}
      />
      <HelperContainer>
        {isError ? (
          <Text variant="tiny" color="uiRed" style={{ fontWeight: 'bold' }}>
            {errorText}
          </Text>
        ) : (
          <Text variant="tiny" color="uiLightSecondary">
            {helperText}
          </Text>
        )}
      </HelperContainer>
    </FieldContainer>
  );
};

export default InputField;
