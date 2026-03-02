import React from "react";
import { HeroImageProps } from "./HeroImage.types";
import { HeroWrapper, HeroTitle } from "./HeroImage.styles";

export const HeroImage = ({ src, alt, height, title, disabled }: HeroImageProps) => {
  return (
    <HeroWrapper src={src} height={height} disabled={disabled} role="img" aria-label={alt}>
      {title && <HeroTitle>{title}</HeroTitle>}
    </HeroWrapper>
  );
};
