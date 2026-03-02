import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Table } from "./Table";

test("Table renders headers", () => {
  render(<Table headers={["A", "B"]} rows={[[1, 2]]} />);
  expect(screen.getByText("A")).toBeInTheDocument();
  expect(screen.getByText("B")).toBeInTheDocument();
});

test("Table applies disabled style", () => {
  const { container } = render(
    <Table headers={["A"]} rows={[[1]]} disabled />
  );
  expect(container.firstChild).toHaveStyleRule("opacity", "0.5");
});
