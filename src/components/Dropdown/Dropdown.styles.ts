import styled from "styled-components";

export const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity 0.2s ease;
`;
