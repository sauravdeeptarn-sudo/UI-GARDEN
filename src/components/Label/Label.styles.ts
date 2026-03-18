import styled from 'styled-components';

export const StyledLabel = styled.span<{ disabled?: boolean; color?: string }>`
  font-size: 16px;
  color: ${({ disabled, color }) => (disabled ? '#999' : color || '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: 0.2s ease;
`;
