import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { HeroImage } from "./HeroImage";

test("HeroImage renders with title", () => {
  render(<HeroImage src="test.jpg" alt="Test Hero" title="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("HeroImage applies disabled style", () => {
  const { container } = render(
    <HeroImage src="test.jpg" alt="Test Hero" disabled />
  );
  expect(container.firstChild).toHaveStyleRule("opacity", "0.5");
});
