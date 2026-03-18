import React from 'react';
import { DropdownProps } from './Dropdown.types';
import { StyledSelect } from './Dropdown.styles';

export const Dropdown = ({
  options,
  value,
  disabled,
  onChange,
}: DropdownProps) => {
  return (
    <StyledSelect
      disabled={disabled}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      data-testid="dropdown"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};
