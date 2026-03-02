import styled from "styled-components";

export const RadioWrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: opacity 0.2s ease;
`;

export const StyledRadio = styled.input`
  cursor: inherit;
`;
