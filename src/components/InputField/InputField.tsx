import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Colors } from '../Token/Token';
import Text from '../Text/Text';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  helperText?: string;
  errorText?: string;
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

const Input = styled.input<{ isError?: boolean }>`
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  padding: 0.75rem 0.5rem;
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  background: ${Colors.uiDarkPrimary}a9;
  color: ${Colors.uiLight};

  &:focus {
    outline: none;
    border-bottom-color: ${Colors.uiBlue};
  }

  border-bottom-color: ${props =>
    props.isError ? Colors.uiRed : Colors.uiDarkSecondary};
`;

const HelperContainer = styled.div`
  margin-top: 0.075rem;
`;

const InputField: React.FC<InputFieldProps> = props => {
  const { label, helperText, isError, errorText, type, ...rest } = props;

  return (
    <FieldContainer>
      <Label>
        <Text variant="small" style={{ fontWeight: 'bold' }}>
          {label}
        </Text>
      </Label>
      <Input isError={isError} type={type} {...rest} />
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
