import React from 'react';
import { LabelProps } from './Label.types';
import { StyledLabel } from './Label.styles';

export const Label = ({ text, disabled, color }: LabelProps) => {
  return (
    <StyledLabel disabled={disabled} color={color}>
      {text}
    </StyledLabel>
  );
};
