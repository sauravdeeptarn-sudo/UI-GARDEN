import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Button } from "./Button";

test("Button is visible", () => {
  render(<Button label="Click me" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("Button style changes when disabled", () => {
  const { container } = render(<Button label="Click me" disabled />);
  const button = container.querySelector("button");
  expect(button).toHaveStyleRule("opacity", "0.5");
});
