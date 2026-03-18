import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton, IconWrapper, Spinner } from './Button.styles';

export const Button = ({
  label,
  disabled,
  variant = 'primary',
  size = 'md',
  loading,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
          {label}
          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </>
      )}
    </StyledButton>
  );
};
