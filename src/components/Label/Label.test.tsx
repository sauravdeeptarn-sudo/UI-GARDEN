import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

test('Label is visible', () => {
  render(<Label text="Hello" />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('Label color changes when disabled', () => {
  const { container } = render(<Label text="Hello" disabled />);
  const label = container.firstChild;
  expect(label).toHaveStyleRule('color', '#999');
});
