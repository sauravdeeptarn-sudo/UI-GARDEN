import styled from "styled-components";

export const StyledImage = styled.img<{ disabled?: boolean }>`
  display: block;
  max-width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: opacity 0.2s ease;
`;
