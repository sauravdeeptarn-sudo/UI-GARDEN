import React from "react";

export const TableHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <th>{children}</th>;
};
