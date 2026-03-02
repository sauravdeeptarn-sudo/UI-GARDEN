import React from "react";
import { ImageProps } from "./Image.types";
import { StyledImage } from "./Image.styles";

export const Image = ({ src, alt, width, height, disabled }: ImageProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};
