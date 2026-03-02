import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

test("renders table header content", () => {
  render(<table><thead><tr><TableHeader>Header</TableHeader></tr></thead></table>);
  expect(screen.getByText("Header")).toBeInTheDocument();
});
