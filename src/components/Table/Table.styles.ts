import styled from 'styled-components';

export const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: opacity 0.2s ease;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px 12px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;
