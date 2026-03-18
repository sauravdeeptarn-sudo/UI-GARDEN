import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  variant?: string;
  size?: string;
}>`
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;

  /* Sizes */
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 6px 12px;
          font-size: 14px;
        `;
      case 'lg':
        return css`
          padding: 12px 20px;
          font-size: 18px;
        `;
      default:
        return css`
          padding: 8px 16px;
          font-size: 16px;
        `;
    }
  }}

  /* Variants */
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background: #e0e0e0;
          color: #333;

          &:hover:not(:disabled) {
            background: #d5d5d5;
          }

          &:active:not(:disabled) {
            background: #c9c9c9;
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          border: 2px solid #007bff;
          color: #007bff;

          &:hover:not(:disabled) {
            background: rgba(0, 123, 255, 0.1);
          }

          &:active:not(:disabled) {
            background: rgba(0, 123, 255, 0.2);
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: #007bff;

          &:hover:not(:disabled) {
            background: rgba(0, 123, 255, 0.1);
          }

          &:active:not(:disabled) {
            background: rgba(0, 123, 255, 0.2);
          }
        `;
      default:
        return css`
          background: #007bff;
          color: white;

          &:hover:not(:disabled) {
            background: #006ae0;
          }

          &:active:not(:disabled) {
            background: #005ec7;
          }
        `;
    }
  }}

  /* Focus Ring */
  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.5);
    outline-offset: 2px;
  }

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const IconWrapper = styled.span<{ position?: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
