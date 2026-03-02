import styled from "styled-components";

export const CardWrapper = styled.div<{ disabled?: boolean }>`
  padding: 16px;
  border-radius: 8px;
  background: ${({ disabled }) => (disabled ? "#e0e0e0" : "#ffffff")};
  border: 1px solid #ccc;
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 2px 6px rgba(0,0,0,0.1)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: 0.2s ease;
  max-width: 300px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: bold;
`;
