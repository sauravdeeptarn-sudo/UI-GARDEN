import React from "react";
import { CardProps } from "./Card.types";
import { CardWrapper, CardTitle } from "./Card.styles";

export const Card = ({ title, children }: CardProps) => {
  return (
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardWrapper>
  );
};
