import styled from "styled-components";

export const HeroWrapper = styled.div<{
  src: string;
  height?: number | string;
  disabled?: boolean;
}>`
  width: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  height: ${({ height }) => height || "300px"};
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: opacity 0.2s ease;
`;

export const HeroTitle = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 2rem;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
`;
