import React from 'react';
import { RadioProps } from './Radio.types';
import { RadioWrapper, StyledRadio } from './Radio.styles';

export const Radio = ({ label, checked, disabled, onChange }: RadioProps) => {
  return (
    <RadioWrapper disabled={disabled}>
      <StyledRadio
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </RadioWrapper>
  );
};
