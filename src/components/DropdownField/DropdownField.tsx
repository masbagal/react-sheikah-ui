import React, { CSSProperties, InputHTMLAttributes } from 'react';
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
  containerStyle?: CSSProperties;
  options: Array<OptionProps>;
}

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
`;

const StyledSelect = styled.select<{
  background: string;
  textColor: string;
  activeBorderColor: string;
  borderColor: string;
  disabled?: boolean;
}>`
  width: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  padding: 0.75rem 0.5rem;
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  background: ${props =>
    props.disabled ? `${props.background}33` : `${props.background}a9`};
  color: ${props => props.textColor};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'initial')};
  border-bottom-color: ${props => props.borderColor};

  &:focus {
    outline: none;
    border-bottom-color: ${props => props.activeBorderColor};
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Arrow = styled.div<{ color: string }>`
  height: 0;
  width: 0;
  border: 8px solid transparent;
  border-top: 8px solid white;
  position: absolute;
  right: 1rem;
  top: calc(50% - 4px);
  pointer-events: none;
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
    containerStyle,
    disabled,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <FieldContainer style={containerStyle}>
      <Label>
        <Text
          variant="small"
          style={{ fontWeight: 'bold', opacity: disabled ? 0.3 : 1 }}
        >
          {label}
        </Text>
      </Label>
      <SelectWrapper>
        <StyledSelect
          disabled={disabled}
          background={theme.color.uiDarkPrimary}
          textColor={theme.color.uiLightPrimary}
          activeBorderColor={theme.color.uiBlue}
          borderColor={
            isError ? theme.color.uiRed : theme.color.uiDarkSecondary
          }
          {...rest}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <Arrow color="white" />
      </SelectWrapper>
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
