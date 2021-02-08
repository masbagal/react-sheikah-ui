import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { useTheme } from '../StyleWrapper';

type OptionProps = {
  label: string;
  value: any;
};

export interface DropdownFieldProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  isError?: boolean;
  helperText?: string;
  errorText?: string;
  options: Array<OptionProps>;
}

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
`;

const Select = styled.select<{
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

const DropdownField: React.FC<DropdownFieldProps> = props => {
  const {
    label,
    helperText,
    isError,
    errorText,
    type,
    options,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <FieldContainer>
      <Label>
        <Text variant="small" style={{ fontWeight: 'bold' }}>
          {label}
        </Text>
      </Label>
      <Select
        background={theme.color.uiDarkPrimary}
        textColor={theme.color.uiLightPrimary}
        activeBorderColor={theme.color.uiBlue}
        borderColor={isError ? theme.color.uiRed : theme.color.uiDarkSecondary}
        {...rest}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
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

export default DropdownField;
