import React from 'react';
import { TextProps } from './Text.types';
import { StyledText } from './Text.styles';

export const Text = ({ text, size = 'md', disabled, color }: TextProps) => {
  return (
    <StyledText size={size} disabled={disabled} color={color}>
      {text}
    </StyledText>
  );
};
