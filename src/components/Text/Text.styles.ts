import styled, { css } from 'styled-components';

export const StyledText = styled.p<{
  size?: string;
  disabled?: boolean;
  color?: string;
}>`
  margin: 0;
  color: ${({ disabled, color }) => (disabled ? '#999' : color || '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: 0.2s ease;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          font-size: 14px;
        `;
      case 'lg':
        return css`
          font-size: 20px;
        `;
      default:
        return css`
          font-size: 16px;
        `;
    }
  }}
`;
